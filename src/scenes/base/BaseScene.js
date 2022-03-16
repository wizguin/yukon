export default class BaseScene extends Phaser.Scene {

    init() {
        this.input.on('pointerover', () => this.interface.resetCursor(this))
    }

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

    get ruffle() {
        return this.scene.get('RuffleController')
    }

    getString(...args) {
        return args.map(id => this.crumbs.strings[id.toLowerCase()]).join(' ')
    }

    getFormatString(id, ...args) {
        return Phaser.Utils.String.Format(this.crumbs.strings[id.toLowerCase()], args)
    }

}
