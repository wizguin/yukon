import BaseScene from '@scenes/base/BaseScene'


export default class RoomScene extends BaseScene {

    constructor(key) {
        super(key)

        this.key = key

        this.penguins = null
        this.block = null // Block collision body
        this.triggers = null // Trigger collision bodies
    }

    init(data) {
        this.id = data.id
        this.load.on('start', this.onStart, this)
    }

    onStart() {
        this.interface.showLoading(`Loading ${this.key}`)
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

        this.interface.main.buddy.showPage()
    }

    removePenguin(id) {
        let penguin = this.penguins[id]

        if (penguin.isTweening) penguin.actions.movement.removeTween()

        if (penguin.balloon) penguin.balloon.destroy()
        penguin.nameTag.destroy()
        penguin.destroy()

        delete this.penguins[id]

        this.interface.main.buddy.showPage()
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

        let random = this.world.client.penguin.randomizePos(x, y, 40)
        this.network.send('join_room', { room: id, x: random.x, y: random.y })
    }

}
