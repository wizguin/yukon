import BaseContainer from '@scenes/base/BaseContainer'


/* START OF COMPILED CODE */

class Buttons extends Phaser.GameObjects.Container {

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
        const profile_button = scene.add.image(-90, 0, "main", "blue-button-disabled");
        this.add(profile_button);

        // buddy_button
        const buddy_button = scene.add.image(-150, 0, "main", "blue-button-disabled");
        this.add(buddy_button);

        // buddies_icon_disabled
        const buddies_icon_disabled = scene.add.image(-150, -2, "main", "buddies-icon-disabled");
        this.add(buddies_icon_disabled);

        // help_icon_disabled
        const help_icon_disabled = scene.add.image(-90, -2, "main", "help-icon-disabled");
        this.add(help_icon_disabled);

        // igloo_icon_disabled
        const igloo_icon_disabled = scene.add.image(-30, -2, "main", "igloo-icon-disabled");
        this.add(igloo_icon_disabled);

        // mail_icon_disabled
        const mail_icon_disabled = scene.add.image(30, -2, "main", "mail-icon-disabled");
        this.add(mail_icon_disabled);

        // ignore_icon_disabled
        const ignore_icon_disabled = scene.add.image(90, -2, "main", "ignore-icon-disabled");
        this.add(ignore_icon_disabled);

        // mod_icon_disabled
        const mod_icon_disabled = scene.add.image(150, -1, "main", "mod-icon-disabled");
        this.add(mod_icon_disabled);

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Buttons
