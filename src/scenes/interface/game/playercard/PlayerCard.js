import { Button, Draggable } from '@/components/components'

import PaperDoll from '@/world/penguin/PaperDoll'


/* START OF COMPILED CODE */

class PlayerCard extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x, y);

        // inventory_bg
        const inventory_bg = scene.add.image(366, 34, "main", "inventory-bg");
        this.add(inventory_bg);

        // inventory_scroll
        const inventory_scroll = scene.add.image(675, 11, "main", "inventory-scroll");
        this.add(inventory_scroll);

        // down_button
        const down_button = scene.add.image(677, 240, "main", "grey-button");
        this.add(down_button);

        // up_button
        const up_button = scene.add.image(677, -232, "main", "grey-button");
        this.add(up_button);

        // grey_arrow
        const grey_arrow = scene.add.image(677, -234, "main", "grey-arrow");
        this.add(grey_arrow);

        // grey_arrow_1
        const grey_arrow_1 = scene.add.image(677, 238, "main", "grey-arrow");
        grey_arrow_1.flipY = true;
        this.add(grey_arrow_1);

        // card_photo
        const card_photo = scene.add.image(0, -2, "main", "card-photo");
        this.add(card_photo);

        // card_bg
        const card_bg = scene.add.image(0, 0, "main", "card-bg-player");
        this.add(card_bg);

        // card_coin
        const card_coin = scene.add.image(164, 255, "main", "card-coin");
        this.add(card_coin);

        // coins
        const coins = scene.add.text(-13, 255, "", {});
        coins.setOrigin(0.5, 0.5);
        coins.text = "Your Coins: 000000";
        coins.setStyle({"align":"right","color":"#000000ff","fixedWidth":300,"fontFamily":"Arial","fontSize":"24px"});
        this.add(coins);

        // username
        const username = scene.add.text(0, -238, "", {});
        username.setOrigin(0.5, 0.5);
        username.text = "Username";
        username.setStyle({"align":"center","color":"#000000ff","fixedWidth":360,"fontFamily":"Arial","fontSize":"32px","fontStyle":"bold"});
        this.add(username);

        // card_badge_member
        const card_badge_member = scene.add.image(-149, -224, "main", "card-badge-member");
        this.add(card_badge_member);

        // x_button
        const x_button = scene.add.image(177, -237, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(177, -239, "main", "blue-x");
        this.add(blue_x);

        // item_12
        const item_12 = scene.add.image(571, 205, "main", "large-box");
        this.add(item_12);

        // item_11
        const item_11 = scene.add.image(439, 204, "main", "large-box");
        this.add(item_11);

        // item_10
        const item_10 = scene.add.image(307, 205, "main", "large-box");
        this.add(item_10);

        // item_9
        const item_9 = scene.add.image(571, 74, "main", "large-box");
        this.add(item_9);

        // item_8
        const item_8 = scene.add.image(439, 74, "main", "large-box");
        this.add(item_8);

        // item_7
        const item_7 = scene.add.image(307, 74, "main", "large-box");
        this.add(item_7);

        // item_6
        const item_6 = scene.add.image(571, -58, "main", "large-box");
        this.add(item_6);

        // item_5
        const item_5 = scene.add.image(439, -59, "main", "large-box");
        this.add(item_5);

        // item_4
        const item_4 = scene.add.image(307, -60, "main", "large-box");
        this.add(item_4);

        // item_3
        const item_3 = scene.add.image(571, -192, "main", "large-box");
        this.add(item_3);

        // item_2
        const item_2 = scene.add.image(439, -192, "main", "large-box");
        this.add(item_2);

        // item_1
        const item_1 = scene.add.image(307, -194, "main", "large-box");
        this.add(item_1);

        // tab
        const tab = scene.add.container(736, -121);
        this.add(tab);

        // tab_handle
        const tab_handle = scene.add.image(7, 1, "main", "tab");
        tab_handle.angle = -90;
        tab.add(tab_handle);

        // tab_arrow
        const tab_arrow = scene.add.image(0, 0, "main", "tab-arrow");
        tab_arrow.angle = -90;
        tab_arrow.flipY = true;
        tab.add(tab_arrow);

        // this (components)
        const thisDraggable = new Draggable(this);
        thisDraggable.setSize = true;
        thisDraggable.width = card_bg.width;
        thisDraggable.height = card_bg.height;

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => { this.visible = false };

        this.coins = coins;
        this.username = username;

        /* START-USER-CTR-CODE */

        // Adds PaperDoll container at index 7
        this.paperDoll = new PaperDoll(this.scene, 0, -2)
        this.addAt(this.paperDoll, 7)

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    showCard(penguin) {
        // Don't open player's card if it's already open
        if (this.username.text == penguin.username && this.visible) return

        this.setText(penguin)
        this.paperDoll.loadPaperDoll(penguin)
        this.visible = true
    }

    showClientCard(client) {
        this.showCard(client.penguin)
    }

    setText(penguin) {
        this.username.text = penguin.username
        this.coins.text = `Your Coins: ${penguin.user.coins}`
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default PlayerCard
