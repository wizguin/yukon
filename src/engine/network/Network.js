import DataHandler from './DataHandler'

import io from 'socket.io-client'


export default class Network {

    constructor(game) {
        this.game = game
        this.crumbs = game.crumbs

        this.handler = new DataHandler(this)
        this.client = null

        this.saveUsername = false
        this.savePassword = false
    }

    connectLogin(username, password, saveUsername, savePassword) {
        this.saveUsername = saveUsername
        this.savePassword = savePassword

        this.connect(this.crumbs.worlds.login, () => { this.disconnect() })

        this.send('login', { username: username, password: password })
    }

    connectGame(world, username, loginKey) {
        this.connect(this.crumbs.worlds.game[world], () => { this.onConnectionLost() })

        this.send('login_key', { username: username, loginKey: loginKey })
    }

    connect(world, onDisconnect) {
        this.disconnect()

        this.client = io.connect(`${world.host}:${world.port}`)
        this.client.on('message', (message) => { this.onMessage(message) })
        this.client.on('disconnect', onDisconnect)
    }

    disconnect() {
        if (this.client) this.client.disconnect()
    }

    send(action, args = {}) {
        this.client.emit('message', JSON.stringify({ action: action, args: args }) + '\xdd')
    }

    // Handlers

    onMessage(message) {
        this.handler.handle(message)
    }

    onConnectionLost() {
        this.disconnect()

        let prompt = this.game.scene.getScene('InterfaceController').prompt
        prompt.showError('Connection was lost.\nPlease click to learn more', 'Learn More', () => { })
    }

    // Saved penguins

    get isSavedPenguins() {
        if (localStorage.getItem('saved_penguins')) {
            return true
        } else {
            return false
        }
    }

    get savedPenguins() {
        let savedPenguins = localStorage.getItem('saved_penguins')
        if (!savedPenguins) return {}

        try {
            return JSON.parse(savedPenguins)
        } catch (error) {
            return {}
        }
    }

}
