/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Button from "../../components/Button";
import ShowHint from "../../components/ShowHint";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CardTable1 extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {number} */
        this.moveToX = 0;
        /** @type {number} */
        this.moveToY = 0;


        // mat
        const mat = scene.add.image(0, 0, "dojo", "mat/mat_1");
        mat.setOrigin(0.5018450184501845, 0.5);
        this.add(mat);

        // mat (components)
        const matButton = new Button(mat);
        matButton.spriteName = "mat/mat_1";
        matButton.activeFrame = false;
        matButton.pixelPerfect = true;
        const matShowHint = new ShowHint(mat);
        matShowHint.text = "card_hint";

        /* START-USER-CTR-CODE */

        mat.on('pointerup', (pointer) => this.onPointerUp(pointer))

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onPointerUp(pointer) {
        if (pointer.button !== 0) {
            return
        }

        this.scene.world.client.sendMove(this.moveToX, this.moveToY)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
