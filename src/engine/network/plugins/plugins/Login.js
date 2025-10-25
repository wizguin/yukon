import Plugin from '../Plugin'
import CryptoJS from 'crypto-js'

export default class Login extends Plugin {
    constructor(network) {
        super(network)
        this.events = {
            'login': this.login,
            'game_auth': this.gameAuth
        }
        this.errorMessages = {
            'invalid_credentials': 'Invalid username or password',
            'too_many_attempts': 'Too many login attempts. Please try again later.',
            'session_expired': 'Your session has expired. Please login again.',
            'server_error': 'Server error. Please try again later.',
            'default': 'An error occurred. Please try again.'
        }
    }

    get loginScene() {
        return this.scene.getScene('Login')
    }

    // Sanitize error messages
    sanitizeError(message) {
        // Remove any HTML or script tags
        message = message.replace(/<[^>]*>/g, '')
        message = message.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        // Limit message length
        return message.substring(0, 200)
    }

    login(args) {
        this.interface.hideLoading()

        if (args.success) {
            return this.scene.start('Servers', args)
        }

        // Handle specific error cases
        let errorMessage = this.errorMessages.default
        if (args.message) {
            if (args.message.includes('banned')) {
                errorMessage = 'Your account has been banned.'
            } else if (args.message.includes('password')) {
                errorMessage = this.errorMessages.invalid_credentials
            } else if (args.message.includes('timeout')) {
                errorMessage = this.errorMessages.session_expired
            } else {
                errorMessage = this.sanitizeError(args.message)
            }
        }

        if (!this.network.lastLoginScene) {
            return this.scene.start('Login')
        }

        let scene = this.scene.getScene(this.network.lastLoginScene)

        scene.events.once('create', () => this.onLoginError(errorMessage))
        this.scene.start(this.network.lastLoginScene)
    }

    onLoginError(message) {
        this.loginScene.events.emit('hideinput')

        // Add rate limiting for error messages
        if (this._lastErrorTime && Date.now() - this._lastErrorTime < 1000) {
            return
        }
        this._lastErrorTime = Date.now()

        this.interface.prompt.showError(message, 'Okay', () => {
            this.loginScene.events.emit('showinput')
            this.interface.prompt.error.visible = false
        })
    }

    gameAuth(args) {
        if (args.token) {
            // Store token securely
            this.network.saveToken(this.network.username, args.token)
        }

        if (args.success) {
            this.network.send('join_server')
        } else {
            this.onLoginError(this.errorMessages.server_error)
        }
    }
}
