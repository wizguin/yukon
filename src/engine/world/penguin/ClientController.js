import PathEngine from './pathfinding/PathEngine'


export default class ClientController {

    constructor(world, args) {
        this.interface = world.interface
        this.network = world.network
        this.crumbs = world.crumbs
        this.getString = world.getString

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

        // If expecting emote key combo
        this.emoteKeyPressed = false

        // Input
        this.keys = this.crumbs.quickKeys.keys
        this.emotes = this.crumbs.quickKeys.emotes

        this.keyActions = {
            'send_frame': (id) => this.sendFrame(id),
            'send_wave': () => this.sendFrame(25, false),
            'send_sit': () => this.sendSit(this.input.mousePointer),

            'show_crosshair': () => this.showCrosshair(),

            'emote_key': () => this.emoteKeyPressed = true,
            'send_emote': (id) => this.sendEmote(id),
            'send_safe': (id) => this.sendSafe(id)
        }

        this.input.on('pointermove', (pointer) => this.onPointerMove(pointer))

        this.input.keyboard.on('keydown', (event) => this.onKeyDown(event))
    }

    get isTweening() {
        return this.penguin.isTweening
    }

    get visible() {
        return this.penguin.visible
    }

    get activeSeat() {
        return this.interface.main.waddle.activeSeat
    }

    get input() {
        return this.interface.main.input
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

        if (!this.visible || this.isTweening) {
            return
        }

        this.penguin.rotate(pointer.x, pointer.y)
    }

    onPointerUp(pointer, target) {
        if (!this.visible || this.activeSeat) {
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

        this.penguin.playFrame(frame)
        this.network.send('send_frame', { set: set, frame: frame })
    }

    sendSit(pointer) {
        if (!this.visible || this.isTweening) {
            return
        }

        this.penguin.sit(pointer.x, pointer.y)
    }

    sendEmote(emote) {
        this.interface.showEmoteBalloon(this.id, emote)
        this.network.send('send_emote', { emote: emote })
    }

    sendSafe(safe) {
        let message = this.interface.main.safe.safeMessagesMap[safe]

        this.interface.showTextBalloon(this.id, message)
        this.network.send('send_safe', { safe: safe })
    }

    showCrosshair() {
        if (!this.interface.main || !this.visible) {
            return
        }

        this.interface.main.onSnowballClick()
    }

    sendJoinRoom(id, name, x, y, randomRange = 40) {
        if (this.activeSeat) {
            return this.interface.prompt.showError('Please exit your game before leaving the room')
        }

        this.interface.showLoading(this.getString('joining', name))

        let random = PathEngine.getRandomPos(x, y, randomRange)
        this.network.send('join_room', { room: id, x: random.x, y: random.y })
    }

}
