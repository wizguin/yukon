export default class ClientInput {

    constructor(client) {
        this.client = client
    }

    get actions() {
        return this.client.penguin.actions
    }

    get movementEnabled() {
        return this.client.penguin.movementEnabled
    }

    get rotationEnabled() {
        return this.client.penguin.rotationEnabled
    }

    setInput(room) {
        // Movement
        room.input.on('pointerup', (pointer) => { this.onUp(pointer) })
        room.input.on('pointermove', (pointer) => { this.onMove(pointer) })

        // Sitting
        room.input.keyboard.on('keydown_UP', () => { this.onFrameKeyDown(21) })
        room.input.keyboard.on('keydown_LEFT', () => { this.onFrameKeyDown(19) })
        room.input.keyboard.on('keydown_DOWN', () => { this.onFrameKeyDown(17) })
        room.input.keyboard.on('keydown_RIGHT', () => { this.onFrameKeyDown(23) })

        // Sitting to pointer
        room.input.keyboard.on('keydown_S', () => { this.onSitKeyDown(room.game.input.mousePointer) })

        // Crosshair
        room.input.keyboard.on('keydown_T', () => { this.onCrosshairKeyDown() })
    }

    onUp(pointer) {
        if (!this.movementEnabled) return
        this.actions.movePenguin(pointer.x, pointer.y)
    }

    onMove(pointer) {
        if (!this.rotationEnabled) return
        this.actions.rotatePenguin(pointer.x, pointer.y)
    }

    onFrameKeyDown(frame) {
        this.actions.playFrame(frame)
    }

    onSitKeyDown(mousePointer) {
        this.actions.sitPenguin(mousePointer.x, mousePointer.y)
    }

    onCrosshairKeyDown() {
        if (!this.client.penguin.interface.main) return
        this.client.penguin.interface.main.onSnowballClick()
    }

}
