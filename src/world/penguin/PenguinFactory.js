import Penguin from './Penguin'
import PenguinLoader from './PenguinLoader'


export default class PenguinFactory {

    constructor() {
        this.penguinLoader = new PenguinLoader()
    }

    createClient(client) {

    }

    createPenguin(user, room) {
        return new Penguin(user, room, user.x, user.y, this.penguinLoader)
    }

    createPenguins(users, room) {
        let penguins = {}

        for (let user of users) {
            penguins[user.id] = this.createPenguin(user, room)
        }

        return penguins
    }

}
