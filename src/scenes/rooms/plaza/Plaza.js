import RoomScene from '../RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Plaza extends RoomScene {

    constructor() {
        super("Plaza");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 1284, 720),
            'pet': () => this.triggerRoom(310, 818, 520),
            'cave': () => this.triggerRoom(806, 1180, 614),
            'stage1': null,
            'stage2': null,
            'pizza': null,
            'forest': () => this.triggerRoom(809, 270, 430)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("plaza-pack", "assets/media/rooms/plaza/plaza-pack.json");
    }

    /** @returns {void} */
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

        // stage_lights_back
        const stage_lights_back = this.add.sprite(851, 174, "plaza", "stage_lights_back0001");
        stage_lights_back.setOrigin(0.5011764705882353, 0.5);

        // stage_screen
        this.add.image(847, 221, "plaza", "stage_screen");

        // stage_lights_front
        const stage_lights_front = this.add.sprite(853, 166, "plaza", "stage_lights_front0001");

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
        const sort = [lamp, tickets];

        // pet_door (components)
        const pet_doorButton = new Button(pet_door);
        pet_doorButton.spriteName = "pet_door";
        pet_doorButton.activeFrame = false;
        pet_doorButton.pixelPerfect = true;
        const pet_doorMoveTo = new MoveTo(pet_door);
        pet_doorMoveTo.x = 340;
        pet_doorMoveTo.y = 540;

        // cave_door (components)
        const cave_doorButton = new Button(cave_door);
        cave_doorButton.spriteName = "cave_door";
        cave_doorButton.activeFrame = false;
        cave_doorButton.pixelPerfect = true;
        const cave_doorMoveTo = new MoveTo(cave_door);
        cave_doorMoveTo.x = 560;
        cave_doorMoveTo.y = 500;

        // pizza_door (components)
        const pizza_doorButton = new Button(pizza_door);
        pizza_doorButton.spriteName = "pizza_door";
        pizza_doorButton.activeFrame = false;
        pizza_doorButton.pixelPerfect = true;
        const pizza_doorMoveTo = new MoveTo(pizza_door);
        pizza_doorMoveTo.x = 1152;
        pizza_doorMoveTo.y = 500;

        // stage_lights_back (components)
        const stage_lights_backAnimation = new Animation(stage_lights_back);
        stage_lights_backAnimation.key = "stage_lights_back";
        stage_lights_backAnimation.end = 16;

        // stage_lights_front (components)
        const stage_lights_frontAnimation = new Animation(stage_lights_front);
        stage_lights_frontAnimation.key = "stage_lights_front";
        stage_lights_frontAnimation.end = 16;

        // stage_door_1 (components)
        const stage_door_1Button = new Button(stage_door_1);
        stage_door_1Button.spriteName = "stage_door_1";
        stage_door_1Button.activeFrame = false;
        const stage_door_1MoveTo = new MoveTo(stage_door_1);
        stage_door_1MoveTo.x = 730;
        stage_door_1MoveTo.y = 460;

        // stage_door_2 (components)
        const stage_door_2Button = new Button(stage_door_2);
        stage_door_2Button.spriteName = "stage_door_2";
        stage_door_2Button.activeFrame = false;
        const stage_door_2MoveTo = new MoveTo(stage_door_2);
        stage_door_2MoveTo.x = 960;
        stage_door_2MoveTo.y = 460;

        // tickets (components)
        new SimpleButton(tickets);
        const ticketsMoveTo = new MoveTo(tickets);
        ticketsMoveTo.x = 846;
        ticketsMoveTo.y = 426;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
