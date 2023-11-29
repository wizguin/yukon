import Plugin from '../Plugin'


export default class Mail extends Plugin {

    constructor(network) {
        super(network)

        this.events = {
            'receive_mail': this.receiveMail
        }
    }

    get main() {
        return this.interface.main
    }

    receiveMail(args) {
        this.world.client.postcards.push(args)

        this.world.client.sortPostcards()

        if (this.main.mail.visible) {
            // Read mail before updating count
            this.main.mail.goToFirstPage()
        }

        this.main.updateMailCount()
    }

}
