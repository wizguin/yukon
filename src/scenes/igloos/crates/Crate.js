/* START OF COMPILED CODE */

export default class Crate extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Sprite} */
        this.explosion;


        // explosion
        const explosion = scene.add.sprite(0, -35, "iglooedit", "crate/explode0001");
        explosion.setOrigin(0.5020080321285141, 0.5034013605442177);
        explosion.visible = false;
        this.add(explosion);

        this.explosion = explosion;

        /* START-USER-CTR-CODE */

        this.scene = scene
        this.tween

        this.defaultX = x
        this.defaultY = y

        // Items that are being loaded, will be shown when crate explodes,
        // array is used to prevent new tweens from cancelling previous items
        this.items = []

        if (!scene.anims.exists('explode')) {
            this.createExplodeAnim()
        }

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    createExplodeAnim() {
        this.scene.anims.create({
            key: 'explode',
            frames: this.scene.anims.generateFrameNames('iglooedit', {
                prefix: 'crate/explode',
                start: 1,
                end: 8,
                zeroPad: 4
            }),
            frameRate: 24,
            hideOnComplete: true
        })
    }

    explode() {
        this.explosion.visible = true
        this.explosion.play('explode')

        // Clear items to load
        while (this.items.length) {
            this.items.pop().visible = true
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
