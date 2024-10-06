/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import MailbookUserList from "./user_list/MailbookUserList";
import Button from "../../../components/Button";
import MailbookPostcardItem from "./postcard_item/MailbookPostcardItem";
import MailbookPreview from "./preview/MailbookPreview";
/* START-USER-IMPORTS */

import { alignGrid } from '@engine/utils/grid/Grid'

import PostcardIconLoader from '@engine/loaders/PostcardIconLoader'

/* END-USER-IMPORTS */

export default class Mailbook extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {MailbookUserList} */
        this.userList;
        /** @type {Phaser.GameObjects.Container} */
        this.buddy;
        /** @type {Phaser.GameObjects.Text} */
        this.titleText;
        /** @type {Phaser.GameObjects.Text} */
        this.pageText;
        /** @type {Phaser.GameObjects.Container} */
        this.postcards;
        /** @type {MailbookPreview} */
        this.mailbookPreview;
        /** @type {MailbookPostcardItem[]} */
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

        // userList
        const userList = new MailbookUserList(scene, 1051, 349);
        buddy.add(userList);

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
        postcardsText2.setStyle({ "color": "#000000", "fixedWidth":400,"fontFamily": "Burbank Big Regular", "fontSize": "58px", "fontStyle": "bold" });
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
        coinText.setStyle({ "color": "#000000", "fixedWidth":50,"fontFamily": "Burbank Big Regular", "fontSize": "40px", "fontStyle": "bold" });
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
        postcardsText.setStyle({ "color": "#000000", "fixedWidth":400,"fontFamily": "Burbank Big Regular", "fontSize": "58px", "fontStyle": "bold" });
        postcards.add(postcardsText);

        // pageText
        const pageText = scene.add.text(1163, -45, "", {});
        pageText.setOrigin(0.5, 0.5);
        pageText.setStyle({ "align": "right", "color": "#bbb", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        postcards.add(pageText);

        // mailbookPostcardItem6
        const mailbookPostcardItem6 = new MailbookPostcardItem(scene, -1000, -1000);
        mailbookPostcardItem6.visible = false;
        this.add(mailbookPostcardItem6);

        // mailbookPostcardItem5
        const mailbookPostcardItem5 = new MailbookPostcardItem(scene, -1000, -1000);
        mailbookPostcardItem5.visible = false;
        this.add(mailbookPostcardItem5);

        // mailbookPostcardItem4
        const mailbookPostcardItem4 = new MailbookPostcardItem(scene, -1000, -1000);
        mailbookPostcardItem4.visible = false;
        this.add(mailbookPostcardItem4);

        // mailbookPostcardItem3
        const mailbookPostcardItem3 = new MailbookPostcardItem(scene, -1000, -1000);
        mailbookPostcardItem3.visible = false;
        this.add(mailbookPostcardItem3);

        // mailbookPostcardItem2
        const mailbookPostcardItem2 = new MailbookPostcardItem(scene, -1000, -1000);
        mailbookPostcardItem2.visible = false;
        this.add(mailbookPostcardItem2);

        // mailbookPostcardItem1
        const mailbookPostcardItem1 = new MailbookPostcardItem(scene, -1000, -1000);
        mailbookPostcardItem1.visible = false;
        this.add(mailbookPostcardItem1);

        // close
        const close = scene.add.image(624, -320, "mailbook", "close");
        close.setOrigin(0.5028901734104047, 0.5017667844522968);
        this.add(close);

        // mailbookPreview
        const mailbookPreview = new MailbookPreview(scene, 0, 0);
        mailbookPreview.visible = false;
        this.add(mailbookPreview);

        // lists
        const postcardItems = [mailbookPostcardItem1, mailbookPostcardItem2, mailbookPostcardItem3, mailbookPostcardItem4, mailbookPostcardItem5, mailbookPostcardItem6];

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

        this.userList = userList;
        this.buddy = buddy;
        this.titleText = titleText;
        this.pageText = pageText;
        this.postcards = postcards;
        this.mailbookPreview = mailbookPreview;
        this.postcardItems = postcardItems;

        /* START-USER-CTR-CODE */

        this.startX = 20
        this.startY = 40
        this.cellWidth = 400
        this.cellHeight = 305

        this.page = 1
        this.pageSize = 6

        this.pages = this.buildPages()
        this.maxPage = this.pages.length

        this.postcardIconLoader = new PostcardIconLoader(this)

        this.recipientId
        this.recipientName

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        this.showBuddy()

        super.show()
    }

    close() {
        this.mailbookPreview.close()

        super.close()
    }

    buildPages() {
        const pages = []

        for (const category of this.crumbs.postcards) {
            this.buildCategoryPages(pages, category)
        }

        return pages
    }

    buildCategoryPages(pages, category) {
        const postcards = category.postcards

        for (let i = 0; i < postcards.length; i += this.pageSize) {
            pages.push({
                category: category.name,
                postcards: postcards.slice(i, i + this.pageSize)
            })
        }
    }

    showBuddy() {
        this.postcards.visible = false
        this.postcardItems.map(item => item.clearItem())

        this.buddy.visible = true
        this.userList.showPage()
    }

    showPostcards(recipientId, recipientName) {
        if (!this.visible) {
            super.show()
        }

        this.recipientId = recipientId
        this.recipientName = recipientName

        this.buddy.visible = false
        this.postcards.visible = true

        this.page = 1

        this.showPage()
    }

    showPage() {
        const page = this.pages[this.page - 1]

        this.titleText.text = page.category

        for (const [index, item] of this.postcardItems.entries()) {
            const postcard = page.postcards[index]

            if (postcard) {
                item.setItem(postcard)
            } else {
                item.setItem(null)
            }
        }

        this.updatePageText()

        this.updateGrid()

        this.postcardIconLoader.loadPage(page)
    }

    prevPage() {
        const page = this.page - 1
        if (page < 1) {
            return
        }

        this.page = page
        this.showPage()
    }

    nextPage() {
        const page = this.page + 1
        if (page > this.maxPage) {
            return
        }

        this.page = page
        this.showPage()
    }

    updatePageText() {
        this.pageText.text = `Page ${this.page} of ${this.maxPage}`
    }

    updateGrid() {
        const items = this.postcardItems.filter(item => item.visible)

        if (!items.length) {
            return
        }

        const halfCellWidth = Math.round(this.cellWidth / 2)
        const halfCellHeight = Math.round(this.cellHeight / 2)

        switch (items.length) {
            case 1:
                this.createGrid(items, 1, 0, 0)
                break

            case 2:
                this.createGrid(items, 2, -halfCellWidth, 0)
                break

            case 3:
                this.create3Grid(items, halfCellWidth, halfCellHeight)
                break

            case 4:
                this.createGrid(items, 2, -halfCellWidth, -halfCellHeight)
                break

            case 5:
                this.create5Grid(items, halfCellWidth, halfCellHeight)
                break

            case 6:
                this.createGrid(items, 3, -this.cellWidth, -halfCellHeight)
                break

            default:
                break
        }
    }

    createGrid(items, cols, x, y) {
        alignGrid({
            items: items,
            cols: cols,
            cellWidth: this.cellWidth,
            cellHeight: this.cellHeight,

            // Offset start pos
            startX: this.startX + x,
            startY: this.startY + y,

            // Position each column below the previous
            callback: (item, colIndex) => item.y += colIndex * 6
        })
    }

    create3Grid(items, halfCellWidth, halfCellHeight) {
        items = this.splitArray(items, 2)

        this.createGrid(items[0], 2, -halfCellWidth, -halfCellHeight)
        this.createGrid(items[1], 1, 0, halfCellHeight)
    }

    create5Grid(items, halfCellWidth, halfCellHeight) {
        items = this.splitArray(items, 3)

        this.createGrid(items[0], 3, -this.cellWidth, -halfCellHeight)
        this.createGrid(items[1], 2, -halfCellWidth, halfCellHeight)
    }

    splitArray(array, middleIndex) {
        const first = array.slice(0, middleIndex)
        const second = array.slice(middleIndex, array.length)

        return [first, second]
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
