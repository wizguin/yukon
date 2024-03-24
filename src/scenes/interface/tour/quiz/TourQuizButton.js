/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TourQuizButton extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {any} */
        this.onClick = () => {};


        // button
        const button = scene.add.ninePatchContainer(0, 0, 556, 105, "prompt", "window-button");
        button.marginLeft = 50;
        button.marginTop = 50;
        button.marginRight = 50;
        button.marginBottom = 50;
        this.add(button);

        // text
        const text = scene.add.text(0, 0, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "Text";
        text.setStyle({ "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        this.add(text);

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "window-button";
        buttonButton.callback = () => this.onClick();

        this.text = text;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setText(text, fontSize = 40) {
        this.text.setText(text)
        this.text.setFontSize(fontSize)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
