/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import SeatPoint from "../../../shared_prefabs/seat/SeatPoint";
import MtnSeat from "../MtnSeat";
import Zone from "../../../components/Zone";
import ShowHint from "../../../components/ShowHint";
import MoveTo from "../../../components/MoveTo";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Waddle101 extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {SeatPoint} */
        this.done2;
        /** @type {SeatPoint} */
        this.done1;
        /** @type {SeatPoint} */
        this.done0;
        /** @type {MtnSeat} */
        this.seat0;
        /** @type {MtnSeat} */
        this.seat2;
        /** @type {MtnSeat} */
        this.seat1;


        // barrier2
        const barrier2 = scene.add.image(87, 48, "mtn", "barrier_2");
        barrier2.setOrigin(0.48, 0.47761194029850745);
        this.add(barrier2);

        // barrier1
        const barrier1 = scene.add.image(23, 36, "mtn", "barrier_1");
        barrier1.angle = -14.999999999999998;
        barrier1.setOrigin(0.5, 0.45901639344262296);
        this.add(barrier1);

        // done2
        const done2 = new SeatPoint(scene, 177, -58);
        done2.visible = false;
        this.add(done2);

        // done1
        const done1 = new SeatPoint(scene, 109, -74);
        done1.visible = false;
        this.add(done1);

        // done0
        const done0 = new SeatPoint(scene, 45, -86);
        done0.visible = false;
        this.add(done0);

        // seat0
        const seat0 = new MtnSeat(scene, 0, 0);
        seat0.visible = false;
        this.add(seat0);

        // seat2
        const seat2 = new MtnSeat(scene, 142, 36);
        seat2.visible = false;
        this.add(seat2);

        // seat1
        const seat1 = new MtnSeat(scene, 53, 38);
        seat1.visible = false;
        this.add(seat1);

        // zone
        const zone = scene.add.rectangle(54, 45, 200, 90);
        zone.angle = 11;
        zone.visible = false;
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;
        this.add(zone);

        // seat0 (prefab fields)
        seat0.sitFrame = 18;
        seat0.donePoint = done0;

        // seat2 (prefab fields)
        seat2.sitFrame = 18;
        seat2.donePoint = done2;

        // seat1 (prefab fields)
        seat1.sitFrame = 18;
        seat1.donePoint = done1;

        // zone (components)
        new Zone(zone);
        const zoneShowHint = new ShowHint(zone);
        zoneShowHint.text = "sled_hint";
        const zoneMoveTo = new MoveTo(zone);
        zoneMoveTo.x = 646;
        zoneMoveTo.y = 630;

        this.done2 = done2;
        this.done1 = done1;
        this.done0 = done0;
        this.seat0 = seat0;
        this.seat2 = seat2;
        this.seat1 = seat1;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
