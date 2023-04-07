/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CardJitsuClock extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.clock;
        /** @type {Phaser.GameObjects.Text} */
        this.time;


        // clock
        const clock = scene.add.image(0, 0, "cardjitsu", "clock/clock0001");
        this.add(clock);

        // time
        const time = scene.add.text(0, 0, "", {});
        time.setOrigin(0.5, 0.5);
        time.text = "20";
        time.setStyle({ "align": "center", "color": "#000", "fixedWidth":200,"fontFamily": "CCComiccrazy", "fontSize": "44px", "strokeThickness":5,"shadow.color": "#fff", "shadow.blur":5,"shadow.stroke":true,"shadow.fill":true});
        this.add(time);

        this.clock = clock;
        this.time = time;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
