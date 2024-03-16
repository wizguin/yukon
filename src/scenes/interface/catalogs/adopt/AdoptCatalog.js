export const preload = {
    key: 'adoptcatalog-pack',
    url: 'assets/media/interface/catalogs/adopt/adoptcatalog-pack.json',
    loadString: ['loading', 'adoptcatalog']
}

/* START OF COMPILED CODE */

import BookContainer from "../../books/BookContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
import SimpleButton from "../../../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class AdoptCatalog extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.hint;
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

        // page8
        const page8 = scene.add.container(0, 0);
        page8.visible = false;
        this.add(page8);

        // page0008
        const page0008 = scene.add.image(0, 0, "adoptcatalog", "page/page0008");
        page0008.setOrigin(0, 0);
        page8.add(page0008);

        // bathButton
        const bathButton = scene.add.image(1108, 426, "main", "large-box");
        bathButton.scaleX = 0.91;
        bathButton.scaleY = 0.91;
        page8.add(bathButton);

        // foodButton
        const foodButton = scene.add.image(992, 426, "main", "large-box");
        foodButton.scaleX = 0.91;
        foodButton.scaleY = 0.91;
        page8.add(foodButton);

        // cookieButton
        const cookieButton = scene.add.image(1108, 310, "main", "large-box");
        cookieButton.scaleX = 0.91;
        cookieButton.scaleY = 0.91;
        page8.add(cookieButton);

        // gumButton
        const gumButton = scene.add.image(992, 310, "main", "large-box");
        gumButton.scaleX = 0.91;
        gumButton.scaleY = 0.91;
        page8.add(gumButton);

        // bath
        const bath = scene.add.image(1108, 426, "main", "pet/bath");
        bath.scaleX = 0.91;
        bath.scaleY = 0.91;
        bath.setOrigin(0.5, 0.5051546391752577);
        page8.add(bath);

        // food
        const food = scene.add.image(992, 426, "main", "pet/food");
        food.scaleX = 0.91;
        food.scaleY = 0.91;
        page8.add(food);

        // cookie
        const cookie = scene.add.image(1108, 312, "main", "pet/cookie");
        cookie.scaleX = 0.91;
        cookie.scaleY = 0.91;
        cookie.setOrigin(0.5052631578947369, 0.5);
        page8.add(cookie);

        // gum
        const gum = scene.add.image(994, 312, "main", "pet/gum");
        gum.scaleX = 0.91;
        gum.scaleY = 0.91;
        gum.setOrigin(0.5051546391752577, 0.5054945054945055);
        page8.add(gum);

        // walkButton
        const walkButton = scene.add.image(556, 728, "main", "blue-button");
        walkButton.scaleX = 0.91;
        walkButton.scaleY = 0.91;
        page8.add(walkButton);

        // feedButton
        const feedButton = scene.add.image(500, 728, "main", "blue-button");
        feedButton.scaleX = 0.91;
        feedButton.scaleY = 0.91;
        page8.add(feedButton);

        // restButton
        const restButton = scene.add.image(444, 728, "main", "blue-button");
        restButton.scaleX = 0.91;
        restButton.scaleY = 0.91;
        page8.add(restButton);

        // playButton
        const playButton = scene.add.image(390, 728, "main", "blue-button");
        playButton.scaleX = 0.91;
        playButton.scaleY = 0.91;
        page8.add(playButton);

        // walk
        const walk = scene.add.image(557, 727, "main", "pet/walk");
        walk.scaleX = 0.91;
        walk.scaleY = 0.91;
        page8.add(walk);

        // feed
        const feed = scene.add.image(501, 726, "main", "pet/feed");
        feed.scaleX = 0.91;
        feed.scaleY = 0.91;
        feed.setOrigin(0.5185185185185185, 0.5);
        page8.add(feed);

        // rest
        const rest = scene.add.image(443, 727, "main", "pet/rest");
        rest.scaleX = 0.91;
        rest.scaleY = 0.91;
        rest.setOrigin(0.5, 0.52);
        page8.add(rest);

        // play
        const play = scene.add.image(389, 725, "main", "pet/play");
        play.scaleX = 0.91;
        play.scaleY = 0.91;
        page8.add(play);

        // stats
        const stats = scene.add.rectangle(476, 604, 345, 127);
        page8.add(stats);

        // pet
        const pet = scene.add.rectangle(473, 433, 216, 189);
        page8.add(pet);

        // name
        const name = scene.add.rectangle(473, 281, 210, 40);
        page8.add(name);

        // hint
        const hint = scene.add.image(220, 229, "adoptcatalog", "hint/hint0001");
        hint.setOrigin(0, 0);
        hint.visible = false;
        page8.add(hint);

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
        page2.add(fun);

        // card
        const card = scene.add.rectangle(437, 420, 219, 55);
        card.alpha = 0.5;
        page2.add(card);

        // personalities
        const personalities = scene.add.rectangle(457, 323, 360, 55);
        personalities.alpha = 0.5;
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
        const pages = [page1, page2, page0003, page0004, page0005, page0006, page0007, page8, page0009, page0010, page11];

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

        // bathButton (components)
        const bathButtonButton = new Button(bathButton);
        bathButtonButton.spriteName = "large-box";
        bathButtonButton.hoverCallback = () => this.onHintOver(11);
        bathButtonButton.hoverOutCallback = () => this.onHintOut();
        bathButtonButton.activeFrame = false;

        // foodButton (components)
        const foodButtonButton = new Button(foodButton);
        foodButtonButton.spriteName = "large-box";
        foodButtonButton.hoverCallback = () => this.onHintOver(10);
        foodButtonButton.hoverOutCallback = () => this.onHintOut();
        foodButtonButton.activeFrame = false;

        // cookieButton (components)
        const cookieButtonButton = new Button(cookieButton);
        cookieButtonButton.spriteName = "large-box";
        cookieButtonButton.hoverCallback = () => this.onHintOver(9);
        cookieButtonButton.hoverOutCallback = () => this.onHintOut();
        cookieButtonButton.activeFrame = false;

        // gumButton (components)
        const gumButtonButton = new Button(gumButton);
        gumButtonButton.spriteName = "large-box";
        gumButtonButton.hoverCallback = () => this.onHintOver(8);
        gumButtonButton.hoverOutCallback = () => this.onHintOut();
        gumButtonButton.activeFrame = false;

        // walkButton (components)
        const walkButtonButton = new Button(walkButton);
        walkButtonButton.spriteName = "blue-button";
        walkButtonButton.hoverCallback = () => this.onHintOver(7);
        walkButtonButton.hoverOutCallback = () => this.onHintOut();

        // feedButton (components)
        const feedButtonButton = new Button(feedButton);
        feedButtonButton.spriteName = "blue-button";
        feedButtonButton.hoverCallback = () => this.onHintOver(6);
        feedButtonButton.hoverOutCallback = () => this.onHintOut();

        // restButton (components)
        const restButtonButton = new Button(restButton);
        restButtonButton.spriteName = "blue-button";
        restButtonButton.hoverCallback = () => this.onHintOver(5);
        restButtonButton.hoverOutCallback = () => this.onHintOut();

        // playButton (components)
        const playButtonButton = new Button(playButton);
        playButtonButton.spriteName = "blue-button";
        playButtonButton.hoverCallback = () => this.onHintOver(4);
        playButtonButton.hoverOutCallback = () => this.onHintOut();

        // stats (components)
        const statsSimpleButton = new SimpleButton(stats);
        statsSimpleButton.hoverCallback = () => this.onHintOver(3);
        statsSimpleButton.hoverOutCallback = () => this.onHintOut();

        // pet (components)
        const petSimpleButton = new SimpleButton(pet);
        petSimpleButton.hoverCallback = () => this.onHintOver(2);
        petSimpleButton.hoverOutCallback = () => this.onHintOut();

        // name (components)
        const nameSimpleButton = new SimpleButton(name);
        nameSimpleButton.hoverCallback = () => this.onHintOver(1);
        nameSimpleButton.hoverOutCallback = () => this.onHintOut();

        // fun (components)
        const funSimpleButton = new SimpleButton(fun);
        funSimpleButton.callback = () => this.showPage(8);

        // card (components)
        const cardSimpleButton = new SimpleButton(card);
        cardSimpleButton.callback = () => this.showPage(7);

        // personalities (components)
        const personalitiesSimpleButton = new SimpleButton(personalities);
        personalitiesSimpleButton.callback = () => this.showPage(2);

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

        this.hint = hint;
        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onHintOver(frame) {
        const frameNumber = frame.toString().padStart(4, '0')

        this.hint.setFrame(`hint/hint${frameNumber}`)
        this.hint.visible = true
    }

    onHintOut() {
        this.hint.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
