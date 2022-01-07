export default class BaseScene extends Phaser.Scene {

    get crumbs() {
        return this.game.crumbs
    }

    get network() {
        return this.game.network
    }

    get interface() {
        return this.scene.get('InterfaceController')
    }

    get world() {
        return this.scene.get('WorldController')
    }

    getString(...args) {
        return args.map(id => this.crumbs.strings[id.toLowerCase()]).join(' ')
    }

    switchData(key, data) {
        this.scene.sleep()

        if (this.scene.isSleeping(key)) {
            this.scene.wake(key, data)
        } else {
            this.scene.start(key, data)
        }
    }

}
