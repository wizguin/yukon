/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard120 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/120", "120");
        bg.setOrigin(0, 0);
        this.add(bg);

        // goto_button
        const goto_button = scene.add.image(452, 618, "mail", "goto_button");
        goto_button.setOrigin(0.5031847133757962, 0.5);
        this.add(goto_button);

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
