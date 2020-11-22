import BaseScene from '@scenes/base/BaseScene'

import InterfaceController from '@engine/interface/InterfaceController'
import WorldController from '@engine/world/WorldController'

import Load from '@scenes/interface/menus/load/Load'
import Start from '@scenes/interface/menus/start/Start'
import Login from '@scenes/interface/menus/login/Login'
import Main from '@scenes/interface/game/main/Main'


export default class Preload extends BaseScene {

    preload() {
        this.load.pack('preload', 'assets/media/preload/preload-pack.json')

        this.scene.add('InterfaceController', InterfaceController)
        this.scene.add('WorldController', WorldController)

        this.scene.add('Load', Load)
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

        this.scene.start('Start')
    }

}
