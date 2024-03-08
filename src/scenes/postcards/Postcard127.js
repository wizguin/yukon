/* START OF COMPILED CODE */

import BasePostcard from "./base/BasePostcard";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Postcard127 extends BasePostcard {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.receiverName;


        // bg
        const bg = scene.add.image(0, 0, "postcards/sprites/127", "127");
        bg.setOrigin(0, 0);
        this.add(bg);

        // receiverName
        const receiverName = scene.add.text(522, 586, "", {});
        receiverName.text = "undefined";
        receiverName.setStyle({ "color": "#9a0000", "fixedWidth":502,"fontFamily": "CCFaceFront", "fontSize": "50px", "fontStyle": "bold italic", "strokeThickness":8});
        receiverName.setPadding({"left":5,"right":5});
        this.add(receiverName);

        this.receiverName = receiverName;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
