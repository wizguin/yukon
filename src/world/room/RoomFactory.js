export default class RoomFactory {

    constructor(world) {
        this.world = world

        this.scene = world.scene
        this.rooms = world.game.crumbs.rooms
    }

    createRoom(id) {
        if (id in this.scene.manager.keys) {


        } else {
            let config = this.rooms[id]
            let room = this.scene.add(config.name, config.scene, true)

            return room
        }

    }

}
