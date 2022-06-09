import ClientPenguin from './ClientPenguin'
import Penguin from './Penguin'
import PenguinLoader from '@engine/loaders/PenguinLoader'


export default class PenguinFactory {

    constructor(world) {
        this.world = world

        this.penguinLoader = new PenguinLoader(world)
    }

    createPenguin(user, room) {
        let client = this.world.client

        if (user.id == client.id) {
            client.penguin = new ClientPenguin(user, room)
            return client.penguin

        } else {
            return new Penguin(user, room)
        }
    }

    createPenguins(users, room) {
        let penguins = {}

        for (let user of users) {
            if (!(user.id in penguins)) {
                penguins[user.id] = this.createPenguin(user, room)
            }
        }

        return penguins
    }

}
