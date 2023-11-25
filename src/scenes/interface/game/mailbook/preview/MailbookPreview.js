/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import Interactive from "../../../../components/Interactive";
import Button from "../../../../components/Button";
/* START-USER-IMPORTS */

import PostcardLoader from '@engine/loaders/PostcardLoader'

/* END-USER-IMPORTS */

export default class MailbookPreview extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.sendText;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // preview
        const preview = scene.add.image(0, 0, "mailbook", "preview");
        preview.setOrigin(0.5, 0.5005599104143337);
        this.add(preview);

        // no
        const no = scene.add.image(165, 380, "mailbook", "button");
        no.setOrigin(0.5, 0.5068493150684932);
        this.add(no);

        // yes
        const yes = scene.add.image(-165, 380, "mailbook", "button");
        yes.setOrigin(0.5, 0.5068493150684932);
        this.add(yes);

        // noText
        const noText = scene.add.text(165, 380, "", {});
        noText.setOrigin(0.5, 0.5);
        noText.text = "No";
        noText.setStyle({ "align": "center", "color": "#333333", "fixedWidth":200,"fontFamily": "Arial", "fontSize": "38px" });
        this.add(noText);

        // yesText
        const yesText = scene.add.text(-165, 380, "", {});
        yesText.setOrigin(0.5, 0.5);
        yesText.text = "Yes";
        yesText.setStyle({ "align": "center", "color": "#333333", "fixedWidth":200,"fontFamily": "Arial", "fontSize": "38px" });
        this.add(yesText);

        // sendText
        const sendText = scene.add.text(0, 312, "", {});
        sendText.setOrigin(0.5, 0.5);
        sendText.setStyle({ "align": "center", "color": "#333333", "fixedWidth":1000,"fontFamily": "Arial", "fontSize": "32px" });
        this.add(sendText);

        // card
        const card = scene.add.image(0, -61, "mailbook", "card");
        card.setOrigin(0.5, 0.5007052186177715);
        card.visible = false;
        this.add(card);

        // closeButton
        const closeButton = scene.add.image(485, -407, "main", "grey-button");
        this.add(closeButton);

        // closeIcon
        const closeIcon = scene.add.image(485, -409, "main", "grey-x");
        this.add(closeIcon);

        // block (components)
        new Interactive(block);

        // no (components)
        const noButton = new Button(no);
        noButton.spriteName = "button";
        noButton.callback = () => this.close();

        // yes (components)
        const yesButton = new Button(yes);
        yesButton.spriteName = "button";
        yesButton.callback = () => this.onYesClick();

        // closeButton (components)
        const closeButtonButton = new Button(closeButton);
        closeButtonButton.spriteName = "grey-button";
        closeButtonButton.callback = () => this.close();

        this.sendText = sendText;

        /* START-USER-CTR-CODE */

        this.postcardLoader = new PostcardLoader(this)

        this.postcardX = -488
        this.postcardY = -416

        // Current postcard id
        this.id
        // Current postcard prefab
        this.currentPrefab

        this.postcardCost = 10

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(postcard) {
        this.loadPostcard(postcard)

        this.sendText.text = `Send this postcard to ${this.parentContainer.recipientName} for ${this.postcardCost} coins?`

        super.show()
    }

    close() {
        this.checkDestroyCurrent()

        super.close()
    }

    onYesClick() {
        this.network.send('send_mail', { recipient: this.parentContainer.recipientId, postcard: this.id })
    }

    loadPostcard(postcard) {
        this.checkDestroyCurrent()

        this.id = postcard

        this.postcardLoader.loadPostcard(postcard)
    }

    addPostcard(postcard) {
        if (postcard != this.id) {
            return
        }

        this.checkDestroyCurrent()

        this.currentPrefab = new this.crumbs.scenes.postcards[postcard](this.scene, this.postcardX, this.postcardY)
        this.currentPrefab.setName(this.world.client.penguin.username)

        this.addAt(this.currentPrefab, 2)
    }

    checkDestroyCurrent() {
        if (this.currentPrefab) {
            this.currentPrefab.destroy()
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
