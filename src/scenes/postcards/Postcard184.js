
// You can write more code here

/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard184 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.dateTxt;
        /** @type {Phaser.GameObjects.Text} */
        this.penguin;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/184", "184");
        bg.setOrigin(0, 0);
        this.add(bg);

        // dateTxt
        const dateTxt = scene.add.text(611, 160, "", {});
        dateTxt.text = "undefined undefined, undefined";
        dateTxt.setStyle({ "color": "#09214b", "fixedWidth":304,"fontFamily": "Politica", "fontSize": "28px", "fontStyle": "bold" });
        dateTxt.setPadding({"left":5,"right":5});
        this.add(dateTxt);

        // penguin
        const penguin = scene.add.text(182, 219, "", {});
        penguin.text = "undefined";
        penguin.setStyle({ "color": "#09214b", "fixedWidth":446,"fontFamily": "Politica", "fontSize": "52px", "fontStyle": "bold" });
        penguin.setPadding({"left":5,"right":5});
        this.add(penguin);

        this.dateTxt = dateTxt;
        this.penguin = penguin;

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
