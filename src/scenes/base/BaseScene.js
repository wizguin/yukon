export default class BaseScene extends Phaser.Scene {

    get crumbs() {
        return this.game.crumbs
    }

    get network() {
        return this.game.network
    }

    get interface() {
        return this.scene.manager.getScene('InterfaceController')
    }

    get world() {
        return this.scene.manager.getScene('WorldController')
    }

}
