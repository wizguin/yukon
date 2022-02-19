import Plugin from '../Plugin'


export default class MiniGame extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'start_game': this.startGame,
            'send_move': this.sendMove,
            'game_over': this.gameOver
        }
    }

    startGame(args) {
        this.world.room.handleStartGame(args)
    }

    sendMove(args) {
        this.world.room.handleSendMove(args)
    }

    gameOver(args) {
        this.world.client.coins = args.coins

        this.interface.refreshPlayerCard()
        this.interface.updateCatalogCoins(args.coins)
    }

}
