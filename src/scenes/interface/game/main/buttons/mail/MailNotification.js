/* START OF COMPILED CODE */

import BaseContainer from "../../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MailNotification extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.count;


        // notification
        const notification = scene.add.image(0, 0, "main", "mail-new");
        this.add(notification);

        // count
        const count = scene.add.text(0, -2, "", {});
        count.setOrigin(0.5, 0.5);
        count.setStyle({ "align": "center", "fixedWidth":40,"fontFamily": "Burbank Small", "fontSize": "24px", "fontStyle": "bold" });
        this.add(count);

        this.count = count;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    updateMailCount() {
        const unreadCount = this.world.client.unreadMailCount

        this.visible = unreadCount > 0
        this.count.text = unreadCount
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
