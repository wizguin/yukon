import Plugin from '../Plugin'


export default class MiniGame extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'game_over': this.gameOver
        }
    }

    gameOver(args) {
        // Difference in coins = coins earned
        this.interface.prompt.showCoin(args.coins - this.world.client.coins)

        this.world.client.coins = args.coins

        this.interface.refreshPlayerCard()
        this.interface.updateCatalogCoins(args.coins)
    }

}
