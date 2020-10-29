export default class RoomScene extends Phaser.Scene {

    constructor(key) {
        super(key)

        this.penguins = null
        this.block = null // Block collision body
    }

    init() {
        this.network = this.game.network
    }

    create() {
        this._create()
        this.sortChildren()

        if (this.roomPhysics) this.addPhysics()
    }

    addPhysics() {
        this.matter.world.setBounds(0, 0, this.game.config.width, this.game.config.height)

        this.block = this.addBlock()
    }

    addBlock() {
        if (!this.roomPhysics.block) return null

        let block = this.matter.add.fromPhysicsEditor(0, 0, this.roomPhysics.block)
        this.matter.body.setPosition(block, block.centerOffset) // Centers block in room

        return block
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
