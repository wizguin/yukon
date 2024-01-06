import BaseLoader from './BaseLoader'


export default class PostcardLoader extends BaseLoader  {

    constructor(scene) {
        super(scene)

        this.baseURL = '/assets/media/postcards/sprites/'
        this.keyPrefix = 'postcards/sprites/'
    }

    loadPostcard(postcardId, callback) {
        const key = this.getKey(postcardId)

        if (this.checkComplete('json', key, () => {
            this.onFileComplete(key, postcardId, callback)
        })) {
            return
        }

        this.multiatlas(key, `${postcardId}.json`)

        this.start()
    }

    async onFileComplete(key, postcardId, callback) {
        if (!this.textureExists(key)) {
            return
        }

        let postcardClass = null

        try {
            postcardClass = (await import(
                `@scenes/postcards/Postcard${postcardId}.js`
            )).default

        } catch (error) {
            console.error(error)
        }

        callback(postcardClass)
    }

}
