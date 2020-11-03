import BaseLoader from './BaseLoader'


export default class ItemLoader extends BaseLoader {

    constructor(penguin) {
        super(penguin.room.world)

        this.penguin = penguin
        this.load = new Phaser.Loader.LoaderPlugin(penguin.room)
    }

    getItems({ feet, body, neck, hand, face, head }) {
        return { feet, body, neck, hand, face, head }
    }

    getZIndex(slot) {
        return ['feet', 'body', 'neck', 'hand', 'face', 'head'].indexOf(slot) + 10
    }

    loadItems() {
        let items = this.getItems(this.penguin.user)
        let values = Object.values(items)

        for (let item of values) {
            if (item > 0) {
                this.loadItem(item)
            }
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
            atlasURL: `${this.url}/${item}/${item}.json`,
            textureURL: `${this.url}/${item}/${item}.png`
        })
    }

    onLoadComplete(items) {
        for (let item in items) {
            let id = items[item]

            if (id > 0 && this.world.textures.exists(id)) {
                this.loadSprite(this.penguin, id, this.getZIndex(item))
            }
        }
    }

}
