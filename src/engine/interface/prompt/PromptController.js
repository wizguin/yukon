import ErrorPrompt from './ErrorPrompt'


export default class PromptController {

    constructor(_interface) {
        this.interface = _interface

        this.error = new ErrorPrompt(_interface, 760, 480)

        _interface.add.existing(this.error)
    }

    showError(text) {
        this.error.show(text)
        this.bringToTop()
    }

    bringToTop() {
        this.interface.scene.bringToTop()
    }

}
