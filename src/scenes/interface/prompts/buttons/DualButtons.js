import BaseContainer from '@scenes/base/BaseContainer'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class DualButtons extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // no_button
        const no_button = scene.add.image(110, 0, "prompt", "window-button-small");
        no_button.setOrigin(0.5, 0.49523809523809526);
        this.add(no_button);

        // yes_button
        const yes_button = scene.add.image(-110, 0, "prompt", "window-button-small");
        yes_button.setOrigin(0.5, 0.49523809523809526);
        this.add(yes_button);

        // text_2
        const text_2 = scene.add.text(110, 0, "", {});
        text_2.setOrigin(0.5, 0.5);
        text_2.text = "No";
        text_2.setStyle({ "align": "center", "fixedWidth":150,"fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        this.add(text_2);

        // text_1
        const text_1 = scene.add.text(-110, 0, "", {});
        text_1.setOrigin(0.5, 0.5);
        text_1.text = "Yes";
        text_1.setStyle({ "align": "center", "fixedWidth":150,"fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        this.add(text_1);

        // no_button (components)
        const no_buttonButton = new Button(no_button);
        no_buttonButton.spriteName = "window-button-small";
        no_buttonButton.callback = () => this.onNoClick();

        // yes_button (components)
        const yes_buttonButton = new Button(yes_button);
        yes_buttonButton.spriteName = "window-button-small";
        yes_buttonButton.callback = () => this.onYesClick();

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    onYesClick() {
        this.parentContainer.callback()
    }

    onNoClick() {
        this.parentContainer.noCallback()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
