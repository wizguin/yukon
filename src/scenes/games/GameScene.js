import BaseScene from '@scenes/base/BaseScene'


export default class GameScene extends BaseScene {

    constructor(key) {
        super(key)

        this.key = key
    }

    get client() {
        return this.world.client
    }

    getColor(color) {
        return this.world.getColor(color)
    }

    init(data) {
        this.id = data.id

        super.init()
    }

    create() {
        this._create()

        this.setMusic()
        this.interface.hideLoading()
    }

    stop() {
        this.soundManager.stopAllButMusic()
        this.scene.stop()
    }

}
