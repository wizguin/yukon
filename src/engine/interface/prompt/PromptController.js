import ErrorPrompt from './ErrorPrompt'
import WindowPrompt from '@scenes/interface/prompts/WindowPrompt'


export default class PromptController {

    constructor(_interface) {
        this.interface = _interface

        this.error = new ErrorPrompt(_interface, 760, 480)
        this.window = new WindowPrompt(_interface, 760, 480)

        _interface.add.existing(this.error)
        _interface.add.existing(this.window)
    }

    showError(text, buttonText = 'Okay', callback = () => this.error.visible = false) {
        this.error.show(text, buttonText, callback)
        this.bringToTop()
    }

    showWindow(text, buttonLayout = 'single', callback = () => {}) {
        this.window.show(text, buttonLayout, callback)
        this.bringToTop()
    }

    bringToTop() {
        this.interface.scene.bringToTop()
    }

}
