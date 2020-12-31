import SpriteLoader from './SpriteLoader'


export default class ItemLoader extends SpriteLoader {

    constructor(penguin) {
        super(penguin.room.world)

        this.penguin = penguin
        this.equipped = this.penguin.items.equipped

        this.load = new Phaser.Loader.LoaderPlugin(penguin.room)
        this.url = '/assets/media/clothing/sprites'

        this.load.on('filecomplete', this.onFileComplete, this)
        this.load.on('complete', this.onComplete, this)
    }

    loadItems() {
        for (let slot in this.equipped) {
            let item = this.equipped[slot]

            if (item.id > 0) this.loadItem(item.id)
        }

        this.load.start()
    }

    loadItem(item) {
        item = String(item)

        if (this.world.textures.exists(item)) return this.onFileComplete(item)

        this.load.atlas({
            key: item,
            atlasURL: `${this.url}/${item}.json`,
            textureURL: `${this.url}/${item}.png`
        })
    }

    onFileComplete(key) {
        let slot = this.penguin.items.getItemSlot(key)
        if (!slot) return

        let item = this.equipped[slot]

        // Remove item if one is already equipped
        if (item.sprite) this.removeItem(item)

        if (key > 0 && this.world.textures.exists(key)) {
            // item.depth + 1 to ensure items are loaded on top of penguin body
            item.sprite = this.loadSprite(this.penguin, key, item.depth + 1)
        }
    }

    onComplete() {
        this.penguin.sort('depth')

        let frame = this.penguin.frame

        // Frames above dancing will be set to frame 1
        if (frame > 26) {
            this.penguin.playFrame(1)
        } else {
            this.penguin.playFrame(frame)
        }

    }

    removeItem(item) {
        item.sprite.destroy()
        item.sprite = null
    }

}
