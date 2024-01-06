/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
import GoToButton from "./buttons/GoToButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard58 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {GoToButton} */
        this.goToButton;
        /** @type {Phaser.GameObjects.Text} */
        this.name;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/58", "58");
        bg.setOrigin(0, 0);
        this.add(bg);

        // goToButton
        const goToButton = new GoToButton(scene, 804, 617);
        this.add(goToButton);

        // name
        const name = scene.add.text(173, 567, "", {});
        name.text = "TEST NAME123";
        name.setStyle({ "color": "#ffffff", "fixedWidth":412,"fontFamily": "CCFaceFront", "fontSize": "32px", "fontStyle": "italic" });
        name.setPadding({"left":5,"right":5});
        this.add(name);

        // goToButton (prefab fields)
        goToButton.roomId = 808;

        this.goToButton = goToButton;
        this.name = name;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
