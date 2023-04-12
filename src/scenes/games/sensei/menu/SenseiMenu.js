/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import SenseiMenuItem from "./SenseiMenuItem";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SenseiMenu extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.bg;


        // bg
        const bg = scene.add.image(0, 0, "sensei", "menu/bg");
        bg.setOrigin(0.5, 0.5015197568389058);
        this.add(bg);

        // senseiMenuItem
        const senseiMenuItem = new SenseiMenuItem(scene, 0, -94);
        this.add(senseiMenuItem);

        this.bg = bg;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
