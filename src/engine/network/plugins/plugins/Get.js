import Plugin from '../Plugin'


export default class Get extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'get_player': this.getPlayer
        }
    }

    getPlayer(args) {
        if (args.showCard) {
            this.interface.main.playerCard._showCard(args.penguin)
        }
    }

}
