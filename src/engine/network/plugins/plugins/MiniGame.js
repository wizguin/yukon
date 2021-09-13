import Plugin from '../Plugin'


export default class MiniGame extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'start_game': this.startGame
        }
    }

    startGame(args) {
        this.world.room.handleStartGame(args)
    }

}
