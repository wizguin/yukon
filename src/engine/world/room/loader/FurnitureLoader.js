import FurnitureSprite from '../furniture/FurnitureSprite'


export default class FurnitureLoader {

    constructor(scene) {
        this.scene = scene

        this.load = new Phaser.Loader.LoaderPlugin(scene)
        this.url = '/assets/media/furniture/sprites'
        this.prefix = 'furniture'

        this.load.on('filecomplete', this.onFileComplete, this)
    }

    start() {
        this.load.start()
    }

    loadFurniture(item) {
        // todo: check if item exists in crumbs
        let key = `${this.prefix}/${item}`

        if (this.scene.textures.exists(key)) return this.onFileComplete(key)

        this.load.multiatlas({
            key: key,
            atlasURL: `${this.url}/${item}.json`,
            path: `${this.url}`
        })
    }

    onFileComplete(key) {
        if (!this.scene.textures.exists(key)) return

        let sprite = new FurnitureSprite(this.scene, 760, 680, key, '1_1_1')
        this.scene.add.existing(sprite)
    }

}
