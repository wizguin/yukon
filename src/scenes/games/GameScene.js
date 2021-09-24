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
    }

    create() {
        this._create()

        this.sound.pauseOnBlur = false
        if (this.music) this.addMusic()

        this.interface.hideLoading()
    }

    addMusic() {
        this.sound.play(this.music, { loop: true })
    }

    stop() {
        this.sound.stopAll()
        this.scene.stop()
    }

}
