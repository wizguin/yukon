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

    get room() {
        return this.world.room
    }

    sendPosition(args) {
        if (this.room.isReady) {
            this.room.penguins[args.id].move(args.x, args.y, args.endFrame)
        }

        let user = this.room.getWaiting(args.id)
        if (user) {
            user.x = args.x
            user.y = args.y
        }
    }

    sendFrame(args) {
        if (this.room.isReady) {
            return this.room.penguins[args.id].playFrame(args.frame, args.set)
        }

        let user = this.room.getWaiting(args.id)
        if (user) {
            user.frame = (args.set) ? args.frame : 1
        }
    }

    snowball(args) {
        if (this.room.isReady) {
            this.interface.main.snowballFactory.throwBall(args.id, args.x, args.y)
        }
    }

}
