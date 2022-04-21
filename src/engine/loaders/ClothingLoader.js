import BaseLoader from './BaseLoader'

import PenguinSpriteFactory from './PenguinSpriteFactory'


export default class ClothingLoader extends BaseLoader {

    constructor(penguin) {
        super(penguin.room)

        this.penguin = penguin

        this.equipped = this.penguin.items.equipped

        this.baseURL = '/assets/media/clothing/sprites/'
        this.keyPrefix = 'clothing/sprites/'
    }

    loadItems() {
        for (let slot in this.equipped) {
            let item = this.equipped[slot]

            if (item.id > 0) {
                this.loadItem(item.id, slot)
            }
        }

        this.start()
    }

    loadItem(item, slot) {
        if (item == 0) {
            return this.removeItem(slot)
        }

        if (this.equipped[slot].sprite) {
            this.removeItem(slot)
        }

        let key = this.getKey(item)

        if (this.checkComplete('json', key, () => {
            this.onFileComplete(key, slot)
        })) {
            return
        }

        this.multiatlas(key, `${item}.json`)
    }

    onFileComplete(key, slot) {
        if (!this.textureExists(key)) {
            return
        }

        let item = this.equipped[slot]
        if (item.sprite) {
            this.removeItem(slot)
        }

        // item.depth + 1 to ensure items are loaded on top of penguin body
        item.sprite = PenguinSpriteFactory.create(this.penguin, key, item.depth + 1)

        this.penguin.sort('depth')
        this.penguin.playFrame(this.penguin.frame)
    }

    removeItem(slot) {
        let item = this.equipped[slot]
        if (!item || !item.sprite) {
            return
        }

        item.sprite.destroy()
        item.sprite = null
    }

}
