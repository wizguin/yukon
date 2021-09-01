import RoomScene from '../RoomScene'

import { Animation, Zone } from '@components/components'


/* START OF COMPILED CODE */

class Mtn extends RoomScene {

    constructor() {
        super("Mtn");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 480, 560),
            'sled1': () => this.triggerSled(1),
            'sled2': () => this.triggerSled(2),
            'sled3': () => this.triggerSled(3),
            'sled4': () => this.triggerSled(4),
        }

        /* END-USER-CTR-CODE */
    }

    preload() {

        this.load.pack("mtn-pack", "assets/media/rooms/mtn/mtn-pack.json");
    }

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
        const barrier_2_1 = this.add.image(903, 747, "mtn", "barrier_2");
        barrier_2_1.setOrigin(0.48, 0.47761194029850745);

        // barrier_1_4
        const barrier_1_4 = this.add.image(1120, 651, "mtn", "barrier_1");
        barrier_1_4.setOrigin(0.5, 0.45901639344262296);
        barrier_1_4.flipX = true;

        // express
        const express = this.add.image(1061, 809, "mtn", "express");
        express.setOrigin(0.4647887323943662, 0.875);

        // penguin_run
        const penguin_run = this.add.image(524, 606, "mtn", "penguin_run");
        penguin_run.setOrigin(0.6390977443609023, 0.943089430894309);

        // zone4
        const zone4 = this.add.rectangle(1127, 657, 180, 90);
        zone4.angle = -33;
        zone4.alpha = 0.5;
        zone4.isFilled = true;
        zone4.fillColor = 65280;

        // zone3
        const zone3 = this.add.rectangle(899, 753, 180, 90);
        zone3.alpha = 0.5;
        zone3.isFilled = true;
        zone3.fillColor = 65280;

        // zone2
        const zone2 = this.add.rectangle(633, 709, 200, 90);
        zone2.angle = 11;
        zone2.alpha = 0.5;
        zone2.isFilled = true;
        zone2.fillColor = 65280;

        // zone1
        const zone1 = this.add.rectangle(334, 568, 230, 90);
        zone1.angle = 33;
        zone1.alpha = 0.5;
        zone1.isFilled = true;
        zone1.fillColor = 65280;

        // lists
        const sort = [penguin_run, express, pole]

        // chair (components)
        const chairAnimation = new Animation(chair);
        chairAnimation.key = "chair/chair";
        chairAnimation.end = 87;

        // zone4 (components)
        new Zone(zone4);

        // zone3 (components)
        new Zone(zone3);

        // zone2 (components)
        new Zone(zone2);

        // zone1 (components)
        new Zone(zone1);

        this.sort = sort;
    }

    /* START-USER-CODE */

    triggerSled(id) {
        this.interface.main.lobby.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Mtn
