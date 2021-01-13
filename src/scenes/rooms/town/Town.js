import RoomScene from '../RoomScene'


/* START OF COMPILED CODE */

class Town extends RoomScene {

    constructor() {
        super("Town");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    preload() {

        this.load.pack("town-pack", "assets/media/rooms/town/town-pack.json");
    }

    _create() {

        // bg
        const bg = this.add.image(-10, 0, "town", "bg");
        bg.setOrigin(0, 0);

        // fg
        const fg = this.add.image(-63, 976, "town", "fg");
        fg.setOrigin(0, 1);

        // left_sign
        const left_sign = this.add.image(179, 450, "town", "left_sign");
        left_sign.setOrigin(0, 0);

        // right_sign
        const right_sign = this.add.image(1286, 465, "town", "right_sign");
        right_sign.setOrigin(0, 0);

        // coffee_door
        const coffee_door = this.add.image(449, 305, "town", "coffee_door");
        coffee_door.setOrigin(0, 0);

        // gift_door
        const gift_door = this.add.image(995, 294, "town", "gift_door");
        gift_door.setOrigin(0, 0);

        // canopy
        const canopy = this.add.image(692, 464, "town", "canopy");
        canopy.setOrigin(0.49606299212598426, 0.9403669724770642);

        // canopy_stars
        const canopy_stars = this.add.image(647, 348, "town", "canopy_stars");
        canopy_stars.setOrigin(0, 0);

        // disco
        const disco = this.add.image(648, 229, "town", "disco");
        disco.setOrigin(0, 0);

        // lights0001
        const lights0001 = this.add.image(518, -75, "town", "lights0001");
        lights0001.setOrigin(0, 0);

        // box_1
        const box_1 = this.add.image(973, 432, "town", "box_1");
        box_1.setOrigin(0.49382716049382713, 0.6268656716417911);

        // box_2
        const box_2 = this.add.image(954, 483, "town", "box_2");
        box_2.setOrigin(0.49504950495049505, 0.6736842105263158);

        // box_3
        const box_3 = this.add.image(1148, 581, "town", "box_3");
        box_3.setOrigin(0.4943820224719101, 0.5569620253164557);

        // chair_2
        const chair_2 = this.add.image(436, 462, "town", "chair_2");
        chair_2.setOrigin(0.49382716049382713, 0.27358490566037735);

        // table_2
        const table_2 = this.add.image(485, 523, "town", "table_2");
        table_2.setOrigin(0.5, 0.7864077669902912);

        // chair_1
        const chair_1 = this.add.image(402, 511, "town", "chair_1");
        chair_1.setOrigin(0.49411764705882355, 0.2857142857142857);

        // table_1
        const table_1 = this.add.image(455, 575, "town", "table_1");
        table_1.setOrigin(0.49572649572649574, 0.7830188679245284);

        // lists
        const sort = [fg, box_2, box_1, box_3, chair_2, chair_1, table_1, table_2]

        this.sort = sort;
    }

    /* START-USER-CODE */

    get roomTriggers() {
        return [
            {
                body: this.roomPhysics.dock,
                x: 130,
                y: 580,
                callback : () => { this.triggerRoom(800, 1200, 400) }
            },
            {
                body: this.roomPhysics.forts,
                x: 1380,
                y: 580,
                callback : () => { this.triggerRoom(801, 360, 520) }
            }
        ]
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Town
