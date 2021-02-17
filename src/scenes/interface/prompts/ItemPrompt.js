import BaseContainer from '@scenes/base/BaseContainer'

import { Interactive, NineSlice } from '@components/components'

import DualButtons from './buttons/DualButtons'


/* START OF COMPILED CODE */

class ItemPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y);

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
        text.setStyle({"align":"center","color":"#000000","fixedWidth":628,"fixedHeight":136,"fontFamily":"Arial Narrow","fontSize":"32px"});
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

        this.item = null // Active item ID
        this.icon = null // Icon sprite
        this.iconScale = 0.75

        this.load = new Phaser.Loader.LoaderPlugin(this.scene)
        this.url = '/assets/media/clothing/icon/large'
        this.prefix = 'icon/large'

        this.load.on('filecomplete', this.onFileComplete, this)

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    show(item, name, cost) {
        this.item = item
        this.text.text = this.getText(name, cost)
        this.visible = true

        this.loadIcon(item)
    }

    getText(name, cost) {
        if (cost < 1) {
            return `You have found a ${name}.\nWould you like to pick it up?`
        } else {
            return `Would you like to buy ${name} for ${cost} coins. You currently have ${this.world.client.coins} coins.`
        }
    }

    loadIcon(item) {
        if (this.icon) this.icon.destroy()

        let key = `${this.prefix}/${item}`

        if (this.scene.textures.exists(key)) return this.onFileComplete(key)

        this.load.image({
            key: key,
            url: `${this.url}/${item}.png`,
        })

        this.load.start()
    }

    onFileComplete(key) {
        if (!this.visible) return
        if (!this.scene.textures.exists(key)) return

        let item = parseInt(key.split('/')[2])
        if (item != this.item) return

        let icon = this.scene.add.image(0, -182, key)
        icon.scale = this.iconScale

        this.add(icon)
        this.icon = icon
    }

    callback() {
        if (this.item) {
            this.network.send('add_item', { item: this.item })
        }
        this.visible = false
    }

    noCallback() {
        this.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default ItemPrompt
