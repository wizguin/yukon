export default class RoomFactory {

    constructor(world) {
        this.world = world

        this.scene = world.scene

        this.rooms = world.crumbs.scenes.rooms
        this.igloos = world.crumbs.scenes.igloos
        this.games = world.crumbs.games
    }

    create(args) {
        if (args.room) {
            return this.createRoom(args)

        } else if (args.igloo) {
            return this.createIgloo(args)

        } else if (args.game) {
            return this.createGame(args)
        }
    }

    createRoom(args) {
        let config = this.rooms[args.room]

        if (config.key in this.scene.manager.keys) {
            this.scene.start(config.key)

            return this.scene.get(config.key)

        } else {
            return this.scene.add(config.key, config.scene, true, { id: args.room })
        }
    }

    createIgloo(args) {
        let config = this.igloos[args.type]

        if (config.key in this.scene.manager.keys) {
            this.scene.start(config.key, { args: args })

            return this.scene.get(config.key)

        } else {
            return this.scene.add(config.key, config.scene, true, { args: args })
        }
    }

    createGame(args) {
        let crumb = this.games[args.game]

        if (crumb.flash) {
            this.world.ruffle.bootGame(crumb)

            return
        }
    }

}
