import FurnitureSprite from '../furniture/FurnitureSprite'


export default class FurnitureLoader {

    constructor(scene) {
        this.scene = scene

        this.load = new Phaser.Loader.LoaderPlugin(scene)
        this.url = '/assets/media/furniture/sprites'
        this.prefix = 'furniture'
    }

    start() {
        this.load.start()
    }

    loadFurniture(item, crate = null, x, y, rotation = 1, frame = 1) {
        // todo: check if item exists in crumbs
        let key = `${this.prefix}/${item}`

        if (this.scene.textures.exists(key)) {
            return this.onFileComplete(key, crate, x, y, rotation, frame)
        }

        this.load.once(`filecomplete-json-${key}`, () => {
            this.onFileComplete(key, crate, x, y, rotation, frame)
        })

        this.load.multiatlas({
            key: key,
            atlasURL: `${this.url}/${item}.json`,
            path: `${this.url}`
        })
    }

    onFileComplete(key, crate, x, y, rotation, frame) {
        if (!this.scene.textures.exists(key)) return

        let sprite = new FurnitureSprite(this.scene, crate, x, y, key, rotation, frame)
        this.scene.add.existing(sprite)
    }

}
