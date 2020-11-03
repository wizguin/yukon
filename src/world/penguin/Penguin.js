import ItemLoader from './loader/ItemLoader'
import PenguinActions from './actions/PenguinActions'


export default class Penguin extends Phaser.GameObjects.Container {

    constructor(user, room, x, y, penguinLoader) {
        super(room, x, y)

        this.user = user // User attributes
        this.room = room
        this.x = x
        this.y = y
        this.penguinLoader = penguinLoader

        this.username = user.username
        this.nameTag = penguinLoader.addName(this)
        this.worn = {}

        this.depth = y
        this.frame = 1
        this.scale = 0.666

        this.actions = this.setActions()

        this.itemLoader = new ItemLoader(this)
        this.loadPenguin()
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

    loadPenguin() {
        this.penguinLoader.loadPenguin(this)
        this.itemLoader.loadItems()

        this.room.add.existing(this)
    }

    movePenguin(x, y) {
        this.actions.movePenguin(x, y)
    }

    playFrame(frame, loop = true) {
        this.actions.playFrame(frame, loop)
    }

}
