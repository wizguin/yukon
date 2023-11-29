/* START OF COMPILED CODE */

import BaseContainer from "../../../../../base/BaseContainer";
import Button from "../../../../../components/Button";
import MailNotification from "./MailNotification";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MailButton extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {MailNotification} */
        this.notification;


        // button
        const button = scene.add.image(0, 0, "main", "mail-button");
        this.add(button);

        // notification
        const notification = new MailNotification(scene, 30, -17);
        notification.visible = false;
        this.add(notification);

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "mail-button";
        buttonButton.callback = () => scene.mail.show();
        buttonButton.activeFrame = false;

        this.notification = notification;

        /* START-USER-CTR-CODE */

        this.lastUnreadCount = 0

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    updateMailCount() {
        this.notification.updateMailCount()

        const unreadCount = this.world.client.unreadMailCount

        // Only bounce on new mail
        if (unreadCount > this.lastUnreadCount) {
            this.scene.bounce(this)
        }

        this.lastUnreadCount = unreadCount
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
