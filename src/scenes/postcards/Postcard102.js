/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard102 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.puffle;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/102", "102");
        bg.setOrigin(0, 0);
        this.add(bg);

        // puffle
        const puffle = scene.add.text(3, 640, "", {});
        puffle.text = "undefined";
        puffle.setStyle({ "align": "right", "color": "#000000", "fixedWidth":200,"fontFamily": "CCFaceFront", "fontSize": "22px" });
        puffle.setPadding({"left":5,"right":5});
        this.add(puffle);

        this.puffle = puffle;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
