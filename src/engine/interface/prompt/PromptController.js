import ErrorPrompt from './ErrorPrompt'
import ItemPrompt from '@scenes/interface/prompts/ItemPrompt'
import LoadingPrompt from '@scenes/interface/prompts/LoadingPrompt'
import WindowPrompt from '@scenes/interface/prompts/WindowPrompt'


export default class PromptController {

    constructor(_interface) {
        this.interface = _interface

        this.error = new ErrorPrompt(_interface, 760, 480)
        this.item = new ItemPrompt(_interface, 760, 480)
        this.loading = new LoadingPrompt(_interface, 760, 480)
        this.window = new WindowPrompt(_interface, 760, 480)

        _interface.add.existing(this.error)
        _interface.add.existing(this.item)
        _interface.add.existing(this.loading)
        _interface.add.existing(this.window)
    }

    showError(text, buttonText = 'Okay', callback = () => this.error.visible = false) {
        this.error.show(text, buttonText, callback)
        this.bringToTop()
    }

    showItem(item) {
        this.item.show(item)
        this.bringToTop()
    }

    showLoading(scene, progress = 0) {
        this.loading.show(scene, progress)
        this.bringToTop()
    }

    showWindow(text, buttonLayout = 'single', callback = () => {}, noCallback = () => this.window.visible = false) {
        this.window.show(text, buttonLayout, callback, noCallback)
        this.bringToTop()
    }

    bringToTop() {
        this.interface.scene.bringToTop()
        this.interface.input.setDefaultCursor('default')
    }

    hideAll() {
        this.error.visible = false
        this.item.visible = false
        this.loading.visible = false
        this.window.visible = false
    }

}
