import Plugin from '../Plugin'


export default class Mail extends Plugin {

    constructor(network) {
        super(network)

        this.events = {
            'receive_mail': this.receiveMail
        }
    }

    receiveMail(args) {
        this.world.client.postcards.push(args)

        this.world.client.refreshPostcards()
    }

}
