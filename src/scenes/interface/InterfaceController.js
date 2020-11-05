import BaseScene from '@scenes/base/BaseScene'


export default class InterfaceController extends BaseScene {

    constructor(key) {
        super(key)
    }

    showInterface() {
        this.scene.launch('Main')
        this.scene.bringToTop('Main')
        this.scene.bringToTop()
    }

}
