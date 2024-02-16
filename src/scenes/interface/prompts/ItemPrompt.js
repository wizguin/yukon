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

        // Active icon key
        this.currentKey = null

        // Active icon
        this.icon = null

        this.loader = new ItemPromptLoader(scene, this)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    showItem(id) {
        if (this.inventoryIncludes(id)) {
            return this.interface.prompt.showError('You already have this item.')
        }

        const data = this.crumbs.items[id]
        if (!data) return

        const loadConfig = {
            key: `clothing/icon/240/${id}`,
            url: `/assets/media/clothing/icon/240/${id}.png`
        }

        this.show(this.getBuyText(data.name, data.cost), loadConfig, () => this.sendAddItem(id))
    }

    showFurniture(id) {
        const data = this.crumbs.furniture[id]
        if (!data) return

        const loadConfig = {
            key: `furniture/icon/@5x/${id}`,
            url: `/assets/media/furniture/icon/@5x/${id}.png`,
            scale: 0.65
        }

        this.show(this.getBuyText(data.name, data.cost), loadConfig, () => this.sendAddFurniture(id))
    }

    show(text, loadConfig, callback) {
        if (!loadConfig.key) {
            return
        }

        this.currentKey = loadConfig.key

        this.text.text = text
        this.callback = callback

        super.show()

        this.loader.loadIcon(loadConfig)
    }

    addIcon(key, scale) {
        if (!this.visible || key !== this.currentKey) {
            return
        }

        if (this.icon) {
            this.icon.destroy()
        }

        const icon = this.scene.add.image(0, -182, key)
        icon.scale = scale

        this.add(icon)
        this.icon = icon
    }

    noCallback() {
        this.close()
    }

    sendAddItem(id) {
        this.network.send('add_item', { item: id })
        this.close()
    }

    sendAddFurniture(id) {
        this.network.send('add_furniture', { furniture: id })
        this.close()
    }

    getBuyText(name, cost) {
        if (cost < 1) {
            return `You have found a ${name}.\nWould you like to pick it up?`
        } else {
            return `Would you like to buy ${name} for ${cost} coins. You currently have ${this.world.client.coins} coins.`
        }
    }

    inventoryIncludes(item) {
        return Object.values(this.world.client.inventory).flat().includes(item)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
