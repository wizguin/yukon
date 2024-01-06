/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import Button from "../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MailbookUserItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 882, y ?? 352);

        /** @type {Phaser.GameObjects.Image} */
        this.icon;
        /** @type {Phaser.GameObjects.Text} */
        this.username;


        // item
        const item = scene.add.image(0, 0, "mailbook", "list/item");
        this.add(item);

        // icon
        const icon = scene.add.image(-139, 0, "mailbook", "list/icon_offline");
        this.add(icon);

        // username
        const username = scene.add.text(24, 0, "", {});
        username.setOrigin(0.5, 0.5);
        username.setStyle({ "color": "#000", "fixedWidth":260,"fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        this.add(username);

        // item (components)
        const itemButton = new Button(item);
        itemButton.spriteName = "list/item";
        itemButton.callback = () => this.onClick();
        itemButton.activeFrame = false;

        this.icon = icon;
        this.username = username;

        /* START-USER-CTR-CODE */

        this.id

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get mailbook() {
        return this.interface.main.mailbook
    }

    setItem(buddy) {
        if (!buddy) {
            return this.clearItem()
        }

        this.id = buddy.id
        this.username.text = buddy.username

        const relationship = this.world.getRelationship(buddy.id)
        const frame = `list/icon_${relationship}`

        this.icon.setFrame(frame)

        this.visible = true
    }

    clearItem() {
        this.visible = false

        this.id = null
        this.username.text = ''
        this.icon.setFrame('list/icon_offline')
    }

    onClick() {
        if (this.id) {
            this.mailbook.showPostcards(this.id, this.username.text)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
