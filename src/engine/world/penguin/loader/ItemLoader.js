import BaseLoader from './BaseLoader'


export default class ItemLoader extends BaseLoader {

    constructor(penguin) {
        super(penguin.room.world)

        this.penguin = penguin
        this.load = new Phaser.Loader.LoaderPlugin(penguin.room)
        this.url = '/assets/media/clothing/sprites'
    }

    loadItems() {
        let items = this.penguin.items.sprites

        for (let item in items) {
            item = items[item]

            if (item.id > 0) this.loadItem(item.id)
        }

        this.load.start()

        if (this.load.totalToLoad > 0) {
            this.load.once('complete', () => { this.onLoadComplete(items) })
        } else {
            this.onLoadComplete(items)
        }
    }

    loadItem(item) {
        item = String(item)

        if (this.world.textures.exists(item)) return

        this.load.atlas({
            key: item,
            atlasURL: `${this.url}/${item}.json`,
            textureURL: `${this.url}/${item}.png`
        })
    }

    onLoadComplete(items) {
        for (let item in items) {
            item = items[item]

            if (item.id > 0 && this.world.textures.exists(item.id)) {
                // item.depth + 1 to ensure items are loaded on top of penguin body
                this.loadSprite(this.penguin, item.id, item.depth + 1)
            }
        }
    }

}
