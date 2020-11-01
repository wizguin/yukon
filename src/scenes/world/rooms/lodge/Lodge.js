import RoomScene from '../RoomScene'


/* START OF COMPILED CODE */

class Lodge extends RoomScene {

    constructor() {
        super("Lodge");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    preload() {

        this.load.pack("lodge-pack", "assets/media/rooms/lodge/lodge-pack.json");
    }

    _create() {

        // bg
        const bg = this.add.image(-17, -2, "lodge", "bg");
        bg.setOrigin(0, 0);

        // door
        const door = this.add.image(136, 461, "lodge", "door");

        // footrest
        const footrest = this.add.image(1279, 747, "lodge", "footrest");
        footrest.setOrigin(0.49295775, 0.47222222);

        // chair
        const chair = this.add.image(1365, 763, "lodge", "chair");

        // fire0001
        const fire0001 = this.add.image(1294, 439, "lodge", "fire0001");
        fire0001.setOrigin(0, 0);

        // fishing_door
        this.add.image(1000, 294, "lodge", "fishing-door");

        // rods
        this.add.image(819, 328, "lodge", "rods");

        // bait
        this.add.image(838, 416, "lodge", "bait");

        // catalog_small
        this.add.image(853, 261, "lodge", "catalog-small");

        // table3
        const table3 = this.add.image(600, 515, "lodge", "table3");
        table3.setOrigin(0.4868421052631579, 0.6838235294117647);

        // table2
        const table2 = this.add.image(620, 792, "lodge", "table2");
        table2.setOrigin(0.7720588235294118, 0.7586206896551724);

        // table4
        const table4 = this.add.image(1020, 812, "lodge", "table4");
        table4.setOrigin(0.48502994, 0.77272727);

        // candle0001
        const candle0001 = this.add.image(453, 276, "lodge", "candle0001");
        candle0001.setOrigin(0, 0.5);

        // lists
        const sort = [door, table3, table2, table4, footrest, chair]

        this.sort = sort;
    }

    /* START-USER-CODE */

    get roomPhysics() {
        return this.cache.json.get('lodge-physics')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Lodge
