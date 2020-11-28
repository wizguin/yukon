import Plugin from '../Plugin'


export default class Chat extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'send_message': this.sendMessage
        }
    }

    sendMessage(args) {
        this.interface.showTextBalloon(args.id, args.message)
    }

}
