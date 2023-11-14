import BaseLoader from './BaseLoader'

import PenguinSpriteFactory from './PenguinSpriteFactory'
import SecretFramesLoader from './SecretFramesLoader'

import adjustRedemptionItem from '@engine/world/penguin/frames/adjustRedemptionItem'


export default class ClothingLoader extends BaseLoader {

    constructor(penguin) {
        super(penguin.room)

        this.penguin = penguin

        this.equipped = this.penguin.equipped

        this.baseURL = '/assets/media/clothing/sprites/'
        this.keyPrefix = 'clothing/sprites/'

        this.framesLoader = new SecretFramesLoader(penguin.room)
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
            this.onFileComplete(item, key, slot)
        })) {
            return
        }

        this.multiatlas(key, `${item}.json`)
    }

    onFileComplete(item, key, slot) {
        if (!this.textureExists(key)) {
            return
        }

        let check = adjustRedemptionItem(item)

        // Checks secret frames
        let secretFrames = this.crumbs.itemsToFrames[check]

        if (secretFrames) {
            return this.loadSecretFrames(secretFrames, slot, item)
        }

        this.addItem(slot, item)
    }

    loadSecretFrames(secretFrames, slot, item) {
        this.framesLoader.loadFrames(item, secretFrames, () => {
            this.addItem(slot, item)
        })
    }

    addItem(slot, item) {
        let equipped = this.equipped[slot]

        if (item != equipped.id) {
            return
        }

        let key = this.getKey(item)

        if (equipped.sprite) {
            this.removeItem(slot)
        }

        // depth + 1 to ensure items are loaded on top of penguin body
        equipped.sprite = PenguinSpriteFactory.create(this.penguin, key, equipped.depth + 1)

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

        this.penguin.playFrame(this.penguin.frame)
    }

}
