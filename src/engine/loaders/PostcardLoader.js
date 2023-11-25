import BaseLoader from './BaseLoader'


export default class PostcardLoader extends BaseLoader  {

    constructor(parent) {
        super(parent.scene)

        this.parent = parent

        this.baseURL = '/assets/media/postcards/sprites/'
        this.keyPrefix = 'postcards/sprites/'
    }

    loadPostcard(postcard) {
        const id = typeof postcard === 'object' ? postcard.postcardId : postcard

        const key = this.getKey(id)

        if (this.checkComplete('json', key, () => {
            this.onFileComplete(postcard, key)
        })) {
            return
        }

        this.multiatlas(key, `${id}.json`)

        this.start()
    }

    onFileComplete(postcard, key) {
        if (!this.textureExists(key)) {
            return
        }

        this.parent.addPostcard(postcard)
    }

}
