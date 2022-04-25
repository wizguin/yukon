import Plugin from '../Plugin'


export default class MiniGame extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'game_over': this.gameOver
        }
    }

    gameOver(args) {
        this.world.client.coins = args.coins

        this.interface.refreshPlayerCard()
        this.interface.updateCatalogCoins(args.coins)
    }

}
