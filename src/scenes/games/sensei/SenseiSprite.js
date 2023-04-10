/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SenseiSprite extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // base
        const base = scene.add.image(0, 0, "sensei", "sensei/talk/base/base");
        base.setOrigin(0.5, 0.5009140767824497);
        this.add(base);

        // beak
        const beak = scene.add.image(39, -142, "sensei", "sensei/talk/beak/beak0001");
        beak.setOrigin(0.5, 0.5037593984962406);
        this.add(beak);

        // eyebrows
        const eyebrows = scene.add.image(-6, -179, "sensei", "sensei/talk/eyebrows/eyebrows0001");
        eyebrows.setOrigin(0.5, 0.5027624309392266);
        this.add(eyebrows);

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
