import BaseContainer from '@scenes/base/BaseContainer'

import { Interactive, NineSlice } from '@components/components'

import DualButtons from './buttons/DualButtons'
import SingleButton from './buttons/SingleButton'


/* START OF COMPILED CODE */

export default class WindowPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.bg;
        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {SingleButton} */
        this.single;
        /** @type {DualButtons} */
        this.dual;


        this.visible = false;

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.rectangle(0, -95, 708, 324);
        bg.isFilled = true;
        bg.fillColor = 164045;
        this.add(bg);

        // text
        const text = scene.add.text(0, -161, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "Message goes here\nMessage goes here";
        text.setStyle({ "align": "center", "color": "#000000", "fixedWidth":628,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        text.setWordWrapWidth(628);
        this.add(text);

        // single
        const single = new SingleButton(scene, 0, -35);
        this.add(single);

        // dual
        const dual = new DualButtons(scene, 0, -36);
        dual.visible = false;
        this.add(dual);

        // block (components)
        new Interactive(block);

        // bg (components)
        const bgNineSlice = new NineSlice(bg);
        bgNineSlice.corner = 50;

        this.bg = bg;
        this.text = text;
        this.single = single;
        this.dual = dual;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(text, buttonLayout, callback, noCallback) {
        this.text.text = text

        // Display correct button layout
        this.dual.visible = false
        this.single.visible = false
        this[buttonLayout].visible = true

        // Callback on yes button
        this.callback = callback
        // Callback on no button
        this.noCallback = noCallback

        super.show()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
