export default class ClientInput {

    constructor(client) {
        this.client = client
    }

    setInput(room) {
        room.input.on('pointerup', (pointer) => { this.onUp(pointer) })
        room.input.on('pointermove', (pointer) => { this.onMove(pointer) })
    }

    onUp(pointer) {
        console.log(pointer.x, pointer.y)
    }

    onMove(pointer) {

    }

}
