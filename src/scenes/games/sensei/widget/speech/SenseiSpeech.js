/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SenseiSpeech extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.dialog;


        // bubble
        const bubble = scene.add.image(0, 0, "sensei", "bubble");
        bubble.setOrigin(0.5004574565416285, 0.5);
        this.add(bubble);

        // dialog
        const dialog = scene.add.text(26, -72, "", {});
        dialog.setOrigin(0.5, 0.5);
        dialog.text = "This example text\nI have put it on three lines\nNot a good haiku";
        dialog.setStyle({ "align": "center", "color": "#000", "fixedWidth":1030,"fontFamily": "CCComiccrazy", "fontSize": "40px" });
        this.add(dialog);

        this.dialog = dialog;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(text) {
        this.dialog.text = text

        super.show()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
