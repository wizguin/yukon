/* START OF COMPILED CODE */

import GameScene from "../GameScene";
import CardJitsuPlayer from "./CardJitsuPlayer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CardJitsu extends GameScene {

    constructor() {
        super("CardJitsu");

        /** @type {CardJitsuPlayer} */
        this.player2;
        /** @type {CardJitsuPlayer} */
        this.player1;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cardjitsu-pack", "assets/media/games/card/cardjitsu-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(760, 480, "cardjitsu", "bg");

        // player2
        const player2 = new CardJitsuPlayer(this, 760, 315);
        this.add.existing(player2);

        // player1
        const player1 = new CardJitsuPlayer(this, 760, 315);
        this.add.existing(player1);
        player1.scaleX = -1;
        player1.scaleY = 1;

        // close
        this.add.image(1466, 57, "cardjitsu", "close0001");

        // help
        const help = this.add.image(760, 26, "cardjitsu", "help");
        help.setOrigin(0.5005370569280344, 0.5004436557231589);

        // frame
        const frame = this.add.image(760, 480, "cardjitsu", "frame");
        frame.setOrigin(0.5003261578604045, 0.5005192107995846);

        // panel
        const panel = this.add.image(760, 854, "cardjitsu", "panel");
        panel.setOrigin(0.500351370344343, 0.5);

        this.player2 = player2;
        this.player1 = player1;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
