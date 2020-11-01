import BaseScene from '@scenes/base/BaseScene'


export default class InterfaceController extends BaseScene {

    constructor(key) {
        super(key)
    }

    init() {
        console.log(this.network, this.world)
    }

}
