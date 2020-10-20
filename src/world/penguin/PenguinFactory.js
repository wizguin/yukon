import Penguin from './Penguin'


export default class PenguinFactory {

    constructor(world) {
        this.world = world

        this.penguins = {}
    }

    createClient(client) {

    }

    createPenguin(user) {
        let penguin = new Penguin(user, this.world, user.x, user.y)
        this.penguins[user.id] = penguin

        return penguin
    }

    createPenguins(users) {
        let penguins = {}

        for (let user of users) {
            penguins[user.id] = this.createPenguin(user)
        }

        return penguins
    }

}
