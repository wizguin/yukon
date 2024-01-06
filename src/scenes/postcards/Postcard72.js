/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
import GoToButton from "./buttons/GoToButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard72 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {GoToButton} */
        this.goToButton;
        /** @type {Phaser.GameObjects.Text} */
        this.name;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/72", "72");
        bg.setOrigin(0, 0);
        this.add(bg);

        // goToButton
        const goToButton = new GoToButton(scene, 631, 622);
        this.add(goToButton);

        // name
        const name = scene.add.text(24, 554, "", {});
        name.text = "PENGUIN888888";
        name.setStyle({ "align": "right", "color": "#ffffff", "fixedWidth":346,"fontFamily": "CCFaceFront", "fontSize": "34px" });
        name.setPadding({"left":5,"right":5});
        this.add(name);

        // goToButton (prefab fields)
        goToButton.roomId = 120;

        this.goToButton = goToButton;
        this.name = name;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
