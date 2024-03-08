/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard184 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.date;
        /** @type {Phaser.GameObjects.Text} */
        this.receiverName;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/184", "184");
        bg.setOrigin(0, 0);
        this.add(bg);

        // date
        const date = scene.add.text(611, 160, "", {});
        date.text = "undefined undefined, undefined";
        date.setStyle({ "color": "#09214b", "fixedWidth":304,"fontFamily": "Politica", "fontSize": "28px", "fontStyle": "bold" });
        date.setPadding({"left":5,"right":5});
        this.add(date);

        // receiverName
        const receiverName = scene.add.text(182, 219, "", {});
        receiverName.text = "undefined";
        receiverName.setStyle({ "color": "#09214b", "fixedWidth":446,"fontFamily": "Politica", "fontSize": "52px", "fontStyle": "bold" });
        receiverName.setPadding({"left":5,"right":5});
        this.add(receiverName);

        this.date = date;
        this.receiverName = receiverName;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
