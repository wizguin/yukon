import BaseScene from '@scenes/base/BaseScene'

import Start from '@scenes/interface/menus/start/Start'
import Login from '@scenes/interface/menus/login/Login'
import PenguinSelect from '@scenes/interface/menus/login/penguin_select/PenguinSelect'
import PenguinLogin from '@scenes/interface/menus/login/penguin_login/PenguinLogin'
import Servers from '@scenes/interface/menus/servers/Servers'
import Main from '@scenes/interface/game/main/Main'
import IglooEdit from '@scenes/interface/game/iglooedit/IglooEdit'


export default class Preload extends BaseScene {

    preload() {
        this.load.cacheBuster = VERSION

        this.load.on('progress', this.onProgress, this)

        WebFont.load(this.crumbs.fonts)

        this.load.pack('preload', 'assets/media/preload/preload-pack.json')

        this.scene.add('Start', Start)
        this.scene.add('Login', Login)
        this.scene.add('PenguinSelect', PenguinSelect)
        this.scene.add('PenguinLogin', PenguinLogin)
        this.scene.add('Servers', Servers)
        this.scene.add('Main', Main)
        this.scene.add('IglooEdit', IglooEdit)
    }

    create() {
        let parent = this.game.config.parent

        document.querySelector(`#${parent} canvas`).onclick = () => {
            // Removes input focus from active element
            document.activeElement.blur()
        }

        // Set crumbs
        let crumbs = this.cache.json.get('crumbs')

        this.crumbs.colors = crumbs.colors
        this.crumbs.flooring = crumbs.flooring
        this.crumbs.furniture = crumbs.furniture
        this.crumbs.igloos = crumbs.igloos
        this.crumbs.items = crumbs.items
        this.crumbs.penguin = crumbs.penguin
        this.crumbs.quickKeys = crumbs.quick_keys
        this.crumbs.safeMessages = crumbs.safe_messages
        this.crumbs.secretFrames = crumbs.secret_frames
        this.crumbs.strings = crumbs.strings
        this.crumbs.worlds = crumbs.worlds

        // Start
        this.interface.hideLoading()
        this.scene.start('InterfaceController')
        this.scene.start('Start')
    }

    onProgress(progress) {
        this.interface.loading.progress.scaleX = progress
    }

}
