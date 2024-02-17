import CoinPrompt from '@scenes/interface/prompts/CoinPrompt'
import ErrorPrompt from './ErrorPrompt'
import ItemPrompt from '@scenes/interface/prompts/ItemPrompt'
import InputPrompt from '@scenes/interface/prompts/InputPrompt'
import LoadingPromptFactory from './LoadingPromptFactory'
import WindowPrompt from '@scenes/interface/prompts/WindowPrompt'

import MailErrorPrompt from '@scenes/interface/prompts/MailErrorPrompt'
import MailSuccessPrompt from '@scenes/interface/prompts/MailSuccessPrompt'


export default class PromptController {

    constructor(scene) {
        this.interface = scene

        this.crumbs = this.interface.crumbs
        this.network = this.interface.network
        this.world = this.interface.world

        this.coin = this.createPrompt(CoinPrompt)
        this.error = this.createPrompt(ErrorPrompt)
        this.item = this.createPrompt(ItemPrompt)
        this.input = this.createPrompt(InputPrompt)
        this.window = this.createPrompt(WindowPrompt)

        this.mailError = this.createPrompt(MailErrorPrompt)
        this.mailSuccess = this.createPrompt(MailSuccessPrompt)

        this.loadingPromptFactory = new LoadingPromptFactory(this.interface)

        window.test = () => this.showAdopt(1)
    }

    get coins() {
        return this.world.client.coins
    }

    createPrompt(promptClass) {
        const prompt = new promptClass(this.interface, 760, 480)

        this.interface.add.existing(prompt)

        return prompt
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

    showInput(text, buttonText = 'Continue', callback = () => {}) {
        this.input.show(text, buttonText, callback)
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

    showMailError(text) {
        this.mailError.show(text)
    }

    showMailSuccess(text) {
        this.mailSuccess.show(text)
    }

    showAdopt(petId) {
        this.item.showAdopt(petId)
    }

    showAdoptName(petId) {
        this.window.close()

        this.showInput('', 'Continue', (name) => {
            this.network.send('adopt_pet', { petId: petId, name: name })
        })
    }

    showPetFood(pet) {
        if (this.coins < 10) return this.showLowCoins()

        this.item.showPetFood(pet)
    }

    showPetBath(pet) {
        if (this.coins < 5) return this.showLowCoins()

        this.item.showPetBath(pet)
    }

    showPetGum(pet) {
        if (this.coins < 5) return this.showLowCoins()

        this.item.showPetGum(pet)
    }

    showPetCookie(pet) {
        if (this.coins < 5) return this.showLowCoins()

        this.item.showPetCookie(pet)
    }

    showLowCoins() {
        this.showError(this.getString('low_coin_warn'))
    }

    getString(...args) {
        return this.interface.getString(...args)
    }

    hideAll() {
        this.loadingPromptFactory.hideAll()
    }

}
