import BaseScene from '@scenes/base/BaseScene'

import ClientController from './penguin/client/ClientController'
import PenguinFactory from './penguin/PenguinFactory'
import RoomFactory from './room/RoomFactory'
import IglooFactory from './room/IglooFactory'


export default class WorldController extends BaseScene {

    constructor(key) {
        super(key)

        this.client = null
        this.room = null
    }

    create() {
        this.penguinFactory = new PenguinFactory(this)
        this.roomFactory = new RoomFactory(this)
        this.iglooFactory = new IglooFactory(this)
    }

    setClient(args) {
        this.client = new ClientController(args)
    }

    joinRoom(id, users) {
        this.interface.showLoading(`Loading ${this.crumbs.rooms[id].name}`)
        if (!this.room) return this.createRoom(id, users)

        this.interface.main.snowballFactory.clearBalls()
        this.room.events.once('shutdown', () => this.createRoom(id, users))
        this.room.scene.stop()
    }

    createRoom(id, users) {
        this.room = this.roomFactory.createRoom(id)
        this.room.events.once('create', () => this.addPenguins(users))
    }

    joinIgloo(args) {
        this.interface.showLoading('Loading Igloo')
        if (!this.room) return this.createIgloo(args)

        this.interface.main.snowballFactory.clearBalls()
        this.room.events.once('shutdown', () => this.createIgloo(args))
        this.room.scene.stop()
    }

    createIgloo(args) {
        this.room = this.iglooFactory.createIgloo(args)
        this.room.events.once('create', () => this.addPenguins(args.users))
    }

    addPenguins(users) {
        this.room.penguins = this.penguinFactory.createPenguins(users, this.room)
    }

    addPenguin(user) {
        let penguin = this.penguinFactory.createPenguin(user, this.room)

        this.room.addPenguin(user.id, penguin)
    }

    removePenguin(id) {
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

}
