import BaseContainer from '@scenes/base/BaseContainer'


export default class BasePostcard extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y)

        this.name = null
        this.goToButton = null
    }

    setName(name) {
        this.name.text = name
    }

}
