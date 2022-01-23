import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class PhotoButton extends Phaser.GameObjects.Image {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "clothingcatalog", frame ?? "photo_button");

        /** @type {number} */
        this.item = 0;


        // this (components)
        const thisButton = new Button(this);
        thisButton.spriteName = "photo_button";
        thisButton.callback = () => this.scene.buy(this.item);
        thisButton.activeFrame = false;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
