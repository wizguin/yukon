import BaseScene from '@scenes/base/BaseScene'


export default class InterfaceController extends BaseScene {

    constructor(key) {
        super(key)
    }

    get main() {
        return this.scene.get('Main')
    }

    showInterface() {
        this.scene.launch('Main')
        this.scene.bringToTop('Main')
        this.scene.bringToTop()
    }

    showCard(penguin) {
        this.main.playerCard.showCard(penguin)
    }

}
