
// You can write more code here

/* START OF COMPILED CODE */

import GameScene from "../GameScene";
import SenseiWidget from "./widget/SenseiWidget";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Sensei extends GameScene {

    constructor() {
        super("Sensei");

        /** @type {SenseiWidget} */
        this.sensei;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("sensei-pack", "assets/media/games/sensei/sensei-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sensei
        const sensei = new SenseiWidget(this);
        this.add.existing(sensei);
        sensei.visible = true;

        this.sensei = sensei;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
