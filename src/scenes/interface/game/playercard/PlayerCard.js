import BaseContainer from '@scenes/base/BaseContainer'

import { Animation, Button, DraggableContainer, Interactive } from '@components/components'

import Inventory from './inventory/Inventory'
import InventorySort from './inventory_sort/InventorySort'
import Buttons from './buttons/Buttons'
import PaperDoll from './paperdoll/PaperDoll'


/* START OF COMPILED CODE */

export default class PlayerCard extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 460);

        /** @type {Phaser.GameObjects.Container} */
        this.photo;
        /** @type {PaperDoll} */
        this.paperDoll;
        /** @type {Buttons} */
        this.buttons;
        /** @type {Phaser.GameObjects.Container} */
        this.stats;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Text} */
        this.username;
        /** @type {InventorySort} */
        this.inventorySort;
        /** @type {Inventory} */
        this.inventory;
        /** @type {Phaser.GameObjects.Image} */
        this.stripes;


        // photo
        const photo = scene.add.container(0, -2);
        this.add(photo);

        // card_photo
        const card_photo = scene.add.image(0, 0, "main", "card-photo");
        photo.add(card_photo);

        // card_bg
        const card_bg = scene.add.image(0, 0, "main", "card-bg-player");
        this.add(card_bg);

        // paperDoll
        const paperDoll = new PaperDoll(scene, 0, -7);
        this.add(paperDoll);

        // buttons
        const buttons = new Buttons(scene, 0, 255);
        buttons.visible = false;
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
        coins.setStyle({ "align": "right", "color": "#000000ff", "fixedWidth":300,"fontFamily": "Arial", "fontSize": "24px" });
        stats.add(coins);

        // username
        const username = scene.add.text(0, -238, "", {});
        username.setOrigin(0.5, 0.5);
        username.text = "Username";
        username.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":360,"fontFamily": "Arial", "fontSize": "32px", "fontStyle": "bold" });
        this.add(username);

        // x_button
        const x_button = scene.add.image(177, -237, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(177, -239, "main", "blue-x");
        this.add(blue_x);

        // inventorySort
        const inventorySort = new InventorySort(scene, 434, 315);
        inventorySort.visible = false;
        this.add(inventorySort);

        // inventory
        const inventory = new Inventory(scene, -135, 33);
        this.add(inventory);

        // badge_member
        const badge_member = scene.add.image(-149, -224, "main", "badge/member");
        this.add(badge_member);

        // badge_lines_lines
        const badge_lines_lines = scene.add.sprite(-149, -223, "main", "badge/lines/lines0001");
        badge_lines_lines.setOrigin(0.5, 0.5028571428571429);
        this.add(badge_lines_lines);

        // stripes
        const stripes = scene.add.image(-149, -185, "main", "badge/stripes/4");
        stripes.setOrigin(0.5, 0.5051546391752577);
        this.add(stripes);

        // badge_ribbon
        const badge_ribbon = scene.add.image(-149, -208, "main", "badge/ribbon");
        badge_ribbon.setOrigin(0.5061728395061729, 0.5185185185185185);
        this.add(badge_ribbon);

        // badge_star
        const badge_star = scene.add.image(-149, -241, "main", "badge/star");
        this.add(badge_star);

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = card_bg;

        // card_photo (components)
        new Interactive(card_photo);

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => { this.visible = false };

        // badge_lines_lines (components)
        const badge_lines_linesAnimation = new Animation(badge_lines_lines);
        badge_lines_linesAnimation.key = "badge/lines/lines";
        badge_lines_linesAnimation.end = 180;

        this.photo = photo;
        this.paperDoll = paperDoll;
        this.buttons = buttons;
        this.stats = stats;
        this.coins = coins;
        this.username = username;
        this.inventorySort = inventorySort;
        this.inventory = inventory;
        this.stripes = stripes;

        /* START-USER-CTR-CODE */

        // Active penguin id
        this.id = null

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    /**
     * Shows a player card by id, if the user is found in the current room the penguin object can
     * be taken from there. Otherwise the penguin object must be fetched from the server.
     *
     * @param {number} id - Penguin ID
     * @param {boolean} refresh - Whether or not a card should pass the already open check
     */
    showCard(id, refresh = false) {
        // Don't open player's card if it's already open
        if (id == this.id && this.visible && !refresh) {
            this.interface.showWidget(this)
            return
        }

        if (id in this.world.room.penguins) {
            let penguin = this.world.room.penguins[id]
            this._showCard(penguin, penguin.items.flat)

        } else {
            // Fetch penguin object from server
            this.network.send('get_player', { id: id })
        }
    }

    /**
     * Primary showCard function, which accepts a penguin object, and optionally an items object to
     * fill the player card with the correct data. The items object is not required if the penguin is fetched
     * from the server due to all necessary data being available from the penguin object.
     *
     * @param {object} penguin - Penguin object
     * @param {object} items - Penguin items object
     */
    _showCard(penguin, items = penguin) {
        // Text
        this.username.text = penguin.username

        // Paper doll
        this.paperDoll.loadDoll(items, penguin.isClient)

        // Visible elements
        if (penguin.isClient) {
            this.coins.text = `Your Coins: ${this.world.client.coins}`
            this.stats.visible = true
            this.buttons.visible = false
            this.inventory.visible = true
            this.inventory.showPage()

        } else {
            this.stats.visible = false
            this.buttons.visible = true
            this.inventory.visible = false
        }

        this.inventorySort.closeMenu()

        this.id = penguin.id

        this.updateButtons()
        this.updateStripes(penguin.joinTime)

        this.interface.showWidget(this)
    }

    updateButtons() {
        if (this.buttons.visible) {
            let relationship = this.world.getRelationship(this.id)
            this.buttons.updateButtons(relationship)
        }
    }

    updateStripes(joinTime) {
        if (!joinTime) {
            return this.stripes.setFrame('badge/stripes/0')
        }

        let oneDay = 1000 * 60 * 60 * 24
        let timeDiff = Date.now() - Date.parse(joinTime)
        let daysDiff = Math.round(timeDiff / oneDay)

        let months = Math.floor(daysDiff / 30)
        let frame

        if (months <= 6) {
            frame = 0
        } else if (months <= 12) {
            frame = 1
        } else if (months <= 18) {
            frame = 2
        } else if (months <= 24) {
            frame = 3
        } else {
            frame = 4
        }

        this.stripes.setFrame(`badge/stripes/${frame}`)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
