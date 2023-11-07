import SledPlayer from './SledPlayer'


export default class ClientSledPlayer extends SledPlayer {

    constructor(scene, x, y) {
        super(scene, x, y)

        scene.input.keyboard.on('keydown-UP', this.onMoveUpKey, this)
        scene.input.keyboard.on('keydown-RIGHT', this.onMoveUpKey, this)
        scene.input.keyboard.on('keydown-DOWN', this.onMoveDownKey, this)
        scene.input.keyboard.on('keydown-LEFT', this.onMoveDownKey, this)
    }

    get canMove() {
        return this.started && !this.isCrashed && !this.isFinished
    }

    get isGameXUpdated() {
        return this.gameX !== this.lastGameX
    }

    setPlayer(playerData, index) {
        super.setPlayer(playerData, index)

        this.icon.setFrame('progress/icon_2')
    }

    onMoveUpKey() {
        if (!this.canMove) {
            return
        }

        this.moveUp()

        if (this.isGameXUpdated) {
            this.sendMove(1)
        }
    }

    onMoveDownKey() {
        if (!this.canMove) {
            return
        }

        this.moveDown()

        if (this.isGameXUpdated) {
            this.sendMove(2)
        }
    }

    checkMap() {
        if (this.map === 220 && !this.isCrashed) {
            this.startCrash()
            this.sendCrash()
        }

        if (this.map === 240) {
            this.startBoost()
            this.sendBoost()
        }

        super.checkMap()
    }

    endFinish() {
        super.endFinish()

        this.sendFinished()
    }

    sendMove(move) {
        this.network.send('send_move', { move: move })
    }

    sendCrash() {
        this.sendMove(3)
    }

    sendBoost() {
        this.sendMove(4)
    }

    sendFinished() {
        this.sendMove(5)
    }

}
