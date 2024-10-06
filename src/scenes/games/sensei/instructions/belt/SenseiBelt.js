/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import SimpleButton from "../../../../components/SimpleButton";
/* START-USER-IMPORTS */

import BeltColors from '../../config/BeltColors'

/* END-USER-IMPORTS */

export default class SenseiBelt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.color;


        // belt
        const belt = scene.add.image(0, 0, "senseiinstructions", "belt/belt");
        belt.setOrigin(0.503030303030303, 0.5037037037037037);
        this.add(belt);

        // color
        const color = scene.add.image(1, -1, "senseiinstructions", "belt/color");
        color.setOrigin(0.503448275862069, 0.5);
        this.add(color);

        // shadow
        const shadow = scene.add.image(1, 4, "senseiinstructions", "belt/shadow");
        shadow.setOrigin(0.503448275862069, 0.5);
        this.add(shadow);

        // belt (components)
        const beltSimpleButton = new SimpleButton(belt);
        beltSimpleButton.callback = () => this.onBeltClick();

        this.color = color;

        /* START-USER-CTR-CODE */

        this.current = 0
        this.tween = null

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        this.current = 0

        // Float
        this.tween = this.scene.tweens.add({
            targets: this,
            y: this.y + 10,
            duration: 333,
            repeat: -1,
            yoyo: true,
            ease: Phaser.Math.Easing.Quadratic.InOut
        })

        this.updateColor()

        super.show()
    }

    onBeltClick() {
        this.current = (this.current + 1) % BeltColors.length

        this.updateColor()
    }

    updateColor() {
        this.color.tint = BeltColors[this.current]
    }

    stop() {
        if (this.tween) {
            this.tween.stop()
            this.tween = null
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
