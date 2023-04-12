/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SenseiMatchItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.icon;
        /** @type {Phaser.GameObjects.Text} */
        this.username;


        // item
        const item = scene.add.image(0, 0, "main", "buddy/item");
        this.add(item);

        // icon
        const icon = scene.add.image(-137, 0, "main", "buddy/icon-offline");
        this.add(icon);

        // username
        const username = scene.add.text(25, 0, "", {});
        username.setOrigin(0.5, 0.5);
        username.setStyle({ "fixedWidth":270,"fontFamily": "Arial", "fontSize": "24px" });
        this.add(username);

        this.icon = icon;
        this.username = username;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
