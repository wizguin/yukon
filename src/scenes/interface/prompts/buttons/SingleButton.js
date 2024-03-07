import BaseContainer from '@scenes/base/BaseContainer'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class SingleButton extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.text;


        // button
        const button = scene.add.image(0, 0, "prompt", "window-button");
        button.setOrigin(0.5, 0.5047619047619047);
        this.add(button);

        // text
        const text = scene.add.text(0, 0, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "Ok";
        text.setStyle({ "align": "center", "fixedWidth":280,"fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
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

    onClick() {
        this.parentContainer.callback()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
