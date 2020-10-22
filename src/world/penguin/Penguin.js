export default class Penguin extends Phaser.GameObjects.Container {

    constructor(data, scene, x, y, penguinLoader) {
        super(scene, x, y)

        this.data = data
        this.scene = scene
        this.x = x
        this.y = y
        this.penguinLoader = penguinLoader

        this.username = data.username
        this.nameTag = penguinLoader.addName(this)
        this.worn = {}

        this.depth = y
        this.frame = 1
        this.scale = 0.666;

        penguinLoader.loadPenguin(this)
        scene.add.existing(this)
    }

}
