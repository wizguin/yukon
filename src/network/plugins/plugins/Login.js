import Plugin from '../Plugin'


export default class Login extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'login': this.login,
            'login_key': this.loginKey
        }
    }

    login(args) {
        if (args.success) {
            console.log(this.game.scene.stop('Login'))
            this.network.connectGame('blizzard', args.username, args.loginKey)
        }
    }

    loginKey(args) {
        if (args.success) this.network.send('load_player')
    }

}
