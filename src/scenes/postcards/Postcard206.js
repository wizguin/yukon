/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
import GoToButton from "./buttons/GoToButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard206 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {GoToButton} */
        this.goToButton;
        /** @type {Phaser.GameObjects.Text} */
        this.name;


        // goToButton
        const goToButton = new GoToButton(scene, 847, 613);
        this.add(goToButton);

        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/206", "206");
        bg.setOrigin(0, 0);
        this.add(bg);

        // name
        const name = scene.add.text(160, 114, "", {});
        name.text = "penguin88888888";
        name.setStyle({ "color": "#ffffff", "fixedWidth":372,"fontFamily": "CCFaceFront", "fontSize": "38px" });
        name.setPadding({"left":5,"right":5});
        this.add(name);

        // goToButton (prefab fields)
        goToButton.roomId = 340;

        this.goToButton = goToButton;
        this.name = name;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
