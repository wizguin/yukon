import Plugin from '../Plugin'


export default class Join extends Plugin {

    constructor(network) {
        super(network)

        this.events = {
            'load_player': this.loadPlayer,
            'join_room': this.joinRoom,
            'join_igloo': this.joinIgloo,
            'join_game_room': this.joinGameRoom,
            'add_player': this.addPlayer,
            'remove_player': this.removePlayer
        }
    }

    loadPlayer(args) {
        if (this.network.saveUsername) {
            this.savePlayer(args)
        } else {
            this.unsavePlayer(args)
        }

        this.scene.start('WorldController')
        this.world.setClient(args)

        this.network.send('join_server')
    }

    joinRoom(args) {
        this.interface.showLoading(this.getString('loading', this.crumbs.scenes.rooms[args.room].key), true)
        this.world.joinRoom(args)
    }

    joinIgloo(args) {
        this.interface.showLoading(this.getString('loading', 'igloo'), true)
        this.world.joinRoom(args)
    }

    joinGameRoom(args) {
        this.interface.showLoading(this.getString('loading', this.crumbs.games[args.game].key))
        this.world.joinRoom(args)
    }

    addPlayer(args) {
        this.world.addPenguin(args.user)
    }

    removePlayer(args) {
        this.world.removePenguin(args.user)
    }

    // Saves a player to local storage
    savePlayer(args) {
        let savedPenguins = this.network.savedPenguins

        if (Object.keys(savedPenguins).length > 6 && !(args.user.username in savedPenguins)) return

        let { photo, flag, x, y, frame, coins, id, ...penguin } = args.user

        // Set auth token
        if (this.network.token) {
            penguin.token = this.network.token
        }

        savedPenguins[args.user.username.toLowerCase()] = penguin
        localStorage.setItem('saved_penguins', JSON.stringify(savedPenguins))
    }

    // Deletes a player from local storage
    unsavePlayer(args) {
        let savedPenguins = this.network.savedPenguins

        if (args.user.username.toLowerCase() in savedPenguins) {
            delete savedPenguins[args.user.username.toLowerCase()]
            localStorage.setItem('saved_penguins', JSON.stringify(savedPenguins))
        }
    }

}
