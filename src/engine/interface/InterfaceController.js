import BaseScene from '@scenes/base/BaseScene'

import PromptController from './prompt/PromptController'


export default class InterfaceController extends BaseScene {

    create() {
        this.prompt = new PromptController(this)
    }

    get loading() {
        return this.scene.get('Load')
    }

    get main() {
        return this.scene.get('Main')
    }

    showLoading(text = '', showBar = false) {
        this.hideInterface()

        if (this.scene.isActive('Load')) {
            this.loading.setContent(text, showBar)

        } else if (this.scene.isSleeping('Load')) {
            this.scene.wake('Load', { text: text, showBar: showBar })

        } else {
            this.scene.launch('Load', { text: text, showBar: showBar })
        }

        this.scene.bringToTop('Load')
    }

    hideLoading() {
        if (this.loading && this.loading.scene.isActive()) this.scene.sleep('Load')
    }

    showInterface() {
        this.hideLoading()

        if (this.scene.isSleeping('Main')) {
            this.scene.wake('Main')

        } else if (!this.scene.isActive('Main')) {
            this.scene.launch('Main')
        }

        this.scene.bringToTop('Main')
    }

    hideInterface() {
        if (this.main && this.main.scene.isActive()) this.scene.sleep('Main')
    }

    showEmoteBalloon(id, emote) {
        this.main.balloonFactory.showEmoteBalloon(id, emote)
    }

    showTextBalloon(id, text) {
        this.main.balloonFactory.showTextBalloon(id, text)
    }

    showCard(penguin) {
        this.main.playerCard.showCard(penguin)
    }

}
