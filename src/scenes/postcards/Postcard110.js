
// You can write more code here

/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard110 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.puffle;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/110", "110");
        bg.setOrigin(0, 0);
        this.add(bg);

        // puffle
        const puffle = scene.add.text(260, 518, "", {});
        puffle.text = "undefined";
        puffle.setStyle({ "align": "center", "color": "#083a9b", "fixedWidth":438,"fontFamily": "CCFaceFront", "fontSize": "30px" });
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