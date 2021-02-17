import Plugin from '../Plugin'


export default class Error extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'error': this.error
        }
    }

    error(args) {
        this.interface.prompt.showError(args.error)
    }

}
