export const preload = {
    key: 'give_tour-pack',
    url: 'assets/media/interface/books/give_tour/give_tour-pack.json',
    loadString: 'give_tour'
}

/* START OF COMPILED CODE */

import BookContainer from "../BookContainer";
import Interactive from "../../../components/Interactive";
import SimpleButton from "../../../components/SimpleButton";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GiveTour extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

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

        // page4
        const page4 = scene.add.container(0, 0);
        page4.visible = false;
        this.add(page4);

        // page0004
        const page0004 = scene.add.image(0, 0, "give_tour", "page/page0004");
        page0004.setOrigin(0, 0);
        page4.add(page0004);

        // backTurnCover
        const backTurnCover = scene.add.image(554, 732, "give_tour", "turn_cover");
        backTurnCover.scaleX = -1;
        backTurnCover.setOrigin(0.5057471264367817, 0.5);
        page4.add(backTurnCover);

        // backCloseButton
        const backCloseButton = scene.add.image(577, 148, "give_tour", "close_button");
        backCloseButton.scaleX = -1;
        page4.add(backCloseButton);

        // page3
        const page3 = scene.add.container(0, 0);
        page3.visible = false;
        this.add(page3);

        // page0003
        const page0003 = scene.add.image(0, 0, "give_tour", "page/page0003");
        page0003.setOrigin(0, 0);
        page3.add(page0003);

        // button5
        const button5 = scene.add.image(397, 684, "give_tour", "button");
        page3.add(button5);

        // button4
        const button4 = scene.add.image(397, 632, "give_tour", "button");
        page3.add(button4);

        // button3
        const button3 = scene.add.image(397, 580, "give_tour", "button");
        page3.add(button3);

        // button2
        const button2 = scene.add.image(610, 528, "give_tour", "button");
        page3.add(button2);

        // button1
        const button1 = scene.add.image(397, 528, "give_tour", "button");
        page3.add(button1);

        // buttonsText
        const buttonsText = scene.add.image(513, 608, "give_tour", "buttons_text");
        buttonsText.setOrigin(0.501577287066246, 0.5029239766081871);
        page3.add(buttonsText);

        // cursor
        const cursor = scene.add.image(647, 577, "give_tour", "cursor");
        cursor.setOrigin(0.5142857142857142, 0.5072463768115942);
        page3.add(cursor);

        // page2
        const page2 = scene.add.image(0, 0, "give_tour", "page/page0002");
        page2.setOrigin(0, 0);
        page2.visible = false;
        this.add(page2);

        // page1
        const page1 = scene.add.container(0, 0);
        page1.visible = false;
        this.add(page1);

        // page0001
        const page0001 = scene.add.image(0, 0, "give_tour", "page/page0001");
        page0001.setOrigin(0, 0);
        page1.add(page0001);

        // turnCover
        const turnCover = scene.add.image(1032, 732, "give_tour", "turn_cover");
        turnCover.setOrigin(0.5057471264367817, 0.5);
        page1.add(turnCover);

        // frontCloseButton
        const frontCloseButton = scene.add.image(1008, 148, "give_tour", "close_button");
        page1.add(frontCloseButton);

        // buttons
        const buttons = scene.add.container(190, 41);
        buttons.visible = false;
        this.add(buttons);

        // closeButton
        const closeButton = scene.add.image(1084, 124, "give_tour", "close_button");
        buttons.add(closeButton);

        // pageRight
        const pageRight = scene.add.image(1095, 671, "give_tour", "turn_page");
        pageRight.setOrigin(0.5045871559633027, 0.5022421524663677);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = scene.add.image(62, 671, "give_tour", "turn_page");
        pageLeft.scaleX = -1;
        pageLeft.setOrigin(0.5045871559633027, 0.5022421524663677);
        buttons.add(pageLeft);

        // lists
        const pages = [page1, page2, page3, page4];

        // block (components)
        new Interactive(block);

        // backTurnCover (components)
        const backTurnCoverSimpleButton = new SimpleButton(backTurnCover);
        backTurnCoverSimpleButton.callback = () => this.prevPage();
        backTurnCoverSimpleButton.pixelPerfect = true;

        // backCloseButton (components)
        const backCloseButtonButton = new Button(backCloseButton);
        backCloseButtonButton.spriteName = "close_button";
        backCloseButtonButton.callback = () => this.close();
        backCloseButtonButton.pixelPerfect = true;

        // button5 (components)
        const button5Button = new Button(button5);
        button5Button.spriteName = "button";
        button5Button.activeFrame = false;
        button5Button.pixelPerfect = true;

        // button4 (components)
        const button4Button = new Button(button4);
        button4Button.spriteName = "button";
        button4Button.activeFrame = false;
        button4Button.pixelPerfect = true;

        // button3 (components)
        const button3Button = new Button(button3);
        button3Button.spriteName = "button";
        button3Button.activeFrame = false;
        button3Button.pixelPerfect = true;

        // button2 (components)
        const button2Button = new Button(button2);
        button2Button.spriteName = "button";
        button2Button.activeFrame = false;
        button2Button.pixelPerfect = true;

        // button1 (components)
        const button1Button = new Button(button1);
        button1Button.spriteName = "button";
        button1Button.activeFrame = false;
        button1Button.pixelPerfect = true;

        // turnCover (components)
        const turnCoverSimpleButton = new SimpleButton(turnCover);
        turnCoverSimpleButton.callback = () => this.nextPage();
        turnCoverSimpleButton.pixelPerfect = true;

        // frontCloseButton (components)
        const frontCloseButtonButton = new Button(frontCloseButton);
        frontCloseButtonButton.spriteName = "close_button";
        frontCloseButtonButton.callback = () => this.close();
        frontCloseButtonButton.pixelPerfect = true;

        // closeButton (components)
        const closeButtonButton = new Button(closeButton);
        closeButtonButton.spriteName = "close_button";
        closeButtonButton.callback = () => this.close();
        closeButtonButton.pixelPerfect = true;

        // pageRight (components)
        const pageRightSimpleButton = new SimpleButton(pageRight);
        pageRightSimpleButton.callback = () => this.nextPage();
        pageRightSimpleButton.pixelPerfect = true;

        // pageLeft (components)
        const pageLeftSimpleButton = new SimpleButton(pageLeft);
        pageLeftSimpleButton.callback = () => this.prevPage();
        pageLeftSimpleButton.pixelPerfect = true;

        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
