import { Button } from '@components/components'

/* START OF COMPILED CODE */

class FloorButton extends Phaser.GameObjects.Image {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture || "igloocatalog", frame !== undefined && frame !== null ? frame : "buy");

        this.setOrigin(0, 0);

        // this (components)
        const thisButton = new Button(this);
        thisButton.spriteName = "buy";
        thisButton.callback = () => this.scene.buyFloor(this.floor);

        /** @type {number} */
        this.floor = 0;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default FloorButton
