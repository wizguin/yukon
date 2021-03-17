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

    loadFurniture(item, crate) {
        // todo: check if item exists in crumbs
        let key = `${this.prefix}/${item}`

        if (this.scene.textures.exists(key)) return this.onFileComplete(key, crate)

        this.load.once(`filecomplete-json-${key}`, () => {
            this.onFileComplete(key, crate)
        })

        this.load.multiatlas({
            key: key,
            atlasURL: `${this.url}/${item}.json`,
            path: `${this.url}`
        })
    }

    onFileComplete(key, crate) {
        if (!this.scene.textures.exists(key)) return

        let sprite = new FurnitureSprite(this.scene, crate.defaultX, crate.defaultY, key, '1_1_1')
        this.scene.add.existing(sprite)
    }

}
