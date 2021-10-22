export default class PenguinItems {

    constructor(penguin) {
        this.penguin = penguin

        // Slots ordered by depth
        this.slots = ['photo', 'flag', 'color', 'feet', 'body', 'neck', 'hand', 'face', 'head']
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

    get equippedFlat() {
        return this.flatten(this.equipped)
    }

    get flat() {
        return this.flatten(this.all)
    }

    /**
     * Returns a new object of slots mapped to item ids.
     *
     * @readonly
     */
    flatten(items) {
        return Object.fromEntries(
            Object.entries(items).map(
                ([key, value]) => [key, value.id]
            )
        )
    }

    setAll() {
        let all = {}

        for (let slot of this.slots) {
            all[slot] = {
                id: this.penguin[slot],
                depth: this.slots.indexOf(slot)
            }
        }

        return all
    }

    setItem(item, slot) {
        this.all[slot].id = item
    }

}
