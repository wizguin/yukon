import BaseLoader from './BaseLoader'


export default class SecretFramesLoader extends BaseLoader {

    constructor(scene) {
        super(scene)

        this.baseURL = '/assets/media/penguin/actions/'
        this.keyPrefix = 'secret_frames/'

        // Track current items loading
        this.currentItems = {}
    }

    loadFrames(itemId, frames, callback) {
        if (itemId in this.currentItems) {
            return
        }

        this.currentItems[itemId] = { remaining: frames.length, callback: callback }

        for (let frame of frames) {
            this.loadFrame(frame, itemId)
        }

        this.start()
    }

    loadFrame(frame, itemId) {
        const key = this.getKey(frame)

        if (this.checkComplete('json', key, () => {
            this.onFrameComplete(itemId)
        })) {
            return
        }

        this.multiatlas(key, `${frame}.json`)
    }

    onFrameComplete(itemId) {
        this.currentItems[itemId].remaining--

        if (this.currentItems[itemId].remaining < 1) {
            // All frames loaded for item
            this.currentItems[itemId].callback()

            delete this.currentItems[itemId]
        }
    }

}
