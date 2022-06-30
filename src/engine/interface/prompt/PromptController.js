import CoinPrompt from '@scenes/interface/prompts/CoinPrompt'
import ErrorPrompt from './ErrorPrompt'
import ItemPrompt from '@scenes/interface/prompts/ItemPrompt'
import LoadingPromptFactory from './LoadingPromptFactory'
import WindowPrompt from '@scenes/interface/prompts/WindowPrompt'


export default class PromptController {

    constructor(_interface) {
        this.interface = _interface

        this.crumbs = _interface.crumbs
        this.network = _interface.network
        this.world = _interface.world

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
    }

    showError(text, buttonText = 'Okay', callback = () => this.error.visible = false) {
        this.error.show(text, buttonText, callback)
    }

    showItem(item) {
        this.item.showItem(item)
    }

    showFurniture(furniture) {
        this.item.showFurniture(furniture)
    }

    showIgloo(igloo) {
        if (this.world.client.igloos.includes(igloo)) {
            return this.showError('You already have this igloo.')
        }

        let text = `Would you like to buy ${this.crumbs.igloos[igloo].name} for ${this.crumbs.igloos[igloo].cost} coins. You currently have ${this.world.client.coins} coins.`

        this.showWindow(text, 'dual', () => {
            this.network.send('add_igloo', { igloo: igloo })
            this.interface.prompt.window.visible = false
        })
    }

    showFloor(floor) {
        if (floor == this.world.room.args.flooring) {
            return this.showError('You already have this flooring.')
        }

        let text = `Would you like to buy ${this.crumbs.flooring[floor].name} for ${this.crumbs.flooring[floor].cost} coins. You currently have ${this.world.client.coins} coins.`

        this.showWindow(text, 'dual', () => {
            this.network.send('update_flooring', { flooring: floor })
            this.interface.prompt.window.visible = false
        })
    }

    showWindow(text, buttonLayout = 'single', callback = () => this.window.visible = false, noCallback = () => this.window.visible = false) {
        this.window.show(text, buttonLayout, callback, noCallback)
    }

    showLoading(text, key, url, callback = () => {}) {
        this.loadingPromptFactory.showLoading(text, key, url, callback)
    }

    hideAll() {
        this.loadingPromptFactory.hideAll()
    }

}
