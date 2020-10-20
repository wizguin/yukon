import Plugin from '../Plugin'


export default class Join extends Plugin {

    constructor(network) {
        super(network)

        this.events = {
            'load_player': this.loadPlayer,
            'join_room': this.joinRoom,
            'add_player': this.addPlayer,
            'remove_player': this.removePlayer
        }
    }

    loadPlayer(args) {
        let roomConfig = this.crumbs.rooms[args.room]
        let x = roomConfig.x
        let y = roomConfig.y

        this.network.send('join_server', { x: x, y: y })
    }

    joinRoom(args) {
        this.scene.start('World', args)
    }

    addPlayer(args) {

    }

    removePlayer(args) {

    }

}
