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
        const clock = scene.add.image(0, 0, "cardjitsu", "clock/20");
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

        this.timerConfig = {
            delay: 1000,
            callback: this.onTimeEvent,
            callbackScope: this,
            repeat: 20,
            startAt: 1000,
            paused: true
        }

        this.timer = scene.time.addEvent(this.timerConfig)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    start() {
        this.show()

        this.timer.paused = false
    }

    stop() {
        this.close()

        this.timer.reset(this.timerConfig)
        this.updateClock()
    }

    onTimeEvent() {
        if (this.timer.repeatCount == 0) {
            this.timeUp()
            return
        }

        this.updateClock()
    }

    timeUp() {
        this.stop()
        this.scene.timeUp()
    }

    updateClock() {
        this.time.text = this.timer.repeatCount

        this.clock.setFrame(`clock/${this.timer.repeatCount}`)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
