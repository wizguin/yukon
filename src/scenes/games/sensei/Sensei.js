/* START OF COMPILED CODE */

import GameScene from "../GameScene";
import SenseiWidget from "./widget/SenseiWidget";
import SenseiMenu from "./menu/SenseiMenu";
import Button from "../../components/Button";
import SenseiMatch from "./match/SenseiMatch";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Sensei extends GameScene {

    constructor() {
        super("Sensei");

        /** @type {SenseiWidget} */
        this.sensei;
        /** @type {SenseiMenu} */
        this.menu;
        /** @type {SenseiMatch} */
        this.match;


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

        // match
        const match = new SenseiMatch(this, 1024, 424);
        this.add.existing(match);
        match.visible = false;

        // xButton (components)
        const xButtonButton = new Button(xButton);
        xButtonButton.spriteName = "grey-button";
        xButtonButton.callback = () => this.world.client.sendJoinLastRoom();

        this.sensei = sensei;
        this.menu = menu;
        this.match = match;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.sensei.bg.on('pointerover', this.sensei.hideSpeech, this.sensei)

        this.showMenu('start')
    }

    showMenu(menu) {
        this.menu.show(menu)
    }

    showMatch() {
        this.match.show()
    }

    showSpeech(text) {
        this.sensei.showSpeech(text)
    }

    hideSpeech() {
        this.sensei.hideSpeech()
    }

    stop() {
        this.match.close()

        super.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
