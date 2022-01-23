import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class Tag2 extends Phaser.GameObjects.Image {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "clothingcatalog", frame ?? "buy2");

        /** @type {number} */
        this.item = 0;


        this.setOrigin(0, 0);

        // this (components)
        const thisButton = new Button(this);
        thisButton.spriteName = "buy2";
        thisButton.callback = () => this.scene.buy(this.item);

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
