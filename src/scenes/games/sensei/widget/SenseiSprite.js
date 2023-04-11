/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SenseiSprite extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.base;
        /** @type {Phaser.GameObjects.Image} */
        this.beard;
        /** @type {Phaser.GameObjects.Image} */
        this.beak;
        /** @type {Phaser.GameObjects.Image} */
        this.eyebrows;
        /** @type {Phaser.GameObjects.Image} */
        this.front;


        // base
        const base = scene.add.image(0, 0, "sensei", "sensei/talk/base/base");
        base.setOrigin(0.501039501039501, 0.5);
        this.add(base);

        // beard
        const beard = scene.add.image(64, 120, "sensei", "sensei/talk/beard/beard0001");
        this.add(beard);

        // beak
        const beak = scene.add.image(84, -111, "sensei", "sensei/talk/beak/beak0001");
        beak.setOrigin(0.5, 0.5037593984962406);
        this.add(beak);

        // eyebrows
        const eyebrows = scene.add.image(45, -148, "sensei", "sensei/talk/eyebrows/eyebrows0001");
        eyebrows.setOrigin(0.5, 0.5027624309392266);
        this.add(eyebrows);

        // front
        const front = scene.add.image(71, 182, "sensei", "sensei/talk/front/front");
        front.setOrigin(0.5009487666034156, 0.5);
        this.add(front);

        this.base = base;
        this.beard = beard;
        this.beak = beak;
        this.eyebrows = eyebrows;
        this.front = front;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
