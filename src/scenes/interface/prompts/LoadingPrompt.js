import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, NineSlice } from '@components/components'


/* START OF COMPILED CODE */

export default class LoadingPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.bg;
        /** @type {Phaser.GameObjects.Container} */
        this.bar;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.progress;
        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {Phaser.GameObjects.Image} */
        this.spinner;


        this.visible = false;

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.rectangle(0, -40, 708, 584);
        bg.isFilled = true;
        bg.fillColor = 164045;
        this.add(bg);

        // blueButton
        const blueButton = scene.add.image(295, -273, "main", "blue-button");
        this.add(blueButton);

        // blueX
        const blueX = scene.add.image(295, -275, "main", "blue-x");
        this.add(blueX);

        // bar
        const bar = scene.add.container(0, -21);
        this.add(bar);

        // outline
        const outline = scene.add.rectangle(0, 0, 200, 40);
        outline.isStroked = true;
        outline.strokeColor = 26265;
        outline.lineWidth = 4;
        bar.add(outline);

        // progress
        const progress = scene.add.rectangle(-90, 0, 180, 20);
        progress.scaleX = 0;
        progress.setOrigin(0, 0.5);
        progress.isFilled = true;
        bar.add(progress);

        // text
        const text = scene.add.text(0, 19, "", {});
        text.setOrigin(0.5, 0);
        text.setStyle({ "align": "center", "fixedWidth":800,"fixedHeight":40,"fontFamily": "Arial", "fontSize": "32px" });
        this.add(text);

        // spinner
        const spinner = scene.add.image(0, -101, "load", "spinner");
        this.add(spinner);

        // block (components)
        new Interactive(block);

        // bg (components)
        const bgNineSlice = new NineSlice(bg);
        bgNineSlice.corner = 50;

        // blueButton (components)
        const blueButtonButton = new Button(blueButton);
        blueButtonButton.spriteName = "blue-button";
        blueButtonButton.callback = () => this.close();

        this.bg = bg;
        this.bar = bar;
        this.progress = progress;
        this.text = text;
        this.spinner = spinner;

        /* START-USER-CTR-CODE */

        this.scene = scene

        // Attached scene
        this.externalScene

        this.tween = scene.tweens.add({
            targets: this.spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(scene, progress = 0) {
        // Can't start without attached scene
        if (!scene) return

        this.externalScene = scene

        // Updates prompt content
        this.text.text = this.getString('loading', scene.sys.config)
        this.progress.scaleX = progress

        // Removes create event if it was previously added by close
        scene.events.off('create')

        scene.load.on('progress', (progress) => this.progress.scaleX = progress)

        scene.events.once('create', () => {
            this.visible = false
            this.scene.bringToTop()
        })

        this.visible = true
    }

    close() {
        this.visible = false

        let scene = this.externalScene
        if (!scene) return

        scene.events.once('create', () => scene.scene.stop())
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
