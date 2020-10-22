export default class RoomScene extends Phaser.Scene {

    constructor(key) {
        super(key)

        this.penguins = null
    }

    init() {
        this.network = this.game.network
    }

    preload() {

    }

    create() {
        this._create()

        this.sortChildren()
    }

    sortChildren() {
        for (let child of this.children.getChildren()) {
            child.depth = child.y
        }
    }

    addPenguin() {

    }

    removePenguin() {

    }

}
