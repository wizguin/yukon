/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard100 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.details;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/100", "100");
        bg.setOrigin(0, 0);
        this.add(bg);

        // details
        const details = scene.add.text(223, 570, "", {});
        details.text = "undefined";
        details.setStyle({ "align": "right", "color": "#ffffff", "fixedWidth":436,"fontFamily": "CCFaceFront", "fontSize": "26px" });
        details.setPadding({"left":5,"right":5});
        this.add(details);

        this.details = details;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
