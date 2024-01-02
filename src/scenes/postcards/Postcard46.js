/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard46 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.name;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/46", "46");
        bg.setOrigin(0, 0);
        this.add(bg);

        // name
        const name = scene.add.text(668, 585, "", {});
        name.angle = -15;
        name.text = "TEST NAME123";
        name.setStyle({ "color": "#000000", "fixedWidth":354,"fontFamily": "Comic Sans MS", "fontSize": "28px" });
        name.setPadding({"left":5,"right":5});
        this.add(name);

        this.name = name;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
