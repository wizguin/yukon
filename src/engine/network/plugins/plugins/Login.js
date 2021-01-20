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
            this.network.connectGame('blizzard', args.username, args.loginKey)
        } else {
            this.interface.hideLoading()
            this.scene.start('Login')
            this.interface.prompt.showError(args.message)
        }
    }

    loginKey(args) {
        if (args.success) this.network.send('load_player')
    }

}
