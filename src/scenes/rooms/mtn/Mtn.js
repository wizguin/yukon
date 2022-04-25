import RoomScene from '../RoomScene'

import { Animation, Zone } from '@components/components'

import MtnSeat from './MtnSeat'


/* START OF COMPILED CODE */

export default class Mtn extends RoomScene {

    constructor() {
        super("Mtn");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;
        /** @type {MtnSeat[]} */
        this.seats100;
        /** @type {MtnSeat[]} */
        this.seats101;
        /** @type {MtnSeat[]} */
        this.seats102;
        /** @type {MtnSeat[]} */
        this.seats103;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 480, 560),
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("mtn-pack", "assets/media/rooms/mtn/mtn-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-21, -19, "mtn", "bg");
        bg.setOrigin(0, 0);

        // chair
        const chair = this.add.sprite(846, 75, "mtn", "chair/chair0001");
        chair.setOrigin(0, 0);

        // mountain
        const mountain = this.add.image(-21, 214, "mtn", "mountain");
        mountain.setOrigin(0, 0);

        // pole
        const pole = this.add.image(727, 359, "mtn", "pole");
        pole.setOrigin(0.6204081632653061, 0.9194630872483222);

        // sled
        const sled = this.add.image(532, 284, "mtn", "sled");
        sled.setOrigin(0.8289473684210527, 0.7647058823529411);

        // catalog_small
        const catalog_small = this.add.image(520, 407, "mtn", "catalog_small");
        catalog_small.setOrigin(0.49230769230769234, 3.685185185185185);

        // barrier_1
        const barrier_1 = this.add.image(282, 533, "mtn", "barrier_1");
        barrier_1.setOrigin(0.5, 0.45901639344262296);

        // barrier_1_1
        const barrier_1_1 = this.add.image(341, 572, "mtn", "barrier_1");
        barrier_1_1.setOrigin(0.5, 0.45901639344262296);

        // barrier_1_2
        const barrier_1_2 = this.add.image(404, 612, "mtn", "barrier_1");
        barrier_1_2.setOrigin(0.5, 0.45901639344262296);

        // barrier_1_3
        const barrier_1_3 = this.add.image(584, 697, "mtn", "barrier_1");
        barrier_1_3.angle = -15;
        barrier_1_3.setOrigin(0.5, 0.45901639344262296);

        // barrier_2
        const barrier_2 = this.add.image(654, 707, "mtn", "barrier_2");
        barrier_2.setOrigin(0.48, 0.47761194029850745);

        // barrier_2_1
        const barrier_2_1 = this.add.image(902, 747, "mtn", "barrier_2");
        barrier_2_1.setOrigin(0.48, 0.47761194029850745);

        // barrier_1_4
        const barrier_1_4 = this.add.image(1120, 651, "mtn", "barrier_1");
        barrier_1_4.setOrigin(0.5, 0.45901639344262296);
        barrier_1_4.flipX = true;

        // mtnSeat11
        const mtnSeat11 = new MtnSeat(this, 1155, 638);
        this.add.existing(mtnSeat11);
        mtnSeat11.visible = false;

        // mtnSeat10
        const mtnSeat10 = new MtnSeat(this, 1093, 676);
        this.add.existing(mtnSeat10);
        mtnSeat10.visible = false;

        // mtnSeat9
        const mtnSeat9 = new MtnSeat(this, 955, 744);
        this.add.existing(mtnSeat9);
        mtnSeat9.visible = false;

        // mtnSeat8
        const mtnSeat8 = new MtnSeat(this, 857, 745);
        this.add.existing(mtnSeat8);
        mtnSeat8.visible = false;

        // mtnSeat7
        const mtnSeat7 = new MtnSeat(this, 698, 703);
        this.add.existing(mtnSeat7);
        mtnSeat7.visible = false;

        // mtnSeat6
        const mtnSeat6 = new MtnSeat(this, 561, 673);
        this.add.existing(mtnSeat6);
        mtnSeat6.visible = false;

        // mtnSeat5
        const mtnSeat5 = new MtnSeat(this, 612, 713);
        this.add.existing(mtnSeat5);
        mtnSeat5.visible = false;

        // mtnSeat4
        const mtnSeat4 = new MtnSeat(this, 252, 519);
        this.add.existing(mtnSeat4);
        mtnSeat4.visible = false;

        // mtnSeat3
        const mtnSeat3 = new MtnSeat(this, 307, 550);
        this.add.existing(mtnSeat3);
        mtnSeat3.visible = false;

        // mtnSeat2
        const mtnSeat2 = new MtnSeat(this, 369, 590);
        this.add.existing(mtnSeat2);
        mtnSeat2.visible = false;

        // mtnSeat1
        const mtnSeat1 = new MtnSeat(this, 433, 618);
        this.add.existing(mtnSeat1);
        mtnSeat1.visible = false;

        // express
        const express = this.add.image(1065, 809, "mtn", "express");
        express.setOrigin(0.4647887323943662, 0.875);

        // penguin_run
        const penguin_run = this.add.image(524, 606, "mtn", "penguin_run");
        penguin_run.setOrigin(0.6390977443609023, 0.943089430894309);

        // zone4
        const zone4 = this.add.rectangle(1127, 657, 180, 90);
        zone4.angle = -33;
        zone4.visible = false;
        zone4.alpha = 0.5;
        zone4.isFilled = true;
        zone4.fillColor = 65280;

        // zone3
        const zone3 = this.add.rectangle(899, 753, 180, 90);
        zone3.visible = false;
        zone3.alpha = 0.5;
        zone3.isFilled = true;
        zone3.fillColor = 65280;

        // zone2
        const zone2 = this.add.rectangle(633, 709, 200, 90);
        zone2.angle = 11;
        zone2.visible = false;
        zone2.alpha = 0.5;
        zone2.isFilled = true;
        zone2.fillColor = 65280;

        // zone1
        const zone1 = this.add.rectangle(334, 568, 230, 90);
        zone1.angle = 33;
        zone1.visible = false;
        zone1.alpha = 0.5;
        zone1.isFilled = true;
        zone1.fillColor = 65280;

        // lists
        const sort = [penguin_run, express, pole];
        const seats100 = [mtnSeat4, mtnSeat3, mtnSeat2, mtnSeat1];
        const seats101 = [mtnSeat6, mtnSeat5, mtnSeat7];
        const seats102 = [mtnSeat8, mtnSeat9];
        const seats103 = [mtnSeat10, mtnSeat11];

        // chair (components)
        const chairAnimation = new Animation(chair);
        chairAnimation.key = "chair/chair";
        chairAnimation.end = 87;

        // mtnSeat11 (prefab fields)
        mtnSeat11.sitFrame = 24;
        mtnSeat11.offsetX = -100;
        mtnSeat11.offsetY = -70;

        // mtnSeat10 (prefab fields)
        mtnSeat10.sitFrame = 24;
        mtnSeat10.offsetX = -100;
        mtnSeat10.offsetY = -70;

        // mtnSeat9 (prefab fields)
        mtnSeat9.sitFrame = 17;
        mtnSeat9.offsetX = -10;
        mtnSeat9.offsetY = -90;

        // mtnSeat8 (prefab fields)
        mtnSeat8.sitFrame = 17;
        mtnSeat8.offsetX = -10;
        mtnSeat8.offsetY = -90;

        // mtnSeat7 (prefab fields)
        mtnSeat7.sitFrame = 18;
        mtnSeat7.offsetX = 10;
        mtnSeat7.offsetY = -70;

        // mtnSeat6 (prefab fields)
        mtnSeat6.sitFrame = 18;
        mtnSeat6.offsetX = 10;
        mtnSeat6.offsetY = -70;

        // mtnSeat5 (prefab fields)
        mtnSeat5.sitFrame = 18;
        mtnSeat5.offsetX = 10;
        mtnSeat5.offsetY = -110;

        // mtnSeat4 (prefab fields)
        mtnSeat4.sitFrame = 18;
        mtnSeat4.offsetX = 90;
        mtnSeat4.offsetY = -70;

        // mtnSeat3 (prefab fields)
        mtnSeat3.sitFrame = 18;
        mtnSeat3.offsetX = 90;
        mtnSeat3.offsetY = -70;

        // mtnSeat2 (prefab fields)
        mtnSeat2.sitFrame = 18;
        mtnSeat2.offsetX = 90;
        mtnSeat2.offsetY = -70;

        // mtnSeat1 (prefab fields)
        mtnSeat1.sitFrame = 18;
        mtnSeat1.offsetX = 90;
        mtnSeat1.offsetY = -70;

        // zone4 (components)
        new Zone(zone4);

        // zone3 (components)
        new Zone(zone3);

        // zone2 (components)
        new Zone(zone2);

        // zone1 (components)
        new Zone(zone1);

        this.sort = sort;
        this.seats100 = seats100;
        this.seats101 = seats101;
        this.seats102 = seats102;
        this.seats103 = seats103;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
