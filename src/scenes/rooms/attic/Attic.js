import RoomScene from '../RoomScene'

import { Animation, SimpleButton } from '@components/components'

import FourTable1 from '@scenes/shared_prefabs/tables/four/FourTable1'
import FourTable2 from '@scenes/shared_prefabs/tables/four/FourTable2'
import FourTable3 from '@scenes/shared_prefabs/tables/four/FourTable3'
import FourTable4 from '@scenes/shared_prefabs/tables/four/FourTable4'


/* START OF COMPILED CODE */

export default class Attic extends RoomScene {

    constructor() {
        super("Attic");

        /** @type {FourTable2} */
        this.table204;
        /** @type {FourTable4} */
        this.table203;
        /** @type {FourTable1} */
        this.table202;
        /** @type {FourTable4} */
        this.table201;
        /** @type {FourTable3} */
        this.table200;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|FourTable1|FourTable3|FourTable4|FourTable2>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lodge': () => this.triggerRoom(220, 1146, 562),
            'table200': () => this.triggerTable('four', 200),
            'table201': () => this.triggerTable('four', 201),
            'table202': () => this.triggerTable('four', 202),
            'table203': () => this.triggerTable('four', 203),
            'table204': () => this.triggerTable('four', 204)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("attic-pack", "assets/media/rooms/attic/attic-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-11, -6, "attic", "bg");
        bg.setOrigin(0, 0);

        // arm
        const arm = this.add.image(223, 606, "attic", "arm");
        arm.setOrigin(0.497143, 0.649402);

        // horse
        const horse = this.add.sprite(1365, 633, "attic", "horse/horse0001");
        horse.setOrigin(0.544, 0.503185);

        // box
        const box = this.add.image(-7, 964, "attic", "box");
        box.setOrigin(0, 1);

        // table204
        const table204 = new FourTable2(this, 1140, 814);
        this.add.existing(table204);

        // table203
        const table203 = new FourTable4(this, 800, 772);
        this.add.existing(table203);

        // table202
        const table202 = new FourTable1(this, 481, 774);
        this.add.existing(table202);

        // table201
        const table201 = new FourTable4(this, 861, 593);
        this.add.existing(table201);

        // table200
        const table200 = new FourTable3(this, 601, 633);
        this.add.existing(table200);

        // lists
        const sort = [box, arm, horse, table202, table200, table201, table203, table204];

        // horse (components)
        new SimpleButton(horse);
        const horseAnimation = new Animation(horse);
        horseAnimation.key = "horse/horse";
        horseAnimation.end = 67;
        horseAnimation.repeat = 0;
        horseAnimation.onHover = true;
        horseAnimation.stopOnOut = false;

        this.table204 = table204;
        this.table203 = table203;
        this.table202 = table202;
        this.table201 = table201;
        this.table200 = table200;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
