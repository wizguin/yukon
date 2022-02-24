import RoomScene from '../RoomScene'

import { Button, MoveTo, ShowHint, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Lounge extends RoomScene {

    constructor() {
        super("Lounge");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'dance': () => this.triggerRoom(120, 1200, 792),
            'ice': () => this.triggerGame(909),
            'astro': () => this.triggerGame(900)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("lounge-pack", "assets/media/rooms/lounge/lounge-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-2, 0, "lounge", "bg");
        bg.setOrigin(0, 0);

        // astro
        const astro = this.add.image(1033, 380, "lounge", "astro");
        astro.setOrigin(0.5022222222222222, 0.501577287066246);

        // ice
        const ice = this.add.image(626, 377, "lounge", "ice");
        ice.setOrigin(0.5026178010471204, 0.5);

        // plant
        const plant = this.add.image(30, 701, "lounge", "plant");
        plant.setOrigin(0.45652173913043476, 0.9061224489795918);

        // chair_1
        const chair_1 = this.add.image(264, 478, "lounge", "chair_1");
        chair_1.setOrigin(0.5225225225225225, 0.4567901234567901);

        // chair_2
        const chair_2 = this.add.image(431, 456, "lounge", "chair_2");
        chair_2.setOrigin(0.3867924528301887, 0.38181818181818183);

        // table_1
        const table_1 = this.add.image(356, 540, "lounge", "table_1");
        table_1.setOrigin(0.5, 0.6330935251798561);

        // chair_1_1
        const chair_1_1 = this.add.image(164, 680, "lounge", "chair_1");
        chair_1_1.setOrigin(0.5225225225225225, 0.4567901234567901);

        // chair_2_1
        const chair_2_1 = this.add.image(371, 657, "lounge", "chair_2");
        chair_2_1.setOrigin(0.3867924528301887, 0.38181818181818183);

        // table_2
        const table_2 = this.add.image(274, 761, "lounge", "table_2");
        table_2.setOrigin(0.4824120603015075, 0.7052631578947368);

        // chair_1_2
        const chair_1_2 = this.add.image(627, 718, "lounge", "chair_1");
        chair_1_2.setOrigin(0.5225225225225225, 0.4567901234567901);

        // chair_1_3
        const chair_1_3 = this.add.image(841, 729, "lounge", "chair_1");
        chair_1_3.setOrigin(0.5225225225225225, 0.4567901234567901);
        chair_1_3.flipX = true;

        // table_3
        const table_3 = this.add.image(733, 778, "lounge", "table_3");
        table_3.setOrigin(0.4691358024691358, 0.5379310344827586);

        // rail_2
        const rail_2 = this.add.image(1512, 698, "lounge", "rail_2");
        rail_2.setOrigin(0.5142857142857142, 0.5);

        // rail_3
        const rail_3 = this.add.image(1419, 627, "lounge", "rail_3");
        rail_3.setOrigin(0.5, 0.5038167938931297);

        // rail_4
        const rail_4 = this.add.image(1343, 573, "lounge", "rail_4");
        rail_4.setOrigin(0.5121951219512195, 0.5);

        // rail_1
        const rail_1 = this.add.image(1438, 636, "lounge", "rail_1");
        rail_1.setOrigin(0.5027932960893855, 1);

        // lists
        const sort = [chair_1_2, chair_1_3, table_3, table_2, chair_2_1, chair_1_1, chair_1, table_1, chair_2, plant, rail_4, rail_3, rail_2, rail_1];

        // astro (components)
        const astroButton = new Button(astro);
        astroButton.spriteName = "astro";
        astroButton.activeFrame = false;
        astroButton.pixelPerfect = true;
        const astroMoveTo = new MoveTo(astro);
        astroMoveTo.x = 940;
        astroMoveTo.y = 520;
        const astroShowHint = new ShowHint(astro);
        astroShowHint.text = "astro_hint";

        // ice (components)
        const iceButton = new Button(ice);
        iceButton.spriteName = "ice";
        iceButton.activeFrame = false;
        iceButton.pixelPerfect = true;
        const iceMoveTo = new MoveTo(ice);
        iceMoveTo.x = 672;
        iceMoveTo.y = 512;
        const iceShowHint = new ShowHint(ice);
        iceShowHint.text = "thinice_hint";

        // chair_1 (components)
        const chair_1SimpleButton = new SimpleButton(chair_1);
        chair_1SimpleButton.pixelPerfect = true;
        const chair_1MoveTo = new MoveTo(chair_1);
        chair_1MoveTo.y = 488;

        // chair_2 (components)
        const chair_2SimpleButton = new SimpleButton(chair_2);
        chair_2SimpleButton.pixelPerfect = true;
        const chair_2MoveTo = new MoveTo(chair_2);
        chair_2MoveTo.y = 466;

        // chair_1_1 (components)
        const chair_1_1SimpleButton = new SimpleButton(chair_1_1);
        chair_1_1SimpleButton.pixelPerfect = true;
        const chair_1_1MoveTo = new MoveTo(chair_1_1);
        chair_1_1MoveTo.y = 690;

        // chair_2_1 (components)
        const chair_2_1SimpleButton = new SimpleButton(chair_2_1);
        chair_2_1SimpleButton.pixelPerfect = true;
        const chair_2_1MoveTo = new MoveTo(chair_2_1);
        chair_2_1MoveTo.y = 667;

        // chair_1_2 (components)
        const chair_1_2SimpleButton = new SimpleButton(chair_1_2);
        chair_1_2SimpleButton.pixelPerfect = true;
        const chair_1_2MoveTo = new MoveTo(chair_1_2);
        chair_1_2MoveTo.y = 728;

        // chair_1_3 (components)
        const chair_1_3SimpleButton = new SimpleButton(chair_1_3);
        chair_1_3SimpleButton.pixelPerfect = true;
        const chair_1_3MoveTo = new MoveTo(chair_1_3);
        chair_1_3MoveTo.y = 739;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
