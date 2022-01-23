import { Button } from '@components/components'

/* START OF COMPILED CODE */

export default class FloorButton extends Phaser.GameObjects.Image {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "igloocatalog", frame ?? "buy");

        /** @type {number} */
        this.floor = 0;


        this.setOrigin(0, 0);

        // this (components)
        const thisButton = new Button(this);
        thisButton.spriteName = "buy";
        thisButton.callback = () => this.scene.buyFloor(this.floor);

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
