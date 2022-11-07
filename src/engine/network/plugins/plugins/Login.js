import Plugin from '../Plugin'


export default class Login extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'login': this.login,
            'game_auth': this.gameAuth
        }
    }

    get loginScene() {
        return this.scene.getScene('Login')
    }

    login(args) {
        this.interface.hideLoading()

        if (args.success) {
            return this.scene.start('Servers', args)
        }

        if (!this.network.lastLoginScene) {
            return this.scene.start('Login')
        }

        let scene = this.scene.getScene(this.network.lastLoginScene)

        scene.events.once('create', () => this.onLoginError(args.message))
        this.scene.start(this.network.lastLoginScene)
    }

    onLoginError(message) {
        this.loginScene.events.emit('hideinput')

        this.interface.prompt.showError(message, 'Okay', () => {
            this.loginScene.events.emit('showinput')

            this.interface.prompt.error.visible = false
        })
    }

    gameAuth(args) {
        if (args.token) {
            this.network.token = args.token
        }

        if (args.success) {
            this.network.send('join_server')
        }
    }

}
