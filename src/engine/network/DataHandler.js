import PluginManager from './plugins/PluginManager'


export default class DataHandler {

    constructor(network) {
        this.network = network

        this.plugins = new PluginManager(network)
    }

    handle(message) {
        try {
            let parsed = JSON.parse(message)

            if (localStorage.logging == 'true') {
                console.log('Message received:', parsed.action, parsed.args)
            }

            this.network.events.emit(parsed.action, parsed.args)

        } catch(error) {
            console.error(error)
        }
    }

}
