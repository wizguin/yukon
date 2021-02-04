import Plugin from '../Plugin'


export default class Buddy extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'buddy_request': this.buddyRequest,
            'buddy_accept': this.buddyAccept,
            'buddy_remove': this.buddyRemove,
            'buddy_find': this.buddyFind
        }
    }

    buddyRequest(args) {
        this.interface.main.addRequest(args)
    }

    buddyAccept(args) {

    }

    buddyRemove(args) {

    }

    buddyFind(args) {

    }

}
