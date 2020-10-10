import Preload from '@/preload/Preload'


export default class Game extends Phaser.Game {

    constructor(config) {
        super(config)

        this.scene.add('Preload', Preload, true)
    }

}
