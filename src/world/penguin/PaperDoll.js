import PaperDollLoader from './loader/PaperDollLoader'


export default class PaperDoll extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x, y)

        this.paperDollLoader = new PaperDollLoader(this)
    }

    loadPaperDoll(penguin) {
        this.removeAll(true)
        this.paperDollLoader.loadItems(penguin)
    }

    onPaperClick(item) {
        console.log(item)
    }

}
