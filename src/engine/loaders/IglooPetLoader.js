import BaseLoader from './BaseLoader'


export default class IglooPetLoader extends BaseLoader {

    constructor(scene) {
        super(scene)

        this.baseURL = '/assets/media/pet/sprites/'
        this.keyPrefix = 'pet/sprites/'
    }

    loadPet(petId, callback) {
        // temp
        petId = 'pink'

        const key = this.getKey(petId)

        if (this.checkComplete('json', key, () => {
            this.onFileComplete(key, callback)
        })) {
            return
        }

        this.multiatlas(key, `${petId}.json`)
        this.start()
    }

    onFileComplete(key, callback) {
        if (!this.textureExists(key)) {
            return
        }

        callback(key)
    }

}
