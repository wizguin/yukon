import BaseLoader from './BaseLoader'


export default class CardLoader extends BaseLoader {

    constructor(scene) {
        super(scene)

        this.baseURL = '/assets/media/games/card/icons/'
        this.keyPrefix = 'card/icons/'
    }

    loadCard(card) {
        let key = this.getKey(card.card_id)

        if (this.checkComplete('image', key, () => {
            this.onFileComplete(key, card)
        })) {
            return
        }

        this.image(key, `${card.card_id}.png`)
        this.start()
    }

    onFileComplete(key, card) {
        if (!this.textureExists(key)) {
            return
        }

        this.scene.onCardLoad(key, card)
    }

}
