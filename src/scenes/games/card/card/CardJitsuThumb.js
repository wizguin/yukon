/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CardJitsuThumb extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.color;
        /** @type {Phaser.GameObjects.Image} */
        this.element;


        // back
        const back = scene.add.image(0, 0, "cardjitsu", "card/thumbnail/back");
        this.add(back);

        // color
        const color = scene.add.image(-2, -2, "cardjitsu", "card/thumbnail/color");
        color.tintTopLeft = 1132705;
        color.tintTopRight = 1132705;
        color.tintBottomLeft = 1132705;
        color.tintBottomRight = 1132705;
        this.add(color);

        // element
        const element = scene.add.image(0, 0, "cardjitsu", "card/thumbnail/f");
        element.setOrigin(0.5, 0.5102040816326531);
        this.add(element);

        this.color = color;
        this.element = element;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
