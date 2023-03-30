import BaseLoader from './BaseLoader'


export default class CardLoader extends BaseLoader {

    constructor(scene) {
        super(scene)

        this.baseURL = '/assets/media/games/card/icons/'
        this.keyPrefix = 'card/icons/'
    }

    loadCard(card, callback) {
        let key = this.getKey(card.card_id)

        if (this.checkComplete('image', key, () => {
            this.onFileComplete(key, card, callback)
        })) {
            return
        }

        this.image(key, `${card.card_id}.png`)
        this.start()
    }

    onFileComplete(key, card, callback) {
        if (!this.textureExists(key)) {
            return
        }

        callback(key, card)
    }

}
