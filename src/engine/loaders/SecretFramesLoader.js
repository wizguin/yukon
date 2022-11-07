import BaseLoader from './BaseLoader'


export default class SecretFramesLoader extends BaseLoader {

    constructor(scene) {
        super(scene)

        this.baseURL = '/assets/media/penguin/actions/'
        this.keyPrefix = 'secret_frames/'
    }

    loadFrames(frames, callback) {
        for (let frame of frames) {
            this.loadFrame(frame)
        }

        if (this.list.size == 0) {
            return callback()
        }

        this.once('complete', () => callback())

        this.start()
    }

    loadFrame(frame) {
        let key = this.getKey(frame)

        if (this.checkComplete('json', key)) {
            return
        }

        this.multiatlas(key, `${frame}.json`)
    }

    loadComplete() {
        super.loadComplete()
    }

}
