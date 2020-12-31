export default class PaperDollLoader {

    constructor(paperDoll) {
        this.paperDoll = paperDoll
        this.scene = paperDoll.scene

        this.scale = 0.7325
        this.photoScale = 0.7

        this.load = new Phaser.Loader.LoaderPlugin(this.scene)
        this.url = '/assets/media/clothing/paper'
        this.prefix = 'paper/'

        this.load.on('filecomplete', this.onFileComplete, this)
        this.load.on('complete', this.onComplete, this)
    }

    get penguin() {
        return this.paperDoll.penguin
    }

    loadItems() {
        let items = this.penguin.items.all

        for (let item in items) {
            item = items[item]

            if (item.id > 0) this.loadItem(item.id)
        }

        this.load.start()
    }

    loadItem(item) {
        let key = `${this.prefix}${item}`

        if (this.scene.textures.exists(key)) return this.onFileComplete(key)

        this.load.image({
            key: key,
            url: `${this.url}/${item}.png`,
        })
    }

    onFileComplete(key) {
        let item = key.replace(this.prefix, '')
        let slot = this.penguin.items.getItemSlot(item)
        if (!slot) return

        if (item > 0 && this.scene.textures.exists(key)) {
            switch (slot) {
                case 'photo':
                    this.loadPaper(key, item, slot, this.photoScale)
                    break

                default:
                    this.loadPaper(key, item, slot)
                    break
            }
        }
    }

    onComplete() {
        this.paperDoll.sort('depth')
    }

    loadPaper(key, item, slot, scale = this.scale) {
        let paperDollItem = this.paperDoll.items[slot]
        if (paperDollItem.sprite) this.removeItem(paperDollItem)

        let paper = this.scene.add.image(0, 0, key)
        paper.scale = scale
        paper.depth = paperDollItem.depth

        // Fade in everything except for penguin color
        if (slot != 'color') this.fadeIn(paper)

        this.paperDoll.add(paper)
        paperDollItem.sprite = paper

        if (this.penguin.isClient) this.addInput(slot, item, paper)
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

    removeItem(item) {
        item.sprite.destroy()
        item.sprite = null
    }

}
