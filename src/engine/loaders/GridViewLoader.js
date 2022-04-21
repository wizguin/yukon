import BaseLoader from './BaseLoader'


export default class GridViewLoader extends BaseLoader {

    constructor(scene, gridView) {
        super(scene)

        this.gridView = gridView

        this.filter
        this.page

        this.attachErrorListener()
    }

    get baseURL() {
        return (this.filter == 'igloo')
            ? '/assets/media/igloos/buildings/icon/'
            : '/assets/media/furniture/icon/'
    }

    get keyPrefix() {
        return (this.filter == 'igloo')
            ? 'igloos/icon/'
            : 'furniture/icon/'
    }

    get slots() {
        return this.gridView.slots
    }

    loadPage(filter, page) {
        this.filter = filter
        this.page = page

        let scale = (this.slots.length > 15) ? '@2.5x/' : '@5x/'

        for (let [index, slot] of this.slots.entries()) {
            slot.filter = filter

            if (slot.item) {
                slot.item.destroy()
            }

            if (slot.quantity) {
                slot.quantity.visible = false
            }

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

        this.start()
    }

    loadItem(item, scale) {
        let key = this.getKey(scale, item)

        // Ignore scale on igloo icon url
        let url = (this.filter == 'igloo')
            ? `${item}.png`
            : `${scale}${item}.png`

        if (this.checkComplete('image', key, () => {
            this.onFileComplete(key, item)
        })) {
            return
        }

        this.image(key, url)
    }

    onFileComplete(key, item) {
        if (!this.gridView.visible || !this.textureExists(key)) {
            return
        }

        let index = this.page.indexOf(item)
        let slot = this.slots[index]

        if (slot && slot.visible) {
            slot.addIcon(key, item)
        }
    }

    onLoadError(file) {
        if (!this.gridView.visible) {
            return
        }

        let item = this.getKeyId(file.key)
        let index = this.page.indexOf(item)
        let slot = this.slots[index]

        if (slot && slot.visible) {
            slot.addError(item)
        }
    }

}
