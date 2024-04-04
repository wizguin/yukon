import Crate from './Crate'


/* START OF COMPILED CODE */

export default class RoomCrate extends Crate {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.crate;
        /** @type {Phaser.GameObjects.Sprite} */
        this.spinner;


        // crate
        const crate = scene.add.image(0, -44, "iglooedit", "crate/room_box");
        crate.visible = false;
        this.add(crate);

        // spinner
        const spinner = scene.add.sprite(42, -35, "iglooedit", "crate/spinner0001");
        spinner.setOrigin(0.5, 0.5094339622641509);
        spinner.visible = false;
        this.add(spinner);

        this.crate = crate;
        this.spinner = spinner;

        /* START-USER-CTR-CODE */

        this.explosion.scale = 1.47

        if (!scene.anims.exists('crate_spinner')) {
            this.createCrateAnim()
        }

        spinner.anims.play('crate_spinner')

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    createCrateAnim() {
        this.scene.anims.create({
            key: 'crate_spinner',
            frames: this.scene.anims.generateFrameNames('iglooedit', {
                prefix: 'crate/spinner',
                start: 1,
                end: 20,
                zeroPad: 4
            }),
            repeat: -1,
            frameRate: 24
        })
    }

    drop(item) {
        this.items.push(item)

        this.spinner.visible = true
        this.crate.visible = true
        this.explosion.visible = false
        this.scale = 1

        if (this.tween) {
            this.tween.stop()
            this.tween = null
        }

        this.tween = this.scene.tweens.add({
            targets: this,
            y: { from: this.defaultY - 700, to: this.defaultY },
            duration: 800,
            ease: 'Cubic',
            onComplete: () => this.onComplete()
        })
    }

    onComplete() {
        this.tween = this.scene.tweens.add({
            targets: this,
            scale: { from: 1, to: 0.68 },
            duration: 100,
            onComplete: () => {
                this.spinner.visible = false
                this.crate.visible = false
                this.explode()
            }
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
