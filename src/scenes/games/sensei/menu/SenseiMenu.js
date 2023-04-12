/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import SenseiMenuItem from "./SenseiMenuItem";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SenseiMenu extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {NinePatchContainer} */
        this.bg;


        // bg
        const bg = scene.add.ninePatchContainer(0, 0, 842, 323, "sensei", "menu/bg");
        bg.marginLeft = 60;
        bg.marginTop = 40;
        bg.marginRight = 60;
        bg.marginBottom = 45;
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
