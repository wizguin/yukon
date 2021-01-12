export default class InventoryLoader {

    constructor(inventory, slots) {
        this.inventory = inventory // Inventory container object
        this.scene = inventory.scene
        this.slots = slots // Item slot sprites (inventory grid)
        this.page = null // Current page

        this.load = new Phaser.Loader.LoaderPlugin(this.scene)
        this.url = '/assets/media/clothing/icon'
        this.prefix = 'icon'

        this.load.on('filecomplete', this.onFileComplete, this)
        this.load.on('loaderror', this.onLoadError, this)
    }

    loadPage(page) {
        this.page = page

        for (let [index, slot] of this.slots.entries()) {
            if (slot.item) slot.item.destroy()
            if (slot.spinner) slot.spinner.destroy()

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

        this.load.start()
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
        let key = `${this.prefix}/${item}`

        if (this.scene.textures.exists(key)) return this.onFileComplete(key)

        this.load.image({
            key: key,
            url: `${this.url}/${item}.png`,
        })
    }

    onFileComplete(key) {
        if (!this.inventory.visible) return
        if (!this.scene.textures.exists(key)) return

        let item = parseInt(key.split('/')[1])
        let index = this.page.indexOf(item)
        let slot = this.slots[index]

        if (!slot) return

        // Do not load into empty slot
        if (['large-box', 'large-box-hover'].includes(slot.frame.name)) this.loadIcon(key, slot, item)
    }

    onLoadError(file) {
        if (!this.inventory.visible) return

        let item = parseInt(file.key.split('/')[1])
        let index = this.page.indexOf(item)
        let slot = this.slots[index]

        if (!slot) return
        if (slot.spinner) slot.spinner.destroy()

        let errorIcon = this.scene.add.image(slot.x, slot.y, 'main', 'x-icon')
        this.inventory.container.add(errorIcon)

        errorIcon.id = item
        slot.item = errorIcon
    }

    loadIcon(key, slot, item) {
        if (slot.spinner) slot.spinner.destroy()

        let icon = this.scene.add.image(slot.x, slot.y, key)
        this.inventory.container.add(icon)

        icon.id = item
        slot.item = icon
    }

}
