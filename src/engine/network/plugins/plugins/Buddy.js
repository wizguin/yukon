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
        this.interface.main.buddy.showPage()
    }

    buddyRemove(args) {

    }

    buddyFind(args) {
        this.interface.prompt.showWindow(args.find, 'single')
    }

    buddyOnline(args) {
        let buddy = this.world.client.buddies.find(obj => obj.id == args.id)

        if (buddy) buddy.online = true
        this.interface.main.buddy.showPage()
    }

    buddyOffline(args) {
        let buddy = this.world.client.buddies.find(obj => obj.id == args.id)

        if (buddy) buddy.online = false
        this.interface.main.buddy.showPage()
    }

}
