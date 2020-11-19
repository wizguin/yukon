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

            if (item.id > 0) this.loadItem(item.id)
        }

        this.load.start()

        if (this.load.totalToLoad > 0) {
            this.load.once('complete', () => { this.onLoadComplete(penguin, items) })
        } else {
            this.onLoadComplete(penguin, items)
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

    onLoadComplete(penguin, items) {
        for (let slot in items) {
            let item = items[slot]

            if (item.id > 0 && this.scene.textures.exists(`${this.prefix}${item.id}`)) {

                switch (slot) {
                    case 'photo':
                        this.loadPaper(penguin, slot, item, this.photoScale)
                        break

                    default:
                        this.loadPaper(penguin, slot, item)
                        break
                }
            }
        }
    }

    loadPaper(penguin, slot, item, scale = this.scale) {
        let paper = this.scene.add.image(0, 0, `${this.prefix}${item.id}`)

        paper.scale = scale

        // Fade in everything except for penguin color
        if (slot != 'color') this.fadeIn(paper)

        this.paperDoll.addAt(paper, item.depth)

        if (penguin.isClient) this.addInput(slot, item, paper)
    }

    addInput(slot, item, paper) {
        if (slot == 'color') {
            return paper.setInteractive({
                pixelPerfect: true
            })
        }

        paper.setInteractive({
            cursor: 'pointer',
            pixelPerfect: true
        })

        paper.on('pointerdown', () => this.paperDoll.onPaperClick(item))
    }

    fadeIn(paper) {
        paper.alpha = 0

        this.scene.tweens.add({
            targets: paper,
            alpha: { from: 0, to: 1 },
            duration: 200
        })
    }

}
