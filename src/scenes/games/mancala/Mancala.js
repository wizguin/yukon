import BaseContainer from '@scenes/base/BaseContainer'

import { Button, DraggableContainer, SimpleButton } from '@components/components'

import MancalaHint from './MancalaHint'
import MancalaPlayer from './MancalaPlayer'


export const preload = {
    key: 'mancala-pack',
    url: 'assets/media/games/mancala/mancala-pack.json',
    loadString: 'mancala'
}

/* START OF COMPILED CODE */

export default class Mancala extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {MancalaPlayer} */
        this.mancalaPlayer1;
        /** @type {MancalaPlayer} */
        this.mancalaPlayer2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.popup;
        /** @type {MancalaHint} */
        this.hint;
        /** @type {Phaser.GameObjects.Image[]} */
        this.holes;


        // window
        const window = scene.add.image(0, 0, "mancala", "window");
        this.add(window);

        // bg2
        const bg2 = scene.add.image(0, 118, "mancala", "player/bg");
        bg2.flipY = true;
        this.add(bg2);

        // bg1
        const bg1 = scene.add.image(0, -86, "mancala", "player/bg");
        this.add(bg1);

        // shadow
        const shadow = scene.add.image(0, 16, "mancala", "shadow");
        this.add(shadow);

        // board
        const board = scene.add.image(0, 10, "mancala", "board");
        this.add(board);

        // hole_13
        const hole_13 = scene.add.image(-200, 11, "mancala", "hole_1");
        hole_13.setOrigin(0.5, 0.5047619047619047);
        this.add(hole_13);

        // hole_12
        const hole_12 = scene.add.image(-144, -20, "mancala", "hole");
        hole_12.setOrigin(0.5102040816326531, 0.5102040816326531);
        this.add(hole_12);

        // hole_11
        const hole_11 = scene.add.image(-86, -20, "mancala", "hole");
        hole_11.setOrigin(0.5102040816326531, 0.5102040816326531);
        this.add(hole_11);

        // hole_10
        const hole_10 = scene.add.image(-28, -20, "mancala", "hole");
        hole_10.setOrigin(0.5102040816326531, 0.5102040816326531);
        this.add(hole_10);

        // hole_9
        const hole_9 = scene.add.image(30, -20, "mancala", "hole");
        hole_9.setOrigin(0.5102040816326531, 0.5102040816326531);
        this.add(hole_9);

        // hole_8
        const hole_8 = scene.add.image(88, -20, "mancala", "hole");
        hole_8.setOrigin(0.5102040816326531, 0.5102040816326531);
        this.add(hole_8);

        // hole_7
        const hole_7 = scene.add.image(146, -20, "mancala", "hole");
        hole_7.setOrigin(0.5102040816326531, 0.5102040816326531);
        this.add(hole_7);

        // hole_6
        const hole_6 = scene.add.image(200, 11, "mancala", "hole_2");
        hole_6.setOrigin(0.5, 0.5047619047619047);
        this.add(hole_6);

        // hole_5
        const hole_5 = scene.add.image(146, 40, "mancala", "hole");
        hole_5.setOrigin(0.5102040816326531, 0.5102040816326531);
        this.add(hole_5);

        // hole_4
        const hole_4 = scene.add.image(88, 40, "mancala", "hole");
        hole_4.setOrigin(0.5102040816326531, 0.5102040816326531);
        this.add(hole_4);

        // hole_3
        const hole_3 = scene.add.image(30, 40, "mancala", "hole");
        hole_3.setOrigin(0.5102040816326531, 0.5102040816326531);
        this.add(hole_3);

        // hole_2
        const hole_2 = scene.add.image(-28, 40, "mancala", "hole");
        hole_2.setOrigin(0.5102040816326531, 0.5102040816326531);
        this.add(hole_2);

        // hole_1
        const hole_1 = scene.add.image(-86, 40, "mancala", "hole");
        hole_1.setOrigin(0.5102040816326531, 0.5102040816326531);
        this.add(hole_1);

        // hole_0
        const hole_0 = scene.add.image(-144, 40, "mancala", "hole");
        hole_0.setOrigin(0.5102040816326531, 0.5102040816326531);
        this.add(hole_0);

        // mancalaPlayer1
        const mancalaPlayer1 = new MancalaPlayer(scene, -193, 136);
        this.add(mancalaPlayer1);

        // mancalaPlayer2
        const mancalaPlayer2 = new MancalaPlayer(scene, -193, -104);
        this.add(mancalaPlayer2);

        // popup
        const popup = scene.add.sprite(4, 16, "mancala", "popup/popup0005");
        popup.visible = false;
        this.add(popup);

        // hint
        const hint = new MancalaHint(scene, -144, -20);
        hint.visible = false;
        this.add(hint);

        // x_button
        const x_button = scene.add.image(252, -160, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(252, -162, "main", "blue-x");
        this.add(blue_x);

        // lists
        const holes = [hole_0, hole_1, hole_2, hole_3, hole_4, hole_5, hole_6, hole_7, hole_8, hole_9, hole_10, hole_11, hole_12, hole_13];

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = window;

        // mancalaPlayer1 (prefab fields)
        mancalaPlayer1.bg = bg2;
        mancalaPlayer1.mancala = hole_6;

        // mancalaPlayer2 (prefab fields)
        mancalaPlayer2.bg = bg1;
        mancalaPlayer2.mancala = hole_13;

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.close();

        this.mancalaPlayer1 = mancalaPlayer1;
        this.mancalaPlayer2 = mancalaPlayer2;
        this.popup = popup;
        this.hint = hint;
        this.holes = holes;

        /* START-USER-CTR-CODE */

        this.maxStoneColor = 5
        this.holeSize = 49
        this.dropDelay = 168
        this.captureDelay = 130

        popup.setInteractive()
        popup.on('animationcomplete', (animation) => this.onPopupComplete(animation))

        this.createButtons()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get isMyTurn() {
        return this.currentTurn === this.myTurn
    }

    get mancalas() {
        return [this.mancalaPlayer1.mancala, this.mancalaPlayer2.mancala]
    }

    get currentPlayer() {
        return this[`mancalaPlayer${this.currentTurn}`]
    }

    addListeners() {
        this.network.events.on('get_game', this.handleGetGame, this)
        this.network.events.on('join_game', this.handleJoinGame, this)
        this.network.events.on('update_game', this.handleUpdateGame, this)
        this.network.events.on('start_game', this.handleStartGame, this)
        this.network.events.on('send_move', this.handleSendMove, this)
        this.network.events.on('close_game', this.handleCloseGame, this)
    }

    removeListeners() {
        this.network.events.off('get_game', this.handleGetGame, this)
        this.network.events.off('join_game', this.handleJoinGame, this)
        this.network.events.off('update_game', this.handleUpdateGame, this)
        this.network.events.off('start_game', this.handleStartGame, this)
        this.network.events.off('send_move', this.handleSendMove, this)
        this.network.events.off('close_game', this.handleCloseGame, this)
    }

    show() {
        this.map = null
        this.currentTurn = 1
        this.myTurn = null
        this.started = false
        this.gameOver = false

        // Waiting for turn to finish
        this.wait = false

        this.moveQueue = []
        this.timerEvents = []
        this.stones = []

        super.show()

        this.addListeners()
        this.network.send('get_game')
    }

    close() {
        if (!this.started) {
            return this.sendLeaveTable()
        }

        this.interface.prompt.showWindow(this.getString('quit_game_prompt'), 'dual', () => {
            this.sendLeaveTable()

            this.interface.prompt.window.visible = false
        })
    }

    handleGetGame(args) {
        this.map = args.map
        this.currentTurn = args.currentTurn

        for (let user of args.users) {
            this.setPlayer(user, args.users.indexOf(user) + 1)
        }

        if (args.started) {
            return this.setupMap()
        }

        this.network.send('join_game')
    }

    handleJoinGame(args) {
        this.myTurn = args.turn
    }

    handleUpdateGame(args) {
        this.setPlayer(args.username, args.turn)
    }

    handleStartGame() {
        this.started = true
        this.setupMap()
    }

    handleSendMove(args) {
        this.moveQueue.push(args)

        if (this.moveQueue.length > 1) {
            return
        }

        this.moveStones(args)
    }

    handleCloseGame(args) {
        if (args.username) {
            let text = this.getFormatString('player_quit_prompt', args.username)
            this.interface.prompt.showWindow(text, 'single')
        }

        // Wait for turn to finish
        if (args.gameOver) {
            this.gameOver = true
            return
        }

        this.leaveTable()
    }

    setPlayer(username, turn) {
        let player = this[`mancalaPlayer${turn}`]
        player.set(username, turn)
    }

    setupMap() {
        let currentColor = 1

        for (let i = 0; i < this.map.length; i++) {
            let count = this.map[i]

            // Create initial stones
            for (let j = 0; j < count; j++) {
                this.createStone(i, currentColor)

                currentColor = (currentColor >= this.maxStoneColor)
                    ? 1
                    : currentColor + 1
            }
        }

        this.updateScore()

        this.mancalaPlayer1.setActive()
        this.mancalaPlayer2.setActive()
    }

    isMancala(hole) {
        return this.mancalas.includes(hole)
    }

    createButtons() {
        for (let hole of this.holes) {
            hole.stones = []
            hole.index = this.holes.indexOf(hole)

            let button = new SimpleButton(hole)

            button.pixelPerfect = false

            if (!this.isMancala(hole)) {
                button.callback = () => this.onHoleClick(hole)
            }

            button.hoverCallback = () => this.onHoleOver(hole)
            button.hoverOutCallback = () => this.onHoleOut(hole)
        }
    }

    createStone(index, color) {
        let hole = this.holes[index]
        let stone = this.scene.add.sprite(hole.x, hole.y, 'mancala', `stone/${color}/placed`)

        stone.color = color

        this.updateStonePos(stone, hole)
        this.add(stone)

        this.stones.push(stone)
    }

    onHoleClick(hole) {
        if (!this.isMyTurn) {
            return
        }

        this.hint.hideHint()

        if (!this.wait && this.currentPlayer.holes.includes(hole) && hole.stones.length) {
            this.network.send('send_move', { hole: this.holes.indexOf(hole) })
        }
    }

    onHoleOver(hole) {
        if (!this.wait) {
            this.bringToTop(this.hint)

            this.hint.showHint(hole, this.currentPlayer.holes.includes(hole) && this.isMyTurn)
        }
    }

    onHoleOut() {
        this.hint.hideHint()
    }

    moveStones(args) {
        this.currentTurn = args.turn
        let hole = this.holes[args.hole]

        this.wait = true

        hole.stones.map(stone => this.pickUpStone(stone))

        // Update depths
        hole.stones.slice(0).reverse().map(stone => this.bringToTop(stone))

        let nextHole = hole.index
        let i = 1

        // Move stones
        while (hole.stones.length > 0) {
            nextHole = this.getNextHole(nextHole)
            let stone = hole.stones.shift()

            this.dropStone(i, stone, this.holes[nextHole])

            i++

            if (hole.stones.length === 0) {
                this.delayedCall(i * this.dropDelay, () => {
                    this.updateTurn(nextHole, args.move)
                })
            }
        }
    }

    pickUpStone(stone) {
        stone.anims.play(`mancala/stone/${stone.color}/hand`)
    }

    getNextHole(hole) {
        hole++
        let opponentMancala = (this.currentTurn === 1) ? 13 : 6

        if (hole === opponentMancala) {
            hole++
        }

        if (hole > this.holes.length - 1) {
            hole = 0
        }

        return hole
    }

    dropStone(i, stone, hole, delay = this.dropDelay) {
        this.delayedCall(i * delay, () => {
            stone.anims.play(`mancala/stone/${stone.color}/drop`)

            // Mancala holes play louder sound
            if (this.isMancala(hole)) {
                this.soundManager.play('drop', { volume: 0.5 })
            } else {
                this.soundManager.play('drop', { volume: 0.2 })
            }

            this.updateStonePos(stone, hole)
        })
    }

    updateStonePos(stone, hole) {
        let randomNum = Math.random() * 6.283185307179586

        // Randomize position in hole
        stone.x = hole.x + Math.sin(randomNum) * Phaser.Math.Between(0, this.holeSize / 4)
        stone.y = hole.y + Math.cos(randomNum) * Phaser.Math.Between(0, this.holeSize / 4)

        hole.stones.push(stone)
    }

    updateTurn(lastHole = null, move = '') {
        if (lastHole !== null) {
            this.checkLastHole(lastHole, move)
        }

        if (move !== 'capture') {
            this.updateScore()
        }

        if (!move) {
            this.currentTurn = (this.currentTurn === 1) ? 2 : 1

            this.mancalaPlayer1.setActive()
            this.mancalaPlayer2.setActive()

            this.checkMoveQueue()
        }
    }

    checkMoveQueue() {
        this.moveQueue.shift()

        if (this.moveQueue.length) {
            return this.moveStones(this.moveQueue[0])
        }

        this.wait = false

        if (this.gameOver) {
            this.leaveTable()
        }
    }

    checkLastHole(lastHole, move) {
        switch (move) {
            case 'free':
                this.showPopup('free')
                break

            case 'capture':
                this.captureStones(lastHole)
                break

            default:
                break
        }
    }

    captureStones(hole) {
        let captureHole = this.holes[12 - hole]
        let currentMancala = this.currentPlayer.mancala

        let i = 1

        // Move stones
        while (captureHole.stones.length > 0) {
            let stone = captureHole.stones.shift()

            this.dropStone(i, stone, currentMancala, this.captureDelay)

            i++
        }

        this.dropStone(i, this.holes[hole].stones.shift(), currentMancala, this.captureDelay)

        this.delayedCall(i * this.captureDelay, () => {
            this.showPopup('capture')
        })
    }

    updateScore() {
        this.mancalaPlayer1.updateScore()
        this.mancalaPlayer2.updateScore()
    }

    showPopup(type) {
        this.bringToTop(this.popup)
        this.popup.anims.play(`mancala/popup/${type}`)
    }

    onPopupComplete(animation) {
        // End of capture popup moves to next turn
        if (animation.key === 'mancala/popup/capture') {
            return this.updateTurn()
        }

        // Free turn
        this.checkMoveQueue()
    }

    sendLeaveTable() {
        this.network.send('leave_table')
        this.leaveTable()
    }

    leaveTable() {
        this.removeListeners()
        this.resetGame()

        super.close()

        this.world.client.sendLeaveSeat()
    }

    resetGame() {
        this.scene.time.removeEvent(this.timerEvents)

        this.stones.map(stone => stone.destroy())
        this.holes.map(hole => hole.stones = [])

        this.mancalaPlayer1.reset()
        this.mancalaPlayer2.reset()
    }

    delayedCall(delay, callback) {
        let timerEvent = this.scene.time.delayedCall(delay, callback)
        this.timerEvents.push(timerEvent)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
