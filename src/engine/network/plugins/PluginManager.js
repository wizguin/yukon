export default class PluginManager {

    constructor(network) {
        this.network = network

        this.pluginsCache = {}

        this.loadPlugins()
    }

    loadPlugins() {
        this.importPlugins(require.context('./plugins/', true, /\.js$/))

        for (let key in this.pluginsCache) {
            if (this.pluginsCache[key].__esModule) {
                let plugin = new this.pluginsCache[key].default(this.network)

                this.loadEvents(plugin)
            }
        }
    }

    importPlugins(r) {
        r.keys().forEach(key => this.pluginsCache[key] = r(key));
    }

    loadEvents(plugin) {
        for (let event in plugin.events) {
            this.network.events.on(event, plugin.events[event].bind(plugin))
        }
    }

}
