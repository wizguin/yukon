import BaseLoader from './BaseLoader'


export default class InventoryLoader extends BaseLoader {

    constructor(scene, inventory) {
        super(scene)

        this.inventory = inventory
        // Item slot sprites (inventory grid)
        this.slots = inventory.slots

        this.page
        this.validSlots = ['large-box', 'large-box-hover']

        this.baseURL = '/assets/media/clothing/icon/'
        this.keyPrefix = 'clothing/icon/'

        this.attachErrorListener()
    }

    loadPage(page) {
        this.page = page

        for (let [index, slot] of this.slots.entries()) {
            if (slot.item) {
                slot.item.destroy()
            }

            if (slot.spinner) {
                slot.spinner.destroy()
            }

            let item = page[index]

            if (item) {
                slot.setInteractive()
                slot.setFrame('large-box')
                this.addSpinner(slot)
                this.loadItem(item)

            } else {
                slot.disableInteractive()
                slot.setFrame('large-box-empty')
            }
        }

        this.start()
    }

    addSpinner(slot) {
        let spinner = this.scene.add.image(slot.x, slot.y, 'main', 'spinner')
        this.inventory.container.add(spinner)

        this.scene.tweens.add({
            targets: spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        slot.spinner = spinner
    }

    loadItem(item) {
        let key = `${this.keyPrefix}${item}`

        if (this.checkComplete('image', key, () => {
            this.onFileComplete(key, item)
        })) {
            return
        }

        this.image(key, `${item}.png`)
    }

    onFileComplete(key, item) {
        this.addIcon(item, key)
    }

    onLoadError(file) {
        let item = this.getKeyId(file.key)

        this.addIcon(item, 'main', 'x-icon')
    }

    addIcon(item, key, frame = null) {
        if (!this.inventory.visible || !this.textureExists(key)) {
            return
        }

        let index = this.page.indexOf(item)
        let slot = this.slots[index]

        if (!slot || !this.validSlots.includes(slot.frame.name)) {
            return
        }

        if (slot.spinner) {
            slot.spinner.destroy()
        }

        let icon = this.scene.add.image(slot.x, slot.y, key, frame)
        this.inventory.container.add(icon)

        icon.id = item
        slot.item = icon
    }

}
