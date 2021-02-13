import Plugin from '../Plugin'


export default class Buddy extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'buddy_request': this.buddyRequest,
            'buddy_accept': this.buddyAccept,
            'buddy_remove': this.buddyRemove,
            'buddy_find': this.buddyFind,
            'buddy_online': this.buddyOnline,
            'buddy_offline': this.buddyOffline
        }
    }

    buddyRequest(args) {
        this.interface.main.addRequest(args)
    }

    buddyAccept(args) {
        if (args.requester) this.interface.main.addRequest(args)

        let { requester, ...buddy } = args

        this.world.client.buddies.push(buddy)
        this.interface.updateBuddies()
        this.interface.main.showOnlinePopup(buddy.username)
    }

    buddyRemove(args) {
        // Filter buddy out of list
        this.world.client.buddies = this.world.client.buddies.filter(obj => obj.id != args.id)
        this.interface.updateBuddies()
    }

    buddyFind(args) {
        this.interface.prompt.showWindow(args.find, 'single')
    }

    buddyOnline(args) {
        let buddy = this.world.client.buddies.find(obj => obj.id == args.id)
        if (!buddy) return

        buddy.online = true

        if (this.interface.main.scene.isActive()) {
            this.interface.updateBuddies()
            this.interface.main.showOnlinePopup(buddy.username)
        }
    }

    buddyOffline(args) {
        let buddy = this.world.client.buddies.find(obj => obj.id == args.id)

        if (buddy) {
            buddy.online = false
            this.interface.updateBuddies()
        }
    }

}
