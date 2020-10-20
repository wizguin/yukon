import RoomFactory from './room/RoomFactory'


export default class World extends Phaser.Scene {

    constructor(key) {
        super(key)
    }

    init(data) {
        this.network = this.game.network

        this.room = null
        this.client = null

        this.roomFactory = new RoomFactory(this)

        this.joinRoom(data.room, data.users)
    }

    joinRoom(id, users) {
        this.room = this.roomFactory.createRoom(id, users)
    }

}
