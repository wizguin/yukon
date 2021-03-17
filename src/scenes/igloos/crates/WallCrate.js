import Crate from './Crate'


/* START OF COMPILED CODE */

class WallCrate extends Crate {

    constructor(scene, x, y) {
        super(scene, x, y);

        // crate
        const crate = scene.add.sprite(0, 0, "iglooedit", "crate/wall_box0001");
        crate.visible = false;
        this.add(crate);

        this.crate = crate;

        /* START-USER-CTR-CODE */

        this.crate.on('animationcomplete', () => this.onComplete())

        scene.anims.create({
            key: 'wall_crate',
            frames: this.scene.anims.generateFrameNames('iglooedit', {
                prefix: 'crate/wall_box',
                start: 1,
                end: 14,
                zeroPad: 4
            }),
            frameRate: 24
        })

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    drop() {
        this.crate.visible = true
        this.explosion.visible = false
        this.crate.scale = 1

        if (this.tween) {
            this.tween.remove()
            this.tween = null
        }

        this.crate.play('wall_crate')
    }

    onComplete() {
        this.tween = this.scene.tweens.add({
            targets: this.crate,
            scale: { from: 1, to: 0.68 },
            duration: 100,
            onComplete: () => {
                this.crate.visible = false
                this.explode()
            }
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default WallCrate
