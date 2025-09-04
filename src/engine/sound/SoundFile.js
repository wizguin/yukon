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
        this.blobUrl = null
    }

    onProcess() {
        try {
            this.createBlobURL()
            this.onProcessComplete()

        } catch(e) {
            this.onProcessError()
            throw e
        }
    }

    createBlobURL() {
        // Validate response type
        if (!this.xhrLoader.response || !(this.xhrLoader.response instanceof Blob)) {
            throw new Error('Invalid response type')
        }

        // Validate blob size (max 50MB)
        const MAX_BLOB_SIZE = 50 * 1024 * 1024 // 50MB
        if (this.xhrLoader.response.size > MAX_BLOB_SIZE) {
            throw new Error('File size exceeds maximum allowed size')
        }

        // Validate MIME type
        const allowedTypes = ['audio/mpeg', 'audio/wav', 'audio/ogg']
        if (!allowedTypes.includes(this.xhrLoader.response.type)) {
            throw new Error('Invalid file type')
        }

        // Revoke previous blob URL if it exists
        if (this.blobUrl) {
            URL.revokeObjectURL(this.blobUrl)
        }

        this.blobUrl = URL.createObjectURL(this.xhrLoader.response)
        this.data = this.blobUrl
    }

    destroy() {
        if (this.blobUrl) {
            URL.revokeObjectURL(this.blobUrl)
            this.blobUrl = null
        }
        super.destroy()
    }

}
