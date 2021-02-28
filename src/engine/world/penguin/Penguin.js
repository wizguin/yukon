import BaseContainer from '@scenes/base/BaseContainer'

import ItemLoader from './loader/ItemLoader'
import PenguinActions from './actions/PenguinActions'
import PenguinItems from './PenguinItems'


export default class Penguin extends BaseContainer {

    constructor(user, room, x, y, penguinLoader) {
        super(room, x, y)

        this.user = user // User attributes
        this.room = room
        this.penguinLoader = penguinLoader

        this.actions = this.setActions()
        this.items = new PenguinItems(this)
        this.itemLoader = new ItemLoader(this)

        this.x = this.movement.getValidX(x)
        this.y = this.movement.getValidY(y)
        this.validatePos(this.x, this.y)

        this.id = user.id
        this.coins = user.coins
        this.username = user.username
        this.nameTag = penguinLoader.addName(this)
        this.balloon = null // Chat balloon

        this.depth = this.y
        this.frame = 1
        this.scale = 1

        this.savedPenguins = this.network.savedPenguins
        this.save = this.savedPenguins[this.username.toLowerCase()]

        this.loadPenguin()
    }

    get movement() {
        return this.actions.movement
    }

    get isTweening() {
        return (this.movement.tween) ? true : false
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

    /**
     * Validates player position upon loading, to prevent player from
     * joining into the block layer.
     */
    validatePos(x, y) {
        if (!this.movement.blockTest(x, y)) return

        let room
        let random

        if (this.room.isIgloo) {
            room = this.crumbs.igloos[this.room.args.type]
        } else {
            room = this.crumbs.rooms[this.room.id]
        }

        // 25 attempts to generate a new pos that is not blocked
        for (let i = 0; i < 25; i++) {
            random = this.randomizePos(room.x, room.y, 80)

            if (!this.movement.blockTest(random.x, random.y)) {
                return this.setPos(random.x, random.y)
            }
        }

        // If all attempts fail just use room default x and y
        this.setPos(room.x, room.y)
    }

    randomizePos(x, y, range) {
        let randX = this.movement.getValidX(x + Phaser.Math.Between(-range, range))
        let randY = this.movement.getValidY(y + Phaser.Math.Between(-range, range))

        return { x: randX, y: randY }
    }

    setPos(x, y) {
        this.x = x
        this.y = y
    }

}
