/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
import GoToButton from "./buttons/GoToButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard21 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.name;
        /** @type {GoToButton} */
        this.goToButton;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/21", "21");
        bg.setOrigin(0, 0);
        this.add(bg);

        // name
        const name = scene.add.text(44, 558, "", {});
        name.text = "penguin88888888";
        name.setStyle({ "color": "#000066", "fixedWidth":424,"fontFamily": "CCFaceFront", "fontSize": "40px" });
        name.setPadding({"left":5,"right":5});
        this.add(name);

        // goToButton
        const goToButton = new GoToButton(scene, 847, 616);
        this.add(goToButton);

        // goToButton (prefab fields)
        goToButton.roomId = 806;

        this.name = name;
        this.goToButton = goToButton;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
