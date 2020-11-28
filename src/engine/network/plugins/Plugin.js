export default class Plugin {

    constructor(network) {
        this.network = network
        this.game = network.game
        this.crumbs = this.game.crumbs
        this.scene = this.game.scene
    }

    get interface() {
        return this.scene.getScene('InterfaceController')
    }

    get world() {
        return this.scene.getScene('WorldController')
    }

}
