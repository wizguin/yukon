import DataHandler from './DataHandler'
import CryptoJS from 'crypto-js'

import io from 'socket.io-client'


export default class Network {

    constructor(game) {
        this.game = game

        this.events = new Phaser.Events.EventEmitter()

        this.handler = new DataHandler(this)
        this.client = null

        this.saveUsername = false
        this.savePassword = false
        this.token = null

        // Used to switch back to correct login scene on an error
        this.lastLoginScene = null

        this.worldName

        this.encryptionKey = null
        this.sessionTimeout = null
        this.loginAttempts = 0
        this.maxLoginAttempts = 5
        this.loginTimeout = 30000 // 30 seconds
    }

    connectLogin(saveUsername, savePassword, onConnect) {
        this.saveUsername = saveUsername
        this.savePassword = savePassword

        this.connect('Login', () => {
            onConnect()
        }, () => {
            this.disconnect()
        })
    }

    connectGame(world, username, key) {
        if (this.loginAttempts >= this.maxLoginAttempts) {
            this.onConnectionLost('Too many login attempts. Please try again later.')
            return
        }

        this.loginAttempts++
        this.startLoginTimeout()

        // Only create token if save password is checked and space is available
        let createToken = this.savePassword && Object.keys(this.savedPenguins).length <= 6
        let response = { 
            username: this.encryptData(username), 
            key: this.encryptData(key), 
            createToken: createToken 
        }

        // If a token exists for the user add the token selector to response
        let token = this.getToken(username)
        if (token) {
            response.token = this.encryptData(token.split(':')[0])
        }

        this.connect(world, () => {
            this.send('game_auth', response)
            this.worldName = world
            this.loginAttempts = 0 // Reset on successful connection
        }, () => {
            this.onConnectionLost()
        })
    }

    connect(world, onConnect, onDisconnect) {
        this.disconnect()

        let config = this.game.crumbs.worlds[world]

        this.client = io.connect(config.host, { path: config.path })

        this.client.once('connect', onConnect)
        this.client.once('disconnect', onDisconnect)
        this.client.on('connect_error', () => this.onConnectionLost())
        this.client.on('message', (message) => this.onMessage(message))
    }

    disconnect() {
        if (this.client) {
            this.client.disconnect()
        }
    }

    send(action, args = {}) {
        if (!this.client) {
            return
        }

        if (localStorage.logging == 'true') {
            console.log('Message sending:', action, args)
        }

        this.client.emit('message', { action: action, args: args })
    }

    // Handlers

    onMessage(message) {
        this.handler.handle(message)
    }

    onConnectionLost(message = 'Connection lost. Please try again.') {
        if (this.sessionTimeout) {
            clearTimeout(this.sessionTimeout)
        }
        this.interface.prompt.showError(message, 'Okay', () => {
            this.scene.start('Login')
        })
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

        if (!savedPenguins) {
            return {}
        }

        try {
            return JSON.parse(savedPenguins)
        } catch (error) {
            return {}
        }
    }

    getToken(username) {
        let save = this.savedPenguins[username.toLowerCase()]
        if (save && save.token) {
            try {
                return this.decryptData(save.token)
            } catch (e) {
                return null
            }
        }
        return null
    }

    saveToken(username, token) {
        if (!this.savePassword) return
        this.savedPenguins[username.toLowerCase()] = {
            token: this.encryptData(token)
        }
    }

    // Add encryption methods
    encryptData(data) {
        if (!this.encryptionKey) return data
        return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptionKey).toString()
    }

    decryptData(encryptedData) {
        if (!this.encryptionKey) return encryptedData
        const bytes = CryptoJS.AES.decrypt(encryptedData, this.encryptionKey)
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    }

    // Add session timeout management
    startLoginTimeout() {
        if (this.sessionTimeout) {
            clearTimeout(this.sessionTimeout)
        }
        this.sessionTimeout = setTimeout(() => {
            this.onConnectionLost('Session timeout. Please login again.')
        }, this.loginTimeout)
    }

}
