import BaseContainer from '@scenes/base/BaseContainer'

import { Interactive, NineSlice } from '@components/components'

import DualButtons from './buttons/DualButtons'
import ItemPromptLoader from '@engine/loaders/ItemPromptLoader'


/* START OF COMPILED CODE */

export default class ItemPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.bg;
        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {DualButtons} */
        this.dual;


        this.visible = false;

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.rectangle(0, -40, 708, 584);
        bg.isFilled = true;
        bg.fillColor = 164045;
        this.add(bg);

        // text
        const text = scene.add.text(0, 0, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "You have found a party hat.\nWould you like to pick it up?";
        text.setStyle({ "align": "center", "color": "#000000", "fixedWidth":628,"fixedHeight":136,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(text);

        // dual
        const dual = new DualButtons(scene, 0, 130);
        this.add(dual);

        // block (components)
        new Interactive(block);

        // bg (components)
        const bgNineSlice = new NineSlice(bg);
        bgNineSlice.corner = 50;

        this.bg = bg;
        this.text = text;
        this.dual = dual;

        /* START-USER-CTR-CODE */

        this.text.setWordWrapWidth(616, true)

        this.item // Active item ID
        this.icon // Icon sprite
        this.type

        this.loader = new ItemPromptLoader(scene, this)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    showItem(item) {
        if (this.inventoryIncludes(item)) {
            return this.interface.prompt.showError('You already have this item.')
        }

        this.show(item, this.crumbs.items[item], 'clothing')
    }

    showFurniture(item) {
        this.show(item, this.crumbs.furniture[item], 'furniture')
    }

    show(item, crumb, type) {
        if (!crumb) {
            return
        }

        this.item = item
        this.type = type

        this.text.text = this.getText(crumb.name, crumb.cost)
        this.visible = true

        this.loader.loadIcon(item)
    }

    inventoryIncludes(item) {
        let flat = Object.values(this.world.client.inventory).flat()
        return flat.includes(item)
    }

    getText(name, cost) {
        if (cost < 1) {
            return `You have found a ${name}.\nWould you like to pick it up?`
        } else {
            return `Would you like to buy ${name} for ${cost} coins. You currently have ${this.world.client.coins} coins.`
        }
    }

    callback() {
        if (this.item) {
            this.sendAddItem()
        }

        this.visible = false
    }

    noCallback() {
        this.visible = false
    }

    sendAddItem() {
        switch (this.type) {
            case 'clothing':
                this.network.send('add_item', { item: this.item })
                break
            case 'furniture':
                this.network.send('add_furniture', { furniture: this.item })
                break
            default:
                break
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
