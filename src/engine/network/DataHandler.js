import PluginManager from './plugins/PluginManager'


export default class DataHandler {

    constructor(network) {
        this.plugins = new PluginManager(network)
    }

    handle(message) {
        try {
            let parsed = JSON.parse(message)

            if (localStorage.logging == 'true') {
                console.log('[DataHandler] Message received:', parsed.action, parsed.args)
            }

            this.fireEvent(parsed.action, parsed.args)

        } catch(error) {
            console.error(error)
        }
    }

    fireEvent(event, args) {
        this.plugins.getEvent(event, args)
    }

}
