import Plugin from '../Plugin'


export default class Igloo extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'update_flooring': this.updateFlooring
        }
    }

    get client() {
        return this.world.client
    }

    get playerCard() {
        return this.interface.main.playerCard
    }

    updateFlooring(args) {
        if (!this.world.room.isIgloo) return

        this.world.room.updateFlooring(args.flooring)
        this.client.coins = args.coins

        // Update player card
        if (this.playerCard.visible && this.playerCard.id == this.client.id) {
            this.interface.showCard(this.client.id, true)
        }
    }

}
