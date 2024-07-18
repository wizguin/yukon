import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton } from '@components/components'

import InventoryLoader from '@engine/loaders/InventoryLoader'


const phoneId = 800
const cardDeckId = 821

/* START OF COMPILED CODE */

export default class Inventory extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 460);

        /** @type {Phaser.GameObjects.Container} */
        this.container;
        /** @type {Phaser.GameObjects.Image} */
        this.inventory_bg;
        /** @type {Phaser.GameObjects.Text} */
        this.active_text;
        /** @type {Phaser.GameObjects.Image} */
        this.arrow;
        /** @type {Phaser.GameObjects.Image[]} */
        this.slots;


        // container
        const container = scene.add.container(-56, -272);
        container.visible = false;
        this.add(container);

        // inventory_bg
        const inventory_bg = scene.add.image(56, 270, "main", "inventory/bg");
        container.add(inventory_bg);

        // inventory_scroll
        const inventory_scroll = scene.add.image(368, 245, "main", "inventory/scroll");
        container.add(inventory_scroll);

        // down_button
        const down_button = scene.add.image(368, 472, "main", "grey-button");
        container.add(down_button);

        // grey_arrow_1
        const grey_arrow_1 = scene.add.image(368, 470, "main", "grey-arrow");
        grey_arrow_1.flipY = true;
        container.add(grey_arrow_1);

        // up_button
        const up_button = scene.add.image(368, 2, "main", "grey-button");
        container.add(up_button);

        // grey_arrow
        const grey_arrow = scene.add.image(368, 0, "main", "grey-arrow");
        container.add(grey_arrow);

        // slot_12
        const slot_12 = scene.add.image(264, 439, "main", "large-box");
        container.add(slot_12);

        // slot_11
        const slot_11 = scene.add.image(132, 439, "main", "large-box");
        container.add(slot_11);

        // slot_10
        const slot_10 = scene.add.image(0, 439, "main", "large-box");
        container.add(slot_10);

        // slot_9
        const slot_9 = scene.add.image(264, 307, "main", "large-box");
        container.add(slot_9);

        // slot_8
        const slot_8 = scene.add.image(132, 307, "main", "large-box");
        container.add(slot_8);

        // slot_7
        const slot_7 = scene.add.image(0, 307, "main", "large-box");
        container.add(slot_7);

        // slot_6
        const slot_6 = scene.add.image(264, 175, "main", "large-box");
        container.add(slot_6);

        // slot_5
        const slot_5 = scene.add.image(132, 175, "main", "large-box");
        container.add(slot_5);

        // slot_4
        const slot_4 = scene.add.image(0, 175, "main", "large-box");
        container.add(slot_4);

        // slot_3
        const slot_3 = scene.add.image(264, 43, "main", "large-box");
        container.add(slot_3);

        // slot_2
        const slot_2 = scene.add.image(132, 43, "main", "large-box");
        container.add(slot_2);

        // slot_1
        const slot_1 = scene.add.image(0, 43, "main", "large-box");
        container.add(slot_1);

        // inventory_sort_button
        const inventory_sort_button = scene.add.image(131, 553, "main", "inventory/sort-button");
        container.add(inventory_sort_button);

        // active_text
        const active_text = scene.add.text(130, 553, "", {});
        active_text.setOrigin(0.5, 0.5);
        active_text.text = "All Items";
        active_text.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":268,"fontFamily": "Arial", "fontSize": "24px" });
        container.add(active_text);

        // tab
        const tab = scene.add.container(369, -156);
        this.add(tab);

        // tab_handle
        const tab_handle = scene.add.image(8, 2, "main", "tab");
        tab_handle.angle = -90;
        tab.add(tab_handle);

        // arrow
        const arrow = scene.add.image(0, 0, "main", "tab-arrow");
        arrow.angle = -90;
        tab.add(arrow);

        // lists
        const slots = [slot_1, slot_2, slot_3, slot_4, slot_5, slot_6, slot_7, slot_8, slot_9, slot_10, slot_11, slot_12];

        // down_button (components)
        const down_buttonButton = new Button(down_button);
        down_buttonButton.spriteName = "grey-button";
        down_buttonButton.callback = () => { this.nextPage() };

        // up_button (components)
        const up_buttonButton = new Button(up_button);
        up_buttonButton.spriteName = "grey-button";
        up_buttonButton.callback = () => { this.prevPage() };

        // slot_12 (components)
        const slot_12Button = new Button(slot_12);
        slot_12Button.spriteName = "large-box";
        slot_12Button.callback = () => { this.onSlotClick(11) };
        slot_12Button.activeFrame = false;

        // slot_11 (components)
        const slot_11Button = new Button(slot_11);
        slot_11Button.spriteName = "large-box";
        slot_11Button.callback = () => { this.onSlotClick(10) };
        slot_11Button.activeFrame = false;

        // slot_10 (components)
        const slot_10Button = new Button(slot_10);
        slot_10Button.spriteName = "large-box";
        slot_10Button.callback = () => { this.onSlotClick(9) };
        slot_10Button.activeFrame = false;

        // slot_9 (components)
        const slot_9Button = new Button(slot_9);
        slot_9Button.spriteName = "large-box";
        slot_9Button.callback = () => { this.onSlotClick(8) };
        slot_9Button.activeFrame = false;

        // slot_8 (components)
        const slot_8Button = new Button(slot_8);
        slot_8Button.spriteName = "large-box";
        slot_8Button.callback = () => { this.onSlotClick(7) };
        slot_8Button.activeFrame = false;

        // slot_7 (components)
        const slot_7Button = new Button(slot_7);
        slot_7Button.spriteName = "large-box";
        slot_7Button.callback = () => { this.onSlotClick(6) };
        slot_7Button.activeFrame = false;

        // slot_6 (components)
        const slot_6Button = new Button(slot_6);
        slot_6Button.spriteName = "large-box";
        slot_6Button.callback = () => { this.onSlotClick(5) };
        slot_6Button.activeFrame = false;

        // slot_5 (components)
        const slot_5Button = new Button(slot_5);
        slot_5Button.spriteName = "large-box";
        slot_5Button.callback = () => { this.onSlotClick(4) };
        slot_5Button.activeFrame = false;

        // slot_4 (components)
        const slot_4Button = new Button(slot_4);
        slot_4Button.spriteName = "large-box";
        slot_4Button.callback = () => { this.onSlotClick(3) };
        slot_4Button.activeFrame = false;

        // slot_3 (components)
        const slot_3Button = new Button(slot_3);
        slot_3Button.spriteName = "large-box";
        slot_3Button.callback = () => { this.onSlotClick(2) };
        slot_3Button.activeFrame = false;

        // slot_2 (components)
        const slot_2Button = new Button(slot_2);
        slot_2Button.spriteName = "large-box";
        slot_2Button.callback = () => { this.onSlotClick(1) };
        slot_2Button.activeFrame = false;

        // slot_1 (components)
        const slot_1Button = new Button(slot_1);
        slot_1Button.spriteName = "large-box";
        slot_1Button.callback = () => { this.onSlotClick(0) };
        slot_1Button.activeFrame = false;

        // inventory_sort_button (components)
        const inventory_sort_buttonButton = new Button(inventory_sort_button);
        inventory_sort_buttonButton.spriteName = "inventory/sort-button";
        inventory_sort_buttonButton.callback = () => this.parentContainer.inventorySort.showMenu();
        inventory_sort_buttonButton.activeFrame = false;

        // tab_handle (components)
        const tab_handleSimpleButton = new SimpleButton(tab_handle);
        tab_handleSimpleButton.callback = () => { this.onTabClick() };

        this.container = container;
        this.inventory_bg = inventory_bg;
        this.active_text = active_text;
        this.arrow = arrow;
        this.slots = slots;

        /* START-USER-CTR-CODE */

        this.page = 1
        this.pageSize = 12
        this.filter = null

        this.inventoryLoader = new InventoryLoader(scene, this)

        this.inventory_bg.setInteractive({ pixelPerfect: true })

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get inventory() {
        let inventory = this.world.client.inventory

        if (this.filter) {
            // If filter is other then inventory results in concat of flags, photos and awards
            inventory = (this.filter == 'other') ? inventory.flag.concat(inventory.photo, inventory.award) : inventory[this.filter]
        }

        return Object.values(inventory).flat()
    }

    get maxPage() {
        return Math.ceil(this.inventory.length / this.pageSize)
    }

    showPage() {
        if (!this.visible) return

        let page = this.inventory.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)
        this.inventoryLoader.loadPage(page)
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

    onTabClick() {
        if (this.container.visible) {
            this.parentContainer.bringToTop(this)
            this.parentContainer.inventorySort.closeMenu()
            this.x -= 495

        } else {
            this.parentContainer.sendToBack(this)
            this.x += 495
        }

        this.container.visible = !this.container.visible
        this.arrow.toggleFlipY()
    }

    onSlotClick(slotId) {
        let item = this.slots[slotId].item

        if (!item || !item.id || !item.active) return

        switch (item.id) {
            case phoneId:
                this.interface.main.onPhoneClick()
                break

            case cardDeckId:
                this.interface.loadWidget('NinjaProgress')
                break

            default:
                this.network.send('update_player', { item: item.id })
                break
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
