import PenguinActions from './PenguinActions'

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

        this.actions = new PenguinActions(this)

        penguinLoader.loadPenguin(this)
        room.add.existing(this)
    }

}
