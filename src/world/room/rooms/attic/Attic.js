import RoomScene from '@/world/room/RoomScene'


/* START OF COMPILED CODE */

class Attic extends RoomScene {

    constructor() {
        super("Attic");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    preload() {

        this.load.pack("attic-pack", "assets/media/rooms/attic/attic-pack.json");
    }

    _create() {

        // bg
        const bg = this.add.image(0, 0, "attic", "bg");
        bg.setOrigin(0, 0);

        // arm
        const arm = this.add.image(225, 611, "attic", "arm");
        arm.setOrigin(0.497143, 0.649402);

        // horse0001
        const horse0001 = this.add.image(1369, 639, "attic", "horse0001");
        horse0001.setOrigin(0.544, 0.503185);

        // table2
        const table2 = this.add.image(438, 751, "attic", "table2");
        table2.setOrigin(0.47058824, 0.56034483);

        // table1
        const table1 = this.add.image(810, 762, "attic", "table1");
        table1.setOrigin(0.54362416, 0.56818182);

        // table3
        const table3 = this.add.image(606, 618, "attic", "table3");
        table3.setOrigin(0.49342105, 0.50735294);

        // table1_1
        const table1_1 = this.add.image(873, 582, "attic", "table1");
        table1_1.setOrigin(0.54362416, 0.56818182);

        // table4
        const table4 = this.add.image(1135, 802, "attic", "table4");
        table4.setOrigin(0.4251497005988024, 0.6060606060606061);

        // box
        const box = this.add.image(-1, 970, "attic", "box");
        box.setOrigin(0, 1);

        // lists
        const sort = [box, table2, arm, table3, table1, table1_1, table4, horse0001]

        this.sort = sort;
    }

    /* START-USER-CODE */

    get roomPhysics() {
        return this.cache.json.get('attic-physics')
    }

    get roomTriggers() {
        return {
            220: {
                body: this.roomPhysics.lodge,
                x: 1150,
                y: 646
            }
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Attic
