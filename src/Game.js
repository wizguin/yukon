import Network from '@engine/network/Network'
import Preload from '@engine/preload/Preload'

import game from './crumbs/game'


export default class Game extends Phaser.Game {

    constructor(config) {
        super(config)

        this.crumbs = config.crumbs
        this.network = new Network(this)

        this.scene.add('Preload', Preload, true)
    }

}

window.onload = new Game(game)
