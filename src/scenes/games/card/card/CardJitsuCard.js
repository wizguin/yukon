/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CardJitsuCard extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.shadow;
        /** @type {Phaser.GameObjects.Image} */
        this.back;
        /** @type {Phaser.GameObjects.Sprite} */
        this.glow;
        /** @type {Phaser.GameObjects.Image} */
        this.color;
        /** @type {Phaser.GameObjects.Image} */
        this.attribute;
        /** @type {Phaser.GameObjects.Image} */
        this.disabled;


        // shadow
        const shadow = scene.add.image(245, 275, "cardjitsu", "card/shadow");
        shadow.setOrigin(0.5010660980810234, 0.500945179584121);
        this.add(shadow);

        // back
        const back = scene.add.image(235, 265, "cardjitsu", "card/back");
        back.setOrigin(0.5010660980810234, 0.500945179584121);
        back.visible = false;
        this.add(back);

        // glow
        const glow = scene.add.sprite(238, 259, "cardjitsu", "card/glow0001");
        glow.setOrigin(0.5008695652173913, 0.5);
        glow.visible = false;
        this.add(glow);

        // color
        const color = scene.add.image(235, 265, "cardjitsu", "card/color");
        color.setOrigin(0.5010660980810234, 0.500945179584121);
        this.add(color);

        // attribute
        const attribute = scene.add.image(68, 72, "cardjitsu", "card/fire");
        attribute.setOrigin(0.5, 0.5051546391752577);
        this.add(attribute);

        // disabled
        const disabled = scene.add.image(235, 265, "cardjitsu", "card/disabled");
        disabled.setOrigin(0.5010660980810234, 0.500945179584121);
        disabled.visible = false;
        this.add(disabled);

        this.shadow = shadow;
        this.back = back;
        this.glow = glow;
        this.color = color;
        this.attribute = attribute;
        this.disabled = disabled;

        /* START-USER-CTR-CODE */

        this.glow.anims.play('card/glow')

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
