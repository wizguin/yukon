import CoinPrompt from '@scenes/interface/prompts/CoinPrompt'
import ErrorPrompt from './ErrorPrompt'
import ItemPrompt from '@scenes/interface/prompts/ItemPrompt'
import LoadingPromptFactory from './LoadingPromptFactory'
import WindowPrompt from '@scenes/interface/prompts/WindowPrompt'


export default class PromptController {

    constructor(_interface) {
        this.interface = _interface

        this.coin = new CoinPrompt(_interface, 760, 480)
        this.error = new ErrorPrompt(_interface, 760, 480)
        this.item = new ItemPrompt(_interface, 760, 480)
        this.window = new WindowPrompt(_interface, 760, 480)

        _interface.add.existing(this.coin)
        _interface.add.existing(this.error)
        _interface.add.existing(this.item)
        _interface.add.existing(this.window)

        this.loadingPromptFactory = new LoadingPromptFactory(_interface)
    }

    showCoin(coins = 0) {
        this.coin.show(coins)
        this.setCursor()
    }

    showError(text, buttonText = 'Okay', callback = () => this.error.visible = false) {
        this.error.show(text, buttonText, callback)
        this.setCursor()
    }

    showItem(item) {
        this.item.showItem(item)
        this.setCursor()
    }

    showFurniture(item) {
        this.item.showFurniture(item)
        this.setCursor()
    }

    showWindow(text, buttonLayout = 'single', callback = () => this.window.visible = false, noCallback = () => this.window.visible = false) {
        this.window.show(text, buttonLayout, callback, noCallback)
        this.setCursor()
    }

    showLoadingPack(text, key, url, callback = () => {}) {
        this.loadingPromptFactory.showLoadingPack(text, key, url, callback)
        this.setCursor()
    }

    showLoadingScene(scene, progress = 0) {
        this.loadingPromptFactory.showLoadingScene(scene, progress)
        this.setCursor()
    }

    hideAll() {
        this.loadingPromptFactory.hideAll()
    }

    setCursor() {
        this.interface.resetCursor()
    }

}
