/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CardsView extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.bg;


        // bg
        const bg = scene.add.image(0, 0, "ninjaprogress", "bg/2");
        this.add(bg);

        // scroll
        const scroll = scene.add.image(470, 21, "ninjaprogress", "scroll/scroll");
        this.add(scroll);

        // down
        const down = scene.add.image(470, 238, "ninjaprogress", "scroll/down");
        this.add(down);

        // up
        const up = scene.add.image(470, -193, "ninjaprogress", "scroll/up");
        this.add(up);

        // down (components)
        const downButton = new Button(down);
        downButton.spriteName = "scroll/down";

        // up (components)
        const upButton = new Button(up);
        upButton.spriteName = "scroll/up";

        this.bg = bg;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

