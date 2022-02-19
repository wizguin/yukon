import BaseContainer from '@scenes/base/BaseContainer'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class SingleButton extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // button
        const button = scene.add.image(0, 0, "prompt", "window-button");
        button.setOrigin(0.5, 0.5047619047619047);
        this.add(button);

        // text_1
        const text_1 = scene.add.text(0, 0, "", {});
        text_1.setOrigin(0.5, 0.5);
        text_1.text = "Ok";
        text_1.setStyle({ "align": "center", "fixedWidth":280,"fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        this.add(text_1);

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "window-button";
        buttonButton.callback = () => this.onClick();
        buttonButton.activeFrame = false;

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
