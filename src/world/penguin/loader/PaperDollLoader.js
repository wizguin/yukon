export default class PaperDollLoader {

    constructor(paperDoll) {
        this.paperDoll = paperDoll
        this.scene = paperDoll.scene

        this.load = new Phaser.Loader.LoaderPlugin(this.scene)
        this.url = '/assets/media/clothing/paper'
        this.prefix = 'paper/'

        this.scale = 0.7325
        this.photoScale = 0.7
    }

    loadItems(penguin) {
        let items = penguin.items.items

        for (let item in items) {
            item = items[item]

            if (item.id > 0) {
                this.loadItem(item.id)
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

        if (this.scene.textures.exists(`${this.prefix}${item}`)) return

        this.load.image({
            key: `${this.prefix}${item}`,
            url: `${this.url}/${item}.png`,
        })
    }

    onLoadComplete(items) {
        for (let slot in items) {
            let item = items[slot]

            if (item.id > 0 && this.scene.textures.exists(`${this.prefix}${item.id}`)) {

                switch (slot) {
                    case 'photo':
                        this.loadPaper(item.id, item.depth, this.photoScale)
                        break

                    default:
                        this.loadPaper(item.id, item.depth)
                        break
                }

            }
        }
    }

    loadPaper(id, depth, scale = this.scale) {
        let paper = this.scene.add.image(0, 0, `${this.prefix}${id}`)
        paper.scale = scale

        this.paperDoll.addAt(paper, depth)
    }

}
