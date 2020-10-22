import PenguinFactory from './penguin/PenguinFactory'
import RoomFactory from './room/RoomFactory'


export default class World extends Phaser.Scene {

    constructor(key) {
        super(key)
    }

    init(data) {
        this.network = this.game.network

        this.client = null
        this.room = null

        this.penguinFactory = new PenguinFactory(this)
        this.roomFactory = new RoomFactory(this)

        this.joinRoom(data.room, data.users)
    }

    joinRoom(id, users) {
        this.room = this.roomFactory.createRoom(id)

        this.room.penguins = this.penguinFactory.createPenguins(users, this.room)
    }

}
