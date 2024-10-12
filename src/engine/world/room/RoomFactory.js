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
        let key = `${config.key}-igloo`
        if (!config) return console.error(`Igloo type ${args.type} not found`)
        

        if (key in this.scene.manager.keys) {
            this.scene.start(key, { args: args })

            return this.scene.get(key)

        } else {
            return this.scene.add(key, config.scene, true, { args: args })
        }
    }

    createGame(args) {
        let config = this.games[args.game]

        if (config.flash) {
            this.world.ruffle.bootGame(config)

            return
        }

        return this.createRoom({ room: args.game })
    }

}
