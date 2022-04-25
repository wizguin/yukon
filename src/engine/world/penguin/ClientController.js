import PathEngine from './pathfinding/PathEngine'


export default class ClientController {

    constructor(world, args) {
        this.world = world

        this.interface = world.interface
        this.network = world.network
        this.crumbs = world.crumbs

        this.getString = world.getString

        // Assign user attributes
        let { user, ...attributes } = args
        Object.assign(this, attributes)

        this.id = user.id
        this.coins = user.coins
        this.rank = user.rank
        this.joinTime = user.joinTime

        this.iglooOpen = false

        this.lastRoom

        // Item inventory
        this.slots = ['color', 'head', 'face', 'neck', 'body', 'hand', 'feet', 'flag', 'photo', 'award']
        this.inventory = this.initInventory()

        // Reference to ClientPenguin object
        this.penguin

        // If expecting emote key combo
        this.emoteKeyPressed = false

        this.lastBalloon = Date.now()
        this.throttleDelay = 100

        // Input
        this.keys = this.crumbs.quick_keys.keys
        this.emotes = this.crumbs.quick_keys.emotes

        this.keyActions = {
            'send_frame': (id) => this.sendFrame(id),
            'send_wave': () => this.sendFrame(25, false),
            'send_sit': () => this.sendSit(this.input.mousePointer),

            'show_crosshair': () => this.showCrosshair(),

            'emote_key': () => this.emoteKeyPressed = true,
            'send_emote': (id) => this.sendEmote(id),
            'send_safe': (id) => this.sendSafe(id)
        }

        this.lockRotation = false

        this.input.on('pointermove', (pointer) => this.onPointerMove(pointer))

        this.input.keyboard.on('keydown', (event) => this.onKeyDown(event))
    }

    get isTweening() {
        return this.penguin.isTweening
    }

    get visible() {
        return this.penguin.visible
    }

    get input() {
        return this.interface.main.input
    }

    get isBalloonThrottled() {
        let time = Date.now()

        if (time - this.lastBalloon < this.throttleDelay) {
            return true
        }

        this.lastBalloon = time

        return false
    }

    get isModerator() {
        return this.rank > 1
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
        if (this.interface.main.crosshair.visible) {
            this.interface.main.onCrosshairMove(pointer)
        }

        if (!this.visible || this.isTweening || this.lockRotation) {
            return
        }

        this.penguin.rotate(pointer.x, pointer.y)
    }

    onPointerUp(pointer, target) {
        if (pointer.button != 0 || !this.visible) {
            return
        }

        // Block movement when clicking a button
        if (target[0] && target[0].isButton) {
            return
        }

        this.penguin.move(pointer.x, pointer.y)
    }

    onKeyDown(event) {
        let key = event.key.toLowerCase()

        if (this.emoteKeyPressed) {
            this.processEmote(key)
        } else {
            this.processKey(key)
        }
    }

    processEmote(key) {
        this.emoteKeyPressed = false

        if (key in this.emotes) {
            this.sendEmote(this.emotes[key])
        }
    }

    processKey(key) {
        if (key in this.keys) {
            let k = this.keys[key]

            this.keyActions[k.action](k.value || null)
        }
    }

    sendFrame(frame, set = true) {
        if (!this.visible || this.isTweening) {
             return
        }

        this.lockRotation = true

        this.penguin.playFrame(frame, set)
        this.network.send('send_frame', { set: set, frame: frame })
    }

    sendSit(pointer) {
        if (!this.visible || this.isTweening) {
            return
        }

        this.lockRotation = true

        this.penguin.sit(pointer.x, pointer.y)
    }

    sendSnowball(x, y) {
        if (!this.visible || this.isTweening) {
            return
        }

        this.lockRotation = true

        this.interface.main.snowballFactory.throwBall(this.id, x, y)
        this.network.send('snowball', { x: x, y: y })
    }

    sendEmote(emote) {
        if (!this.visible || this.isBalloonThrottled) {
            return
        }

        this.interface.showEmoteBalloon(this.id, emote)
        this.network.send('send_emote', { emote: emote })
    }

    sendSafe(safe) {
        if (!this.visible || this.isBalloonThrottled) {
            return
        }

        let message = this.interface.main.safe.safeMessagesMap[safe]

        this.interface.showTextBalloon(this.id, message)
        this.network.send('send_safe', { safe: safe })
    }

    showCrosshair() {
        if (!this.visible || !this.interface.main) {
            return
        }

        this.interface.main.onSnowballClick()
    }

    sendJoinRoom(id, name, x = 0, y = 0, randomRange = 40) {
        this.interface.showLoading(this.getString('joining', name))

        this.lockRotation = false

        let random = PathEngine.getRandomPos(x, y, randomRange)
        this.network.send('join_room', { room: id, x: random.x, y: random.y })
    }

    sendJoinLastRoom() {
        if (this.world.lastRoom) {
            let room = this.crumbs.scenes.rooms[this.world.lastRoom]

            if (room) {
                this.sendJoinRoom(this.world.lastRoom, room.key, room.x, room.y, 80)
            }
        }
    }

    sendJoinIgloo(id) {
        if (this.world.room.isIgloo && this.world.room.id == id) {
            return
        }

        this.interface.showLoading(this.getString('joining', 'igloo'))

        this.lockRotation = false

        this.network.send('join_igloo', { igloo: id, x: 0, y: 0 })
    }

}
