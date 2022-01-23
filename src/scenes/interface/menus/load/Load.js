import BaseScene from '@scenes/base/BaseScene'

import { Interactive } from '@components/components'


/* START OF COMPILED CODE */

export default class Load extends BaseScene {

    constructor() {
        super("Load");

        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {Phaser.GameObjects.Container} */
        this.bar;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.progress;
        /** @type {Phaser.GameObjects.Image} */
        this.spinner;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("load-pack", "assets/media/interface/menus/load/load-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "load", "bg");
        bg.setOrigin(0, 0);

        // text
        const text = this.add.text(760, 520, "", {});
        text.setOrigin(0.5, 0);
        text.setStyle({ "align": "center", "fixedWidth":800,"fixedHeight":40,"fontFamily": "Arial", "fontSize": "32px" });

        // bar
        const bar = this.add.container(760, 480);

        // outline
        const outline = this.add.rectangle(0, 0, 200, 40);
        outline.isStroked = true;
        outline.strokeColor = 26265;
        outline.lineWidth = 4;
        bar.add(outline);

        // progress
        const progress = this.add.rectangle(-90, 0, 180, 20);
        progress.scaleX = 0;
        progress.setOrigin(0, 0.5);
        progress.isFilled = true;
        bar.add(progress);

        // spinner
        const spinner = this.add.image(760, 400, "load", "spinner");

        // bg (components)
        new Interactive(bg);

        this.text = text;
        this.bar = bar;
        this.progress = progress;
        this.spinner = spinner;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create(data) {
        this.events.on('sleep', this.onSleep, this)
        this.events.on('wake', this.onWake, this)

        this._create()

        this.setContent(data.text, data.showBar)

        this.tween = this.tweens.add({
            targets: this.spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })
    }

    onSleep() {
        this.tween.pause()
        this.spinner.angle = 0
    }

    onWake(sys, data) {
        this.tween.restart()
        this.tween.play()

        this.setContent(data.text, data.showBar)
    }

    setContent(text, showBar) {
        this.text.text = text
        this.bar.visible = showBar
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
