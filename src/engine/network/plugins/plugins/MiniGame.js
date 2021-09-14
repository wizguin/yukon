import Plugin from '../Plugin'


export default class MiniGame extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'start_game': this.startGame,
            'send_move': this.sendMove
        }
    }

    startGame(args) {
        this.world.room.handleStartGame(args)
    }

    sendMove(args) {
        this.world.room.handleSendMove(args)
    }

}
