import BaseScene from '@scenes/base/BaseScene'


export default class RoomScene extends BaseScene {

    constructor(key) {
        super(key)

        this.key = key

        this.penguins = null
        this.block = null // Block collision body
        this.triggers = null // Trigger collision bodies
    }

    get client() {
        return this.world.client
    }

    init(data) {
        this.id = data.id
    }

    create() {
        this._create()
        this.sortChildren()

        if (this.roomPhysics) this.addPhysics()
        if (this.roomAnims) this.addAnims()
        this.addInput()

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

        this.interface.main.buddy.showPage()
    }

    removePenguin(id) {
        let penguin = this.penguins[id]

        if (penguin.isTweening) penguin.removeTween()

        if (penguin.balloon) penguin.balloon.destroy()
        penguin.nameTag.destroy()
        penguin.destroy()

        delete this.penguins[id]

        this.interface.main.buddy.showPage()
    }

    addInput() {
        // Movement
        this.input.on('pointerup', (pointer, target) => this.client.onPointerUp(pointer, target))
        this.input.on('pointermove', (pointer) => this.client.onPointerMove(pointer))

        // Actions
        this.input.keyboard.on('keydown-UP', () => this.client.onKeyDownFrame(21))
        this.input.keyboard.on('keydown-LEFT', () => this.client.onKeyDownFrame(19))
        this.input.keyboard.on('keydown-DOWN', () => this.client.onKeyDownFrame(17))
        this.input.keyboard.on('keydown-RIGHT', () => this.client.onKeyDownFrame(23))
        this.input.keyboard.on('keydown-W', () => this.client.onKeyDownFrame(25, false))
        this.input.keyboard.on('keydown-D', () => this.client.onKeyDownFrame(26))

        // Sitting to pointer
        this.input.keyboard.on('keydown-S', () => this.client.onKeyDownS(this.game.input.mousePointer))

        // Crosshair
        this.input.keyboard.on('keydown-T', () => this.client.onKeyDownT())
    }

    onSnowballComplete(x, y) {
        // To be overridden in derived classes
    }

    /*========== Physics ==========*/

    get roomPhysics() {
        let key = this.key.toLowerCase()

        return this.cache.json.get(`${key}-physics`)
    }


    addPhysics() {
        this.matter.world.setBounds(0, 0, this.game.config.width, this.game.config.height)

        this.block = this.addBody('block')
        this.triggers = this.addTriggers()
    }

    addBody(key) {
        if (!this.roomPhysics[key]) return null

        let body = this.matter.add.fromPhysicsEditor(0, 0, this.roomPhysics[key])
        this.matter.body.setPosition(body, body.centerOffset) // Centers body in room

        return body
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
        let room = this.crumbs.rooms[id]
        this.interface.showLoading(`Joining ${room.name}`)

        this.world.client.sendJoinRoom(id, x, y)
    }

    /*========== Animations ==========*/

    /**
     * Loads complex animations from JSON room anims file,
     * simpler animations should use the Animation component instead.
     * To trigger this add a roomAnims get property to the room, and
     * set it to return true.
     */
    addAnims() {
        let key = this.key.toLowerCase()
        let anims = this.cache.json.get(`${key}-anims`)

        this.anims.fromJSON(anims)
    }

}
