export default class BaseLoader extends Phaser.Loader.LoaderPlugin {

    constructor(scene) {
        super(scene)

        this.globalLoadQueue = scene.world.globalLoadQueue

        this.on('loaderror', this.onLoadError, this)
    }

    get crumbs() {
        return this.scene.crumbs
    }

    get network() {
        return this.scene.network
    }

    get interface() {
        return this.scene.interface
    }

    get world() {
        return this.scene.world
    }

    getKey(...args) {
        let key = args.join('')
        let prefix = this.keyPrefix || ''

        return `${prefix}${key}`
    }

    getKeyId(key) {
        let split = key.split('/')
        let last = split[split.length - 1]

        return parseInt(last)
    }

    onLoadError(file) {
        if (file.key in this.globalLoadQueue) {
            this.off(`filecomplete-${file.type}-${file.key}`)

            delete this.globalLoadQueue[file.key]
        }
    }

    checkComplete(type, key, callback = () => {}) {
        if (this.textureExists(key)) {
            callback()
            return true
        }

        let event = `filecomplete-${type}-${key}`

        if (key in this.globalLoadQueue) {
            let loader = this.globalLoadQueue[key]
            loader.once(event, callback)

            return true
        }

        this.globalLoadQueue[key] = this

        this.once(event, () => {
            callback()
            delete this.globalLoadQueue[key]
        })

        return false
    }

    textureExists(key) {
        return this.scene.textures.exists(key)
    }

    jsonExists(key) {
        return this.scene.cache.json.exists(key)
    }

    audioExists(key) {
        return this.scene.cache.audio.exists(key)
    }

}
