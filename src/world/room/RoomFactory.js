export default class RoomFactory {

    constructor(game) {
        this.game = game
        this.config = game.crumbs.rooms

        this.rooms = {}
    }

    createRoom(id, penguins) {
        if (id in this.rooms) {
            return this.rooms[id]

        } else {
            let room = this.game.scene.add(this.config[id].name, this.config[id].scene, false, {
                penguins: penguins
            })

            console.log(room)
            this.rooms[id] = room
            this.game.scene.start(this.config[id].name)

            return room;
        }

    }

}
