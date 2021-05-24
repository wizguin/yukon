import PathEngine from './pathfinding/PathEngine'


export default class ClientController {

    constructor(world, args) {
        this.interface = world.interface
        this.network = world.network
        this.crumbs = world.crumbs

        // Assign user attributes
        let { user, ...attributes } = args
        Object.assign(this, attributes)

        this.id = args.user.id
        this.coins = args.user.coins

        // Item inventory
        this.slots = ['color', 'head', 'face', 'neck', 'body', 'hand', 'feet', 'flag', 'photo', 'award']
        this.inventory = this.initInventory()

        // Reference to ClientPenguin object
        this.penguin
    }

    get isTweening() {
        return this.penguin.isTweening
    }

    get visible() {
        return this.penguin.visible
    }

    initInventory() {
         // Generates object from slots in format: { color: [], head: [], ... }
        let inventory = Object.fromEntries(this.slots.map(slot => [slot, []]))

        // Assigns inventory list to slots
        for (let item of this.inventory) {
            let type = this.crumbs.items[item].type
            let slot = this.slots[type - 1]

            inventory[slot].push(item)
        }

        return inventory
    }

    onPointerMove(pointer) {
        if (!this.visible || this.isTweening) return

        this.penguin.rotate(pointer.x, pointer.y)
    }

    onPointerUp(pointer, target) {
        if (!this.visible) return
        // Block movement when clicking a button
        if (target[0] && target[0].isButton) return

        this.penguin.move(pointer.x, pointer.y)
    }

    onKeyDownFrame(frame, set = true) {
        if (!this.visible || this.isTweening) return

        this.penguin.playFrame(frame)
        this.network.send('send_frame', { set: set, frame: frame })
    }

    onKeyDownS(pointer) {
        if (!this.visible || this.isTweening) return

        this.penguin.sit(pointer.x, pointer.y)
    }

    onKeyDownT() {
        if (!this.interface.main || !this.visible) return

        this.interface.main.onSnowballClick()
    }

    sendJoinRoom(id, x, y, randomRange = 40) {
        let random = PathEngine.getRandomPos(x, y, randomRange)
        this.network.send('join_room', { room: id, x: random.x, y: random.y })
    }

}
