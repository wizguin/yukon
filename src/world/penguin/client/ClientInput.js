export default class ClientInput {

    constructor(client) {
        this.client = client
    }

    get actions() {
        return this.client.penguin.actions
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
    }

    onUp(pointer) {
        this.actions.movePenguin(pointer.x, pointer.y)
    }

    onMove(pointer) {
        this.actions.rotatePenguin(pointer.x, pointer.y)
    }

    onFrameKeyDown(frame) {
        this.actions.playFrame(frame)
    }

    onSitKeyDown(mousePointer) {
        this.actions.sitPenguin(mousePointer.x, mousePointer.y)
    }

}
