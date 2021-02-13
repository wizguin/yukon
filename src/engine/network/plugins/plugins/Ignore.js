import Plugin from '../Plugin'


export default class Ignore extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'ignore_add': this.ignoreAdd,
            'ignore_remove': this.ignoreRemove
        }
    }

    ignoreAdd(args) {
        this.world.client.ignores.push(args)
        this.interface.updateBuddies()
    }

    ignoreRemove(args) {
        // Filter ignore out of list
        this.world.client.ignores = this.world.client.ignores.filter(obj => obj.id != args.id)
        this.interface.updateBuddies()
    }

}
