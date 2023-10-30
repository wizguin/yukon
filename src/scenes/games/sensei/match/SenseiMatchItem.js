/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SenseiMatchItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.icon;
        /** @type {Phaser.GameObjects.Image} */
        this.spinner;
        /** @type {Phaser.GameObjects.Text} */
        this.username;


        // item
        const item = scene.add.image(0, 0, "main", "buddy/item");
        this.add(item);

        // icon
        const icon = scene.add.image(-137, 0, "main", "buddy/icon-player");
        icon.visible = false;
        this.add(icon);

        // spinner
        const spinner = scene.add.image(-137, 0, "main", "buddy/icon-load");
        this.add(spinner);

        // username
        const username = scene.add.text(25, 0, "", {});
        username.setOrigin(0.5, 0.5);
        username.setStyle({ "fixedWidth":270,"fontFamily": "Arial", "fontSize": "24px" });
        this.add(username);

        this.icon = icon;
        this.spinner = spinner;
        this.username = username;

        /* START-USER-CTR-CODE */

        // Spinner
        scene.tweens.add({
            targets: this.spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setItem(player) {
        if (!player) {
            clearItem()
            return
        }

        this.username.text = player

        this.spinner.visible = false
        this.icon.visible = true
    }

    clearItem() {
        this.username.text = ''

        this.icon.visible = false
        this.spinner.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
