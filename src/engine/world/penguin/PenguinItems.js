export default class PenguinItems {

    constructor(penguin) {
        this.penguin = penguin

        // Slots ordered by depth
        this.slots = [ 'photo', 'flag', 'color', 'feet', 'body', 'neck', 'hand', 'face', 'head' ]

        // All items
        this.all = this.setAll()
    }

    /**
     * Gets items worn as sprites on the in-game avatar.
     *
     * @readonly
     */
    get equipped() {
        let { color, photo, flag, ...sprites } = this.all
        return sprites
    }

    /**
     * Returns a new object of slots mapped to item ids.
     *
     * @readonly
     */
    get flat() {
        return Object.fromEntries(
            Object.entries(this.all).map(
                ([key, value]) => [key, value.id]
            )
        )
    }

    setAll() {
        let items = {}

        for (let slot of this.slots) {
            items[slot] = {
                id: this.penguin.user[slot],
                depth: this.slots.indexOf(slot)
            }
        }

        return items
    }

    setItem(item, slot) {
        this.all[slot].id = item
    }

}
