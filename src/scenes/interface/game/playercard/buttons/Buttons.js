import BaseContainer from '@scenes/base/BaseContainer'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

class Buttons extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y);

        // report_button
        const report_button = scene.add.image(150, 0, "main", "blue-button-disabled");
        this.add(report_button);

        // ignore_button
        const ignore_button = scene.add.image(90, 0, "main", "blue-button-disabled");
        this.add(ignore_button);

        // mail_button
        const mail_button = scene.add.image(30, 0, "main", "blue-button-disabled");
        this.add(mail_button);

        // igloo_button
        const igloo_button = scene.add.image(-30, 0, "main", "blue-button-disabled");
        this.add(igloo_button);

        // profile_button
        const profile_button = scene.add.image(-90, 0, "main", "blue-button");
        this.add(profile_button);

        // buddy_button
        const buddy_button = scene.add.image(-150, 0, "main", "blue-button");
        this.add(buddy_button);

        // buddies_icon
        const buddies_icon = scene.add.image(-150, -2, "main", "buddies-icon");
        this.add(buddies_icon);

        // help_icon
        const help_icon = scene.add.image(-90, -2, "main", "help-icon");
        this.add(help_icon);

        // igloo_icon
        const igloo_icon = scene.add.image(-30, -2, "main", "igloo-icon-disabled");
        this.add(igloo_icon);

        // mail_icon
        const mail_icon = scene.add.image(30, -2, "main", "mail-icon-disabled");
        this.add(mail_icon);

        // ignore_icon
        const ignore_icon = scene.add.image(90, -2, "main", "ignore-icon-disabled");
        this.add(ignore_icon);

        // mod_icon
        const mod_icon = scene.add.image(150, -1, "main", "mod-icon-disabled");
        this.add(mod_icon);

        // profile_button (components)
        const profile_buttonButton = new Button(profile_button);
        profile_buttonButton.spriteName = "blue-button";
        profile_buttonButton.callback = () => this.onFindClick();
        profile_buttonButton.activeFrame = false;

        // buddy_button (components)
        const buddy_buttonButton = new Button(buddy_button);
        buddy_buttonButton.spriteName = "blue-button";
        buddy_buttonButton.callback = () => this.onBuddyClick();
        buddy_buttonButton.activeFrame = false;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    onBuddyClick() {
        let text = `Would you like to add ${this.parentContainer.username.text}\nto your buddy list`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('buddy_request', { id: this.parentContainer.id })

            this.interface.prompt.showWindow('Request Sent', 'single')
        })
    }

    onFindClick() {
        this.network.send('buddy_find', { id: this.parentContainer.id })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Buttons
