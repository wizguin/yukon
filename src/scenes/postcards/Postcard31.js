/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
import GoToButton from "./buttons/GoToButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard31 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.name;
        /** @type {GoToButton} */
        this.goToButton;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/31", "31");
        bg.setOrigin(0, 0);
        this.add(bg);

        // name
        const name = scene.add.text(303, 188, "", {});
        name.text = "penguin88888888";
        name.setStyle({ "align": "center", "color": "#0e2828", "fixedWidth":372,"fontFamily": "CCFaceFront", "fontSize": "38px" });
        name.setPadding({"left":5,"right":5});
        this.add(name);

        // goToButton
        const goToButton = new GoToButton(scene, 831, 611);
        this.add(goToButton);

        // goToButton (prefab fields)
        goToButton.roomId = 340;

        this.name = name;
        this.goToButton = goToButton;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
