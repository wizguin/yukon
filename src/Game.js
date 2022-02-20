import Boot from '@engine/boot/Boot'
import Network from '@engine/network/Network'

import game from './data/game'


export default class Game extends Phaser.Game {

    constructor(config) {
        super(config)

        console.log(`Yukon ${VERSION} https://github.com/wizguin/yukon`)

        this.initContainers()

        this.crumbs = config.crumbs
        this.network = new Network(this)

        this.scene.add('Boot', Boot, true)
    }

    initContainers() {
        let parent = document.querySelector(`#${this.config.parent} canvas`)

        parent.onclick = () => {
            // Removes input focus from active element
            document.activeElement.blur()
        }

        // Styles
        let style = {
            overflow: 'hidden'
        }

        Object.assign(parent.style, style)
        Object.assign(this.domContainer.style, style)
    }

}

window.onload = () => {
    new Game(game)
}
