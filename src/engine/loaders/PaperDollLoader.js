import BaseLoader from './BaseLoader'


export default class PaperDollLoader extends BaseLoader {

    constructor(scene, paperDoll) {
        super(scene)

        this.paperDoll = paperDoll

        this.scale = 0.7325
        this.photoScale = 0.7
        this.flagScale = 0.66

        this.baseURL = '/assets/media/clothing/'
        this.keyPrefix = 'clothing/'
    }

    setColor(id) {
        this.paperDoll.body.tint = this.world.getColor(id)
    }

    loadItems(penguin) {
        for (let slot of this.paperDoll.slots) {
            let item = penguin[slot]

            if (item > 0) {
                this.loadItem(item, slot)
            }
        }

        this.start()
    }

    loadItem(item, slot) {
        if (slot == 'color') {
            return this.setColor(item)
        }

        if (item == 0) {
            return this.removeItem(slot)
        }

        if (this.paperDoll.items[slot].sprite) {
            this.removeItem(slot)
        }

        let url = (slot == 'flag') ? 'icon/' : 'paper/'
        let key = this.getKey(url, item)

        if (this.checkComplete('image', key, () => {
            this.onFileComplete(key, slot)
        })) {
            return
        }

        this.image(key, `${url}${item}.png`)
    }

    onFileComplete(key, slot) {
        if (!this.paperDoll.visible || !this.textureExists(key)) {
            return
        }

        let item = this.paperDoll.items[slot]
        if (item.sprite) {
            this.removeItem(slot)
        }

        switch (slot) {
            case 'photo':
                item.sprite = this.addPaper(key, slot, item.depth, this.photoScale)
                break

            case 'flag':
                item.sprite = this.addPaper(key, slot, item.depth, this.flagScale)
                item.sprite.x = -149
                item.sprite.y = -116
                break

            default:
                item.sprite = this.addPaper(key, slot, item.depth)
                break
        }
    }

    addPaper(key, slot, depth, scale = this.scale) {
        let paper = this.scene.add.image(0, 0, key)

        paper.scale = scale
        paper.depth = depth

        if (this.paperDoll.fadeIn) {
            this.fadeIn(paper)
        }

        if (slot == 'photo') {
            this.scene.playerCard.photo.add(paper)
        } else {
            this.paperDoll.add(paper)
        }

        if (this.paperDoll.isInputEnabled) {
            this.addInput(slot, paper)
        }

        this.paperDoll.sort('depth')

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
        paper.setInteractive({
            cursor: 'pointer',
            pixelPerfect: true
        })

        paper.on('pointerdown', () => this.onPaperClick(slot))
    }

    onPaperClick(slot) {
        this.network.send('remove_item', { type: slot })
    }

    removeItem(slot) {
        let item = this.paperDoll.items[slot]
        if (!item || !item.sprite) {
            return
        }

        item.sprite.destroy()
        item.sprite = null
    }

}
