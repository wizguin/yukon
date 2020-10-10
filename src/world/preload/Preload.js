import Load from '../../interface/menus/load/Load'
import Start from '../../interface/menus/start/Start'


export default class Preload extends Phaser.Scene {

    preload() {
        this.baseURL = 'assets/media/interface/menus'

        this.preloadScenes({
            'load': { sceneKey: 'Load', scene: Load },
            'start': { sceneKey: 'Start', scene: Start }
        })
    }

    preloadScenes(scenes) {
        for (let key in scenes) {
            let scene = scenes[key]

            this.load.multiatlas({
                key: key,
                atlasURL: `${this.baseURL}/${key}/${key}.json`,
                path: `${this.baseURL}/${key}`
            })

            this.scene.add(scene.sceneKey, scene.scene)
        }
    }

    create() {
        this.scene.start('Start')
    }

}
