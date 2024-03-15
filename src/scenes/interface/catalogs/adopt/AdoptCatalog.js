export const preload = {
    key: 'adoptcatalog-pack',
    url: 'assets/media/interface/catalogs/adopt/adoptcatalog-pack.json',
    loadString: ['loading', 'adoptcatalog']
}

/* START OF COMPILED CODE */

import BookContainer from "../../books/BookContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
import Zone from "../../../components/Zone";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class AdoptCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Array<Phaser.GameObjects.Container|Phaser.GameObjects.Image>} */
        this.pages;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.setOrigin(0, 0);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // page11
        const page11 = scene.add.container(0, 0);
        page11.visible = false;
        this.add(page11);

        // page0011
        const page0011 = scene.add.image(0, 0, "adoptcatalog", "page/page0011");
        page0011.setOrigin(0, 0);
        page11.add(page0011);

        // pageLeft_1
        const pageLeft_1 = scene.add.image(492, 590, "adoptcatalog", "page_left");
        pageLeft_1.setOrigin(0, 0);
        page11.add(pageLeft_1);

        // closeLeft
        const closeLeft = scene.add.image(491, 39, "adoptcatalog", "close_left");
        closeLeft.setOrigin(0, 0);
        page11.add(closeLeft);

        // page0010
        const page0010 = scene.add.image(0, 0, "adoptcatalog", "page/page0010");
        page0010.setOrigin(0, 0);
        page0010.visible = false;
        this.add(page0010);

        // page0009
        const page0009 = scene.add.image(0, 0, "adoptcatalog", "page/page0009");
        page0009.setOrigin(0, 0);
        page0009.visible = false;
        this.add(page0009);

        // page0008
        const page0008 = scene.add.image(0, 0, "adoptcatalog", "page/page0008");
        page0008.setOrigin(0, 0);
        page0008.visible = false;
        this.add(page0008);

        // page0007
        const page0007 = scene.add.image(0, 0, "adoptcatalog", "page/page0007");
        page0007.setOrigin(0, 0);
        page0007.visible = false;
        this.add(page0007);

        // page0006
        const page0006 = scene.add.image(0, 0, "adoptcatalog", "page/page0006");
        page0006.setOrigin(0, 0);
        page0006.visible = false;
        this.add(page0006);

        // page0005
        const page0005 = scene.add.image(0, 0, "adoptcatalog", "page/page0005");
        page0005.setOrigin(0, 0);
        page0005.visible = false;
        this.add(page0005);

        // page0004
        const page0004 = scene.add.image(0, 0, "adoptcatalog", "page/page0004");
        page0004.setOrigin(0, 0);
        page0004.visible = false;
        this.add(page0004);

        // page0003
        const page0003 = scene.add.image(0, 0, "adoptcatalog", "page/page0003");
        page0003.setOrigin(0, 0);
        page0003.visible = false;
        this.add(page0003);

        // page2
        const page2 = scene.add.container(0, 0);
        page2.visible = false;
        this.add(page2);

        // page0002
        const page0002 = scene.add.image(0, 0, "adoptcatalog", "page/page0002");
        page0002.setOrigin(0, 0);
        page2.add(page0002);

        // fun
        const fun = scene.add.rectangle(491, 509, 194, 55);
        fun.alpha = 0.5;
        fun.isFilled = true;
        fun.fillColor = 65535;
        page2.add(fun);

        // card
        const card = scene.add.rectangle(437, 420, 219, 55);
        card.alpha = 0.5;
        card.isFilled = true;
        card.fillColor = 65535;
        page2.add(card);

        // personalities
        const personalities = scene.add.rectangle(457, 323, 360, 55);
        personalities.alpha = 0.5;
        personalities.isFilled = true;
        personalities.fillColor = 65535;
        page2.add(personalities);

        // page1
        const page1 = scene.add.container(0, 0);
        this.add(page1);

        // page0001
        const page0001 = scene.add.image(0, 0, "adoptcatalog", "page/page0001");
        page0001.setOrigin(0, 0);
        page1.add(page0001);

        // pageFront
        const pageFront = scene.add.image(469, 42, "adoptcatalog", "page_front");
        pageFront.setOrigin(0, 0);
        page1.add(pageFront);

        // closeRight_1
        const closeRight_1 = scene.add.image(925, 39, "adoptcatalog", "close_right");
        closeRight_1.setOrigin(0, 0);
        page1.add(closeRight_1);

        // buttons
        const buttons = scene.add.container(190, 41);
        buttons.visible = false;
        this.add(buttons);

        // closeRight
        const closeRight = scene.add.image(1012, 0, "adoptcatalog", "close_right");
        closeRight.setOrigin(0, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = scene.add.image(1012, 549, "adoptcatalog", "page_right");
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = scene.add.image(0, 549, "adoptcatalog", "page_left");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // coins
        const coins = scene.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page0003, page0004, page0005, page0006, page0007, page0008, page0009, page0010, page11];

        // block (components)
        new Interactive(block);

        // pageLeft_1 (components)
        const pageLeft_1Button = new Button(pageLeft_1);
        pageLeft_1Button.spriteName = "page_left";
        pageLeft_1Button.callback = () => this.prevPage();
        pageLeft_1Button.activeFrame = false;
        pageLeft_1Button.pixelPerfect = true;

        // closeLeft (components)
        const closeLeftButton = new Button(closeLeft);
        closeLeftButton.spriteName = "close_left";
        closeLeftButton.callback = () => this.close();
        closeLeftButton.pixelPerfect = true;

        // fun (components)
        const funZone = new Zone(fun);
        funZone.callback = () => this.showPage(8);

        // card (components)
        const cardZone = new Zone(card);
        cardZone.callback = () => this.showPage(7);

        // personalities (components)
        const personalitiesZone = new Zone(personalities);
        personalitiesZone.callback = () => this.showPage(2);

        // pageFront (components)
        const pageFrontButton = new Button(pageFront);
        pageFrontButton.spriteName = "page_front";
        pageFrontButton.callback = () => this.nextPage();
        pageFrontButton.activeFrame = false;

        // closeRight_1 (components)
        const closeRight_1Button = new Button(closeRight_1);
        closeRight_1Button.spriteName = "close_right";
        closeRight_1Button.callback = () => this.close();
        closeRight_1Button.pixelPerfect = true;

        // closeRight (components)
        const closeRightButton = new Button(closeRight);
        closeRightButton.spriteName = "close_right";
        closeRightButton.callback = () => this.close();
        closeRightButton.pixelPerfect = true;

        // pageRight (components)
        const pageRightButton = new Button(pageRight);
        pageRightButton.spriteName = "page_right";
        pageRightButton.callback = () => this.nextPage();
        pageRightButton.activeFrame = false;
        pageRightButton.pixelPerfect = true;

        // pageLeft (components)
        const pageLeftButton = new Button(pageLeft);
        pageLeftButton.spriteName = "page_left";
        pageLeftButton.callback = () => this.prevPage();
        pageLeftButton.activeFrame = false;
        pageLeftButton.pixelPerfect = true;

        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
