import Plugin from '../Plugin'


export default class Chat extends Plugin {

    constructor(network) {
        super(network)

        this.events = {
            'get_pets': this.getPets,
            'pet_move': this.petMove,
            'pet_play': this.petPlay
        }
    }

    get isIglooReady() {
        return this.world.room.isReady && this.world.room.isIgloo
    }

    get pets() {
        return this.isIglooReady ? this.world.room.pets : {}
    }

    petsIncludes(id) {
        return id in this.pets
    }

    getPets(args) {
        if (this.isIglooReady) {
            this.world.room.loadPets(args.pets)
        }
    }

    petMove(args) {
        if (this.isIglooReady && this.petsIncludes(args.id)) {
            this.pets[args.id].move(args)
        }
    }

    petPlay(args) {
        if (this.isIglooReady && this.petsIncludes(args.id)) {
            this.pets[args.id].startPlay(args.playType)
        }
    }

}
