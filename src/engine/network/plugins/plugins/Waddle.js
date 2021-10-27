import Plugin from '../Plugin'


export default class Waddle extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'get_waddles': this.getWaddles,
            'join_waddle': this.joinWaddle,
            'update_waddle': this.updateWaddle
        }
    }

    getWaddles(args) {
        this.world.room.setWaddles(args.waddles)
    }

    joinWaddle(args) {
        this.interface.main.waddle.showWaddle(args.waddle, args.seat)
    }

    updateWaddle(args) {
        if (this.world.room.isReady) {
            this.interface.main.waddle.updateWaddle(args.waddle, args.seat, args.username)
        }
    }

}
