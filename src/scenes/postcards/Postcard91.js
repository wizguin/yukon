
// You can write more code here

/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
import GoToButton from "./buttons/GoToButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard91 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.name;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/91", "91");
        bg.setOrigin(0, 0);
        this.add(bg);

        // goToButton
        const goToButton = new GoToButton(scene, 224, 581);
        this.add(goToButton);

        // name
        const name = scene.add.text(41, 185, "", {});
        name.text = "penguin888888888";
        name.setStyle({ "align": "center", "color": "#330066", "fixedWidth":394,"fontFamily": "CCFaceFront", "fontSize": "36px" });
        name.setPadding({"left":5,"right":5});
        this.add(name);

        this.name = name;

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
