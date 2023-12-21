
// You can write more code here

/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard109 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.puffle;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/109", "109");
        bg.setOrigin(0, 0);
        this.add(bg);

        // puffle
        const puffle = scene.add.text(145, 547, "", {});
        puffle.text = "undefined";
        puffle.setStyle({ "align": "right", "color": "#0e2828", "fixedWidth":372,"fontFamily": "CCFaceFront", "fontSize": "38px" });
        puffle.setPadding({"left":5,"right":5});
        this.add(puffle);

        this.puffle = puffle;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
