import BaseLoader from './BaseLoader'


export default class PackFileLoader extends BaseLoader {

    constructor(scene) {
        super(scene)
    }

    loadPack(key, url, callback) {
        if (this.checkComplete(key, callback)) {
            this.emit('complete')
            return
        }

        this.pack(key, url)
        this.start()
    }

    checkComplete(key, callback) {
        if (this.jsonExists(key) && this.checkFilesComplete(key)) {
            callback()
            return true
        }

        this.once('complete', () => callback())
    }

    /**
     * Checks if all files in the pack are loaded.
     *
     * @param {string} key - Pack key
     * @returns
     */
    checkFilesComplete(key) {
        let pack = this.scene.cache.json.get(key)

        for (let section in pack) {
            let files = pack[section].files

            if (!files) {
                continue
            }

            for (let file of files) {
                let exists = false

                switch (file.type) {
                    case 'audio':
                        exists = this.audioExists(file.key)
                        break

                    default:
                        exists = this.textureExists(file.key)
                        break
                }

                if (!exists) {
                    return false
                }
            }
        }

        return true
    }

}
