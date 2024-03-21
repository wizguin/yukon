import Plugin from '../Plugin'


export default class Mail extends Plugin {

    constructor(network) {
        super(network)

        this.events = {
            'send_mail': this.sendMail,
            'receive_mail': this.receiveMail
        }

        this.responses = {
            InsufficientCoins: 0,
            FullInbox: 1,
            Success: 2
        }
    }

    sendMail(args) {
        this.world.client.coins = args.coins

        switch (args.response) {
            case this.responses.InsufficientCoins:
                this.showInsufficientCoins()
                break

            case this.responses.FullInbox:
                this.showFullInbox()
                break

            case this.responses.Success:
                this.showSuccess()
                break
        }
    }

    receiveMail(args) {
        this.world.client?.addPostcard(args)
    }

    showInsufficientCoins() {
        this.showError('Failed to send Postcard.\nYou need more coins.')
    }

    showFullInbox() {
        this.showError('This penguins mailbox is full. Your postcard could not be sent. Please try again later.')
    }

    showSuccess() {
        this.interface.prompt.showMailSuccess('Postcard sent')
    }

    showError(text) {
        this.interface.prompt.showMailError(text)
    }

}
