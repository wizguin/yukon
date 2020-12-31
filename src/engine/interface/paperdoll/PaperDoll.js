import BaseContainer from '@scenes/base/BaseContainer'

import PaperDollLoader from './PaperDollLoader'


export default class PaperDoll extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y)

        // Slots ordered by depth
        this.slots = [ 'photo', 'flag', 'color', 'feet', 'body', 'neck', 'hand', 'face', 'head' ]
        this.items = this.setItems()

        // Reference to active penguin
        this.penguin = null

        this.paperDollLoader = new PaperDollLoader(this)
    }

    /**
     * Gets id of active penguin.
     *
     * @readonly
     */
    get id() {
        return this.penguin.user.id
    }

    setItems() {
        let items = {}

        for (let slot of this.slots) {
            items[slot] = {
                depth: this.slots.indexOf(slot)
            }
        }

        return items
    }

    loadPaperDoll(penguin) {
        this.penguin = penguin

        this.removeAll(true)
        this.paperDollLoader.loadItems()
    }

    loadItem(item) {
        this.paperDollLoader.loadItem(item)
        this.paperDollLoader.load.start()
    }

    onPaperClick(item) {
        console.log(item)
    }

}
