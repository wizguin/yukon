/* START OF COMPILED CODE */

import GameScene from "../GameScene";
import SenseiWidget from "./widget/SenseiWidget";
import SenseiMenu from "./menu/SenseiMenu";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Sensei extends GameScene {

    constructor() {
        super("Sensei");

        /** @type {SenseiWidget} */
        this.sensei;
        /** @type {SenseiMenu} */
        this.menu;


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

        // menu
        const menu = new SenseiMenu(this, 1055, 774);
        this.add.existing(menu);

        this.sensei = sensei;
        this.menu = menu;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.sensei.showSpeech('Hello world')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
