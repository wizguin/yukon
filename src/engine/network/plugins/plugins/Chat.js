import Plugin from '../Plugin'


export default class Chat extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'send_message': this.sendMessage,
            'send_safe': this.sendSafe,
            'send_emote': this.sendEmote
        }
    }

    get safeMessagesMap() {
        return this.interface.main.safe.safeMessagesMap
    }

    sendMessage(args) {
        this.interface.showTextBalloon(args.id, args.message)
    }

    sendSafe(args) {
        let message = this.safeMessagesMap[args.safe]

        this.interface.showTextBalloon(args.id, message)
    }

    sendEmote(args) {
        this.interface.showEmoteBalloon(args.id, args.emote)
    }

}
