import Boot from '@engine/boot/Boot'
import Network from '@engine/network/Network'

import game from './crumbs/game'


export default class Game extends Phaser.Game {

    constructor(config) {
        super(config)

        console.log(`%cYukon ${VERSION}`, 'color: white; background: black; border-left: 8px solid #0280cd; padding: 0px 8px 0px 8px;')

        this.crumbs = config.crumbs
        this.network = new Network(this)

        this.scene.add('Boot', Boot, true)
    }

}

window.onload = () => {
    new Game(game)
}
