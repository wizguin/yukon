import PenguinActions from './actions/PenguinActions'


export default class Penguin extends Phaser.GameObjects.Container {

    constructor(data, room, x, y, penguinLoader) {
        super(room, x, y)

        this.data = data
        this.room = room
        this.x = x
        this.y = y
        this.penguinLoader = penguinLoader

        this.username = data.username
        this.nameTag = penguinLoader.addName(this)
        this.worn = {}

        this.depth = y
        this.frame = 1
        this.scale = 0.666

        this.actions = this.setActions()

        this.load = new Phaser.Loader.LoaderPlugin(room) // Dedicated loader for clothing

        penguinLoader.loadPenguin(this)
        room.add.existing(this)
    }

    get isTweening() {
        return (this.actions.movement.tween) ? true : false
    }

    get pos() {
        return { x: this.x, y: this.y }
    }

    setActions() {
        return new PenguinActions(this)
    }

    movePenguin(x, y) {
        this.actions.movePenguin(x, y)
    }

    playFrame(frame, loop = true) {
        this.actions.playFrame(frame, loop)
    }

}
