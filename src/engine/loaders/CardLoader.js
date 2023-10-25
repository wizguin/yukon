import BaseLoader from './BaseLoader'


export default class CardLoader extends BaseLoader {

    constructor(scene) {
        super(scene)

        this.baseURL = '/assets/media/games/card/icons/'
        this.keyPrefix = 'card/icons/'
    }

    loadCard(card, callback) {
        let key = this.getKey(card.id)

        if (this.checkComplete('image', key, () => {
            this.onFileComplete(key, card, callback)
        })) {
            return
        }

        this.image(key, `${card.id}.png`)
        this.start()
    }

    onFileComplete(key, card, callback) {
        if (!this.textureExists(key)) {
            return
        }

        callback(key, card)
    }

}
