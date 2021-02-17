import Plugin from '../Plugin'


export default class Get extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'get_player': this.getPlayer,
            'get_item': this.getItem
        }
    }

    getPlayer(args) {
        this.interface.main.playerCard._showCard(args.penguin)
    }

    getItem(args) {
        this.interface.prompt.showItem(args.item, args.name, args.cost)
    }

}
