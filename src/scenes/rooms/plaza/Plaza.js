import RoomScene from '../RoomScene'


/* START OF COMPILED CODE */

class Plaza extends RoomScene {

    constructor() {
        super("Plaza");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    preload() {

        this.load.pack("plaza-pack", "assets/media/rooms/plaza/plaza-pack.json");
    }

    _create() {

        // bg
        const bg = this.add.image(-18, -2, "plaza", "bg");
        bg.setOrigin(0, 0);

        // pet_door
        const pet_door = this.add.image(333, 489, "plaza", "pet_door");
        pet_door.setOrigin(0.473118, 0.678218);

        // cave_door
        const cave_door = this.add.image(564, 510, "plaza", "cave_door");
        cave_door.setOrigin(0.473684, 0.781513);

        // pizza_door
        const pizza_door = this.add.image(1194, 410, "plaza", "pizza_door");
        pizza_door.setOrigin(0.5311, 0.442211);

        // stage_lights_back0001
        const stage_lights_back0001 = this.add.image(851, 174, "plaza", "stage_lights_back0001");
        stage_lights_back0001.setOrigin(0.5011764705882353, 0.5);

        // stage_screen
        this.add.image(847, 221, "plaza", "stage_screen");

        // stage_lights_front0001
        this.add.image(853, 166, "plaza", "stage_lights_front0001");

        // lamp
        const lamp = this.add.image(129, 827, "plaza", "lamp");
        lamp.setOrigin(0.5099009900990099, 0.9323076923076923);

        // title
        const title = this.add.image(725, 200, "plaza", "title");
        title.setOrigin(0, 0);

        // stage_door_1
        const stage_door_1 = this.add.image(733, 385, "plaza", "stage_door_1");
        stage_door_1.setOrigin(0.5045871559633027, 0.4567901234567901);

        // stage_door_2
        const stage_door_2 = this.add.image(958, 385, "plaza", "stage_door_2");
        stage_door_2.setOrigin(0.5045871559633027, 0.4567901234567901);

        // tickets
        const tickets = this.add.image(846, 457, "plaza", "tickets");
        tickets.setOrigin(0.49612403100775193, 0.9247311827956989);

        // text
        const text = this.add.image(851, 248, "plaza", "text");
        text.setOrigin(0.5, 0.49333333333333335);

        // lists
        const sort = [lamp, tickets]

        this.sort = sort;
    }

    /* START-USER-CODE */

    get roomTriggers() {
        return [
            {
                body: this.roomPhysics.forts,
                x: 125,
                y: 550,
                callback : () => { this.triggerRoom(801, 1284, 720) }
            }
        ]
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Plaza
