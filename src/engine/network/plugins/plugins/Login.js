import Plugin from '../Plugin'


export default class Login extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'login': this.login,
            'login_key': this.loginKey
        }
    }

    get loginScene() {
        return this.scene.getScene('Login')
    }

    login(args) {
        this.interface.hideLoading()

        if (args.success) {
            this.scene.start('Servers', args)
        } else {
            this.loginScene.events.once('create', () => this.onLoginError(args.message))
            this.scene.start('Login')
        }
    }

    loginKey(args) {
        if (args.success) this.network.send('load_player')
    }

    onLoginError(message) {
        this.loginScene.events.emit('hideinput')

        this.interface.prompt.showError(message, 'Okay', () => {
            this.loginScene.events.emit('showinput')

            this.interface.prompt.error.visible = false
        })
    }

}
