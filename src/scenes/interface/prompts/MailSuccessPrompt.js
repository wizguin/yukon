/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MailSuccessPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.message;


        this.visible = false;

        // bg
        const bg = scene.add.ninePatchContainer(0, 0, 706, 504, "prompt", "window");
        bg.marginLeft = 50;
        bg.marginTop = 50;
        bg.marginRight = 50;
        bg.marginBottom = 50;
        this.add(bg);

        // button
        const button = scene.add.image(0, 154, "prompt", "window-button");
        this.add(button);

        // buttonText
        const buttonText = scene.add.text(0, 154, "", {});
        buttonText.setOrigin(0.5, 0.5);
        buttonText.text = "Ok";
        buttonText.setStyle({ "align": "center", "fixedWidth":280,"fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        this.add(buttonText);

        // message
        const message = scene.add.text(0, 27, "", {});
        message.setOrigin(0.5, 0.5);
        message.setStyle({ "align": "center", "color": "#000", "fixedWidth":658,"fontFamily": "Arial", "fontSize": "32px" });
        message.setWordWrapWidth(658);
        this.add(message);

        // icon
        const icon = scene.add.image(-49, -122, "mailbook", "send_large");
        this.add(icon);

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "window-button";
        buttonButton.callback = () => this.close();

        this.message = message;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(text) {
        this.message.text = text

        super.show()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
