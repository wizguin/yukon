import BaseContainer from '@scenes/base/BaseContainer'

import { DraggableContainer, SimpleButton } from '@components/components'

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

        this.mancalaPlayer1 = mancalaPlayer1;
        this.mancalaPlayer2 = mancalaPlayer2;
        this.popup = popup;
        this.hint = hint;
        this.holes = holes;

        /* START-USER-CTR-CODE */

        this.scene = scene

        this.map
        this.board = []
        this.currentTurn = 1
        this.myTurn

        // Waiting for turn to finish
        this.wait = false

        this.maxStoneColor = 5
        this.holeSize = 49
        this.dropDelay = 168
        this.captureDelay = 130

        popup.setInteractive()
        popup.on('animationcomplete', (animation) => this.onPopupComplete(animation))

        this.setUpGame()

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

    isMancala(hole) {
        return this.mancalas.includes(hole)
    }

    setUpGame() {

    }

    handleGetGame(map) {
        this.map = map
    }

    handleJoinGame(turnId) {
        // Setting my turn
        this.myTurn = turnId
    }

    handleAddPlayer(username, turnId) {
        let player = this[`mancalaPlayer${turnId}`]
        player.turnId = turnId

        player.spinner.visible = false
        player.waiting.visible = false

        player.username.text = username.toUpperCase()
        player.username.visible = true
        player.score.visible = true

        player.setActive()
    }

    handleStartGame() {
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
    }

    createStone(index, color) {
        let hole = this.holes[index]
        let stone = this.scene.add.sprite(hole.x, hole.y, 'mancala', `stone/${color}/placed`)

        stone.color = color

        this.updateStonePos(stone, hole)
        this.add(stone)
    }

    onHoleClick(hole) {
        if (!this.isMyTurn) {
            return
        }

        this.hint.hideHint()

        if (!this.wait && this.currentPlayer.holes.includes(hole) && hole.stones.length) {

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

    handleSendMove(turn, hole, move) {
        this.currentTurn = turn
        hole = this.holes[hole]

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

            if (hole.stones.length === 0) {
                this.scene.time.delayedCall(i * this.dropDelay, () => {
                    this.updateTurn(nextHole, move)
                })
            }

            i++
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
        this.scene.time.delayedCall(i * delay, () => {
            stone.anims.play(`mancala/stone/${stone.color}/drop`)

            // Mancala holes play louder sound
            if (this.isMancala(hole)) {
                this.scene.sound.play('drop', { volume: 0.5 })
            } else {
                this.scene.sound.play('drop', { volume: 0.2 })
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
        if (lastHole) {
            this.checkLastHole(lastHole, move)
        }

        if (move !== 'capture') {
            this.updateScore()
        }

        if (!move) {
            this.currentTurn = (this.currentTurn === 1) ? 2 : 1

            this.mancalaPlayer1.setActive()
            this.mancalaPlayer2.setActive()

            this.wait = false
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

        this.scene.time.delayedCall(i * this.captureDelay, () => {
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

        this.wait = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
