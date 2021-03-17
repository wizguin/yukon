/* START OF COMPILED CODE */

class Crate extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x, y);

        // explosion
        const explosion = scene.add.sprite(0, -35, "iglooedit", "crate/explode0001");
        explosion.setOrigin(0.5020080321285141, 0.5034013605442177);
        explosion.visible = false;
        this.add(explosion);

        this.explosion = explosion;

        /* START-USER-CTR-CODE */

        this.scene = scene
        this.tween

        scene.anims.create({
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

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    explode() {
        this.explosion.visible = true
        this.explosion.play('explode')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Crate
