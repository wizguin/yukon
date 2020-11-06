import ClientInput from './ClientInput'


export default class ClientController {

    constructor(client) {
        this.id = client.user.id
        this.inventory = client.inventory

        this.penguin = null // Reference to ClientPenguin object
        this.input = new ClientInput(this) // Input handling

        this.isClient = true
    }

    setInput(room) {
        this.input.setInput(room)
    }

}
