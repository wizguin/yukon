export default class RoomFactory {

    constructor(world) {
        this.world = world

        this.scene = world.scene
        this.rooms = world.crumbs.rooms
    }

    createRoom(id) {
        let config = this.rooms[id]

        if (config.name in this.scene.manager.keys) {
            this.scene.start(config.name)

            return this.scene.get(config.name)

        } else {
            return this.scene.add(config.name, config.scene, true)
        }

    }

}
