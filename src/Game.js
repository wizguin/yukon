import Preload from '@/preload/Preload'
import Network from '@/network/Network'
import RoomFactory from '@/world/room/RoomFactory'


export default class Game extends Phaser.Game {

    constructor(config) {
        super(config)

        this.crumbs = config.crumbs

        this.network = new Network(this)

        this.room = null
        this.client = null

        this.roomFactory = new RoomFactory(this)

        this.scene.add('Preload', Preload, true)
    }

    joinRoom(id, users) {
        this.room = this.roomFactory.createRoom(id, null);
    }

}
