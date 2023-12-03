import BaseLoader from './BaseLoader'


export default class PostcardIconLoader extends BaseLoader {

    constructor(mailbook) {
        super(mailbook.scene)

        this.mailbook = mailbook

        this.baseURL = '/assets/media/postcards/icon/'
        this.keyPrefix = 'postcards/icon/'

        this.postcardItems = mailbook.postcardItems
    }

    get page() {
        return this.mailbook.pages[this.mailbook.page - 1]
    }

    get pageIds() {
        return this.page.postcards.map(postcard => postcard.id)
    }

    loadPage(page) {
        for (const [index, item] of this.postcardItems.entries()) {
            if (item.icon) {
                item.icon.destroy()
            }

            item.error.visible = false

            const postcard = page.postcards[index]

            if (postcard) {
                item.startSpinner()
                this.loadPostcard(postcard.id)
            }
        }

        this.start()
    }

    loadPostcard(postcard) {
        const key = this.getKey(postcard)

        if (this.checkComplete('image', key, () => {
            this.onFileComplete(key, postcard)
        })) {
            return
        }

        this.image(key, `${postcard}.png`)
    }

    onFileComplete(key, postcard) {
        if (!this.textureExists(key)) {
            return
        }

        const index = this.pageIds.indexOf(postcard)
        const postcardItem = this.postcardItems[index]

        if (!postcardItem || !postcardItem.visible) {
            return
        }

        if (postcardItem.icon) {
            postcardItem.icon.destroy()
        }

        postcardItem.stopSpinner()

        postcardItem.addIcon(key)
    }

    onLoadError(file) {
        super.onLoadError(file)

        const postcard = this.getKeyId(file.key)

        const index = this.pageIds.indexOf(postcard)
        const postcardItem = this.postcardItems[index]

        if (!postcardItem || !postcardItem.visible) {
            return
        }

        postcardItem.stopSpinner()

        postcardItem.error.visible = true
    }

}
