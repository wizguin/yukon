import { Button } from '@components/components'


/* START OF COMPILED CODE */

class UpgradeButton extends Phaser.GameObjects.Image {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture || "igloocatalog", frame !== undefined && frame !== null ? frame : "upgrade");

        this.setOrigin(0, 0);

        // this (components)
        const thisButton = new Button(this);
        thisButton.spriteName = "upgrade";
        thisButton.callback = () => this.scene.buyIgloo(this.igloo);

        /** @type {number} */
        this.igloo = 0;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default UpgradeButton
