/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard130 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.penguin;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/130", "130");
        bg.setOrigin(0, 0);
        this.add(bg);

        // penguin
        const penguin = scene.add.text(383, 25, "", {});
        penguin.text = "undefined";
        penguin.setStyle({ "color": "#000b71", "fixedWidth":436,"fontFamily": "Comic Sans MS", "fontSize": "32px", "fontStyle": "bold" });
        penguin.setPadding({"left":5,"right":5});
        this.add(penguin);

        this.penguin = penguin;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
