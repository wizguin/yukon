import ClientInput from './ClientInput'


export default class ClientController {

    constructor(client) {
        this.id = client.user.id

        this.buddies = client.buddies
        this.ignores = client.ignores
        this.inventory = client.inventory
        this.igloos = client.igloos
        this.furniture = client.furniture

        this.coins = client.user.coins

        this.penguin // Reference to ClientPenguin object
        this.input = new ClientInput(this) // Input handling
    }

    setInput(room) {
        this.input.setInput(room)
    }

}
