import BaseScene from '@scenes/base/BaseScene'

import InterfaceController from '@scenes/interface/InterfaceController'
import WorldController from '@scenes/world/WorldController'

import Load from '@scenes/interface/menus/load/Load'
import Start from '@scenes/interface/menus/start/Start'
import Login from '@scenes/interface/menus/login/Login'


export default class Preload extends BaseScene {

    preload() {
        this.load.pack('preload', 'assets/media/preload/preload-pack.json')

        this.scene.add('InterfaceController', InterfaceController)
        this.scene.add('WorldController', WorldController)

        this.scene.add('Load', Load)
        this.scene.add('Start', Start)
        this.scene.add('Login', Login)
    }

    create() {
        this.scene.start('Start')
    }

}
