/* START OF COMPILED CODE */

import GameScene from "../GameScene";
import Button from "../../components/Button";
/* START-USER-IMPORTS */

import ClientSledPlayer from './ClientSledPlayer'
import SledPlayer from './SledPlayer'

/* END-USER-IMPORTS */

export default class Sled extends GameScene {

    constructor() {
        super("Sled");

        /** @type {Phaser.GameObjects.Container} */
        this.bg;
        /** @type {Phaser.GameObjects.Container} */
        this.hill;
        /** @type {Phaser.GameObjects.Image} */
        this.bar;
        /** @type {Phaser.GameObjects.Container} */
        this.progress;
        /** @type {Phaser.GameObjects.Image} */
        this.text;
        /** @type {Phaser.GameObjects.Image} */
        this.spinner;
        /** @type {Phaser.GameObjects.Image} */
        this.note;


        /* START-USER-CTR-CODE */

        this.music = 117

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("sled-pack", "assets/media/games/sled/sled-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        const sky = this.add.image(0, 0, "sled", "sky");
        sky.setOrigin(0, 0);

        // bg
        const bg = this.add.container(110, 102);

        // bg3
        const bg3 = this.add.image(4142, 0, "sled", "bg_3");
        bg3.setOrigin(0, 0);
        bg.add(bg3);

        // bg2
        const bg2 = this.add.image(2071, 0, "sled", "bg_2");
        bg2.setOrigin(0, 0);
        bg.add(bg2);

        // bg1
        const bg1 = this.add.image(0, 0, "sled", "bg_1");
        bg1.setOrigin(0, 0);
        bg.add(bg1);

        // fg
        const fg = this.add.image(0, 240, "sled", "fg");
        fg.setOrigin(0, 0);

        // hill
        const hill = this.add.container(361, 480);

        // progress
        const progress = this.add.container(784, 53);

        // bar
        const bar = this.add.image(304, 0, "sled", "progress/bar");
        progress.add(bar);

        // text
        const text = this.add.image(760, 600, "sled", "text/waiting");
        text.setOrigin(0.5, 0.5046728971962616);

        // spinner
        const spinner = this.add.image(760, 685, "sled", "spinner");
        spinner.setOrigin(0.5076923076923077, 0.5);

        // note
        const note = this.add.image(1253, 783, "sled", "note");
        note.setOrigin(0.5, 0.4050179211469534);

        // closeButton
        const closeButton = this.add.image(1458, 52, "main", "grey-button");

        // x
        this.add.image(1458, 50, "main", "grey-x");

        // closeButton (components)
        const closeButtonButton = new Button(closeButton);
        closeButtonButton.spriteName = "grey-button";
        closeButtonButton.callback = () => this.onCloseClick();

        this.bg = bg;
        this.hill = hill;
        this.bar = bar;
        this.progress = progress;
        this.text = text;
        this.spinner = spinner;
        this.note = note;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.players = []
        this.myPlayer = null

        // Store ms since intro started
        this.introTimer = null
        // Start game after 2s
        this.startTime = 2000
        // Hide intro after 3s
        // Required if game goes into background
        this.maxIntroTime = 3000

        this.started = false

        // Array of tile IDs for current sled hill
        this.hillTileIds = this.setHillTileIds()

        // Multidimensional array of tile coordinates for current sled hill
        this.hillMap = this.createHillMap()

        this.hillStartX = this.hill.x
        this.hillStartY = this.hill.y
        this.bgStartX = this.bg.x

        // Current tile index
        this.currentTile = 0

        // Used for updating current tiles
        this.lastTileY = 0

        // Physics fixed timestep
        this.fixedTimestep = 1000 / 60
        this.accumulator = 0
        this.lastTime = Date.now()

        // Spinner
        this.spinnerTween = this.tweens.add({
            targets: this.spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        this.addListeners()

        this.sendStartGame()
    }

    get isIntroTimerActive() {
        return this.introTimer !== null
    }

    setHillTileIds() {
        const hills = this.cache.json.get('sledmap').hills
        const lastSledId = this.world.client.lastSledId

        return lastSledId in hills ? hills[lastSledId] : hills[100]
    }

    createHillMap() {
        const tiles = this.cache.json.get('sledmap').tiles

        return this.hillTileIds.map(tile => tiles[tile]).flat()
    }

    addListeners() {
        this.network.events.on('start_game', this.handleStartGame, this)
        this.network.events.on('send_move', this.handleSendMove, this)
    }

    removeListeners() {
        this.network.events.off('start_game', this.handleStartGame, this)
        this.network.events.off('send_move', this.handleSendMove, this)
    }

    handleStartGame(args) {
        args.users.map((playerData, index) => this.addPlayer(playerData, index))

        if (this.myPlayer) {
            this.progress.bringToTop(this.myPlayer.icon)
        }

        this.playIntro()
    }

    handleSendMove(args) {
        const player = this.players[args.id]

        if (!player) {
            return
        }

        switch (args.move) {
            case 1:
                player.moveUp()
                break
            case 2:
                player.moveDown()
                break
            case 3:
                player.startCrash()
                break
            case 4:
                player.startBoost()
                break
        }
    }

    sendStartGame() {
        // Add first 4 tiles
        for (let i = 0; i < 4; i++) {
            this.addTile()
        }

        this.network.send('start_game')
    }

    update() {
        const currentTime = Date.now()

        // Difference between this update and last update
        const frameTime = currentTime - this.lastTime

        this.lastTime = currentTime
        this.accumulator += frameTime

        // Do fixed update when fixed timestep is accumulated
        while (this.accumulator >= this.fixedTimestep) {
            this.fixedUpdate()

            this.accumulator -= this.fixedTimestep
        }
    }

    fixedUpdate() {
        if (this.isIntroTimerActive) {
            this.checkIntro()
        }

        if (this.started) {
            this.updatePlayers()
        }

        this.sortHill()
    }

    updatePlayers() {
        this.players.map(player => player.update())

        if (this.myPlayer) {
            this.updateHill()
        }
    }

    updateHill() {
        // Move hill backwards to follow myPlayer
        this.hill.x = this.hillStartX - this.myPlayer.gameY
        this.hill.y = this.hillStartY - (this.myPlayer.gameY * 0.6)

        this.bg.x = this.bgStartX + (-this.myPlayer.gameY) / 25

        // Update current tiles every 400 pixels
        const tileY = Math.round(this.myPlayer.gameY / 400)

        if (this.lastTileY < tileY) {
            this.lastTileY = tileY

            this.addTile()
            this.removeTile()
        }
    }

    sortHill() {
        this.hill.sort('depth')
    }

    addTile() {
        const index = this.currentTile
        this.currentTile++

        // Get new tile ID
        const id = this.hillTileIds[index]

        if (id === undefined) {
            return
        }

        // Position below previous tile
        const x = index * 400
        const y = x * 0.6

        this.addTileSprite(index, id, x, y)

        if (id === 99) {
            // Add finish line
            this.addFinish(index, x, y)
        }
    }

    addFinish(index, x, y) {
        this.addTileSprite(index, 100, x, y)

        const clap = this.add.sprite(x, y, 'sled', 'clap/clap0001')
        this.hill.add(clap)

        clap.depth = index + 1
        clap.play('clap')
    }

    addTileSprite(index, id, x, y) {
        const sprite = this.add.image(x, y, 'sled', `tiles/${id}`)

        this.hill.add(sprite)

        // Keep finish line on top
        const depth = id === 100 ? 2000 : 1

        sprite.depth = index + depth
    }

    removeTile() {
        const tiles = this.hill.list.filter(object => !object.isPlayer)

        // Only removes tiles that are off the screen
        if (tiles.length > 8) {
            this.hill.remove(tiles[0], true)
        }
    }

    /**
     * Add a player to the race.
     *
     * @param {object} playerData - Player data
     * @param {number} index - Player index, used as ID
     */
    addPlayer(playerData, index) {
        const isMyPlayer = this.world.isClientUsername(playerData.username)

        const playerClass = isMyPlayer ? ClientSledPlayer : SledPlayer

        // Start off screen
        const player = new playerClass(this, -500, 0)

        player.setPlayer(playerData, index)

        // Set myPlayer
        if (isMyPlayer) {
            this.myPlayer = player
        }

        this.hill.add(player)
        this.progress.add(player.icon)
        this.players.push(player)

        player.move()
    }

    playIntro() {
        this.hideWaiting()

        const tweenDuration = 100
        const tweenEase = Phaser.Math.Easing.Back.InOut

        const tweenIn = {
            scale: { from: 0.45, to: 1 },
            duration: tweenDuration,
            ease: tweenEase
        }

        const tweenOut = {
            scale: { from: 1, to: 0.45 },
            delay: 550,
            duration: tweenDuration,
            ease: tweenEase
        }

        // Start intro timer
        this.introTimer = 0

        this.tweens.chain({
            targets: this.text,

            tweens: [
                {
                    ...tweenIn,
                    onStart: () => this.text.setTexture('sled', 'text/ready')
                },
                tweenOut,
                {
                    ...tweenIn,
                    onStart: () => this.text.setTexture('sled', 'text/set')
                },
                tweenOut,
                {
                    ...tweenIn,
                    onStart: () => this.text.setTexture('sled', 'text/go'),
                },
                tweenOut
            ],

            onComplete: () => this.onIntroComplete(),
        })
    }

    checkIntro() {
        this.introTimer += this.fixedTimestep

        if (this.introTimer >= this.maxIntroTime) {
            // Stop intro timer
            this.introTimer = null
            // Hide intro tween
            this.onIntroComplete()

            return
        }

        if (this.introTimer >= this.startTime) {
            // Start race
            this.started = true
        }
    }

    onIntroComplete() {
        this.text.visible = false
    }

    hideWaiting() {
        this.spinnerTween.stop()
        this.spinner.visible = false

        this.tweens.add({
            targets: this.note,
            scale: { from: 1, to: 0.45 },
            duration: 100,
            ease: Phaser.Math.Easing.Back.InOut,

            onComplete: () => this.note.visible = false
        })
    }

    onCloseClick() {
        this.showCloseGamePrompt()
    }

    showCloseGamePrompt() {
        this.interface.prompt.showWindow(this.getString('quit_game_prompt'), 'dual', () => {
            this.sendLeaveGame()

            this.interface.prompt.window.visible = false
        })
    }

    sendLeaveGame() {
        this.network.send('leave_game')
        this.leaveGame()
    }

    leaveGame() {
        this.world.client.sendJoinLastRoom()
    }

    stop() {
        this.removeListeners()

        super.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
