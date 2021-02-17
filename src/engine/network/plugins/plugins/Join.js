import Plugin from '../Plugin'


export default class Join extends Plugin {

    constructor(network) {
        super(network)

        this.events = {
            'load_player': this.loadPlayer,
            'join_room': this.joinRoom,
            'add_player': this.addPlayer,
            'remove_player': this.removePlayer
        }
    }

    loadPlayer(args) {
        if (this.network.saveUsername) this.savePlayer(args, this.network.savePassword)

        this.scene.start('WorldController')
        this.world.setClient(args)

        this.network.send('join_server')
    }

    joinRoom(args) {
        this.world.joinRoom(args.room, args.users)
    }

    addPlayer(args) {
        this.world.addPenguin(args.user)
    }

    removePlayer(args) {
        this.world.removePenguin(args.user)
    }

    // Saves a player to local storage
    savePlayer(args, savePassword) {
        let savedPenguins = this.network.savedPenguins

        if (Object.keys(savedPenguins).length > 5 && !(args.user.username in savedPenguins)) return

        let { photo, flag, x, y, frame, coins, id, ...penguin } = args.user

        savedPenguins[args.user.username] = penguin
        localStorage.setItem('saved_penguins', JSON.stringify(savedPenguins))
    }

}
