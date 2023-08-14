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
        this.senseiWidget;
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

        // senseiWidget
        const senseiWidget = new SenseiWidget(this);
        this.add.existing(senseiWidget);
        senseiWidget.visible = true;

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

        this.senseiWidget = senseiWidget;
        this.menu = menu;
        this.match = match;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.senseiWidget.addBackgroundEvent('pointerover', this.onBackgroundOver, this)

        this.showStartMenu()
    }

    onBackgroundOver() {
        // Speech displayed when there is no menu should stick
        if (!this.menu.visible) return

        // Speech displayed during menus other than the start menu should stick
        if (!this.menu.isStartMenuActive) return

        this.senseiWidget.hideSpeech()
    }

    startSequence(sequence) {
        this.menu.close()
        this.senseiWidget.startSequence(sequence)
    }

    showMenu(menu) {
        this.senseiWidget.playWait()
        this.menu.show(menu)
    }

    showStartMenu() {
        this.menu.showStartMenu()
    }

    showPreviousMenu() {
        this.menu.showPreviousMenu()
    }

    showMatch() {
        this.menu.close()
        this.hideSpeech()
        this.match.show()
    }

    showSpeech(text) {
        this.senseiWidget.showSpeech(text)
    }

    hideSpeech() {
        this.senseiWidget.hideSpeech()
    }

    stop() {
        this.match.close()

        super.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
