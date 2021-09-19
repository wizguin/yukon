export default class BaseContainer extends Phaser.GameObjects.Container {

    get crumbs() {
        return this.scene.crumbs
    }

    get network() {
        return this.scene.network
    }

    get interface() {
        return this.scene.interface
    }

    get world() {
        return this.scene.world
    }

    getString(...args) {
        return this.scene.getString(...args)
    }

}
