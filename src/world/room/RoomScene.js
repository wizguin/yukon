export default class RoomScene extends Phaser.Scene {

    constructor(key) {
        super(key)
    }

    init(data) {
        this.network = this.game.network
        this.penguins = data.penguins
    }

    preload() {

    }

    create() {
        this._create()
        // this.scene.launch("Main");
        // this.scene.bringToTop("Main");
    }

    addPenguin() {

    }

    removePenguin() {

    }

}
