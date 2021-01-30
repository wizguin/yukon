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

    loadItems(penguin) {
        for (let slot of this.paperDoll.slots) {
            let item = penguin[slot]

            if (item > 0) this.loadItem(item, slot)
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
        if (!this.paperDoll.visible) return
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
        if (!this.paperDoll.visible) return

        let slot = file.key.split('/')[1]
        let item = this.paperDoll.items[slot]

        if (item.sprite) this.removeItem(slot)
    }

    onComplete() {
        if (!this.paperDoll.visible) return
        this.paperDoll.sort('depth')
    }

    loadPaper(key, slot, depth, scale = this.scale) {
        let paper = this.scene.add.image(0, 0, key)

        paper.scale = scale
        paper.depth = depth

        if (this.paperDoll.fadeIn) this.fadeIn(paper)

        this.paperDoll.add(paper)

        //if (this.penguin.isClient) this.addInput(slot, paper)

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

    // addInput(slot, paper) {
    //     if (slot == 'color') {
    //         return paper.setInteractive({
    //             pixelPerfect: true
    //         })
    //     }

    //     paper.setInteractive({
    //         cursor: 'pointer',
    //         pixelPerfect: true
    //     })

    //     paper.on('pointerdown', () => this.onPaperClick(slot))
    // }

    // onPaperClick(slot) {
    //     this.scene.network.send('remove_item', { type: slot })
    // }

    removeItem(slot) {
        let item = this.paperDoll.items[slot]
        if (!item || !item.sprite) return

        item.sprite.destroy()
        item.sprite = null
    }

}
