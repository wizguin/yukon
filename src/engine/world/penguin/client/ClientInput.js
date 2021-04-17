export default class ClientInput {

    constructor(client) {
        this.client = client
        this.room = null

        // Forced x and y coordinates for movement,
        // used by MoveTo component to move penguin to doors etc
        this.moveTo
    }

    get actions() {
        return this.client.penguin.actions
    }

    get visible() {
        return this.client.penguin.visible
    }

    get movementEnabled() {
        return this.client.penguin.movementEnabled
    }

    get rotationEnabled() {
        return this.client.penguin.rotationEnabled
    }

    setInput(room) {
        this.room = room

        // Movement
        room.input.on('pointerup', (pointer) => { this.onUp(pointer) })
        room.input.on('pointermove', (pointer) => { this.onMove(pointer) })

        // Sitting
        room.input.keyboard.on('keydown-UP', () => { this.onFrameKeyDown(21) })
        room.input.keyboard.on('keydown-LEFT', () => { this.onFrameKeyDown(19) })
        room.input.keyboard.on('keydown-DOWN', () => { this.onFrameKeyDown(17) })
        room.input.keyboard.on('keydown-RIGHT', () => { this.onFrameKeyDown(23) })

        // Sitting to pointer
        room.input.keyboard.on('keydown-S', () => { this.onSitKeyDown(room.game.input.mousePointer) })

        // Crosshair
        room.input.keyboard.on('keydown-T', () => { this.onCrosshairKeyDown() })
    }

    onUp(pointer) {
        if (!this.movementEnabled || !this.visible) return

        // Checks moveTo coordinates
        let x = (this.moveTo) ? this.moveTo[0] : pointer.x
        let y = (this.moveTo) ? this.moveTo[1] : pointer.y
        // Reset moveTo
        this.moveTo = null

        this.actions.movePenguin(x, y)
    }

    onMove(pointer) {
        if (!this.rotationEnabled || !this.visible) return
        this.actions.rotatePenguin(pointer.x, pointer.y)
    }

    onFrameKeyDown(frame) {
        if (!this.visible) return
        this.actions.playFrame(frame)
    }

    onSitKeyDown(mousePointer) {
        if (!this.visible) return
        this.actions.sitPenguin(mousePointer.x, mousePointer.y)
    }

    onCrosshairKeyDown() {
        if (!this.client.penguin.interface.main || !this.visible) return
        this.client.penguin.interface.main.onSnowballClick()
    }

}
