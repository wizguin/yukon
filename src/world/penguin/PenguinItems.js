export default class PenguinItems {

    constructor(penguin) {
        this.penguin = penguin
        this.slots = [ 'photo', 'flag', 'color', 'feet', 'body', 'neck', 'hand', 'face', 'head' ]
        this.items = this.setItems(penguin)
    }

    /**
     * Gets items worn as sprites on the in-game avatar

     * @readonly
     */
    get sprites() {
        let { color, photo, flag, ...sprites } = this.items
        return sprites
    }

    setItems(penguin) {
        let items = {}

        for (let slot of this.slots) {
            items[slot] = {
                id: penguin.user[slot],
                depth: this.slots.indexOf(slot) + 10
            }
        }

        return items
    }

    setItem(slot, item) {
        this.slots[slot] = item
    }

}
