import GameScene from '@games/GameScene'

import SledPlayer from './SledPlayer'


/* START OF COMPILED CODE */

class Sled extends GameScene {

    constructor() {
        super("Sled");

        /** @type {Phaser.GameObjects.Container} */
        this.bg;
        /** @type {Phaser.GameObjects.Container} */
        this.hill;
        /** @type {Phaser.GameObjects.Container} */
        this.progress;
        /** @type {Phaser.GameObjects.Image} */
        this.bar;
        /** @type {Phaser.GameObjects.Image} */
        this.text;
        /** @type {Phaser.GameObjects.Image} */
        this.spinner;
        /** @type {Phaser.GameObjects.Image} */
        this.note;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    preload() {

        this.load.pack("sled-pack", "assets/media/games/sled/sled-pack.json");
    }

    _create() {

        // sky
        const sky = this.add.image(0, 0, "sled", "sky");
        sky.setOrigin(0, 0);

        // bg
        const bg = this.add.container(0, 101);

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
        const hill = this.add.container(200, 400);

        // progress
        const progress = this.add.container(762.3364439073046, 50);

        // bar
        const bar = this.add.image(303.66355609269544, 0, "sled", "progress/bar");
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

        this.bg = bg;
        this.hill = hill;
        this.progress = progress;
        this.bar = bar;
        this.text = text;
        this.spinner = spinner;
        this.note = note;
    }

    /* START-USER-CODE */

    create() {
        super.create()

        this.music = 117

        this.isWaiting = true

        this.players = []
        this.maxPlayers = 0
        this.myPlayer = null

        this.finishPos = 0

        // fixedX start position for player sprites
        this.startX = 400

        this.lastTime = 0
        this.startTime = 0
        this.gameTime = 0
        this.delta

        this.currentTile = 0
        this.lastTileY = 0

        this.isGameHidden = false

        // Events (remove on game over)
        // this.game.events.on('hidden', this.onHidden)
        // this.game.events.on('visible', this.onVisible)

        this.anims.fromJSON(this.cache.json.get('sled-anims'))

        // Map data
        this.myHill = this.cache.json.get('map').hills['105']
        this.myMap = this.createMap()

        // Input
        this.input.keyboard.on('keydown-UP', () => this.onMoveUp())
        this.input.keyboard.on('keydown-RIGHT', () => this.onMoveUp())

        this.input.keyboard.on('keydown-DOWN', () => this.onMoveDown())
        this.input.keyboard.on('keydown-LEFT', () => this.onMoveDown())

        // Spinner
        this.spinnerTween = this.tweens.add({
            targets: this.spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        this.startGame()
    }

    createMap() {
        let tiles = this.cache.json.get('map').tiles
        return this.myHill.map(tile => tiles[tile]).flat()
    }

    onMoveUp() {
        if (this.myPlayer) {
            this.myPlayer.moveUp()
        }
    }

    onMoveDown() {
        if (this.myPlayer) {
            this.myPlayer.moveDown()
        }
    }

    update(time, delta) {
        let currentTime = Date.now()

        this.gameTime = currentTime - this.startTime
        //this.delta = currentTime - this.lastTime

        // Prevents changes if game has been in the background
        this.delta = delta

        this.players.map(player => player.update())

        if (this.myPlayer) {
            this.updateHill()
        }

        this.sortHill()

        this.lastTime = currentTime
    }

    updateHill() {
        this.hill.x = 200 - this.myPlayer.fixedY
        this.hill.y = 400 - (this.myPlayer.fixedY * 0.6)

        this.bg.x = (-this.myPlayer.fixedY) / 25

        let tileY = Math.round(this.myPlayer.fixedY / 400)

        if (this.lastTileY < tileY) {
            this.lastTileY = tileY
            this.addTile()
            this.removeTile()
        }
    }

    startGame() {
        this.startTime = Date.now()
        this.lastTime = this.startTime

        // Add first 4 tiles
        for (let i = 0; i < 4; i++) {
            this.addTile()
        }

        this.network.send('start_game')
    }

    addTile() {
        let id = this.currentTile
        this.currentTile++

        let tile = this.myHill[id]
        if (tile == null) return

        let x = id * 400
        let y = (id * 400) * 0.6

        this.addTileSprite(id, tile, x, y)

        if (tile == 99) {
            this.addFinish(id, x, y)
        }
    }

    addFinish(id, x, y) {
        this.addTileSprite(id, 100, x, y)

        let clap = this.add.sprite(x, y, 'sled', 'clap/clap0001')
        this.hill.add(clap)

        clap.depth = id + 1
        clap.play('clap')
    }

    addTileSprite(id, tile, x, y) {
        let sprite = this.add.image(x, y, 'sled', `tiles/${tile}`)
        this.hill.add(sprite)

        let depth = (tile == 100) ? 2000 : 1
        sprite.depth = id + depth

        return sprite
    }

    removeTile() {
        let tiles = this.hill.list.filter(object => object.constructor.name != 'SledPlayer')

        // Only removes tiles that are off the screen
        if (tiles.length > 8) {
            this.hill.remove(tiles[0], true)
        }
    }

    sortHill() {
        this.hill.sort('depth')
    }

    addPlayer(p, id) {
        let player = new SledPlayer(this, -500, 0)

        player.id = id

        player.fixedX = this.startX -= 80
        player.icon = this.add.image(0, 0, 'sled', 'progress/icon_1')

        player.setSled(p.username, p.hand, p.color)

        this.hill.add(player)
        this.progress.add(player.icon)
        this.players.push(player)

        player.move()

        if (p.username.toLowerCase() == this.client.penguin.username.toLowerCase()) {
            player.icon.setTexture('sled', 'progress/icon_2')

            this.myPlayer = player
            player.isClient = true
        }
    }

    playText() {
        this.hideWaiting()

        let tweenIn = {
            scale: { from: 0.45, to: 1 }
        }

        let tweenOut = {
            scale: { from: 1, to: 0.45 },
            delay: 600
        }

        this.tweens.timeline({
            targets: this.text,
            duration: 100,
            ease: Phaser.Math.Easing.Back.InOut,

            onComplete: () => this.onTextComplete(),

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
            ]
        })
    }

    hideWaiting() {
        this.spinnerTween.remove()
        this.spinner.visible = false

        this.tweens.add({
            targets: this.note,
            scale: { from: 1, to: 0.45 },
            duration: 100,
            ease: Phaser.Math.Easing.Back.InOut,

            onComplete: () => this.note.visible = false
        })
    }

    onTextComplete() {
        this.text.visible = false
        this.isWaiting = false
    }

    // Events

    handleStartGame(args) {
        this.maxPlayers = args.seats

        args.users.map((player, id) => this.addPlayer(player, id))

        if (this.myPlayer) {
            this.progress.bringToTop(this.myPlayer.icon)
        }

        this.playText()
    }

    handleSendMove(args) {
        let player = this.players[args.id]

        if (player) {
            player.fixedX = args.x
            player.fixedY = args.y
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Sled
