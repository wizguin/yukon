import BaseImage from '@scenes/base/BaseImage'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class UpgradeButton extends BaseImage {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "igloocatalog", frame ?? "upgrade");

        /** @type {number} */
        this.igloo = 0;


        this.setOrigin(0, 0);

        // this (components)
        const thisButton = new Button(this);
        thisButton.spriteName = "upgrade";
        thisButton.callback = () => this.interface.prompt.showIgloo(this.igloo);

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
