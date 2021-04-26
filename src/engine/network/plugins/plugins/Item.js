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

    get playerCard() {
        return this.interface.main.playerCard
    }

    updatePlayer(args) {
        this.world.room.penguins[args.id].update(args.item, args.slot)
    }

    addItem(args) {
        // If item already in inventory
        if (this.client.inventory[args.slot].includes(args.item)) return

        // Update player data
        this.client.coins = args.coins
        this.client.inventory[args.slot].push(args.item)
        this.client.inventory[args.slot].sort((a, b) => a - b)

        // Update player card
        if (this.playerCard.visible && this.playerCard.id == this.client.id) {
            this.interface.showCard(this.client.id, true)
        }

        // Show prompt
        let text = `${args.name}\nhas been added to your inventory.`
        this.interface.prompt.showWindow(text, 'single')
    }

}
