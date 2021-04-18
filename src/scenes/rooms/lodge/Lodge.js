import RoomScene from '../RoomScene'

import { Animation, Button, MoveTo } from '@components/components'


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

        // fire
        const fire = this.add.sprite(1334, 473, "lodge", "fire0001");

        // fishing_door
        const fishing_door = this.add.image(880, 114, "lodge", "fishing_door");
        fishing_door.setOrigin(0, 0);

        // rods
        this.add.image(819, 328, "lodge", "rods");

        // bait
        const bait = this.add.image(838, 416, "lodge", "bait");

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

        // candle
        const candle = this.add.image(453, 276, "lodge", "candle0001");
        candle.setOrigin(0, 0.5);

        // lists
        const sort = [door, table3, table2, table4, footrest, chair]

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 184;
        doorMoveTo.y = 626;

        // fire (components)
        const fireAnimation = new Animation(fire);
        fireAnimation.key = "fire";
        fireAnimation.end = 10;

        // fishing_door (components)
        const fishing_doorButton = new Button(fishing_door);
        fishing_doorButton.spriteName = "fishing_door";
        fishing_doorButton.activeFrame = false;
        const fishing_doorMoveTo = new MoveTo(fishing_door);
        fishing_doorMoveTo.x = 960;
        fishing_doorMoveTo.y = 460;

        // bait (components)
        const baitButton = new Button(bait);
        baitButton.spriteName = "bait";
        baitButton.activeFrame = false;

        // table3 (components)
        const table3Button = new Button(table3);
        table3Button.spriteName = "table3";
        table3Button.activeFrame = false;
        new MoveTo(table3);

        // table2 (components)
        const table2Button = new Button(table2);
        table2Button.spriteName = "table2";
        table2Button.activeFrame = false;
        new MoveTo(table2);

        // table4 (components)
        const table4Button = new Button(table4);
        table4Button.spriteName = "table4";
        table4Button.activeFrame = false;
        new MoveTo(table4);

        this.sort = sort;
    }

    /* START-USER-CODE */

    get roomTriggers() {
        return [
            {
                body: this.roomPhysics.attic,
                x: 1214,
                y: 466,
                callback: () => { this.triggerRoom(221, 966, 560) }
            },
            {
                body: this.roomPhysics.village,
                x: 180,
                y: 640,
                callback: () => { this.triggerRoom(200, 940, 540) }
            }
        ]
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Lodge
