export default class GridViewLoader {

    constructor(gridView) {
        this.gridView = gridView
        this.scene = gridView.scene

        this.page = null // Current page
        this.filter

        this.load = new Phaser.Loader.LoaderPlugin(this.scene)

        this.load.on('filecomplete', this.onFileComplete, this)
        this.load.on('loaderror', this.onLoadError, this)
    }

    get url() {
        return (this.filter == 'igloo')
            ? '/assets/media/igloos/buildings/icon'
            : '/assets/media/furniture/icon'
    }

    get prefix() {
        return (this.filter == 'igloo') ? 'igloo/icon' : 'furniture/icon'
    }

    get slots() {
        return this.gridView.slots
    }

    loadPage(filter, page) {
        this.filter = filter
        this.page = page

        let scale = (this.slots.length > 15) ? '@2.5x' : '@5x'

        for (let [index, slot] of this.slots.entries()) {
            slot.filter = filter
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

        // Ignore scale on igloo icon url
        let url = (this.filter == 'igloo')
            ? `${this.url}/${item}.png`
            : `${this.url}/${scale}/${item}.png`

        this.load.image({
            key: key,
            url: url
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
