/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Moderator extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {NinePatchContainer} */
        this.button;
        /** @type {Phaser.GameObjects.Text} */
        this.buttonText;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.ninePatchContainer(0, -40, 708, 584, "prompt", "window");
        bg.marginLeft = 50;
        bg.marginTop = 50;
        bg.marginRight = 50;
        bg.marginBottom = 50;
        this.add(bg);

        // button
        const button = scene.add.ninePatchContainer(0, 127, 558, 105, "prompt", "window-button");
        button.marginLeft = 50;
        button.marginTop = 50;
        button.marginRight = 50;
        button.marginBottom = 50;
        this.add(button);

        // buttonText
        const buttonText = scene.add.text(0, 127, "", {});
        buttonText.setOrigin(0.5, 0.5);
        buttonText.text = "Become a Secret Agent";
        buttonText.setStyle({ "fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        this.add(buttonText);

        // text
        const text = scene.add.text(-2, -13, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "Please click a player to Ignore or\nReport the player to a moderator.";
        text.setStyle({ "align": "center", "color": "#000", "fixedWidth":400,"fixedHeight":80,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(text);

        // title
        const title = scene.add.text(0, -147, "", {});
        title.setOrigin(0.5, 0);
        title.text = "MODERATOR ONLINE";
        title.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "italic", "stroke": "#003366", "strokeThickness":9,"shadow.color": "#003366", "shadow.blur":3,"shadow.stroke":true});
        this.add(title);

        // mod
        const mod = scene.add.image(-1, -237, "main", "mod_smaller");
        mod.setOrigin(0.504950495049505, 0.504950495049505);
        this.add(mod);

        // blueButton
        const blueButton = scene.add.image(295, -273, "main", "blue-button");
        this.add(blueButton);

        // blueX
        const blueX = scene.add.image(295, -275, "main", "blue-x");
        this.add(blueX);

        // block (components)
        new Interactive(block);

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "window-button";
        buttonButton.callback = () => this.onClick();

        // blueButton (components)
        const blueButtonButton = new Button(blueButton);
        blueButtonButton.spriteName = "blue-button";
        blueButtonButton.callback = () => this.close();

        this.button = button;
        this.buttonText = buttonText;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onClick() {
        this.close()
        this.interface.loadWidget('AgentQuiz')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
