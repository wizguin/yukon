export default class InventoryLoader {

    constructor(inventory, slots) {
        this.inventory = inventory // Inventory container object
        this.scene = inventory.scene
        this.slots = slots // Item slot sprites

        this.load = new Phaser.Loader.LoaderPlugin(this.scene)
        this.url = '/assets/media/clothing/icon'
        this.prefix = 'icon/'
    }

    loadPage(page) {
        for (let [index, slot] of this.slots.entries()) {
            if (slot.item) slot.item.destroy()

            let item = page[index]

            if (item) {
                slot.setInteractive()
                slot.setFrame('large-box')
                this.loadItem(item)

            } else {
                slot.disableInteractive()
                slot.setFrame('large-box-empty')
            }
        }

        this.load.start()

        if (this.load.totalToLoad > 0) {
            this.load.once('complete', () => { this.onLoadComplete(page) })
        } else {
            this.onLoadComplete(page)
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

    onLoadComplete(page) {
        for (let [index, item] of page.entries()) {
            let slot = this.slots[index]

            if (item > 0 && this.scene.textures.exists(`${this.prefix}${item}`)) {
                if (slot.item) slot.item.destroy()

                // Do not load into empty slot
                if (['large-box', 'large-box-hover'].includes(slot.frame.name)) this.loadIcon(slot, item)
            }
        }
    }

    loadIcon(slot, item) {
        let icon = this.scene.add.image(slot.x, slot.y, `${this.prefix}${item}`)
        this.inventory.container.add(icon)

        icon.id = item
        slot.item = icon
    }

}
