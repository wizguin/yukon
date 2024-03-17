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

        // pageLeft1
        const pageLeft1 = scene.add.image(492, 590, "petscatalog", "page_left");
        pageLeft1.setOrigin(0, 0);
        page5.add(pageLeft1);

        // page4
        const page4 = scene.add.container(0, 0);
        page4.visible = false;
        this.add(page4);

        // page0004
        const page0004 = scene.add.image(0, 0, "petscatalog", "page/page0004");
        page0004.setOrigin(0, 0);
        page4.add(page0004);

        // buy22
        const buy22 = scene.add.image(1115, 743, "petscatalog", "buy");
        buy22.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy22);

        // buy21
        const buy21 = scene.add.image(924, 551, "petscatalog", "buy");
        buy21.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy21);

        // buy20
        const buy20 = scene.add.image(1153, 401, "petscatalog", "buy");
        buy20.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy20);

        // buy19
        const buy19 = scene.add.image(640, 730, "petscatalog", "buy");
        buy19.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy19);

        // buy18
        const buy18 = scene.add.image(636, 567, "petscatalog", "buy");
        buy18.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy18);

        // buy17
        const buy17 = scene.add.image(636, 415, "petscatalog", "buy");
        buy17.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy17);

        // buy16
        const buy16 = scene.add.image(477, 735, "petscatalog", "buy");
        buy16.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy16);

        // buy15
        const buy15 = scene.add.image(474, 591, "petscatalog", "buy");
        buy15.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy15);

        // buy14
        const buy14 = scene.add.image(474, 441, "petscatalog", "buy");
        buy14.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy14);

        // buy13
        const buy13 = scene.add.image(311, 728, "petscatalog", "buy");
        buy13.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy13);

        // buy12
        const buy12 = scene.add.image(309, 569, "petscatalog", "buy");
        buy12.setOrigin(0.5051546391752577, 0.509090909090909);
        page4.add(buy12);

        // page3
        const page3 = scene.add.container(0, 0);
        page3.visible = false;
        this.add(page3);

        // page0003
        const page0003 = scene.add.image(0, 0, "petscatalog", "page/page0003");
        page0003.setOrigin(0, 0);
        page3.add(page0003);

        // buy11
        const buy11 = scene.add.image(933, 750, "petscatalog", "buy");
        buy11.setOrigin(0.5051546391752577, 0.509090909090909);
        page3.add(buy11);

        // buy10
        const buy10 = scene.add.image(1154, 566, "petscatalog", "buy");
        buy10.setOrigin(0.5051546391752577, 0.509090909090909);
        page3.add(buy10);

        // buy9
        const buy9 = scene.add.image(927, 385, "petscatalog", "buy");
        buy9.setOrigin(0.5051546391752577, 0.509090909090909);
        page3.add(buy9);

        // buy8
        const buy8 = scene.add.image(1154, 202, "petscatalog", "buy");
        buy8.setOrigin(0.5051546391752577, 0.509090909090909);
        page3.add(buy8);

        // buy7
        const buy7 = scene.add.image(564, 752, "petscatalog", "buy");
        buy7.setOrigin(0.5051546391752577, 0.509090909090909);
        page3.add(buy7);

        // buy6
        const buy6 = scene.add.image(395, 574, "petscatalog", "buy");
        buy6.setOrigin(0.5051546391752577, 0.509090909090909);
        page3.add(buy6);

        // buy5
        const buy5 = scene.add.image(567, 388, "petscatalog", "buy");
        buy5.setOrigin(0.5051546391752577, 0.509090909090909);
        page3.add(buy5);

        // page2
        const page2 = scene.add.container(0, 0);
        page2.visible = false;
        this.add(page2);

        // page0002
        const page0002 = scene.add.image(0, 0, "petscatalog", "page/page0002");
        page0002.setOrigin(0, 0);
        page2.add(page0002);

        // buy4
        const buy4 = scene.add.image(1125, 714, "petscatalog", "buy");
        buy4.setOrigin(0.5051546391752577, 0.509090909090909);
        page2.add(buy4);

        // buy3
        const buy3 = scene.add.image(943, 477, "petscatalog", "buy");
        buy3.setOrigin(0.5051546391752577, 0.509090909090909);
        page2.add(buy3);

        // buy2
        const buy2 = scene.add.image(1117, 247, "petscatalog", "buy");
        buy2.setOrigin(0.5051546391752577, 0.509090909090909);
        page2.add(buy2);

        // buy1
        const buy1 = scene.add.image(621, 525, "petscatalog", "buy");
        buy1.setOrigin(0.5051546391752577, 0.509090909090909);
        page2.add(buy1);

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

        // closeRight1
        const closeRight1 = scene.add.image(925, 39, "petscatalog", "close_right");
        closeRight1.setOrigin(0, 0);
        page1.add(closeRight1);

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

        // pageLeft1 (components)
        const pageLeft1Button = new Button(pageLeft1);
        pageLeft1Button.spriteName = "page_left";
        pageLeft1Button.callback = () => this.prevPage();
        pageLeft1Button.activeFrame = false;
        pageLeft1Button.pixelPerfect = true;

        // buy22 (components)
        const buy22Button = new Button(buy22);
        buy22Button.spriteName = "buy";
        buy22Button.callback = () => this.onBuyClick(214);

        // buy21 (components)
        const buy21Button = new Button(buy21);
        buy21Button.spriteName = "buy";
        buy21Button.callback = () => this.onBuyClick(225);

        // buy20 (components)
        const buy20Button = new Button(buy20);
        buy20Button.spriteName = "buy";
        buy20Button.callback = () => this.onBuyClick(212);

        // buy19 (components)
        const buy19Button = new Button(buy19);
        buy19Button.spriteName = "buy";
        buy19Button.callback = () => this.onBuyClick(203);

        // buy18 (components)
        const buy18Button = new Button(buy18);
        buy18Button.spriteName = "buy";
        buy18Button.callback = () => this.onBuyClick(221);

        // buy17 (components)
        const buy17Button = new Button(buy17);
        buy17Button.spriteName = "buy";
        buy17Button.callback = () => this.onBuyClick(227);

        // buy16 (components)
        const buy16Button = new Button(buy16);
        buy16Button.spriteName = "buy";
        buy16Button.callback = () => this.onBuyClick(202);

        // buy15 (components)
        const buy15Button = new Button(buy15);
        buy15Button.spriteName = "buy";
        buy15Button.callback = () => this.onBuyClick(200);

        // buy14 (components)
        const buy14Button = new Button(buy14);
        buy14Button.spriteName = "buy";
        buy14Button.callback = () => this.onBuyClick(232);

        // buy13 (components)
        const buy13Button = new Button(buy13);
        buy13Button.spriteName = "buy";
        buy13Button.callback = () => this.onBuyClick(201);

        // buy12 (components)
        const buy12Button = new Button(buy12);
        buy12Button.spriteName = "buy";
        buy12Button.callback = () => this.onBuyClick(222);

        // buy11 (components)
        const buy11Button = new Button(buy11);
        buy11Button.spriteName = "buy";
        buy11Button.callback = () => this.onBuyClick(206);

        // buy10 (components)
        const buy10Button = new Button(buy10);
        buy10Button.spriteName = "buy";
        buy10Button.callback = () => this.onBuyClick(207);

        // buy9 (components)
        const buy9Button = new Button(buy9);
        buy9Button.spriteName = "buy";
        buy9Button.callback = () => this.onBuyClick(233);

        // buy8 (components)
        const buy8Button = new Button(buy8);
        buy8Button.spriteName = "buy";
        buy8Button.callback = () => this.onBuyClick(228);

        // buy7 (components)
        const buy7Button = new Button(buy7);
        buy7Button.spriteName = "buy";
        buy7Button.callback = () => this.onBuyClick(209);

        // buy6 (components)
        const buy6Button = new Button(buy6);
        buy6Button.spriteName = "buy";
        buy6Button.callback = () => this.onBuyClick(208);

        // buy5 (components)
        const buy5Button = new Button(buy5);
        buy5Button.spriteName = "buy";
        buy5Button.callback = () => this.onBuyClick(223);

        // buy4 (components)
        const buy4Button = new Button(buy4);
        buy4Button.spriteName = "buy";
        buy4Button.callback = () => this.onBuyClick(220);

        // buy3 (components)
        const buy3Button = new Button(buy3);
        buy3Button.spriteName = "buy";
        buy3Button.callback = () => this.onBuyClick(218);

        // buy2 (components)
        const buy2Button = new Button(buy2);
        buy2Button.spriteName = "buy";
        buy2Button.callback = () => this.onBuyClick(224);

        // buy1 (components)
        const buy1Button = new Button(buy1);
        buy1Button.spriteName = "buy";
        buy1Button.callback = () => this.onBuyClick(210);

        // buy (components)
        const buyButton = new Button(buy);
        buyButton.spriteName = "buy";
        buyButton.callback = () => this.onBuyClick(211);

        // pageFront (components)
        const pageFrontButton = new Button(pageFront);
        pageFrontButton.spriteName = "page_front";
        pageFrontButton.callback = () => this.nextPage();
        pageFrontButton.activeFrame = false;

        // closeRight1 (components)
        const closeRight1Button = new Button(closeRight1);
        closeRight1Button.spriteName = "close_right";
        closeRight1Button.callback = () => this.close();
        closeRight1Button.pixelPerfect = true;

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
