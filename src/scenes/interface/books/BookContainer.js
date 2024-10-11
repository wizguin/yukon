import BaseContainer from '@scenes/base/BaseContainer'


export default class BookContainer extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y)

        // Current page number
        this.page = 0
        // Array of pages defined in derived class
        this.pages
        // Buttons container defined in derived class
        this.buttons

        this.isBook = true
    }

    show() {
        // Reset page
        this.showPage(0)

        this.setCoins(this.world.client.coins)

        super.show()
    }

    close() {
        this.interface.destroyWidget(this)
    }

    showPage(page) {
        // Hide current page
        this.setPageVisible(false)

        // Show new page
        this.page = page
        this.setPageVisible()

        // Update button visibility
        this.setButtonsVisible()
    }

    nextPage() {
        let page = this.page + 1
        if (page > this.pages.length - 1) {
            return
        }

        this.showPage(page)
    }

    prevPage() {
        let page = this.page - 1
        if (page < 0) {
            return
        }

        this.showPage(page)
    }

    setPageVisible(visible = true) {
        this.pages[this.page].visible = visible
    }

    setButtonsVisible() {
        if (!this.buttons) return

        // Not visible on first and last page
        let visible = this.page > 0 && this.page < this.pages.length - 1

        this.buttons.visible = visible
    }

    setCoins(coins) {
        if (this.coins) {
            this.coins.text = `YOUR COINS: ${coins}`
        }
    }

}
