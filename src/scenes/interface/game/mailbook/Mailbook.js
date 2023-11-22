/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */

// import PostcardIconLoader from '@engine/loaders/PostcardIconLoader'

/* END-USER-IMPORTS */

export default class Mailbook extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Container} */
        this.buddy;
        /** @type {Phaser.GameObjects.Text} */
        this.titleText;
        /** @type {Phaser.GameObjects.Container} */
        this.postcards;
        /** @type {Array<any>} */
        this.postcardItems;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.image(-50, 4, "mailbook", "bg");
        this.add(bg);

        // buddy
        const buddy = scene.add.container(-604, -370);
        buddy.visible = false;
        this.add(buddy);

        // send
        const send = scene.add.image(622, 294, "mailbook", "send");
        send.setOrigin(0.5043478260869565, 0.5074626865671642);
        buddy.add(send);

        // penguin
        const penguin = scene.add.image(175, 479, "mailbook", "penguin");
        penguin.setOrigin(0.5012722646310432, 0.5011337868480725);
        buddy.add(penguin);

        // separator4
        const separator4 = scene.add.image(611, 349, "mailbook", "separator/1");
        separator4.setOrigin(0.501187648456057, 0.5);
        buddy.add(separator4);

        // separator3
        const separator3 = scene.add.image(229, 188, "mailbook", "separator/3");
        separator3.setOrigin(0.5, 0.5081967213114754);
        buddy.add(separator3);

        // sendText3
        const sendText3 = scene.add.text(420, 339, "", {});
        sendText3.text = "Send to:";
        sendText3.setStyle({ "align": "center", "color": "#333333", "fixedWidth":380,"fontFamily": "CCFaceFront", "fontSize": "56px", "fontStyle": "italic" });
        buddy.add(sendText3);

        // coinText2
        const coinText2 = scene.add.text(251, 158, "", {});
        coinText2.text = "10";
        coinText2.setStyle({ "color": "#000000", "fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold" });
        buddy.add(coinText2);

        // sendText2
        const sendText2 = scene.add.text(11, 150, "", {});
        sendText2.text = "Buy and send\npostcards for";
        sendText2.setStyle({ "color": "#000000", "fontFamily": "Burbank Small", "fontSize": "30px" });
        buddy.add(sendText2);

        // postcardsText2
        const postcardsText2 = scene.add.text(128, 48, "", {});
        postcardsText2.setOrigin(0, 0.5);
        postcardsText2.text = "Postcards";
        postcardsText2.setStyle({ "color": "#000000", "fixedWidth":400,"fontFamily": "Burbank Big", "fontSize": "58px", "fontStyle": "bold" });
        buddy.add(postcardsText2);

        // postcards
        const postcards = scene.add.container(-661, -337);
        postcards.visible = false;
        this.add(postcards);

        // pageRight
        const pageRight = scene.add.image(1283, 621, "mailbook", "page_right");
        pageRight.setOrigin(0.5038167938931297, 0.5);
        postcards.add(pageRight);

        // pageLeft
        const pageLeft = scene.add.image(0, 623, "mailbook", "page_left");
        pageLeft.setOrigin(0.5038167938931297, 0.5);
        postcards.add(pageLeft);

        // separator2
        const separator2 = scene.add.image(742, 70, "mailbook", "separator/4");
        separator2.setOrigin(0.5004428697962799, 0.5263157894736842);
        postcards.add(separator2);

        // coin
        const coin = scene.add.image(1227, 29, "mailbook", "coin");
        postcards.add(coin);

        // coinText
        const coinText = scene.add.text(1164, 7, "", {});
        coinText.text = "10";
        coinText.setStyle({ "color": "#000000", "fixedWidth":50,"fontFamily": "Burbank Big", "fontSize": "40px", "fontStyle": "bold" });
        postcards.add(coinText);

        // separator1
        const separator1 = scene.add.image(1149, 29, "mailbook", "separator/2");
        separator1.setOrigin(0.5, 0.5081967213114754);
        postcards.add(separator1);

        // sendText
        const sendText = scene.add.text(969, 0, "", {});
        sendText.text = "Buy and send\npostcards for";
        sendText.setStyle({ "color": "#000000", "fontFamily": "Burbank Small", "fontSize": "25px" });
        postcards.add(sendText);

        // titleText
        const titleText = scene.add.text(471, 26, "", {});
        titleText.setOrigin(0, 0.5);
        titleText.text = "Featured Postcards";
        titleText.setStyle({ "color": "#333333", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "44px" });
        postcards.add(titleText);

        // separator
        const separator = scene.add.image(452, 23, "mailbook", "separator/2");
        postcards.add(separator);

        // postcardsText
        const postcardsText = scene.add.text(188, 22, "", {});
        postcardsText.setOrigin(0, 0.5);
        postcardsText.text = "Postcards";
        postcardsText.setStyle({ "color": "#000000", "fixedWidth":400,"fontFamily": "Burbank Big", "fontSize": "58px", "fontStyle": "bold" });
        postcards.add(postcardsText);

        // close
        const close = scene.add.image(624, -320, "mailbook", "close");
        close.setOrigin(0.5028901734104047, 0.5017667844522968);
        this.add(close);

        // lists
        const postcardItems = [];

        // block (components)
        new Interactive(block);

        // pageRight (components)
        const pageRightButton = new Button(pageRight);
        pageRightButton.spriteName = "page_right";
        pageRightButton.callback = () => this.nextPage();
        pageRightButton.activeFrame = false;

        // pageLeft (components)
        const pageLeftButton = new Button(pageLeft);
        pageLeftButton.spriteName = "page_left";
        pageLeftButton.callback = () => this.prevPage();
        pageLeftButton.activeFrame = false;

        // close (components)
        const closeButton = new Button(close);
        closeButton.spriteName = "close";
        closeButton.callback = () => this.close();
        closeButton.pixelPerfect = true;

        this.buddy = buddy;
        this.titleText = titleText;
        this.postcards = postcards;
        this.postcardItems = postcardItems;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
