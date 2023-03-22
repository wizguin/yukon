/* START OF COMPILED CODE */

import GameScene from "../GameScene";
import CardJitsuPlayer from "./CardJitsuPlayer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CardJitsu extends GameScene {

    constructor() {
        super("CardJitsu");

        /** @type {Phaser.GameObjects.Image} */
        this.clock;
        /** @type {Phaser.GameObjects.Image} */
        this.spinner;
        /** @type {Phaser.GameObjects.Text} */
        this.username2;
        /** @type {Phaser.GameObjects.Text} */
        this.username1;
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

        // clock
        const clock = this.add.image(760, 676, "cardjitsu", "clock/clock0001");
        clock.visible = false;

        // spinner
        const spinner = this.add.image(760, 482, "cardjitsu", "spinner");

        // username2
        const username2 = this.add.text(1420, 736, "", {});
        username2.setOrigin(1, 0);
        username2.setStyle({ "align": "right", "color": "#000", "fixedWidth":410,"fontFamily": "CCComiccrazy", "fontSize": "28px", "fontStyle": "bold" });

        // username1
        const username1 = this.add.text(100, 736, "", {});
        username1.setStyle({ "color": "#000", "fixedWidth":410,"fontFamily": "CCComiccrazy", "fontSize": "28px", "fontStyle": "bold" });

        // player2
        const player2 = new CardJitsuPlayer(this, 760, 315);
        this.add.existing(player2);

        // player1
        const player1 = new CardJitsuPlayer(this, 760, 315);
        this.add.existing(player1);
        player1.scaleX = -1;
        player1.scaleY = 1;

        // player2 (prefab fields)
        player2.username = username2;

        // player1 (prefab fields)
        player1.username = username1;

        this.clock = clock;
        this.spinner = spinner;
        this.username2 = username2;
        this.username1 = username1;
        this.player2 = player2;
        this.player1 = player1;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        // Spinner
        this.tweens.add({
            targets: this.spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
