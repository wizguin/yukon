import BaseContainer from '@scenes/base/BaseContainer'

import { Button, DraggableContainer, Interactive } from '@components/components'

import Inventory from './inventory/Inventory'
import Buttons from './buttons/Buttons'
import PaperDoll from '@engine/world/penguin/PaperDoll'


/* START OF COMPILED CODE */

class PlayerCard extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y);

        // card_photo
        const card_photo = scene.add.image(0, -2, "main", "card-photo");
        this.add(card_photo);

        // card_bg
        const card_bg = scene.add.image(0, 0, "main", "card-bg-player");
        this.add(card_bg);

        // buttons
        const buttons = new Buttons(scene, 0, 255);
        this.add(buttons);

        // stats
        const stats = scene.add.container(-13, 255);
        this.add(stats);

        // card_coin
        const card_coin = scene.add.image(177, 0, "main", "card-coin");
        stats.add(card_coin);

        // coins
        const coins = scene.add.text(0, 0, "", {});
        coins.setOrigin(0.5, 0.5);
        coins.text = "Your Coins: 000000";
        coins.setStyle({"align":"right","color":"#000000ff","fixedWidth":300,"fontFamily":"Arial","fontSize":"24px"});
        stats.add(coins);

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

        // inventory
        const inventory = new Inventory(scene, -135, 33);
        this.add(inventory);

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = card_bg;

        // card_photo (components)
        new Interactive(card_photo);

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => { this.visible = false };

        this.buttons = buttons;
        this.stats = stats;
        this.coins = coins;
        this.username = username;
        this.inventory = inventory;

        /* START-USER-CTR-CODE */

        // Adds PaperDoll inbetween card_photo and card_bg
        this.paperDoll = new PaperDoll(this.scene, 0, -2)
        this.addAt(this.paperDoll, 1)

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    showCard(penguin) {
        // Don't open player's card if it's already open
        if (this.username.text == penguin.username && this.visible) return

        // Text
        this.username.text = penguin.username
        this.coins.text = `Your Coins: ${penguin.user.coins}`

        // Paper doll
        this.paperDoll.loadPaperDoll(penguin)

        // Inventory
        if (penguin.isClient) {
            this.inventory.showPage()
            this.stats.visible = true
            this.buttons.visible = false
            this.inventory.visible = true

        } else {
            this.stats.visible = false
            this.buttons.visible = true
            this.inventory.visible = false
        }

        this.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default PlayerCard
