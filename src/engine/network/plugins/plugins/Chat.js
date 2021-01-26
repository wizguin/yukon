import Plugin from '../Plugin'


export default class Chat extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'send_message': this.sendMessage,
            'send_emote': this.sendEmote
        }
    }

    sendMessage(args) {
        this.interface.showTextBalloon(args.id, args.message)
    }

    sendEmote(args) {
        this.interface.showEmoteBalloon(args.id, args.emote)
    }

}
