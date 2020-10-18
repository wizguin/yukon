export default class PluginManager {

    constructor(network) {
        this.events = {}
        this.pluginsCache = {}

        this.loadPlugins(network)
    }

    loadPlugins(network) {
        this.importPlugins(require.context('./plugins/', true, /\.js$/))

        for (let key in this.pluginsCache) {
            if (this.pluginsCache[key].__esModule) {
                let plugin = new this.pluginsCache[key].default(network)

                this.loadEvents(plugin)
            }
        }

        console.log(`[PluginManager] ${Object.keys(this.pluginsCache).length} plugins loaded`)
    }

    importPlugins(r) {
        r.keys().forEach(key => this.pluginsCache[key] = r(key));
    }

    loadEvents(plugin) {
        for (let event in plugin.events) {
            this.events[event] = plugin.events[event].bind(plugin)
        }
    }

    getEvent(event, args) {
        try {
            this.events[event](args)
        } catch(error) {
            console.error(`[PluginManager] Event (${event}) not handled: ${error.stack}`)
        }
    }

}
