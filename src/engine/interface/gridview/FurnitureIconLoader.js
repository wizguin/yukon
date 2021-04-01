export default class FurnitureIconLoader {

    constructor(gridView) {
        this.gridView = gridView
        this.scene = gridView.scene

        this.page = null // Current page

        this.load = new Phaser.Loader.LoaderPlugin(this.scene)
        this.url = '/assets/media/furniture/icon'
        this.prefix = 'furniture/icon'

        this.load.on('filecomplete', this.onFileComplete, this)
        this.load.on('loaderror', this.onLoadError, this)
    }

    get slots() {
        return this.gridView.slots
    }

    loadPage(page) {
        this.page = page
        let scale = (this.slots.length > 15) ? '@2.5x' : '@5x'

        for (let [index, slot] of this.slots.entries()) {
            if (slot.item) slot.item.destroy()
            if (slot.quantity) slot.quantity.visible = false

            let item = page[index]

            if (item) {
                slot.setInteractive()
                slot.visible = true
                this.loadItem(item, scale)

            } else {
                slot.disableInteractive()
                slot.visible = false
            }
        }

        this.load.start()
    }

    loadItem(item, scale) {
        let key = `${this.prefix}/${scale}/${item}`

        if (this.scene.textures.exists(key)) return this.onFileComplete(key)

        this.load.image({
            key: key,
            url: `${this.url}/${scale}/${item}.png`,
        })
    }

    onFileComplete(key) {
        if (!this.gridView.visible) return
        if (!this.scene.textures.exists(key)) return

        let item = parseInt(key.split('/')[3])
        let index = this.page.indexOf(item)
        let slot = this.slots[index]

        if (slot && slot.visible) {
            slot.addIcon(key, item)
        }
    }

    onLoadError(file) {
        if (!this.gridView.visible) return

        let item = parseInt(file.key.split('/')[3])
        let index = this.page.indexOf(item)
        let slot = this.slots[index]

        if (slot && slot.visible) {
            slot.addError(item)
        }
    }

}
