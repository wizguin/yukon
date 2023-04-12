/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SenseiMenuItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // item
        const item = scene.add.image(0, 0, "sensei", "menu/item-hover");
        this.add(item);

        // item (components)
        const itemButton = new Button(item);
        itemButton.spriteName = "menu/item";
        itemButton.callback = () => this.onClick();
        itemButton.activeFrame = false;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
