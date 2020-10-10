import Load from '../../interface/menus/load/Load'
import Start from '../../interface/menus/start/Start'


export default class Preload extends Phaser.Scene {

    preload() {
        this.baseURL = 'assets/media/interface/menus'

        this.preloadFiles([
            'load',
            'start'
        ])

        this.scene.add('Load', Load)
        this.scene.add('Start', Start)
    }

    preloadFiles(files) {
        for (let file of files) {

            this.load.multiatlas({
                key: file,
                atlasURL: `${this.baseURL}/${file}/${file}.json`,
                path: `${this.baseURL}/${file}`
            })

        }
    }

    create() {
        this.scene.start('Start')
    }

}
