export default class ClientInput {

    constructor(client) {
        this.client = client
    }

    setInput(room) {
        room.input.on('pointerup', (pointer) => { this.onUp(pointer) })
        room.input.on('pointermove', (pointer) => { this.onMove(pointer) })

        room.input.keyboard.on('keydown_UP', () => { this.onFrameKeyDown(21) })
        room.input.keyboard.on('keydown_LEFT', () => { this.onFrameKeyDown(19) })
        room.input.keyboard.on('keydown_DOWN', () => { this.onFrameKeyDown(17) })
        room.input.keyboard.on('keydown_RIGHT', () => { this.onFrameKeyDown(23) })

        room.input.keyboard.on('keydown_S', () => { this.onSitKeyDown(room.game.input.mousePointer) })
    }

    onUp(pointer) {
        this.client.actions.move(pointer.x, pointer.y)
    }

    onMove(pointer) {
        this.client.actions.rotate(pointer.x, pointer.y)
    }

    onFrameKeyDown(frame) {
        this.client.actions.playFrame(frame)
    }

    onSitKeyDown(mousePointer) {
        this.client.actions.sit(mousePointer.x, mousePointer.y)
    }

}
