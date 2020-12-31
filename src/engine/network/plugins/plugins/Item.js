import Plugin from '../Plugin'


export default class Item extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'update_player': this.updatePlayer,
        }
    }

    updatePlayer(args) {
        this.world.room.penguins[args.id].updatePenguin(args.item, args.slot)
    }

}
