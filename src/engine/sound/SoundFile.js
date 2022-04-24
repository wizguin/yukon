export default class SoundFile extends Phaser.Loader.File {

    constructor(loader, key, urlConfig, xhrSettings) {
        let fileConfig = {
            type: 'audio',
            cache: loader.cacheManager.audio,
            responseType: 'blob',
            key: key,
            url: urlConfig.url,
            xhrSettings: xhrSettings
        }

        super(loader, fileConfig)
    }

    onProcess() {
        try {
            this.data = URL.createObjectURL(this.xhrLoader.response)
            this.onProcessComplete()

        } catch(e) {
            this.onProcessError()
            throw e
        }
    }

}
