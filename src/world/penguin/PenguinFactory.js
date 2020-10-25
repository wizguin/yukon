import Penguin from './Penguin'
import PenguinLoader from './PenguinLoader'


export default class PenguinFactory {

    constructor(world) {
        this.world = world

        this.penguinLoader = new PenguinLoader(world.anims)
    }

    createPenguin(user, room) {
        let penguin = new Penguin(user, room, user.x, user.y, this.penguinLoader)
        let client = this.world.client

        if (user.id == client.id) {
            client.penguin = penguin
            client.setInput(room)
        }

        return penguin
    }

    createPenguins(users, room) {
        let penguins = {}

        for (let user of users) {
            penguins[user.id] = this.createPenguin(user, room)
        }

        return penguins
    }

}
