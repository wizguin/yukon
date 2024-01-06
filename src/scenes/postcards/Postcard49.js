/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
import GoToButton from "./buttons/GoToButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard49 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.name;
        /** @type {GoToButton} */
        this.goToButton;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/49", "49");
        bg.setOrigin(0, 0);
        this.add(bg);

        // name
        const name = scene.add.text(127, 601, "", {});
        name.text = "Penguin88888888";
        name.setStyle({ "color": "#ffffff", "fixedWidth":354,"fontFamily": "CCFaceFront", "fontSize": "32px" });
        name.setPadding({"left":5,"right":5});
        this.add(name);

        // goToButton
        const goToButton = new GoToButton(scene, 563, 620);
        this.add(goToButton);

        // goToButton (prefab fields)
        goToButton.roomId = 120;

        this.name = name;
        this.goToButton = goToButton;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
