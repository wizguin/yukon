import BaseScene from '@scenes/base/BaseScene'


export default class RoomScene extends BaseScene {

    constructor(key) {
        super(key)

        this.key = key

        this.penguins = null

        // Block collision body
        this.block = null
        // Trigger collision bodies
        this.triggers = null

        // If room is fully loaded
        this.isReady = false
        // Array of users to be added once ready
        this.waiting = []
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

        this.sound.pauseOnBlur = false
        if (this.music) this.addMusic()

        if (this.waddles) this.getWaddles()

        this.interface.showInterface()
    }

    preload() {
        if (this.music && !this.cache.audio.exists(this.music)) {
            this.load.audio(this.music, `assets/media/music/${this.music}.mp3`)
        }

        this._preload()
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
    }

    addMusic() {
        if (!this.world.muteMusic) {
            this.sound.play(this.music, { loop: true })
        }
    }

    stopMusic() {
        this.sound.stopByKey(this.music)
    }

    getWaddles() {
        this.network.send('get_waddles')
    }

    setWaddles(waddles) {
        this.waddles = waddles

        for (let [id, seats] of Object.entries(waddles)) {
            this.setSeats(id, seats)
        }
    }

    setSeats(id, seats) {
        for (let [index, seat] of seats.entries()) {
            if (seat) {
                this.world.room[`seats${id}`][index].visible = true
            }
        }
    }

    onSnowballComplete(x, y) {
        // To be overridden in derived class
    }

    stop() {
        this.interface.main.snowballFactory.clearBalls()
        this.sound.stopAll()
        this.scene.stop()
    }

    getWaiting(id) {
        return this.waiting.find(user => user.id == id)
    }

    updateWaiting(id, attributes) {
        let user = this.getWaiting(id)

        if (user) {
            user = Object.assign(user, attributes)
        }
    }

    removeWaiting(id) {
        this.waiting = this.waiting.filter(user => user.id != id)
    }

    /*========== Physics ==========*/

    get roomPhysics() {
        let key = this.key.toLowerCase()

        return this.cache.json.get(`${key}-physics`)
    }


    addPhysics() {
        this.matter.world.setBounds(0, 0, this.game.config.width, this.game.config.height)

        this.block = this.addBody('block', 0x111111)
        this.triggers = this.addTriggers()
    }

    addBody(key, color = null) {
        if (!this.roomPhysics[key]) return null

        let body = this.matter.add.fromPhysicsEditor(0, 0, this.roomPhysics[key])
        this.matter.body.setPosition(body, body.centerOffset) // Centers body in room

        // Debug color
        color = (color) ? color : body.render.fillColor

        body.render.lineColor = color
        body.render.fillColor = color
        body.render.fillOpacity = 0.5

        return body
    }

    addTriggers() {
        if (!this.roomTriggers) return null

        let triggers = []

        for (let t in this.roomTriggers) {
            let trigger = this.addBody(t, 0x00FF00)

            trigger.callback = this.roomTriggers[t]
            triggers.push(trigger)
        }

        return triggers
    }

    triggerRoom(id, x, y) {
        let room = this.crumbs.scenes.rooms[id]

        this.world.client.sendJoinRoom(id, room.key, x, y)
    }

    triggerWaddle(id) {
        // To be overridden in derived class
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
