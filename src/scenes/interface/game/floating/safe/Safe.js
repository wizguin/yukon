import FloatingMenu from '../FloatingMenu'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

class Safe extends FloatingMenu {

    constructor(scene, x, y) {
        super(scene, x, y);

        // close
        const close = scene.add.rectangle(0, 0, 80, 80);
        close.isFilled = true;
        close.fillColor = 65535;
        close.fillAlpha = 0.5;
        this.add(close);

        // safe
        const safe = scene.add.rectangle(0, -50, 256, 40);
        safe.isFilled = true;
        safe.fillColor = 65535;
        safe.fillAlpha = 0.5;
        this.add(safe);

        // inventory_list_item
        const inventory_list_item = scene.add.image(0, -90, "main", "inventory/list-item");
        this.add(inventory_list_item);

        // inventory_list_item (components)
        const inventory_list_itemButton = new Button(inventory_list_item);
        inventory_list_itemButton.spriteName = "inventory/list-item";
        inventory_list_itemButton.activeFrame = false;

        this.close = close;
        this.safe = safe;

        /* START-USER-CTR-CODE */

        this.initMenu()

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Safe
