import BaseLoader from './BaseLoader'


export default class IglooPetLoader extends BaseLoader {

    constructor(scene) {
        super(scene)

        this.baseURL = '/assets/media/pet/sprites/'
        this.keyPrefix = 'pet/sprites/'
    }

    loadPet(petId, callback) {
        if (!(petId in this.crumbs.pets)) return

        const name = this.crumbs.pets[petId].name.toLowerCase()
        const key = this.getKey(name)

        if (this.checkComplete('json', key, () => {
            this.onFileComplete(key, callback)
        })) {
            return
        }

        this.multiatlas(key, `${name}.json`)
        this.start()
    }

    onFileComplete(key, callback) {
        if (!this.textureExists(key)) {
            return
        }

        callback(key)
    }

}
