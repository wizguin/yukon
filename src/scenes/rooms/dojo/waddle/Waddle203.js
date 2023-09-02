/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Button from "../../../components/Button";
import ShowHint from "../../../components/ShowHint";
import SeatPoint from "../../../shared_prefabs/seat/SeatPoint";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Waddle203 extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {SeatPoint} */
        this.done1;
        /** @type {SeatPoint} */
        this.done0;
        /** @type {SeatPoint} */
        this.seat1;
        /** @type {SeatPoint} */
        this.seat0;
        /** @type {number} */
        this.moveToX = 0;
        /** @type {number} */
        this.moveToY = 0;


        this.scaleX = -1;

        // mat
        const mat = scene.add.image(0, 0, "dojo", "mat/mat_1");
        mat.setOrigin(0.5018450184501845, 0.5);
        this.add(mat);

        // done1
        const done1 = new SeatPoint(scene, -30, -78);
        done1.visible = false;
        this.add(done1);

        // done0
        const done0 = new SeatPoint(scene, 69, -78);
        done0.visible = false;
        this.add(done0);

        // seat1
        const seat1 = new SeatPoint(scene, -54, -16);
        seat1.visible = false;
        this.add(seat1);

        // seat0
        const seat0 = new SeatPoint(scene, 77, -16);
        seat0.visible = false;
        this.add(seat0);

        // mat (components)
        const matButton = new Button(mat);
        matButton.spriteName = "mat/mat_1";
        matButton.activeFrame = false;
        matButton.pixelPerfect = true;
        const matShowHint = new ShowHint(mat);
        matShowHint.text = "card_hint";

        // seat1 (prefab fields)
        seat1.sitFrame = 3;
        seat1.donePoint = done0;

        // seat0 (prefab fields)
        seat0.sitFrame = 7;
        seat0.donePoint = done1;

        this.done1 = done1;
        this.done0 = done0;
        this.seat1 = seat1;
        this.seat0 = seat0;

        /* START-USER-CTR-CODE */

        mat.on('pointerup', (pointer) => {
            if (pointer.button !== 0) {
                return
            }

            this.scene.world.client.sendMove(this.moveToX, this.moveToY)
        })

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
