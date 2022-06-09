import RoomScene from '../RoomScene'

import { Animation, Button, MoveTo, Zone } from '@components/components'


/* START OF COMPILED CODE */

export default class Cave extends RoomScene {

    constructor() {
        super("Cave");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'boiler': null,
            'plaza': () => this.triggerRoom(300, 582, 588),
            'mine': null
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cave-pack", "assets/media/rooms/cave/cave-pack.json");
    }

    /** @returns {void} */
    _create() {

        // window
        const window = this.add.image(515, 265, "cave", "window");
        window.setOrigin(0, 0);

        // bg
        const bg = this.add.image(0, -14, "cave", "bg");
        bg.setOrigin(0, 0);

        // ceiling
        const ceiling = this.add.image(1360, 743, "cave", "ceiling");
        ceiling.setOrigin(0.8945998698763825, 0.9345911949685535);

        // fg_1
        const fg_1 = this.add.image(-15, 880, "cave", "fg_1");
        fg_1.setOrigin(0, 1);

        // fg_2
        const fg_2 = this.add.image(1381, 830, "cave", "fg_2");
        fg_2.setOrigin(0.06493506493506493, 0.46387832699619774);

        // fg_3
        const fg_3 = this.add.image(0, 960, "cave", "fg_3");
        fg_3.setOrigin(0, 1);

        // chair_back
        const chair_back = this.add.image(357, 399, "cave", "chair_back");
        chair_back.setOrigin(0, 0);

        // chair_front
        const chair_front = this.add.image(391, 490, "cave", "chair_front");
        chair_front.setOrigin(0.5909090909090909, 0.7115384615384616);

        // door
        const door = this.add.image(104, 291, "cave", "door");
        door.setOrigin(0, 0);

        // ring
        const ring = this.add.image(376, 288, "cave", "ring");
        ring.setOrigin(0, 0);

        // board_1
        const board_1 = this.add.image(669, 455, "cave", "board_1");
        board_1.setOrigin(0, 0);

        // board_1_1
        const board_1_1 = this.add.image(930, 440, "cave", "board_1");
        board_1_1.angle = 10;
        board_1_1.setOrigin(0, 0);

        // board_2
        const board_2 = this.add.image(693, 457, "cave", "board_2");
        board_2.setOrigin(0, 0);

        // ladder_back
        const ladder_back = this.add.image(349, 756, "cave", "ladder_back");
        ladder_back.setOrigin(0.5068493150684932, 0.5);

        // ladder_front
        const ladder_front = this.add.image(317, 778, "cave", "ladder_front");

        // water_water_1
        const water_water_1 = this.add.image(813, 639, "cave", "water/water_1");
        water_water_1.setOrigin(0.5, 2.8333333333333335);

        // water_water_2
        const water_water_2 = this.add.image(811, 656, "cave", "water/water_2");
        water_water_2.setOrigin(0.5, 1.8571428571428572);

        // water_water_3
        const water_water_3 = this.add.image(809, 677, "cave", "water/water_3");
        water_water_3.setOrigin(0.5, 1.8571428571428572);

        // water_water_4
        const water_water_4 = this.add.image(807, 698, "cave", "water/water_4");
        water_water_4.setOrigin(0.5006675567423231, 1.8571428571428572);

        // water_water_5
        const water_water_5 = this.add.image(805, 719, "cave", "water/water_5");
        water_water_5.setOrigin(0.5006385696040868, 1.8571428571428572);

        // water_water_6
        const water_water_6 = this.add.image(803, 740, "cave", "water/water_6");
        water_water_6.setOrigin(0.5, 1.8571428571428572);

        // water_water_7
        const water_water_7 = this.add.image(801, 761, "cave", "water/water_7");
        water_water_7.setOrigin(0.5, 1.8571428571428572);

        // water_water_8
        const water_water_8 = this.add.image(799, 782, "cave", "water/water_8");
        water_water_8.setOrigin(0.5, 1.8571428571428572);

        // water_water_9
        const water_water_9 = this.add.image(798, 803, "cave", "water/water_9");
        water_water_9.setOrigin(0.5, 1.8571428571428572);

        // water_water_10
        const water_water_10 = this.add.image(797, 824, "cave", "water/water_10");
        water_water_10.setOrigin(0.5005313496280552, 1.8571428571428572);

        // water_water_11
        const water_water_11 = this.add.image(796, 845, "cave", "water/water_11");
        water_water_11.setOrigin(0.5, 1.8571428571428572);

        // line
        const line = this.add.image(807, 724, "cave", "line");
        line.setOrigin(0.5006337135614702, 2.0555555555555554);

        // zone
        const zone = this.add.rectangle(1319, 295, 115, 400);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // lists
        const sort = [line, water_water_11, water_water_10, water_water_9, water_water_8, water_water_7, water_water_6, water_water_5, water_water_4, water_water_3, water_water_2, water_water_1, ladder_front, ladder_back, chair_front, fg_2, ceiling, fg_3, fg_1];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 190;
        doorMoveTo.y = 600;

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.callback = () => this.onZoneClick();

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onZoneClick() {
        this.world.client.sendMove(1266, 572)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
