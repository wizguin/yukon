export default class PaperDollLoader {

    constructor(paperDoll) {
        this.paperDoll = paperDoll
        this.scene = paperDoll.scene

        this.scale = 0.7325
        this.photoScale = 0.7

        this.load = new Phaser.Loader.LoaderPlugin(this.scene)
        this.url = '/assets/media/clothing/paper'
        this.prefix = 'paper'

        this.load.on('filecomplete', this.onFileComplete, this)
        this.load.on('loaderror', this.onLoadError, this)
        this.load.on('complete', this.onComplete, this)
    }

    get penguin() {
        return this.paperDoll.penguin
    }

    loadItems() {
        let items = this.penguin.items.all

        for (let slot in items) {
            let item = items[slot]

            if (item.id > 0) this.loadItem(item.id, slot)
        }

        this.load.start()
    }

    loadItem(item, slot) {
        if (item == 0) return this.removeItem(slot)

        let key = `${this.prefix}/${slot}/${item}`

        if (this.scene.textures.exists(key)) return this.onFileComplete(key)

        this.load.image({
            key: key,
            url: `${this.url}/${item}.png`,
        })
    }

    onFileComplete(key) {
        if (!this.scene.textures.exists(key)) return

        let slot = key.split('/')[1]
        let item = this.paperDoll.items[slot]

        // Remove item if one is already equipped
        if (item.sprite) this.removeItem(slot)

        switch (slot) {
            case 'photo':
                item.sprite = this.loadPaper(key, slot, item.depth, this.photoScale)
                break

            default:
                item.sprite = this.loadPaper(key, slot, item.depth)
                break
        }
    }

    onLoadError(file) {
        let slot = file.key.split('/')[1]
        let item = this.paperDoll.items[slot]

        if (item.sprite) this.removeItem(slot)
    }

    onComplete() {
        this.paperDoll.sort('depth')
    }

    loadPaper(key, slot, depth, scale = this.scale) {
        let paper = this.scene.add.image(0, 0, key)

        paper.scale = scale
        paper.depth = depth

        // Fade in everything except for penguin color
        if (slot != 'color') this.fadeIn(paper)

        this.paperDoll.add(paper)

        if (this.penguin.isClient) this.addInput(slot, paper)

        return paper
    }

    fadeIn(paper) {
        paper.alpha = 0

        this.scene.tweens.add({
            targets: paper,
            alpha: { from: 0, to: 1 },
            duration: 200
        })
    }

    addInput(slot, paper) {
        if (slot == 'color') {
            return paper.setInteractive({
                pixelPerfect: true
            })
        }

        paper.setInteractive({
            cursor: 'pointer',
            pixelPerfect: true
        })

        paper.on('pointerdown', () => this.onPaperClick(slot))
    }

    onPaperClick(slot) {
        this.scene.network.send('remove_item', { type: slot })
    }

    removeItem(slot) {
        let item = this.paperDoll.items[slot]
        if (!item || !item.sprite) return

        item.sprite.destroy()
        item.sprite = null
    }

}
