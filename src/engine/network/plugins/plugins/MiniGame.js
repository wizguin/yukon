import Plugin from '../Plugin'


export default class MiniGame extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'game_over': this.gameOver
        }
    }

    gameOver(args) {
        if (this.world.client.activeSeat) {
            this.world.events.once('leftseat', () => this.gameOver(args))
            return
        }

        // Difference in coins = coins earned
        this.interface.prompt.showCoin(args.coins - this.world.client.coins)

        this.world.client.coins = args.coins

        this.interface.refreshPlayerCard()
        this.interface.updateCatalogCoins(args.coins)
    }

}
