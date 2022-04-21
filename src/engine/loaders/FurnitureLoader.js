import BaseLoader from './BaseLoader'

import FurnitureSprite from '@engine/world/room/furniture/FurnitureSprite'


export default class FurnitureLoader extends BaseLoader {

    constructor(scene) {
        super(scene)

        this.baseURL = '/assets/media/furniture/sprites/'
        this.keyPrefix = 'furniture/'
    }

    loadFurniture(item, crate = null, x, y, rotation = 1, frame = 1) {
        let key = this.getKey(item)

        if (this.checkComplete('json', key, () => {
            this.onFileComplete(key, crate, x, y, rotation, frame)
        })) {
            return
        }

        this.multiatlas(key, `${item}.json`)
    }

    onFileComplete(key, crate, x, y, rotation, frame) {
        if (!this.textureExists(key)) {
            return
        }

        let sprite = new FurnitureSprite(this.scene, crate, x, y, key, rotation, frame)
        this.scene.add.existing(sprite)
    }

}
