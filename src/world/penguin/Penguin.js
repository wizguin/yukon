export default class Penguin extends Phaser.GameObjects.Container {

    constructor(data, scene, x, y) {
        super(scene, x, y)

        this.data = data
        this.scene = scene
        this.x = x
        this.y = y

        this.depth = y
        this.frame = 1

        this.worn = {}

        this.username = data.username
    }

}
