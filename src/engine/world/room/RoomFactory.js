export default class RoomFactory {

    constructor(world) {
        this.world = world

        this.scene = world.scene
        this.rooms = world.crumbs.scenes.rooms
    }

    createRoom(id) {
        let config = this.rooms[id]

        if (config.key in this.scene.manager.keys) {
            this.scene.start(config.key)

            return this.scene.get(config.key)

        } else {
            return this.scene.add(config.key, config.scene, true, { id: id })
        }

    }

}
