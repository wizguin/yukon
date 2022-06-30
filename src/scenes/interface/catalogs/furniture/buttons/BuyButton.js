import BaseImage from '@scenes/base/BaseImage'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class BuyButton extends BaseImage {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "furniturecatalog", frame ?? "buy");

        /** @type {number} */
        this.item = 0;


        this.setOrigin(0, 0);

        // this (components)
        const thisButton = new Button(this);
        thisButton.spriteName = "buy";
        thisButton.callback = () => this.interface.prompt.showFurniture(this.item);

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
