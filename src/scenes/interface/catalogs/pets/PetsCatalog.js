export const preload = {
    key: 'petscatalog-pack',
    url: 'assets/media/interface/catalogs/pets/petscatalog-pack.json',
    loadString: ['loading', 'petscatalog']
}

/* START OF COMPILED CODE */

import BookContainer from "../../books/BookContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PetsCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.setOrigin(0, 0);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // page5
        const page5 = scene.add.container(0, 0);
        page5.visible = false;
        this.add(page5);

        // page0005
        const page0005 = scene.add.image(0, 0, "petscatalog", "page/page0005");
        page0005.setOrigin(0, 0);
        page5.add(page0005);

        // closeLeft
        const closeLeft = scene.add.image(491, 39, "petscatalog", "close_left");
        closeLeft.setOrigin(0, 0);
        page5.add(closeLeft);

        // pageLeft_1
        const pageLeft_1 = scene.add.image(492, 590, "petscatalog", "page_left");
        pageLeft_1.setOrigin(0, 0);
        page5.add(pageLeft_1);

        // page4
        const page4 = scene.add.container(0, 0);
        page4.visible = false;
        this.add(page4);

        // page0004
        const page0004 = scene.add.image(0, 0, "petscatalog", "page/page0004");
        page0004.setOrigin(0, 0);
        page4.add(page0004);

        // buy_22
        const buy_22 = scene.add.image(1115, 743, "petscatalog", "buy");
        buy_22.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy_22);

        // buy_21
        const buy_21 = scene.add.image(924, 551, "petscatalog", "buy");
        buy_21.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy_21);

        // buy_20
        const buy_20 = scene.add.image(1153, 401, "petscatalog", "buy");
        buy_20.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy_20);

        // buy_19
        const buy_19 = scene.add.image(640, 730, "petscatalog", "buy");
        buy_19.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy_19);

        // buy_18
        const buy_18 = scene.add.image(636, 567, "petscatalog", "buy");
        buy_18.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy_18);

        // buy_17
        const buy_17 = scene.add.image(636, 415, "petscatalog", "buy");
        buy_17.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy_17);

        // buy_16
        const buy_16 = scene.add.image(477, 735, "petscatalog", "buy");
        buy_16.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy_16);

        // buy_15
        const buy_15 = scene.add.image(474, 591, "petscatalog", "buy");
        buy_15.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy_15);

        // buy_14
        const buy_14 = scene.add.image(474, 441, "petscatalog", "buy");
        buy_14.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy_14);

        // buy_13
        const buy_13 = scene.add.image(311, 728, "petscatalog", "buy");
        buy_13.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy_13);

        // buy_12
        const buy_12 = scene.add.image(309, 569, "petscatalog", "buy");
        buy_12.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy_12);

        // page3
        const page3 = scene.add.container(0, 0);
        page3.visible = false;
        this.add(page3);

        // page0003
        const page0003 = scene.add.image(0, 0, "petscatalog", "page/page0003");
        page0003.setOrigin(0, 0);
        page3.add(page0003);

        // buy_11
        const buy_11 = scene.add.image(933, 750, "petscatalog", "buy");
        buy_11.setOrigin(0.5051546391752577, 0.509090909090909);
        page3.add(buy_11);

        // buy_10
        const buy_10 = scene.add.image(1154, 566, "petscatalog", "buy");
        buy_10.setOrigin(0.5051546391752577, 0.509090909090909);
        page3.add(buy_10);

        // buy_9
        const buy_9 = scene.add.image(927, 385, "petscatalog", "buy");
        buy_9.setOrigin(0.5051546391752577, 0.509090909090909);
        page3.add(buy_9);

        // buy_8
        const buy_8 = scene.add.image(1154, 202, "petscatalog", "buy");
        buy_8.setOrigin(0.5051546391752577, 0.509090909090909);
        page3.add(buy_8);

        // buy_7
        const buy_7 = scene.add.image(563.7, 752, "petscatalog", "buy");
        buy_7.setOrigin(0.5051546391752577, 0.509090909090909);
        page3.add(buy_7);

        // buy_6
        const buy_6 = scene.add.image(395, 574, "petscatalog", "buy");
        buy_6.setOrigin(0.5051546391752577, 0.509090909090909);
        page3.add(buy_6);

        // buy_5
        const buy_5 = scene.add.image(567, 388, "petscatalog", "buy");
        buy_5.setOrigin(0.5051546391752577, 0.509090909090909);
        page3.add(buy_5);

        // page2
        const page2 = scene.add.container(0, 0);
        page2.visible = false;
        this.add(page2);

        // page0002
        const page0002 = scene.add.image(0, 0, "petscatalog", "page/page0002");
        page0002.setOrigin(0, 0);
        page2.add(page0002);

        // buy_4
        const buy_4 = scene.add.image(1125, 714, "petscatalog", "buy");
        buy_4.setOrigin(0.5051546391752577, 0.509090909090909);
        page2.add(buy_4);

        // buy_3
        const buy_3 = scene.add.image(943, 477, "petscatalog", "buy");
        buy_3.setOrigin(0.5051546391752577, 0.509090909090909);
        page2.add(buy_3);

        // buy_2
        const buy_2 = scene.add.image(1117, 247, "petscatalog", "buy");
        buy_2.setOrigin(0.5051546391752577, 0.509090909090909);
        page2.add(buy_2);

        // buy_1
        const buy_1 = scene.add.image(621, 525, "petscatalog", "buy");
        buy_1.setOrigin(0.5051546391752577, 0.509090909090909);
        page2.add(buy_1);

        // buy
        const buy = scene.add.image(342, 729, "petscatalog", "buy");
        buy.setOrigin(0.5051546391752577, 0.509090909090909);
        page2.add(buy);

        // page1
        const page1 = scene.add.container(0, 0);
        this.add(page1);

        // page0001
        const page0001 = scene.add.image(0, 0, "petscatalog", "page/page0001");
        page0001.setOrigin(0, 0);
        page1.add(page0001);

        // pageFront
        const pageFront = scene.add.image(469, 42, "petscatalog", "page_front");
        pageFront.setOrigin(0, 0);
        page1.add(pageFront);

        // closeRight_1
        const closeRight_1 = scene.add.image(925, 39, "petscatalog", "close_right");
        closeRight_1.setOrigin(0, 0);
        page1.add(closeRight_1);

        // buttons
        const buttons = scene.add.container(190, 41);
        buttons.visible = false;
        this.add(buttons);

        // closeRight
        const closeRight = scene.add.image(1012, 0, "petscatalog", "close_right");
        closeRight.setOrigin(0, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = scene.add.image(1012, 549, "petscatalog", "page_right");
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = scene.add.image(0, 549, "petscatalog", "page_left");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // coins
        const coins = scene.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5];

        // block (components)
        new Interactive(block);

        // closeLeft (components)
        const closeLeftButton = new Button(closeLeft);
        closeLeftButton.spriteName = "close_left";
        closeLeftButton.callback = () => this.close();
        closeLeftButton.pixelPerfect = true;

        // pageLeft_1 (components)
        const pageLeft_1Button = new Button(pageLeft_1);
        pageLeft_1Button.spriteName = "page_left";
        pageLeft_1Button.callback = () => this.prevPage();
        pageLeft_1Button.activeFrame = false;
        pageLeft_1Button.pixelPerfect = true;

        // buy_22 (components)
        const buy_22Button = new Button(buy_22);
        buy_22Button.spriteName = "buy";
        buy_22Button.callback = () => this.onBuyClick(214);

        // buy_21 (components)
        const buy_21Button = new Button(buy_21);
        buy_21Button.spriteName = "buy";
        buy_21Button.callback = () => this.onBuyClick(225);

        // buy_20 (components)
        const buy_20Button = new Button(buy_20);
        buy_20Button.spriteName = "buy";
        buy_20Button.callback = () => this.onBuyClick(212);

        // buy_19 (components)
        const buy_19Button = new Button(buy_19);
        buy_19Button.spriteName = "buy";
        buy_19Button.callback = () => this.onBuyClick(203);

        // buy_18 (components)
        const buy_18Button = new Button(buy_18);
        buy_18Button.spriteName = "buy";
        buy_18Button.callback = () => this.onBuyClick(221);

        // buy_17 (components)
        const buy_17Button = new Button(buy_17);
        buy_17Button.spriteName = "buy";
        buy_17Button.callback = () => this.onBuyClick(227);

        // buy_16 (components)
        const buy_16Button = new Button(buy_16);
        buy_16Button.spriteName = "buy";
        buy_16Button.callback = () => this.onBuyClick(202);

        // buy_15 (components)
        const buy_15Button = new Button(buy_15);
        buy_15Button.spriteName = "buy";
        buy_15Button.callback = () => this.onBuyClick(200);

        // buy_14 (components)
        const buy_14Button = new Button(buy_14);
        buy_14Button.spriteName = "buy";
        buy_14Button.callback = () => this.onBuyClick(232);

        // buy_13 (components)
        const buy_13Button = new Button(buy_13);
        buy_13Button.spriteName = "buy";
        buy_13Button.callback = () => this.onBuyClick(201);

        // buy_12 (components)
        const buy_12Button = new Button(buy_12);
        buy_12Button.spriteName = "buy";
        buy_12Button.callback = () => this.onBuyClick(222);

        // buy_11 (components)
        const buy_11Button = new Button(buy_11);
        buy_11Button.spriteName = "buy";
        buy_11Button.callback = () => this.onBuyClick(206);

        // buy_10 (components)
        const buy_10Button = new Button(buy_10);
        buy_10Button.spriteName = "buy";
        buy_10Button.callback = () => this.onBuyClick(207);

        // buy_9 (components)
        const buy_9Button = new Button(buy_9);
        buy_9Button.spriteName = "buy";
        buy_9Button.callback = () => this.onBuyClick(233);

        // buy_8 (components)
        const buy_8Button = new Button(buy_8);
        buy_8Button.spriteName = "buy";
        buy_8Button.callback = () => this.onBuyClick(228);

        // buy_7 (components)
        const buy_7Button = new Button(buy_7);
        buy_7Button.spriteName = "buy";
        buy_7Button.callback = () => this.onBuyClick(209);

        // buy_6 (components)
        const buy_6Button = new Button(buy_6);
        buy_6Button.spriteName = "buy";
        buy_6Button.callback = () => this.onBuyClick(208);

        // buy_5 (components)
        const buy_5Button = new Button(buy_5);
        buy_5Button.spriteName = "buy";
        buy_5Button.callback = () => this.onBuyClick(223);

        // buy_4 (components)
        const buy_4Button = new Button(buy_4);
        buy_4Button.spriteName = "buy";
        buy_4Button.callback = () => this.onBuyClick(220);

        // buy_3 (components)
        const buy_3Button = new Button(buy_3);
        buy_3Button.spriteName = "buy";
        buy_3Button.callback = () => this.onBuyClick(218);

        // buy_2 (components)
        const buy_2Button = new Button(buy_2);
        buy_2Button.spriteName = "buy";
        buy_2Button.callback = () => this.onBuyClick(224);

        // buy_1 (components)
        const buy_1Button = new Button(buy_1);
        buy_1Button.spriteName = "buy";
        buy_1Button.callback = () => this.onBuyClick(210);

        // buy (components)
        const buyButton = new Button(buy);
        buyButton.spriteName = "buy";
        buyButton.callback = () => this.onBuyClick(211);

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
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onBuyClick(furnitureId) {
        this.interface.prompt.showFurniture(furnitureId)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
