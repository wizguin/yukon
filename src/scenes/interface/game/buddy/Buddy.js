import BaseContainer from '@scenes/base/BaseContainer'

import { Button, DraggableContainer } from '@components/components'

import BuddyItem from './buddy_item/BuddyItem'


/* START OF COMPILED CODE */

class Buddy extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y);

        // card_bg
        const card_bg = scene.add.image(0, 0, "main", "card-bg");
        this.add(card_bg);

        // text
        const text = scene.add.text(0, -236, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "Your Friends";
        text.setStyle({"align":"center","color":"#000000","fixedWidth":420,"fontFamily":"Arial Narrow","fontSize":"32px"});
        this.add(text);

        // x_button
        const x_button = scene.add.image(177, -237, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(177, -239, "main", "blue-x");
        this.add(blue_x);

        // buddy_scroll
        const buddy_scroll = scene.add.image(177, 14, "main", "buddy/scroll");
        this.add(buddy_scroll);

        // down_button
        const down_button = scene.add.image(177, 195, "main", "blue-button");
        this.add(down_button);

        // up_button
        const up_button = scene.add.image(177, -173, "main", "blue-button");
        this.add(up_button);

        // blue_arrow_1
        const blue_arrow_1 = scene.add.image(177, 193, "main", "blue-arrow");
        blue_arrow_1.flipY = true;
        this.add(blue_arrow_1);

        // blue_arrow
        const blue_arrow = scene.add.image(177, -175, "main", "blue-arrow");
        this.add(blue_arrow);

        // buddy_item_7
        const buddy_item_7 = new BuddyItem(scene, -26, 194);
        this.add(buddy_item_7);

        // buddy_item_6
        const buddy_item_6 = new BuddyItem(scene, -26, 142);
        this.add(buddy_item_6);

        // buddy_item_5
        const buddy_item_5 = new BuddyItem(scene, -26, 90);
        this.add(buddy_item_5);

        // buddy_item_4
        const buddy_item_4 = new BuddyItem(scene, -26, 38);
        this.add(buddy_item_4);

        // buddy_item_3
        const buddy_item_3 = new BuddyItem(scene, -26, -14);
        this.add(buddy_item_3);

        // buddy_item_2
        const buddy_item_2 = new BuddyItem(scene, -26, -66);
        this.add(buddy_item_2);

        // buddy_item_1
        const buddy_item_1 = new BuddyItem(scene, -26, -118);
        this.add(buddy_item_1);

        // buddy_item
        const buddy_item = new BuddyItem(scene, -26, -170);
        this.add(buddy_item);

        // buddy_button
        const buddy_button = scene.add.image(-60, 255, "main", "blue-button");
        this.add(buddy_button);

        // profile_button
        const profile_button = scene.add.image(0, 255, "main", "blue-button");
        this.add(profile_button);

        // igloo_button
        const igloo_button = scene.add.image(60, 255, "main", "blue-button");
        this.add(igloo_button);

        // buddies_icon_disabled
        const buddies_icon_disabled = scene.add.image(-60, 253, "main", "buddies-icon");
        this.add(buddies_icon_disabled);

        // help_icon_disabled
        const help_icon_disabled = scene.add.image(0, 253, "main", "online-icon");
        this.add(help_icon_disabled);

        // igloo_icon_disabled
        const igloo_icon_disabled = scene.add.image(60, 253, "main", "ignore-icon");
        this.add(igloo_icon_disabled);

        // lists
        const items = [buddy_item, buddy_item_1, buddy_item_2, buddy_item_3, buddy_item_4, buddy_item_5, buddy_item_6, buddy_item_7]

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = card_bg;

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => { this.visible = false };

        // down_button (components)
        const down_buttonButton = new Button(down_button);
        down_buttonButton.spriteName = "blue-button";
        down_buttonButton.callback = () => this.nextPage();
        down_buttonButton.activeFrame = false;

        // up_button (components)
        const up_buttonButton = new Button(up_button);
        up_buttonButton.spriteName = "blue-button";
        up_buttonButton.callback = () => this.prevPage();
        up_buttonButton.activeFrame = false;

        // buddy_button (components)
        const buddy_buttonButton = new Button(buddy_button);
        buddy_buttonButton.spriteName = "blue-button";
        buddy_buttonButton.activeFrame = false;

        // profile_button (components)
        const profile_buttonButton = new Button(profile_button);
        profile_buttonButton.spriteName = "blue-button";
        profile_buttonButton.activeFrame = false;

        // igloo_button (components)
        const igloo_buttonButton = new Button(igloo_button);
        igloo_buttonButton.spriteName = "blue-button";
        igloo_buttonButton.activeFrame = false;

        this.items = items;

        /* START-USER-CTR-CODE */

        this.page = 1
        this.pageSize = 8

        this.showPage()

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    get penguins() {
        this.sort()
        return this.world.client.buddies
    }

    get maxPage() {
        return Math.ceil(this.penguins.length / this.pageSize)
    }

    /**
     * Sorts the client buddies array, first by online status, and then alphabetically.
     */
    sort() {
        this.world.client.buddies.sort((a, b) => {
            return -(a.online - b.online) // Reverse: true before false
            || a.username.toLowerCase().localeCompare(b.username.toLowerCase())
        })
    }

    showPage() {
        let page = this.penguins.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)

        for (let [index, item] of this.items.entries()) {
            let buddy = page[index]

            if (buddy) {
                item.setItem(buddy)
            } else {
                item.setItem('')
            }
        }
    }

    prevPage() {
        let page = this.page - 1
        if (page < 1) return

        this.page = page
        this.showPage()
    }

    nextPage() {
        let page = this.page + 1
        if (page > this.maxPage) return

        this.page = page
        this.showPage()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Buddy