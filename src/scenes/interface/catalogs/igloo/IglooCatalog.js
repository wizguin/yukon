import { Button, Interactive } from '@components/components'

import Book from '@scenes/interface/books/Book'
import FloorButton from './buttons/FloorButton'
import UpgradeButton from './buttons/UpgradeButton'


/* START OF COMPILED CODE */

export default class IglooCatalog extends Book {

    constructor() {
        super("IglooCatalog");

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

        this.load.pack("igloocatalog-pack", "assets/media/interface/catalogs/igloo/igloocatalog-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page10
        const page10 = this.add.container(0, 0);
        page10.visible = false;

        // p10
        const p10 = this.add.image(0, 0, "igloocatalog", "page/page0010");
        p10.setOrigin(0, 0);
        page10.add(p10);

        // closeLeft
        const closeLeft = this.add.image(491, 39, "igloocatalog", "close_left");
        closeLeft.setOrigin(0, 0);
        page10.add(closeLeft);

        // pageLeft_1
        const pageLeft_1 = this.add.image(492, 590, "igloocatalog", "page_left");
        pageLeft_1.setOrigin(0, 0);
        page10.add(pageLeft_1);

        // page9
        const page9 = this.add.container(0, 0);
        page9.visible = false;

        // p9
        const p9 = this.add.image(0, 0, "igloocatalog", "page/page0009");
        p9.setOrigin(0, 0);
        page9.add(p9);

        // upgradeButton_10
        const upgradeButton_10 = new UpgradeButton(this, 291, 536);
        page9.add(upgradeButton_10);

        // upgradeButton_11
        const upgradeButton_11 = new UpgradeButton(this, 865, 532);
        page9.add(upgradeButton_11);

        // page8
        const page8 = this.add.container(0, 0);
        page8.visible = false;

        // p8
        const p8 = this.add.image(0, 0, "igloocatalog", "page/page0008");
        p8.setOrigin(0, 0);
        page8.add(p8);

        // upgradeButton_8
        const upgradeButton_8 = new UpgradeButton(this, 291, 574);
        page8.add(upgradeButton_8);

        // upgradeButton_9
        const upgradeButton_9 = new UpgradeButton(this, 862, 533);
        page8.add(upgradeButton_9);

        // page7
        const page7 = this.add.container(0, 0);
        page7.visible = false;

        // p7
        const p7 = this.add.image(0, 0, "igloocatalog", "page/page0007");
        p7.setOrigin(0, 0);
        page7.add(p7);

        // upgradeButton_6
        const upgradeButton_6 = new UpgradeButton(this, 291, 533);
        page7.add(upgradeButton_6);

        // upgradeButton_7
        const upgradeButton_7 = new UpgradeButton(this, 864, 533);
        page7.add(upgradeButton_7);

        // page6
        const page6 = this.add.container(0, 0);
        page6.visible = false;

        // p6
        const p6 = this.add.image(0, 0, "igloocatalog", "page/page0006");
        p6.setOrigin(0, 0);
        page6.add(p6);

        // upgradeButton_4
        const upgradeButton_4 = new UpgradeButton(this, 292, 529);
        page6.add(upgradeButton_4);

        // upgradeButton_5
        const upgradeButton_5 = new UpgradeButton(this, 864, 573);
        page6.add(upgradeButton_5);

        // page5
        const page5 = this.add.container(0, 0);
        page5.visible = false;

        // p5
        const p5 = this.add.image(0, 0, "igloocatalog", "page/page0005");
        p5.setOrigin(0, 0);
        page5.add(p5);

        // upgradeButton_2
        const upgradeButton_2 = new UpgradeButton(this, 291, 572);
        page5.add(upgradeButton_2);

        // upgradeButton_3
        const upgradeButton_3 = new UpgradeButton(this, 866, 586);
        page5.add(upgradeButton_3);

        // page4
        const page4 = this.add.container(0, 0);
        page4.visible = false;

        // p4
        const p4 = this.add.image(0, 0, "igloocatalog", "page/page0004");
        p4.setOrigin(0, 0);
        page4.add(p4);

        // upgradeButton
        const upgradeButton = new UpgradeButton(this, 298, 540);
        page4.add(upgradeButton);

        // upgradeButton_1
        const upgradeButton_1 = new UpgradeButton(this, 866, 573);
        page4.add(upgradeButton_1);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // p3
        const p3 = this.add.image(0, 0, "igloocatalog", "page/page0003");
        p3.setOrigin(0, 0);
        page3.add(p3);

        // floorButton_3
        const floorButton_3 = new FloorButton(this, 522, 178);
        page3.add(floorButton_3);

        // floorButton_3_1
        const floorButton_3_1 = new FloorButton(this, 523, 359);
        page3.add(floorButton_3_1);

        // floorButton_3_2
        const floorButton_3_2 = new FloorButton(this, 522, 529);
        page3.add(floorButton_3_2);

        // floorButton_3_3
        const floorButton_3_3 = new FloorButton(this, 522, 699);
        page3.add(floorButton_3_3);

        // floorButton_3_4
        const floorButton_3_4 = new FloorButton(this, 841, 660);
        floorButton_3_4.scaleX = 1;
        floorButton_3_4.scaleY = 1;
        page3.add(floorButton_3_4);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // p2
        const p2 = this.add.image(0, 0, "igloocatalog", "page/page0002");
        p2.setOrigin(0, 0);
        page2.add(p2);

        // floorButton
        const floorButton = new FloorButton(this, 537, 436);
        page2.add(floorButton);

        // floorButton_1
        const floorButton_1 = new FloorButton(this, 537, 661);
        page2.add(floorButton_1);

        // floorButton_2
        const floorButton_2 = new FloorButton(this, 1100, 179);
        page2.add(floorButton_2);

        // floorButton_2_1
        const floorButton_2_1 = new FloorButton(this, 1100, 354.4866943359375);
        page2.add(floorButton_2_1);

        // floorButton_2_2
        const floorButton_2_2 = new FloorButton(this, 1100, 513);
        page2.add(floorButton_2_2);

        // floorButton_2_3
        const floorButton_2_3 = new FloorButton(this, 1100, 687);
        page2.add(floorButton_2_3);

        // page1
        const page1 = this.add.container(0, 0);
        page1.visible = false;

        // p1
        const p1 = this.add.image(0, 0, "igloocatalog", "page/page0001");
        p1.setOrigin(0, 0);
        page1.add(p1);

        // pageFront
        const pageFront = this.add.image(468, 44, "igloocatalog", "page_front");
        pageFront.setOrigin(0, 0);
        page1.add(pageFront);

        // closeRight_1
        const closeRight_1 = this.add.image(924, 39, "igloocatalog", "close_right");
        closeRight_1.setOrigin(0, 0);
        page1.add(closeRight_1);

        // buttons
        const buttons = this.add.container(190, 41);
        buttons.visible = false;

        // closeRight
        const closeRight = this.add.image(1012, 0, "igloocatalog", "close_right");
        closeRight.setOrigin(0, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = this.add.image(1012, 549, "igloocatalog", "page_right");
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = this.add.image(0, 549, "igloocatalog", "page_left");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // coins
        const coins = this.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10];

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

        // upgradeButton_10 (prefab fields)
        upgradeButton_10.igloo = 9;

        // upgradeButton_11 (prefab fields)
        upgradeButton_11.igloo = 6;

        // upgradeButton_8 (prefab fields)
        upgradeButton_8.igloo = 14;

        // upgradeButton_9 (prefab fields)
        upgradeButton_9.igloo = 2;

        // upgradeButton_6 (prefab fields)
        upgradeButton_6.igloo = 21;

        // upgradeButton_7 (prefab fields)
        upgradeButton_7.igloo = 1;

        // upgradeButton_4 (prefab fields)
        upgradeButton_4.igloo = 16;

        // upgradeButton_5 (prefab fields)
        upgradeButton_5.igloo = 13;

        // upgradeButton_2 (prefab fields)
        upgradeButton_2.igloo = 27;

        // upgradeButton_3 (prefab fields)
        upgradeButton_3.igloo = 26;

        // upgradeButton (prefab fields)
        upgradeButton.igloo = 20;

        // upgradeButton_1 (prefab fields)
        upgradeButton_1.igloo = 28;

        // floorButton_3 (prefab fields)
        floorButton_3.floor = 16;

        // floorButton_3_1 (prefab fields)
        floorButton_3_1.floor = 2;

        // floorButton_3_2 (prefab fields)
        floorButton_3_2.floor = 15;

        // floorButton_3_3 (prefab fields)
        floorButton_3_3.floor = 14;

        // floorButton_3_4 (prefab fields)
        floorButton_3_4.floor = 0;

        // floorButton (prefab fields)
        floorButton.floor = 19;

        // floorButton_1 (prefab fields)
        floorButton_1.floor = 8;

        // floorButton_2 (prefab fields)
        floorButton_2.floor = 18;

        // floorButton_2_1 (components)
        const floorButton_2_1Button = Button.getComponent(floorButton_2_1);
        floorButton_2_1Button.callback = () => this.interface.prompt.showFurniture(549);

        // floorButton_2_2 (prefab fields)
        floorButton_2_2.floor = 5;

        // floorButton_2_3 (prefab fields)
        floorButton_2_3.floor = 10;

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

    buyFloor(floor) {
        if (floor == this.world.room.args.flooring) {
            return this.interface.prompt.showError('You already have this flooring.')
        }

        this.showPrompt(floor, 'flooring', () => {
            this.network.send('update_flooring', { flooring: floor })
            this.interface.prompt.window.visible = false
            this.close()
        })
    }

    buyIgloo(igloo) {
        if (this.world.client.igloos.includes(igloo)) {
            return this.interface.prompt.showError('You already have this igloo.')
        }

        this.showPrompt(igloo, 'igloos', () => {
            this.network.send('add_igloo', { igloo: igloo })
            this.interface.prompt.window.visible = false
        })
    }

    showPrompt(id, type, callback) {
        let name = this.crumbs[type][id].name
        let cost = this.crumbs[type][id].cost

        let text = `Would you like to buy ${name} for ${cost} coins. You currently have ${this.world.client.coins} coins.`

        this.interface.prompt.showWindow(text, 'dual', callback, () => {
            this.interface.prompt.window.visible = false
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
