import BaseContainer from '@scenes/base/BaseContainer'

import ItemLoader from './loader/ItemLoader'
import PenguinActions from './actions/PenguinActions'
import PenguinItems from './PenguinItems'


export default class Penguin extends BaseContainer {

    constructor(user, room, x, y, penguinLoader) {
        super(room, x, y)

        this.user = user // User attributes
        this.room = room
        this.x = x
        this.y = y
        this.penguinLoader = penguinLoader

        this.username = user.username
        this.nameTag = penguinLoader.addName(this)

        this.balloon = null // Chat balloon

        this.depth = y
        this.frame = 1
        this.scale = 0.666

        this.actions = this.setActions()
        this.items = new PenguinItems(this)
        this.itemLoader = new ItemLoader(this)

        this.savedPenguins = this.network.savedPenguins
        this.save = this.savedPenguins[this.username]

        this.loadPenguin()
    }

    get isTweening() {
        return (this.actions.movement.tween) ? true : false
    }

    get pos() {
        return { x: this.x, y: this.y }
    }

    get playerCard() {
        return this.interface.main.playerCard
    }

    get paperDollLoader() {
        return this.playerCard.paperDoll.paperDollLoader
    }

    setActions() {
        return new PenguinActions(this)
    }

    loadPenguin() {
        this.penguinLoader.loadPenguin(this)
        this.itemLoader.loadItems()

        this.room.add.existing(this)
    }

    movePenguin(x, y) {
        this.actions.movePenguin(x, y)
    }

    updatePenguin(item, slot) {
        this.items.setItem(item, slot)

        if (this.save && slot in this.save) {
            this.save[slot] = item
            localStorage.setItem('saved_penguins', JSON.stringify(this.savedPenguins))
        }

        // Load item sprite
        if (slot in this.items.equipped) {
            this.itemLoader.loadItem(item, slot)
            this.itemLoader.load.start()
        }

        // Load item paper, only if card is active
        if (this.playerCard.visible && this.playerCard.id == this.user.id) {
            this.paperDollLoader.loadItem(item, slot)
            this.paperDollLoader.load.start()
        }
    }

    playFrame(frame, loop = true) {
        this.actions.playFrame(frame, loop)
    }

}
