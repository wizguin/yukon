import BaseContainer from '@scenes/base/BaseContainer'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

class BuddyItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y);

        // buddy_item
        const buddy_item = scene.add.image(0, 0, "main", "buddy/item");
        this.add(buddy_item);

        // icon
        const icon = scene.add.image(-137, 0, "main", "buddy/icon-offline");
        this.add(icon);

        // username
        const username = scene.add.text(25, 0, "", {});
        username.setOrigin(0.5, 0.5);
        username.setStyle({"fixedWidth":270,"fontFamily":"Arial","fontSize":"24px"});
        this.add(username);

        // buddy_item (components)
        const buddy_itemButton = new Button(buddy_item);
        buddy_itemButton.spriteName = "buddy/item";
        buddy_itemButton.activeFrame = false;

        this.icon = icon;
        this.username = username;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default BuddyItem
