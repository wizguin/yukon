import PenguinActions from '../actions/PenguinActions'


export default class ClientActions extends PenguinActions {

    constructor(penguin) {
        super(penguin)

        this.network = this.room.network

        // Overrides onMoveComplete to check for triggers
        this.movement.onMoveComplete = () => {
            this.movement.removeTween()
            this.triggerTest()
        }
    }

    movePenguin(x, y) {
        let path = this.movement.getPath(x, y)

        if (path) {
            this.movement.movePenguin(path)
            this.network.send('send_position', { x: path.target.x, y: path.target.y })
        }
    }

    triggerTest() {
        if (!this.room.triggers) return

        for (let trigger of this.room.triggers) {

            if (this.room.matter.containsPoint(trigger.body, this.penguin.x, this.penguin.y)) {
                if (trigger.callback) trigger.callback()
            }
        }
    }

    rotatePenguin(x, y) {
        if (this.penguin.isTweening) return
        if (this.penguin.frame > 8) return // Only rotate on standing frames

        let newPos = { x: x, y: y }

        let angle = this.movement.getAngle(this.penguin.pos, newPos)
        let direction = this.movement.getDirection(angle)

        this.playFrame(direction + 1) // + 1 for standing frame id
    }

    sitPenguin(x, y) {
        if (this.penguin.isTweening) return

        let newPos = { x: x, y: y }

        let angle = this.movement.getAngle(this.penguin.pos, newPos)
        let direction = this.movement.getDirection(angle)
        let frame = direction + 17 // + 17 for sitting frame id

        this.playFrame(frame)
        this.network.send('send_frame', { loop: true, frame: frame })
    }

}
