import Plugin from '../Plugin'


export default class Actions extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'send_position': this.sendPosition,
            'send_frame': this.sendFrame
        }
    }

    sendPosition(args) {
        this.world.room.penguins[args.id].movePenguin(args.x, args.y)
    }

    sendFrame(args) {
        this.world.room.penguins[args.id].playFrame(args.frame, args.loop)
    }

}
