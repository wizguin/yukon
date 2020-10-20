export default class RoomFactory {

    constructor(game) {
        this.game = game

        this.rooms = game.crumbs.rooms
    }

    createRoom(id, penguins) {
        if (id in this.game.scene.keys) {


        } else {
            let config = this.rooms[id]
            let room = this.game.scene.add(config.name, config.scene, false)

            this.game.scene.start(config.name)

            return room
        }

    }

}
