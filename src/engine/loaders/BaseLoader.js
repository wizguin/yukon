export default class BaseLoader extends Phaser.Loader.LoaderPlugin {

    constructor(scene) {
        super(scene)
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

    attachErrorListener() {
        this.on('loaderror', this.onLoadError, this)
    }

    onLoadError(file) {

    }

    checkComplete(type, key, callback) {
        if (this.textureExists(key)) {
            callback()
            return true
        }

        this.once(`filecomplete-${type}-${key}`, callback)
    }

    textureExists(key) {
        return this.scene.textures.exists(key)
    }

}
