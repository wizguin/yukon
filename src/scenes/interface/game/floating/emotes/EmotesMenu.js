import FloatingMenu from '../FloatingMenu'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class EmotesMenu extends FloatingMenu {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.safe;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.close;


        // safe
        const safe = scene.add.rectangle(0, -229, 280, 520);
        safe.isFilled = true;
        safe.fillColor = 65535;
        safe.fillAlpha = 0.5;
        this.add(safe);

        // close
        const close = scene.add.rectangle(0, 61, 80, 80);
        close.isFilled = true;
        close.fillColor = 65535;
        close.fillAlpha = 0.5;
        this.add(close);

        // emotes
        const emotes = scene.add.image(0, -229, "main", "emotes");
        this.add(emotes);

        // emote_21
        const emote_21 = scene.add.image(64, -37, "main", "small-box");
        this.add(emote_21);

        // emote_20
        const emote_20 = scene.add.image(0, -37, "main", "small-box");
        this.add(emote_20);

        // emote_19
        const emote_19 = scene.add.image(-64, -37, "main", "small-box");
        this.add(emote_19);

        // emote_18
        const emote_18 = scene.add.image(64, -101, "main", "small-box");
        this.add(emote_18);

        // emote_17
        const emote_17 = scene.add.image(0, -101, "main", "small-box");
        this.add(emote_17);

        // emote_16
        const emote_16 = scene.add.image(-64, -101, "main", "small-box");
        this.add(emote_16);

        // emote_15
        const emote_15 = scene.add.image(64, -165, "main", "small-box");
        this.add(emote_15);

        // emote_14
        const emote_14 = scene.add.image(0, -165, "main", "small-box");
        this.add(emote_14);

        // emote_13
        const emote_13 = scene.add.image(-64, -165, "main", "small-box");
        this.add(emote_13);

        // emote_12
        const emote_12 = scene.add.image(64, -229, "main", "small-box");
        this.add(emote_12);

        // emote_11
        const emote_11 = scene.add.image(0, -229, "main", "small-box");
        this.add(emote_11);

        // emote_10
        const emote_10 = scene.add.image(-64, -229, "main", "small-box");
        this.add(emote_10);

        // emote_9
        const emote_9 = scene.add.image(64, -293, "main", "small-box");
        this.add(emote_9);

        // emote_8
        const emote_8 = scene.add.image(0, -293, "main", "small-box");
        this.add(emote_8);

        // emote_7
        const emote_7 = scene.add.image(-64, -293, "main", "small-box");
        this.add(emote_7);

        // emote_6
        const emote_6 = scene.add.image(64, -357, "main", "small-box");
        this.add(emote_6);

        // emote_5
        const emote_5 = scene.add.image(0, -357, "main", "small-box");
        this.add(emote_5);

        // emote_4
        const emote_4 = scene.add.image(-64, -357, "main", "small-box");
        this.add(emote_4);

        // emote_3
        const emote_3 = scene.add.image(64, -421, "main", "small-box");
        this.add(emote_3);

        // emote_2
        const emote_2 = scene.add.image(0, -421, "main", "small-box");
        this.add(emote_2);

        // emote_1
        const emote_1 = scene.add.image(-64, -421, "main", "small-box");
        this.add(emote_1);

        // emotes_16_small
        const emotes_16_small = scene.add.image(64, -37, "main", "emotes/16-small");
        this.add(emotes_16_small);

        // emotes_12_small
        const emotes_12_small = scene.add.image(0, -37, "main", "emotes/12-small");
        this.add(emotes_12_small);

        // emotes_30_small
        const emotes_30_small = scene.add.image(-64, -37, "main", "emotes/30-small");
        this.add(emotes_30_small);

        // emotes_17_small
        const emotes_17_small = scene.add.image(64, -101, "main", "emotes/17-small");
        this.add(emotes_17_small);

        // emotes_28_small
        const emotes_28_small = scene.add.image(0, -101, "main", "emotes/28-small");
        this.add(emotes_28_small);

        // emotes_11_small
        const emotes_11_small = scene.add.image(-64, -101, "main", "emotes/11-small");
        this.add(emotes_11_small);

        // emotes_26_small
        const emotes_26_small = scene.add.image(64, -165, "main", "emotes/26-small");
        this.add(emotes_26_small);

        // emotes_10_small
        const emotes_10_small = scene.add.image(0, -165, "main", "emotes/10-small");
        this.add(emotes_10_small);

        // emotes_9_small
        const emotes_9_small = scene.add.image(-64, -165, "main", "emotes/9-small");
        this.add(emotes_9_small);

        // emotes_24_small
        const emotes_24_small = scene.add.image(64, -229, "main", "emotes/24-small");
        this.add(emotes_24_small);

        // emotes_8_small
        const emotes_8_small = scene.add.image(0, -229, "main", "emotes/8-small");
        this.add(emotes_8_small);

        // emotes_7_small
        const emotes_7_small = scene.add.image(-64, -229, "main", "emotes/7-small");
        this.add(emotes_7_small);

        // emotes_29_small
        const emotes_29_small = scene.add.image(64, -293, "main", "emotes/29-small");
        this.add(emotes_29_small);

        // emotes_6_small
        const emotes_6_small = scene.add.image(0, -293, "main", "emotes/6-small");
        this.add(emotes_6_small);

        // emotes_5_small
        const emotes_5_small = scene.add.image(-64, -293, "main", "emotes/5-small");
        this.add(emotes_5_small);

        // emotes_18_small
        const emotes_18_small = scene.add.image(64, -357, "main", "emotes/18-small");
        this.add(emotes_18_small);

        // emotes_4_small
        const emotes_4_small = scene.add.image(0, -357, "main", "emotes/4-small");
        this.add(emotes_4_small);

        // emotes_3_small
        const emotes_3_small = scene.add.image(-64, -357, "main", "emotes/3-small");
        this.add(emotes_3_small);

        // emotes_13_small
        const emotes_13_small = scene.add.image(64, -421, "main", "emotes/13-small");
        this.add(emotes_13_small);

        // emotes_2_small
        const emotes_2_small = scene.add.image(0, -421, "main", "emotes/2-small");
        this.add(emotes_2_small);

        // emotes_1_small
        const emotes_1_small = scene.add.image(-64, -421, "main", "emotes/1-small");
        this.add(emotes_1_small);

        // emote_21 (components)
        const emote_21Button = new Button(emote_21);
        emote_21Button.spriteName = "small-box";
        emote_21Button.callback = () => { this.onEmoteClick(16) };
        emote_21Button.activeFrame = false;

        // emote_20 (components)
        const emote_20Button = new Button(emote_20);
        emote_20Button.spriteName = "small-box";
        emote_20Button.callback = () => { this.onEmoteClick(12) };
        emote_20Button.activeFrame = false;

        // emote_19 (components)
        const emote_19Button = new Button(emote_19);
        emote_19Button.spriteName = "small-box";
        emote_19Button.callback = () => { this.onEmoteClick(30) };
        emote_19Button.activeFrame = false;

        // emote_18 (components)
        const emote_18Button = new Button(emote_18);
        emote_18Button.spriteName = "small-box";
        emote_18Button.callback = () => { this.onEmoteClick(17) };
        emote_18Button.activeFrame = false;

        // emote_17 (components)
        const emote_17Button = new Button(emote_17);
        emote_17Button.spriteName = "small-box";
        emote_17Button.callback = () => { this.onEmoteClick(28) };
        emote_17Button.activeFrame = false;

        // emote_16 (components)
        const emote_16Button = new Button(emote_16);
        emote_16Button.spriteName = "small-box";
        emote_16Button.callback = () => { this.onEmoteClick(11) };
        emote_16Button.activeFrame = false;

        // emote_15 (components)
        const emote_15Button = new Button(emote_15);
        emote_15Button.spriteName = "small-box";
        emote_15Button.callback = () => { this.onEmoteClick(26) };
        emote_15Button.activeFrame = false;

        // emote_14 (components)
        const emote_14Button = new Button(emote_14);
        emote_14Button.spriteName = "small-box";
        emote_14Button.callback = () => { this.onEmoteClick(10) };
        emote_14Button.activeFrame = false;

        // emote_13 (components)
        const emote_13Button = new Button(emote_13);
        emote_13Button.spriteName = "small-box";
        emote_13Button.callback = () => { this.onEmoteClick(9) };
        emote_13Button.activeFrame = false;

        // emote_12 (components)
        const emote_12Button = new Button(emote_12);
        emote_12Button.spriteName = "small-box";
        emote_12Button.callback = () => { this.onEmoteClick(24) };
        emote_12Button.activeFrame = false;

        // emote_11 (components)
        const emote_11Button = new Button(emote_11);
        emote_11Button.spriteName = "small-box";
        emote_11Button.callback = () => { this.onEmoteClick(8) };
        emote_11Button.activeFrame = false;

        // emote_10 (components)
        const emote_10Button = new Button(emote_10);
        emote_10Button.spriteName = "small-box";
        emote_10Button.callback = () => { this.onEmoteClick(7) };
        emote_10Button.activeFrame = false;

        // emote_9 (components)
        const emote_9Button = new Button(emote_9);
        emote_9Button.spriteName = "small-box";
        emote_9Button.callback = () => { this.onEmoteClick(29) };
        emote_9Button.activeFrame = false;

        // emote_8 (components)
        const emote_8Button = new Button(emote_8);
        emote_8Button.spriteName = "small-box";
        emote_8Button.callback = () => { this.onEmoteClick(6) };
        emote_8Button.activeFrame = false;

        // emote_7 (components)
        const emote_7Button = new Button(emote_7);
        emote_7Button.spriteName = "small-box";
        emote_7Button.callback = () => { this.onEmoteClick(5) };
        emote_7Button.activeFrame = false;

        // emote_6 (components)
        const emote_6Button = new Button(emote_6);
        emote_6Button.spriteName = "small-box";
        emote_6Button.callback = () => { this.onEmoteClick(18) };
        emote_6Button.activeFrame = false;

        // emote_5 (components)
        const emote_5Button = new Button(emote_5);
        emote_5Button.spriteName = "small-box";
        emote_5Button.callback = () => { this.onEmoteClick(4) };
        emote_5Button.activeFrame = false;

        // emote_4 (components)
        const emote_4Button = new Button(emote_4);
        emote_4Button.spriteName = "small-box";
        emote_4Button.callback = () => { this.onEmoteClick(3) };
        emote_4Button.activeFrame = false;

        // emote_3 (components)
        const emote_3Button = new Button(emote_3);
        emote_3Button.spriteName = "small-box";
        emote_3Button.callback = () => { this.onEmoteClick(13) };
        emote_3Button.activeFrame = false;

        // emote_2 (components)
        const emote_2Button = new Button(emote_2);
        emote_2Button.spriteName = "small-box";
        emote_2Button.callback = () => { this.onEmoteClick(2) };
        emote_2Button.activeFrame = false;

        // emote_1 (components)
        const emote_1Button = new Button(emote_1);
        emote_1Button.spriteName = "small-box";
        emote_1Button.callback = () => { this.onEmoteClick(1) };
        emote_1Button.activeFrame = false;

        this.safe = safe;
        this.close = close;

        /* START-USER-CTR-CODE */

        this.initMenu()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onEmoteClick(emote) {
        this.world.client.sendEmote(emote)
        this.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
