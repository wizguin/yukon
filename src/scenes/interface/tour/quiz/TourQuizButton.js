/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TourQuizButton extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.buttonText;
        /** @type {any} */
        this.onClick = () => {};


        // button
        const button = scene.add.ninePatchContainer(0, 0, 556, 105, "prompt", "window-button");
        button.marginLeft = 50;
        button.marginTop = 50;
        button.marginRight = 50;
        button.marginBottom = 50;
        this.add(button);

        // buttonText
        const buttonText = scene.add.text(0, 0, "", {});
        buttonText.setOrigin(0.5, 0.5);
        buttonText.text = "Text";
        buttonText.setStyle({ "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        this.add(buttonText);

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "window-button";
        buttonButton.callback = () => this.onClick();

        this.buttonText = buttonText;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get text() {
        return this.buttonText.text
    }

    setText(text, fontSize = 40) {
        this.buttonText.setText(text)
        this.buttonText.setFontSize(fontSize)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
