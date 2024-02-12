import Plugin from '../Plugin'


export default class Chat extends Plugin {

    constructor(network) {
        super(network)

        this.events = {
            'get_pets': this.getPets
        }
    }

    getPets(args) {
        if (this.world.room.isReady && this.world.room.isIgloo) {
            this.world.room.loadPets(args.pets)
        }
    }

}
