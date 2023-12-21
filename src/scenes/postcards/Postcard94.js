
// You can write more code here

/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
import GoToButton from "./buttons/GoToButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard94 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.name;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/94", "94");
        bg.setOrigin(0, 0);
        this.add(bg);

        // goToButton
        const goToButton = new GoToButton(scene, 853, 623);
        this.add(goToButton);

        // name
        const name = scene.add.text(473, 606, "", {});
        name.text = "penguin88888888";
        name.setStyle({ "color": "#000000", "fixedWidth":372,"fontFamily": "CCFaceFront", "fontSize": "30px" });
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
