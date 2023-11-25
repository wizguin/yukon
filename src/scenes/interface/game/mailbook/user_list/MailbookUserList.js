/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import Button from "../../../../components/Button";
import MailbookUserItem from "./MailbookUserItem";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MailbookUserList extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {MailbookUserItem[]} */
        this.items;


        // list
        const list = scene.add.image(0, 0, "mailbook", "list/list");
        list.setOrigin(0.5011990407673861, 0.5007072135785007);
        this.add(list);

        // scroll
        const scroll = scene.add.image(165, 0, "mailbook", "list/scroll");
        this.add(scroll);

        // downButton
        const downButton = scene.add.image(165, 308, "main", "blue-button");
        downButton.scaleX = 0.86;
        downButton.scaleY = 0.86;
        this.add(downButton);

        // upButton
        const upButton = scene.add.image(165, -313, "main", "blue-button");
        upButton.scaleX = 0.86;
        upButton.scaleY = 0.86;
        this.add(upButton);

        // downArrow
        const downArrow = scene.add.image(165, 306, "main", "blue-arrow");
        downArrow.scaleX = 0.86;
        downArrow.scaleY = 0.86;
        downArrow.flipY = true;
        this.add(downArrow);

        // upArrow
        const upArrow = scene.add.image(165, -315, "main", "blue-arrow");
        upArrow.scaleX = 0.86;
        upArrow.scaleY = 0.86;
        this.add(upArrow);

        // mailbookUserItem12
        const mailbookUserItem12 = new MailbookUserItem(scene, -30, 299);
        this.add(mailbookUserItem12);

        // mailbookUserItem11
        const mailbookUserItem11 = new MailbookUserItem(scene, -30, 243);
        this.add(mailbookUserItem11);

        // mailbookUserItem10
        const mailbookUserItem10 = new MailbookUserItem(scene, -30, 187);
        this.add(mailbookUserItem10);

        // mailbookUserItem9
        const mailbookUserItem9 = new MailbookUserItem(scene, -30, 131);
        this.add(mailbookUserItem9);

        // mailbookUserItem8
        const mailbookUserItem8 = new MailbookUserItem(scene, -30, 75);
        this.add(mailbookUserItem8);

        // mailbookUserItem7
        const mailbookUserItem7 = new MailbookUserItem(scene, -30, 19);
        this.add(mailbookUserItem7);

        // mailbookUserItem6
        const mailbookUserItem6 = new MailbookUserItem(scene, -30, -37);
        this.add(mailbookUserItem6);

        // mailbookUserItem5
        const mailbookUserItem5 = new MailbookUserItem(scene, -30, -93);
        this.add(mailbookUserItem5);

        // mailbookUserItem4
        const mailbookUserItem4 = new MailbookUserItem(scene, -30, -149);
        this.add(mailbookUserItem4);

        // mailbookUserItem3
        const mailbookUserItem3 = new MailbookUserItem(scene, -30, -205);
        this.add(mailbookUserItem3);

        // mailbookUserItem2
        const mailbookUserItem2 = new MailbookUserItem(scene, -30, -261);
        this.add(mailbookUserItem2);

        // mailbookUserItem1
        const mailbookUserItem1 = new MailbookUserItem(scene, -30, -317);
        this.add(mailbookUserItem1);

        // lists
        const items = [mailbookUserItem1, mailbookUserItem2, mailbookUserItem3, mailbookUserItem4, mailbookUserItem5, mailbookUserItem6, mailbookUserItem7, mailbookUserItem8, mailbookUserItem9, mailbookUserItem10, mailbookUserItem11, mailbookUserItem12];

        // downButton (components)
        const downButtonButton = new Button(downButton);
        downButtonButton.spriteName = "blue-button";
        downButtonButton.callback = () => this.nextPage();

        // upButton (components)
        const upButtonButton = new Button(upButton);
        upButtonButton.spriteName = "blue-button";
        upButtonButton.callback = () => this.prevPage();

        this.items = items;

        /* START-USER-CTR-CODE */

        this.page = 1
        this.pageSize = 12

        this.showPage()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get maxPage() {
        return Math.ceil(this.buddies.length / this.pageSize)
    }

    get buddies() {
        return this.world.client.buddies.sort((a, b) => {
            return -(a.online - b.online) // Reverse: true before false
            || a.username.toLowerCase().localeCompare(b.username.toLowerCase())
        })
    }

    showPage() {
        const page = this.buddies.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)

        for (const [index, item] of this.items.entries()) {
            const buddy = page[index]

            if (buddy) {
                item.setItem(buddy)
            } else {
                item.setItem(null)
            }
        }
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

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
