/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
import Waddle103 from "./waddle/Waddle103";
import Waddle102 from "./waddle/Waddle102";
import Waddle101 from "./waddle/Waddle101";
import Waddle100 from "./waddle/Waddle100";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Mtn extends RoomScene {

    constructor() {
        super("Mtn");

        /** @type {Waddle103} */
        this.waddle103;
        /** @type {Waddle102} */
        this.waddle102;
        /** @type {Waddle101} */
        this.waddle101;
        /** @type {Waddle100} */
        this.waddle100;
        /** @type {Array<Phaser.GameObjects.Image|Waddle100|Waddle101|Waddle102|Waddle103>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 480, 560),
            'waddle100': () => this.triggerWaddle(100),
            'waddle101': () => this.triggerWaddle(101),
            'waddle102': () => this.triggerWaddle(102),
            'waddle103': () => this.triggerWaddle(103)
        }

        this.waddles = {}

        // Don't show waddle seat for sled hand items
        this.sleds = [5021, 5046, 5047]

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

        // catalogSmall
        const catalogSmall = this.add.image(520, 407, "mtn", "catalog_small");
        catalogSmall.setOrigin(0.49230769230769234, 3.685185185185185);

        // express
        const express = this.add.image(1065, 809, "mtn", "express");
        express.setOrigin(0.4647887323943662, 0.875);

        // penguinRun
        const penguinRun = this.add.image(524, 606, "mtn", "penguin_run");
        penguinRun.setOrigin(0.6390977443609023, 0.943089430894309);

        // waddle103
        const waddle103 = new Waddle103(this, 1062, 623);
        this.add.existing(waddle103);

        // waddle102
        const waddle102 = new Waddle102(this, 852, 737);
        this.add.existing(waddle102);

        // waddle101
        const waddle101 = new Waddle101(this, 561, 658);
        this.add.existing(waddle101);

        // waddle100
        const waddle100 = new Waddle100(this, 259, 510);
        this.add.existing(waddle100);

        // lists
        const sort = [penguinRun, express, pole, waddle100, waddle101, waddle102, waddle103];

        // chair (components)
        const chairAnimation = new Animation(chair);
        chairAnimation.key = "chair/chair";
        chairAnimation.end = 87;

        this.waddle103 = waddle103;
        this.waddle102 = waddle102;
        this.waddle101 = waddle101;
        this.waddle100 = waddle100;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    setWaddles(waddles) {
        super.setWaddles(waddles)

        for (const [waddle, seats] of Object.entries(waddles)) {
            // Update waddles to show seats
            for (let i = 0; i < seats.length; i++) {
                this.updateWaddle(waddle, i, seats[i])
            }
        }
    }

    updateWaddle(waddle, seat, username) {
        const show = this.checkShowSeat(username)

        this.getWaddle(waddle)[`seat${seat}`].visible = show

        super.updateWaddle(waddle, seat, username)
    }

    checkShowSeat(username) {
        if (username === null) {
            return false
        }

        const penguin = this.getPenguinByUsername(username)
        if (!penguin) {
            return false
        }

        const hand = penguin.items.all.hand.id
        return !this.sleds.includes(hand)
    }

    triggerWaddle(id) {
        const text = this.getString('sled_prompt')

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.world.client.lastSledId = id
            this.network.send('join_waddle', { waddle: id })

            this.interface.prompt.window.visible = false
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
