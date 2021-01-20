import RoomScene from '../RoomScene'


/* START OF COMPILED CODE */

class Mtn extends RoomScene {

    constructor() {
        super("Mtn");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    preload() {

        this.load.pack("mtn-pack", "assets/media/rooms/mtn/mtn-pack.json");
    }

    _create() {

        // bg
        const bg = this.add.image(-21, -19, "mtn", "bg");
        bg.setOrigin(0, 0);

        // chair_chair0001
        const chair_chair0001 = this.add.image(846, 75, "mtn", "chair/chair0001");
        chair_chair0001.setOrigin(0, 0);

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

        // lists
        const sort = [penguin_run, express, pole]

        this.sort = sort;
    }

    /* START-USER-CODE */

    get roomTriggers() {
        return [
            {
                body: this.roomPhysics.village,
                x: 950,
                y: 270,
                callback : () => { this.triggerRoom(200, 480, 560) }
            }
        ]
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Mtn
