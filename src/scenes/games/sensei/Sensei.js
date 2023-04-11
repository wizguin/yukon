export const preload = {
    key: 'sensei-pack',
    url: 'assets/media/games/sensei/sensei-pack.json',
    loadString: ['loading', 'sensei']
}

/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import SenseiSprite from "./SenseiSprite";
import SenseiBelt from "./SenseiBelt";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Sensei extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 409, y ?? 350);

        /** @type {SenseiSprite} */
        this.sensei;
        /** @type {SenseiBelt} */
        this.belt;
        /** @type {Phaser.GameObjects.Image} */
        this.bubble;
        /** @type {Phaser.GameObjects.Text} */
        this.dialog;


        // bg
        const bg = scene.add.image(189, 212, "sensei", "bg");
        this.add(bg);

        // sensei
        const sensei = new SenseiSprite(scene, -237, -21);
        this.add(sensei);

        // belt
        const belt = new SenseiBelt(scene, 697, 218);
        this.add(belt);

        // bubble
        const bubble = scene.add.image(522, -149, "sensei", "bubble");
        bubble.setOrigin(0.5004574565416285, 0.5);
        this.add(bubble);

        // dialog
        const dialog = scene.add.text(548, -221, "", {});
        dialog.setOrigin(0.5, 0.5);
        dialog.text = "This example text\nI have put it on three lines\nNot a good haiku";
        dialog.setStyle({ "align": "center", "color": "#000", "fixedWidth":1030,"fontFamily": "CCComiccrazy", "fontSize": "40px" });
        this.add(dialog);

        this.sensei = sensei;
        this.belt = belt;
        this.bubble = bubble;
        this.dialog = dialog;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
