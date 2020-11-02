import PenguinActions from '../actions/PenguinActions'


export default class ClientActions extends PenguinActions {

    constructor(penguin) {
        super(penguin)

        this.network = this.room.network
    }

    movePenguin(x, y) {
        let path = this.movement.getPath(x, y)

        if (path) {
            this.network.send('send_position', { x: path.target.x, y: path.target.y })
            this.movement.movePenguin(path, true)
        }
    }

    rotatePenguin(x, y) {
        if (this.penguin.frame > 8) return // Only rotate on standing frames

        let newPos = { x: x, y: y }

        let angle = this.movement.getAngle(this.penguin.pos, newPos)
        let direction = this.movement.getDirection(angle)

        this.playFrame(direction + 1) // + 1 for standing frame id
    }

    sitPenguin(x, y) {
        let newPos = { x: x, y: y }

        let angle = this.movement.getAngle(this.penguin.pos, newPos)
        let direction = this.movement.getDirection(angle)
        let frame = direction + 17 // + 17 for sitting frame id

        this.playFrame(frame)

        this.network.send('send_frame', { loop: true, frame: frame })
    }

}
