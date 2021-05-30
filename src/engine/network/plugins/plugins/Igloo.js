import Plugin from '../Plugin'


export default class Igloo extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'add_furniture': this.addFurniture,
            'update_flooring': this.updateFlooring
        }
    }

    get client() {
        return this.world.client
    }

    addFurniture(args) {
        let inventory = this.client.furniture

        // Update player data
        this.client.coins = args.coins
        inventory[args.furniture] = inventory[args.furniture] + 1 || 1

        // Update player card
        this.interface.refreshPlayerCard()

        // Update gridview
        if (this.interface.iglooEdit.gridView.visible) {
            this.interface.iglooEdit.showGridView()
        }

        // Update catalog coins
        this.interface.updateCatalogCoins(args.coins)

        // Show prompt
        let text = `${this.crumbs.furniture[args.furniture].name}\nhas been added to your inventory.`
        this.interface.prompt.showWindow(text, 'single')
    }

    updateFlooring(args) {
        if (!this.world.room.isIgloo) return

        this.world.room.updateFlooring(args.flooring)
        this.client.coins = args.coins

        // Update player card
        this.interface.refreshPlayerCard()
    }

}
