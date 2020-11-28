import BaseScene from '@scenes/base/BaseScene'


export default class RoomScene extends BaseScene {

    constructor(key) {
        super(key)

        this.key = key

        this.penguins = null
        this.block = null // Block collision body
        this.triggers = null // Trigger collision bodies
    }

    create() {
        this._create()
        this.sortChildren()

        if (this.roomPhysics) this.addPhysics()

        this.interface.showInterface()
    }

    sortChildren() {
        if (!this.sort) return

        for (let child of this.sort) {
            child.depth = child.y
        }
    }

    addPenguin(id, penguin) {
        this.penguins[id] = penguin
    }

    removePenguin(id) {
        let penguin = this.penguins[id]

        if (penguin.isTweening) penguin.actions.movement.removeTween()

        if (penguin.balloon) penguin.balloon.destroy()
        penguin.nameTag.destroy()
        penguin.destroy()

        delete this.penguins[id]
    }

    /*========== Physics ==========*/

    get roomPhysics() {
        let key = this.key.toLowerCase()

        return this.cache.json.get(`${key}-physics`)
    }


    addPhysics() {
        this.matter.world.setBounds(0, 0, this.game.config.width, this.game.config.height)

        this.block = this.addBlock()
        this.triggers = this.addTriggers()
    }

    addBlock() {
        if (!this.roomPhysics.block) return null

        let block = this.matter.add.fromPhysicsEditor(0, 0, this.roomPhysics.block)
        this.matter.body.setPosition(block, block.centerOffset) // Centers block in room

        return block
    }

    addTriggers() {
        if (!this.roomTriggers) return null

        let triggers = []

        for (let trigger of this.roomTriggers) {
            trigger.body = this.matter.add.fromPhysicsEditor(trigger.x, trigger.y, trigger.body)
            triggers.push(trigger)
        }

        return triggers
    }

    triggerRoom(id, x, y) {
        this.network.send('join_room', { room: id, x: x, y: y })
    }

}
