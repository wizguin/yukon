import Plugin from '../Plugin'


export default class Item extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'update_player': this.updatePlayer,
            'add_item': this.addItem
        }
    }

    get client() {
        return this.world.client
    }

    updatePlayer(args) {
        if (!this.world.room.isReady) {
            return this.world.room.updateWaiting(args.id, { [args.slot]: args.item })
        }

        this.world.room.penguins[args.id].update(args.item, args.slot)
    }

    addItem(args) {
        const item = parseInt(args.item)

        // If item already in inventory
        if (this.client.inventory[args.slot].includes(item)) return

        // Update player data
        this.client.coins = args.coins
        this.client.inventory[args.slot].push(item)
        this.client.inventory[args.slot].sort((a, b) => a - b)

        // Update player card
        this.interface.refreshPlayerCard()

        // Update catalog coins
        this.interface.updateCatalogCoins(args.coins)

        // Check no purchase popup
        const data = this.crumbs.items[item]
        if ('no_purchase_popup' in data && data.no_purchase_popup === 1) {
            return
        }

        // Show prompt
        let text = `${args.name}\nhas been added to your inventory.`
        this.interface.prompt.showWindow(text, 'single')
    }

}
