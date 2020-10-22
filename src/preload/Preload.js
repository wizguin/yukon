import Load from '@/interface/menus/load/Load'
import Start from '@/interface/menus/start/Start'
import Login from '@/interface/menus/login/Login'
import World from '@/world/World'


export default class Preload extends Phaser.Scene {

    preload() {
        this.load.pack('preload', 'assets/media/preload/preload-pack.json')

        this.scene.add('Load', Load)
        this.scene.add('Start', Start)
        this.scene.add('Login', Login)
        this.scene.add('World', World)
    }

    create() {
        this.scene.start('Login')
    }

}
