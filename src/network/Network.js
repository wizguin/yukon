import io from 'socket.io-client'


export default class Network {

    constructor(game) {
        this.game = game
        this.crumbs = game.crumbs

        this.client = null
    }

    connectLogin(username, password) {
        this.connect('login')

        this.client.on('message', (message) => { this.onLogin(message) })
        this.client.on('disconnect', () => { this.disconnect() })

        this.send('login', { username: username, password: password })
    }

    connectGame(world) {

    }

    connect(world) {
        world = this.crumbs.worlds[world]

        this.disconnect()
        this.client = io.connect(`${world.host}:${world.port}`)
    }

    disconnect() {
        if (this.client) this.client.disconnect()
    }

    send(action, args = {}) {
        this.client.emit('message', JSON.stringify({ action: action, args: args }) + '\xdd')
    }

    // Handlers

    onLogin(message) {
        console.log(message)
    }

    onMessage() {

    }

    onConnectionLost() {

    }

}
