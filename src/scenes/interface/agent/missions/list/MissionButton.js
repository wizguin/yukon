/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MissionButton extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // button
        const button = scene.add.rectangle(0, 0, 562, 100);
        button.setOrigin(0, 0);
        button.isFilled = true;
        button.fillColor = 13056;
        this.add(button);

        // separator
        const separator = scene.add.image(261.2, -1, "missions", "separator");
        separator.setOrigin(0.5009671179883946, 0.5);
        this.add(separator);

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
