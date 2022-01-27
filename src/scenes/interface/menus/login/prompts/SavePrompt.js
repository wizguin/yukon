import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive } from '@components/components'


/* START OF COMPILED CODE */

export default class SavePrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.illustration;


        // block
        const block = scene.add.rectangle(-1, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // illustration
        const illustration = scene.add.image(-440, -216, "login", "illustration1");
        illustration.setOrigin(0.01327433628318584, 0);
        this.add(illustration);

        // save_bg
        const save_bg = scene.add.image(0, 0, "login", "save-bg");
        this.add(save_bg);

        // save_button
        const save_button = scene.add.image(-303, 285, "login", "save-button");
        this.add(save_button);

        // no_save_button
        const no_save_button = scene.add.image(21, 285, "login", "save-button");
        this.add(no_save_button);

        // learn_button
        const learn_button = scene.add.image(343, 285, "login", "learn-button");
        this.add(learn_button);

        // blue_button
        const blue_button = scene.add.image(487, -334, "main", "blue-button");
        this.add(blue_button);

        // blue_x
        const blue_x = scene.add.image(487, -336, "main", "blue-x");
        this.add(blue_x);

        // text_1
        const text_1 = scene.add.text(-303, 285, "", {});
        text_1.setOrigin(0.5, 0.5);
        text_1.text = "Save Password";
        text_1.setStyle({ "align": "center", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        this.add(text_1);

        // text_2
        const text_2 = scene.add.text(21, 285, "", {});
        text_2.setOrigin(0.5, 0.5);
        text_2.text = "Don't Save\nPassword";
        text_2.setStyle({ "align": "center", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        this.add(text_2);

        // text_3
        const text_3 = scene.add.text(343, 285, "", {});
        text_3.setOrigin(0.5, 0.5);
        text_3.text = "Learn More";
        text_3.setStyle({ "align": "center", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        this.add(text_3);

        // block (components)
        new Interactive(block);

        // save_button (components)
        const save_buttonButton = new Button(save_button);
        save_buttonButton.spriteName = "save-button";
        save_buttonButton.callback = () => this.onSaveClick();
        save_buttonButton.activeFrame = false;

        // no_save_button (components)
        const no_save_buttonButton = new Button(no_save_button);
        no_save_buttonButton.spriteName = "save-button";
        no_save_buttonButton.callback = () => this.close();
        no_save_buttonButton.activeFrame = false;

        // learn_button (components)
        const learn_buttonButton = new Button(learn_button);
        learn_buttonButton.spriteName = "learn-button";
        learn_buttonButton.callback = () => this.close();
        learn_buttonButton.activeFrame = false;

        // blue_button (components)
        const blue_buttonButton = new Button(blue_button);
        blue_buttonButton.spriteName = "blue-button";
        blue_buttonButton.callback = () => this.close();

        this.illustration = illustration;

        /* START-USER-CTR-CODE */

        this.scene = scene

        this.timerConfig = {
            delay: 2800,
            callback: this.nextIllustration,
            callbackScope: this,
            loop: true,
            paused: true
        }

        this.timer = scene.time.addEvent(this.timerConfig)

        this.currentIllustration = 1
        this.maxIllustration = 3

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onSaveClick() {
        this.scene.checks.enable(this.scene.checks.username)
        this.scene.checks.enable(this.scene.checks.password)
        this.close()
    }

    close() {
        this.visible = false

        this.stopTimer()

        this.scene.events.emit('showinput')
    }

    nextIllustration() {
        if (!this.visible) {
            return
        }

        this.currentIllustration++

        if (this.currentIllustration > this.maxIllustration) {
            this.currentIllustration = 1
        }

        this.illustration.setFrame(`illustration${this.currentIllustration}`)
    }

    startTimer() {
        this.illustration.setFrame('illustration1')

        this.timer.paused = false
    }

    stopTimer() {
        this.timer.reset(this.timerConfig)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
