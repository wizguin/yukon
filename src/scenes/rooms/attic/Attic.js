import RoomScene from '../RoomScene'

import { Animation, Button, MoveTo, ShowHint, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Attic extends RoomScene {

    constructor() {
        super("Attic");

        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lodge': () => this.triggerRoom(220, 1146, 562)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("attic-pack", "assets/media/rooms/attic/attic-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "attic", "bg");
        bg.setOrigin(0, 0);

        // arm
        const arm = this.add.image(225, 611, "attic", "arm");
        arm.setOrigin(0.497143, 0.649402);

        // horse
        const horse = this.add.sprite(1369, 639, "attic", "horse0001");
        horse.setOrigin(0.544, 0.503185);

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
        const sort = [box, table2, arm, table3, table1, table1_1, table4, horse];

        // horse (components)
        new SimpleButton(horse);
        const horseAnimation = new Animation(horse);
        horseAnimation.key = "horse";
        horseAnimation.end = 67;
        horseAnimation.repeat = 0;
        horseAnimation.onHover = true;
        horseAnimation.stopOnOut = false;

        // table2 (components)
        const table2Button = new Button(table2);
        table2Button.spriteName = "table2";
        table2Button.activeFrame = false;
        new MoveTo(table2);
        const table2ShowHint = new ShowHint(table2);
        table2ShowHint.text = "four_hint";

        // table1 (components)
        const table1Button = new Button(table1);
        table1Button.spriteName = "table1";
        table1Button.activeFrame = false;
        new MoveTo(table1);
        const table1ShowHint = new ShowHint(table1);
        table1ShowHint.text = "four_hint";

        // table3 (components)
        const table3Button = new Button(table3);
        table3Button.spriteName = "table3";
        table3Button.activeFrame = false;
        new MoveTo(table3);
        const table3ShowHint = new ShowHint(table3);
        table3ShowHint.text = "four_hint";

        // table1_1 (components)
        const table1_1Button = new Button(table1_1);
        table1_1Button.spriteName = "table1";
        table1_1Button.activeFrame = false;
        new MoveTo(table1_1);
        const table1_1ShowHint = new ShowHint(table1_1);
        table1_1ShowHint.text = "four_hint";

        // table4 (components)
        const table4Button = new Button(table4);
        table4Button.spriteName = "table4";
        table4Button.activeFrame = false;
        new MoveTo(table4);
        const table4ShowHint = new ShowHint(table4);
        table4ShowHint.text = "four_hint";

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
