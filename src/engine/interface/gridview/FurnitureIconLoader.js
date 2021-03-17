export default class FurnitureIconLoader {

    constructor(gridview) {
        this.gridview = gridview
        this.scene = gridview.scene

        this.page = null // Current page

        this.load = new Phaser.Loader.LoaderPlugin(this.scene)
        this.url = '/assets/media/furniture/icon'
        this.prefix = 'furniture/icon'

        this.load.on('filecomplete', this.onFileComplete, this)
        this.load.on('loaderror', this.onLoadError, this)
    }

    get grid() {
        return this.gridview.container.getAll()
    }

    loadPage(page) {
        this.page = page
        let scale = (this.grid.length > 15) ? '@2.5x' : '@5x'

        for (let [index, slot] of this.grid.entries()) {
            if (slot.item) slot.item.destroy()

            let item = page[index]

            if (item) {
                slot.setInteractive()
                slot.setFrame('box/box')
                slot.visible = true;
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
        if (!this.gridview.visible) return
        if (!this.scene.textures.exists(key)) return

        let item = parseInt(key.split('/')[3])
        let index = this.page.indexOf(item)
        let slot = this.grid[index]

        if (!slot) return

        // Do not load into empty slot
        if (slot.visible) this.loadIcon(key, slot, item)
    }

    onLoadError(file) {
        if (!this.gridview.visible) return

        let item = parseInt(file.key.split('/')[3])
        let index = this.page.indexOf(item)
        let slot = this.grid[index]

        if (!slot) return

        let errorIcon = this.scene.add.image(slot.x, slot.y, 'iglooedit', 'box/x')
        this.gridview.container.add(errorIcon)

        errorIcon.id = item
        slot.item = errorIcon
    }

    loadIcon(key, slot, item) {
        let icon = this.scene.add.image(slot.x, slot.y, key)
        let scale = (key.split('/')[2] == '@5x') ? 1 : 2
        this.gridview.container.add(icon)

        icon.scale = scale
        icon.id = item
        slot.item = icon
    }

}
