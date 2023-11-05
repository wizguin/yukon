/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import SeatPoint from "../../../shared_prefabs/seat/SeatPoint";
import MtnSeat from "../MtnSeat";
import Zone from "../../../components/Zone";
import ShowHint from "../../../components/ShowHint";
import MoveTo from "../../../components/MoveTo";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Waddle103 extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {SeatPoint} */
        this.done1;
        /** @type {SeatPoint} */
        this.done0;
        /** @type {MtnSeat} */
        this.seat1;
        /** @type {MtnSeat} */
        this.seat0;


        // barrier
        const barrier = scene.add.image(66, 29, "mtn", "barrier_1");
        barrier.setOrigin(0.5, 0.45901639344262296);
        barrier.flipX = true;
        this.add(barrier);

        // done1
        const done1 = new SeatPoint(scene, 11, -75);
        done1.visible = false;
        this.add(done1);

        // done0
        const done0 = new SeatPoint(scene, -88, -25);
        done0.visible = false;
        this.add(done0);

        // seat1
        const seat1 = new MtnSeat(scene, 101, 3);
        seat1.visible = false;
        this.add(seat1);

        // seat0
        const seat0 = new MtnSeat(scene, 40, 44);
        seat0.visible = false;
        this.add(seat0);

        // zone
        const zone = scene.add.rectangle(64, 34, 160, 95);
        zone.angle = -35;
        zone.visible = false;
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;
        this.add(zone);

        // seat1 (prefab fields)
        seat1.sitFrame = 24;
        seat1.donePoint = done1;

        // seat0 (prefab fields)
        seat0.sitFrame = 24;
        seat0.donePoint = done0;

        // zone (components)
        new Zone(zone);
        const zoneShowHint = new ShowHint(zone);
        zoneShowHint.text = "sled_hint";
        const zoneMoveTo = new MoveTo(zone);
        zoneMoveTo.x = 1068;
        zoneMoveTo.y = 610;

        this.done1 = done1;
        this.done0 = done0;
        this.seat1 = seat1;
        this.seat0 = seat0;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
