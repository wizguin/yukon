/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import SimpleButton from "../../../../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MailbookPostcardItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.error;
        /** @type {Phaser.GameObjects.Text} */
        this.subject;


        // postcardItem
        const postcardItem = scene.add.image(0, 22, "mailbook", "postcard_item");
        this.add(postcardItem);

        // error
        const error = scene.add.image(0, 0, "mailbook", "error");
        error.visible = false;
        this.add(error);

        // subject
        const subject = scene.add.text(0, 146, "", {});
        subject.setOrigin(0.5, 0.5);
        subject.setStyle({ "align": "center", "color": "#000000", "fixedWidth":342,"fontFamily": "Burbank Small", "fontSize": "30px" });
        this.add(subject);

        // postcardItem (components)
        const postcardItemSimpleButton = new SimpleButton(postcardItem);
        postcardItemSimpleButton.callback = () => this.onClick();

        this.error = error;
        this.subject = subject;

        /* START-USER-CTR-CODE */

        this.id
        this.icon

        this.iconX = -141
        this.iconY = -97

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onClick() {
        this.parentContainer.mailbookPreview.show(this.id)
    }

    setItem(postcard) {
        if (!postcard) {
            return this.clearItem()
        }

        this.id = postcard.id
        this.subject.text = postcard.subject

        this.visible = true
    }

    clearItem() {
        this.visible = false

        this.id = null
        this.subject.text = ''
    }

    addIcon(key) {
        const icon = this.scene.add.image(this.iconX, this.iconY, key)

        icon.setOrigin(0)
        this.add(icon)

        this.icon = icon
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
