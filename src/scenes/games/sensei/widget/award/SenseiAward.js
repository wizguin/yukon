/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */

import BeltColors from '../../config/BeltColors'

/* END-USER-IMPORTS */

export default class SenseiAward extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.belt;
        /** @type {Phaser.GameObjects.Image} */
        this.color;
        /** @type {Phaser.GameObjects.Image} */
        this.shadow;
        /** @type {Phaser.GameObjects.Image} */
        this.ninja;


        // belt
        const belt = scene.add.image(0, 0, "sensei", "belt/belt");
        belt.setOrigin(0.5009784735812133, 0.5);
        this.add(belt);

        // color
        const color = scene.add.image(4, -1, "sensei", "belt/color");
        color.setOrigin(0.503448275862069, 0.5);
        this.add(color);

        // shadow
        const shadow = scene.add.image(1, 6, "sensei", "belt/shadow");
        shadow.setOrigin(0.5, 0.5014492753623189);
        this.add(shadow);

        // ninja
        const ninja = scene.add.image(0, 0, "sensei", "mask/mask");
        ninja.setOrigin(0.500823723228995, 0.5);
        ninja.visible = false;
        this.add(ninja);

        this.belt = belt;
        this.color = color;
        this.shadow = shadow;
        this.ninja = ninja;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    showBelt(rank) {
        this.showBeltSprites(true)
        this.color.tint = BeltColors[rank - 1]

        this.show()
    }

    showMask() {
        this.showBeltSprites(false)
        this.show()
    }

    show() {
        super.show()

        this.addTweens()
    }

    showBeltSprites(show) {
        this.ninja.visible = !show
        this.shadow.visible = show
        this.color.visible = show
        this.belt.visible = show
    }

    addTweens() {
        // Fade
        this.scene.tweens.add({
            targets: this,
            alpha: { from: 0, to: 1 },
            duration: 1450
        })

        // Float
        this.scene.tweens.add({
            targets: this,
            y: this.y + 10,
            duration: 333,
            repeat: -1,
            yoyo: true,
            ease: Phaser.Math.Easing.Quadratic.InOut
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
