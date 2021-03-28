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

    loadFurniture(item, crate = null, x, y, frame = 1, rotation = 1) {
        // todo: check if item exists in crumbs
        let key = `${this.prefix}/${item}`

        if (this.scene.textures.exists(key)) {
            return this.onFileComplete(key, crate, x, y, frame, rotation)
        }

        this.load.once(`filecomplete-json-${key}`, () => {
            this.onFileComplete(key, crate, x, y, frame, rotation)
        })

        this.load.multiatlas({
            key: key,
            atlasURL: `${this.url}/${item}.json`,
            path: `${this.url}`
        })
    }

    onFileComplete(key, crate, x, y, frame, rotation) {
        if (!this.scene.textures.exists(key)) return

        let sprite = new FurnitureSprite(this.scene, crate, x, y, key, frame, rotation)
        this.scene.add.existing(sprite)
    }

}
