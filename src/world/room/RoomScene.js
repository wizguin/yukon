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
        // Filter out penguins and nametags
        let children = this.children.getChildren().filter(child => ['Image', 'Sprite'].includes(child.type))

        for (let child of children) {
            child.depth = child.y
        }
    }

    addPenguin() {

    }

    removePenguin() {

    }

}
