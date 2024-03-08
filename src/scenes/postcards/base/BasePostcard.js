import BaseContainer from '@scenes/base/BaseContainer'


export default class BasePostcard extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y)

        this.name = null
        this.goToButton = null
    }

    get clientName() {
        return this.world.client.penguin.username
    }

    setName(name) {
        if (this.name) {
            this.name.text = name
        }
    }

    setDetails(details) {
        if (this.details) {
            this.details.text = details
        }
    }

    enableInput() {
        if (this.goToButton) {
            this.goToButton.enableInput()
        }
    }

}
