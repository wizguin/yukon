/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Interactive from "../../components/Interactive";
import NineSlice from "../../components/NineSlice";
import SingleButton from "./buttons/SingleButton";
import Button from "../../components/Button";
/* START-USER-IMPORTS */

import TextInput from '@engine/interface/text/TextInput'

/* END-USER-IMPORTS */

export default class InputPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.bg;
        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {SingleButton} */
        this.button;


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

        // text
        const text = scene.add.text(0, 0, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "Message goes here";
        text.setStyle({ "align": "center", "color": "#000000", "fixedWidth":628,"fixedHeight":136,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(text);

        // button
        const button = new SingleButton(scene, 0, 130);
        this.add(button);

        // input
        const input = scene.add.rectangle(0, 19, 446, 54);
        input.isFilled = true;
        input.isStroked = true;
        input.strokeColor = 0;
        this.add(input);

        // xButton
        const xButton = scene.add.image(296, -274, "main", "blue-button");
        this.add(xButton);

        // xIcon
        const xIcon = scene.add.image(296, -276, "main", "blue-x");
        this.add(xIcon);

        // block (components)
        new Interactive(block);

        // bg (components)
        const bgNineSlice = new NineSlice(bg);
        bgNineSlice.corner = 50;

        // xButton (components)
        const xButtonButton = new Button(xButton);
        xButtonButton.spriteName = "blue-button";
        xButtonButton.callback = () => this.close();

        this.bg = bg;
        this.text = text;
        this.button = button;

        /* START-USER-CTR-CODE */

        const style = {
            width: 446,
            height: 54,
            fontFamily: 'Arial Narrow',
            fontSize: 40,
            color: '#000',
            textAlign: 'center'
        }

        this.input = new TextInput(scene, 0, 19, 'text', style, () => this.callback(), 12, false)

        this.callback = () => {}

        scene.add.existing(this.input)
        this.add(this.input)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(text, buttonText, callback) {
        this.text.text = text
        this.button.text.text = buttonText

        this.callback = () => callback(this.input.text)

        this.input.clearText()

        super.show()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
