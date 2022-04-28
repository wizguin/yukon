import Boot from '@engine/boot/Boot'
import Network from '@engine/network/Network'
import SoundManager from '@engine/sound/SoundManager'

import game from './data/game'


export default class Game extends Phaser.Game {

    constructor(config) {
        super(config)

        this.logBanner()
        this.initContainers()

        this.crumbs = config.crumbs
        this.network = new Network(this)

        // howler.js based sound manager
        this.soundManager = new SoundManager(this)

        this.scene.add('Boot', Boot, true)
    }

    logBanner() {
        // Please leave this line here for credit purposes
        console.log('%cYukon%c https://github.com/wizguin/yukon', 'color: white; background: black; border-left: 8px solid #0099cc; padding: 0px 8px 0px 8px;', '')

        // Edit this line if you want to display a custom name
        console.log(`Version ${VERSION}`)
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
