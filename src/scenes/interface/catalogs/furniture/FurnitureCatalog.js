import { Button, Interactive } from '@components/components'

import Book from '@scenes/interface/books/Book'
import BuyButton from './buttons/BuyButton'


/* START OF COMPILED CODE */

export default class FurnitureCatalog extends Book {

    constructor() {
        super("FurnitureCatalog");

        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("furniturecatalog-pack", "assets/media/interface/catalogs/furniture/furniturecatalog-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page8
        const page8 = this.add.container(0, 0);
        page8.visible = false;

        // p8
        const p8 = this.add.image(0, 0, "furniturecatalog", "page/page0008");
        p8.setOrigin(0, 0);
        page8.add(p8);

        // pageLeft_1
        const pageLeft_1 = this.add.image(492, 590, "furniturecatalog", "page_left");
        pageLeft_1.setOrigin(0, 0);
        page8.add(pageLeft_1);

        // closeLeft
        const closeLeft = this.add.image(491, 39, "furniturecatalog", "close_left");
        closeLeft.setOrigin(0, 0);
        page8.add(closeLeft);

        // page7
        const page7 = this.add.container(0, 0);
        page7.visible = false;

        // p7
        const p7 = this.add.image(0, 0, "furniturecatalog", "page/page0007");
        p7.setOrigin(0, 0);
        page7.add(p7);

        // buyButton_29
        const buyButton_29 = new BuyButton(this, 541, 202);
        page7.add(buyButton_29);

        // buyButton_30
        const buyButton_30 = new BuyButton(this, 302, 434);
        page7.add(buyButton_30);

        // buyButton_31
        const buyButton_31 = new BuyButton(this, 503, 662);
        page7.add(buyButton_31);

        // buyButton_32
        const buyButton_32 = new BuyButton(this, 1069, 205);
        page7.add(buyButton_32);

        // buyButton_33
        const buyButton_33 = new BuyButton(this, 1026, 405);
        page7.add(buyButton_33);

        // buyButton_34
        const buyButton_34 = new BuyButton(this, 998, 648);
        page7.add(buyButton_34);

        // page6
        const page6 = this.add.container(0, 0);
        page6.visible = false;

        // p6
        const p6 = this.add.image(0, 0, "furniturecatalog", "page/page0006");
        p6.setOrigin(0, 0);
        page6.add(p6);

        // buyButton_23
        const buyButton_23 = new BuyButton(this, 500, 199);
        page6.add(buyButton_23);

        // buyButton_24
        const buyButton_24 = new BuyButton(this, 296, 433);
        page6.add(buyButton_24);

        // buyButton_25
        const buyButton_25 = new BuyButton(this, 519, 676);
        page6.add(buyButton_25);

        // buyButton_26
        const buyButton_26 = new BuyButton(this, 834, 267);
        page6.add(buyButton_26);

        // buyButton_27
        const buyButton_27 = new BuyButton(this, 1105, 468);
        page6.add(buyButton_27);

        // buyButton_28
        const buyButton_28 = new BuyButton(this, 847, 666);
        page6.add(buyButton_28);

        // page5
        const page5 = this.add.container(0, 0);
        page5.visible = false;

        // p5
        const p5 = this.add.image(0, 0, "furniturecatalog", "page/page0005");
        p5.setOrigin(0, 0);
        page5.add(p5);

        // buyButton_15
        const buyButton_15 = new BuyButton(this, 244, 374);
        page5.add(buyButton_15);

        // buyButton_16
        const buyButton_16 = new BuyButton(this, 433, 421);
        page5.add(buyButton_16);

        // buyButton_17
        const buyButton_17 = new BuyButton(this, 610, 373);
        page5.add(buyButton_17);

        // buyButton_18
        const buyButton_18 = new BuyButton(this, 527, 670);
        page5.add(buyButton_18);

        // buyButton_19
        const buyButton_19 = new BuyButton(this, 851, 161);
        page5.add(buyButton_19);

        // buyButton_20
        const buyButton_20 = new BuyButton(this, 1133, 321);
        page5.add(buyButton_20);

        // buyButton_21
        const buyButton_21 = new BuyButton(this, 851, 573);
        page5.add(buyButton_21);

        // buyButton_22
        const buyButton_22 = new BuyButton(this, 1120, 701);
        page5.add(buyButton_22);

        // page4
        const page4 = this.add.container(0, 0);
        page4.visible = false;

        // p4
        const p4 = this.add.image(0, 0, "furniturecatalog", "page/page0004");
        p4.setOrigin(0, 0);
        page4.add(p4);

        // buyButton_10
        const buyButton_10 = new BuyButton(this, 527, 385);
        page4.add(buyButton_10);

        // buyButton_11
        const buyButton_11 = new BuyButton(this, 311, 645);
        page4.add(buyButton_11);

        // buyButton_12
        const buyButton_12 = new BuyButton(this, 846, 197);
        page4.add(buyButton_12);

        // buyButton_13
        const buyButton_13 = new BuyButton(this, 845, 422);
        page4.add(buyButton_13);

        // buyButton_14
        const buyButton_14 = new BuyButton(this, 1110, 412);
        page4.add(buyButton_14);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // p3
        const p3 = this.add.image(0, 0, "furniturecatalog", "page/page0003");
        p3.setOrigin(0, 0);
        page3.add(p3);

        // buyButton_5
        const buyButton_5 = new BuyButton(this, 543, 288);
        page3.add(buyButton_5);

        // buyButton_6
        const buyButton_6 = new BuyButton(this, 289, 618);
        page3.add(buyButton_6);

        // buyButton_7
        const buyButton_7 = new BuyButton(this, 1092, 206);
        page3.add(buyButton_7);

        // buyButton_8
        const buyButton_8 = new BuyButton(this, 891, 448);
        page3.add(buyButton_8);

        // buyButton_9
        const buyButton_9 = new BuyButton(this, 1100, 692);
        page3.add(buyButton_9);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // p2
        const p2 = this.add.image(0, 0, "furniturecatalog", "page/page0002");
        p2.setOrigin(0, 0);
        page2.add(p2);

        // buyButton
        const buyButton = new BuyButton(this, 569, 277);
        page2.add(buyButton);

        // buyButton_1
        const buyButton_1 = new BuyButton(this, 280, 626);
        page2.add(buyButton_1);

        // buyButton_2
        const buyButton_2 = new BuyButton(this, 1073, 211);
        page2.add(buyButton_2);

        // buyButton_3
        const buyButton_3 = new BuyButton(this, 1142, 329);
        page2.add(buyButton_3);

        // buyButton_4
        const buyButton_4 = new BuyButton(this, 1103, 704);
        page2.add(buyButton_4);

        // page1
        const page1 = this.add.container(0, 0);
        page1.visible = false;

        // p1
        const p1 = this.add.image(0, 0, "furniturecatalog", "page/page0001");
        p1.setOrigin(0, 0);
        page1.add(p1);

        // pageFront
        const pageFront = this.add.image(468, 44, "furniturecatalog", "page_front");
        pageFront.setOrigin(0, 0);
        page1.add(pageFront);

        // closeRight_1
        const closeRight_1 = this.add.image(924, 39, "furniturecatalog", "close_right");
        closeRight_1.setOrigin(0, 0);
        page1.add(closeRight_1);

        // buttons
        const buttons = this.add.container(190, 41);
        buttons.visible = false;

        // closeRight
        const closeRight = this.add.image(1012, 0, "furniturecatalog", "close_right");
        closeRight.setOrigin(0, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = this.add.image(1012, 549, "furniturecatalog", "page_right");
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = this.add.image(0, 549, "furniturecatalog", "page_left");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // coins
        const coins = this.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8];

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

        // buyButton_29 (prefab fields)
        buyButton_29.item = 546;

        // buyButton_30 (prefab fields)
        buyButton_30.item = 547;

        // buyButton_31 (prefab fields)
        buyButton_31.item = 548;

        // buyButton_32 (prefab fields)
        buyButton_32.item = 311;

        // buyButton_33 (prefab fields)
        buyButton_33.item = 84;

        // buyButton_34 (prefab fields)
        buyButton_34.item = 544;

        // buyButton_23 (prefab fields)
        buyButton_23.item = 562;

        // buyButton_24 (prefab fields)
        buyButton_24.item = 563;

        // buyButton_25 (prefab fields)
        buyButton_25.item = 564;

        // buyButton_26 (prefab fields)
        buyButton_26.item = 83;

        // buyButton_27 (prefab fields)
        buyButton_27.item = 81;

        // buyButton_28 (prefab fields)
        buyButton_28.item = 82;

        // buyButton_15 (prefab fields)
        buyButton_15.item = 551;

        // buyButton_16 (prefab fields)
        buyButton_16.item = 552;

        // buyButton_17 (prefab fields)
        buyButton_17.item = 553;

        // buyButton_18 (prefab fields)
        buyButton_18.item = 550;

        // buyButton_19 (prefab fields)
        buyButton_19.item = 355;

        // buyButton_20 (prefab fields)
        buyButton_20.item = 354;

        // buyButton_21 (prefab fields)
        buyButton_21.item = 177;

        // buyButton_22 (prefab fields)
        buyButton_22.item = 178;

        // buyButton_10 (prefab fields)
        buyButton_10.item = 560;

        // buyButton_11 (prefab fields)
        buyButton_11.item = 561;

        // buyButton_12 (prefab fields)
        buyButton_12.item = 75;

        // buyButton_13 (prefab fields)
        buyButton_13.item = 73;

        // buyButton_14 (prefab fields)
        buyButton_14.item = 74;

        // buyButton_5 (prefab fields)
        buyButton_5.item = 441;

        // buyButton_6 (prefab fields)
        buyButton_6.item = 440;

        // buyButton_7 (prefab fields)
        buyButton_7.item = 443;

        // buyButton_8 (prefab fields)
        buyButton_8.item = 367;

        // buyButton_9 (prefab fields)
        buyButton_9.item = 366;

        // buyButton (prefab fields)
        buyButton.item = 570;

        // buyButton_1 (prefab fields)
        buyButton_1.item = 575;

        // buyButton_2 (prefab fields)
        buyButton_2.item = 572;

        // buyButton_3 (prefab fields)
        buyButton_3.item = 571;

        // buyButton_4 (prefab fields)
        buyButton_4.item = 186;

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

        this.buttons = buttons;
        this.coins = coins;
        this.pages = pages;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.setCoins(this.world.client.coins)
    }

    setCoins(coins) {
        this.coins.text = `YOUR COINS: ${coins}`
    }

    buy(item) {
        this.interface.prompt.showFurniture(item)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
