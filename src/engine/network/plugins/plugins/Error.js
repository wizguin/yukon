import Plugin from '../Plugin'


export default class Error extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'error': this.error
        }

        // Todo: use error ids instead
        this.customHandlers = {
            'Sorry this room is currently full': () => this.fullRoom()
        }
    }

    error(args) {
        if (args.error in this.customHandlers) {
            return this.customHandlers[args.error]()
        }

        this.interface.prompt.showError(args.error)
    }

    fullRoom() {
        this.interface.prompt.showError('Sorry this room is currently full', 'Okay', () => {
            this.interface.showInterface()

            this.interface.prompt.error.visible = false
            this.interface.loadWidget('Map')
        })
    }

}
