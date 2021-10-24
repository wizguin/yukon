import Plugin from '../Plugin'


export default class Actions extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'send_position': this.sendPosition,
            'send_frame': this.sendFrame,
            'snowball': this.snowball
        }
    }

    sendPosition(args) {
        if (this.world.client.id != args.id) {
            this.world.room.penguins[args.id].move(args.x, args.y, args.endFrame)
        }
    }

    sendFrame(args) {
        this.world.room.penguins[args.id].playFrame(args.frame, args.set)
    }

    snowball(args) {
        this.interface.main.snowballFactory.throwBall(args.id, args.x, args.y)
    }

}
