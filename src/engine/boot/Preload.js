import BaseScene from '@scenes/base/BaseScene'

import Start from '@scenes/interface/menus/start/Start'
import Login from '@scenes/interface/menus/login/Login'
import Main from '@scenes/interface/game/main/Main'


export default class Preload extends BaseScene {

    preload() {
        this.load.on('progress', this.onProgress, this)

        this.load.pack('preload', 'assets/media/preload/preload-pack.json')

        this.scene.add('Start', Start)
        this.scene.add('Login', Login)
        this.scene.add('Main', Main)
    }

    create() {
        let parent = this.game.config.parent

        document.querySelector(`#${parent} canvas`).onclick = () => {
            // Removes input focus from active element
            document.activeElement.blur()
        }

        this.interface.hideLoading()
        this.scene.start('InterfaceController')
        this.scene.start('Start')
    }

    onProgress(progress) {
        this.interface.loading.progress.scaleX = progress
    }

}
