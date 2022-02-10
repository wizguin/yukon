import Plugin from '../Plugin'


export default class Igloo extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'add_igloo': this.addIgloo,
            'add_furniture': this.addFurniture,
            'update_flooring': this.updateFlooring,
            'update_music': this.updateMusic,
            'get_igloos': this.getIgloos,
            'get_igloo_open': this.getIglooOpen
        }
    }

    get client() {
        return this.world.client
    }

    addIgloo(args) {
        let inventory = this.client.igloos

        this.client.coins = args.coins
        inventory.push(args.igloo)
        inventory.sort((a, b) => a - b)

        this.interface.refreshPlayerCard()

        if (this.interface.iglooEdit.gridView.visible) {
            this.interface.iglooEdit.showGridView()
        }

        this.interface.updateCatalogCoins(args.coins)

        let text = `${this.crumbs.igloos[args.igloo].name}\nhas been added to your inventory.`
        this.interface.prompt.showWindow(text, 'single')
    }

    addFurniture(args) {
        let inventory = this.client.furniture

        this.client.coins = args.coins
        inventory[args.furniture] = inventory[args.furniture] + 1 || 1

        this.interface.refreshPlayerCard()

        if (this.interface.iglooEdit.gridView.visible) {
            this.interface.iglooEdit.showGridView()
        }

        this.interface.updateCatalogCoins(args.coins)

        let text = `${this.crumbs.furniture[args.furniture].name}\nhas been added to your inventory.`
        this.interface.prompt.showWindow(text, 'single')
    }

    updateFlooring(args) {
        if (!this.world.room.isIgloo) return

        this.world.room.updateFlooring(args.flooring)
        this.client.coins = args.coins

        this.interface.refreshPlayerCard()
    }

    updateMusic(args) {
        if (!this.world.room.isIgloo) return

        this.world.room.updateMusic(args.music)
    }

    getIgloos(args) {
        this.interface.main.map.iglooMap.setIgloos(args.igloos)
    }

    getIglooOpen(args) {
        if (args.open) {
            this.interface.main.playerCard.buttons.enableButton('igloo')
        }
    }

}
