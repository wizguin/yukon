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
        this.interface.hideLoading()

        if (args.success) {
            this.scene.start('Servers', args)
        } else {
            this.scene.start('Login')
            this.interface.prompt.showError(args.message)
        }
    }

    loginKey(args) {
        if (args.success) this.network.send('load_player')
    }

}
