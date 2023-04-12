/* START OF COMPILED CODE */

import GameScene from "../GameScene";
import SenseiWidget from "./widget/SenseiWidget";
import SenseiMenu from "./menu/SenseiMenu";
import Button from "../../components/Button";
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
        const menu = new SenseiMenu(this, 1060, 774);
        this.add.existing(menu);

        // xButton
        const xButton = this.add.image(1474, 43, "main", "grey-button");

        // x
        this.add.image(1474, 41, "main", "grey-x");

        // xButton (components)
        const xButtonButton = new Button(xButton);
        xButtonButton.spriteName = "grey-button";
        xButtonButton.callback = () => this.world.client.sendJoinLastRoom();

        this.sensei = sensei;
        this.menu = menu;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
    }

    showSpeech(text) {
        this.sensei.showSpeech(text)
    }

    hideSpeech() {
        this.sensei.hideSpeech()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
