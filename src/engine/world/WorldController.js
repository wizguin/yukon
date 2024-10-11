import BaseScene from '@scenes/base/BaseScene'

import ClientController from './penguin/ClientController'
import PenguinFactory from './penguin/PenguinFactory'
import RoomFactory from './room/RoomFactory'


export default class WorldController extends BaseScene {

    constructor(key) {
        super(key)

        this.client
        this.room

        this.secretFramesCache = {}

        this.globalLoadQueue = {}

        this.worldTimeZone = 'America/Los_Angeles'

        this.loadedAssets = []
    }

    create() {
        this.penguinFactory = new PenguinFactory(this)
        this.roomFactory = new RoomFactory(this)
    }

    setClient(args) {
        this.client = new ClientController(this, args)
    }

    joinRoom(args) {
        if (!this.room) {
            return this.createRoom(args)
        }

        this.room.events.once('shutdown', () => this.createRoom(args))
        this.room.stop()
    }

    createRoom(args) {
        this.room = this.roomFactory.create(args)

        if (args.users) {
            this.lastRoom = this.room.id

            this.room.waiting = args.users
            this.room.events.once('create', () => this.addPenguins())
        }
    }

    addPenguins() {
        this.room.penguins = this.penguinFactory.createPenguins(this.room.waiting, this.room)
    }

    addPenguin(user) {
        // If room isn't ready then user gets added into waiting array
        if (!this.room.isReady && !this.room.getWaiting(user.id)) {
            return this.room.waiting.push(user)
        }

        if (!(user.id in this.room.penguins)) {
            let penguin = this.penguinFactory.createPenguin(user, this.room)
            this.room.addPenguin(user.id, penguin)
        }
    }

    removePenguin(id) {
        if (!this.room.isReady) {
            return this.room.removeWaiting(id)
        }

        this.room.removePenguin(id)
    }

    getRelationship(id) {
        if (id == this.client.id) return 'player'

        if (this.isBuddy(id)) {
            return this.isOnline(id) ? 'online' : 'offline'
        }

        if (this.isIgnore(id)) return 'ignore'

        return 'none'
    }

    isBuddy(id) {
        let buddiesFlat = this.client.buddies.map(buddy => buddy.id)
        return buddiesFlat.includes(id)
    }

    isIgnore(id) {
        let ignoresFlat = this.client.ignores.map(ignore => ignore.id)
        return ignoresFlat.includes(id)
    }

    isOnline(id) {
        let buddy = this.client.buddies.find(obj => obj.id == id)
        return buddy.online
    }

    isClientUsername(username) {
        return username.toLowerCase() === this.client.penguin.username.toLowerCase()
    }

    getColor(id) {
        return this.crumbs.colors[id - 1] || this.crumbs.colors[0]
    }

    getWorldTime() {
        return new Date(new Date().toLocaleString('en-US', { timeZone: this.worldTimeZone }))
    }

}
