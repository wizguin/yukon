export default class BaseScene extends Phaser.Scene {

    get crumbs() {
        return this.game.crumbs
    }

    get interface() {
        return this.scene.getScene('InterfaceController')
    }

    get network() {
        return this.game.network
    }

    get world() {
        return this.scene.getScene('WorldController')
    }

}
