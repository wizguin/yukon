
// You can write more code here

/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard127 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.penguin;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/127", "127");
        bg.setOrigin(0, 0);
        this.add(bg);

        // penguin
        const penguin = scene.add.text(522, 586, "", {});
        penguin.text = "undefined";
        penguin.setStyle({ "color": "#9a0000", "fixedWidth":502,"fontFamily": "CCFaceFront", "fontSize": "50px", "fontStyle": "bold italic", "strokeThickness":8});
        penguin.setPadding({"left":5,"right":5});
        this.add(penguin);

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
