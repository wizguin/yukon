import Plugin from '../Plugin'


export default class Get extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'get_player': this.getPlayer
        }
    }

    getPlayer(args) {
        this.interface.main.playerCard._showCard(args.penguin)
    }

}
