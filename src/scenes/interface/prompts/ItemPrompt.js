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
        this.type

        this.load = new Phaser.Loader.LoaderPlugin(this.scene)
        this.prefix = 'icon/large'

        this.load.on('filecomplete', this.onFileComplete, this)

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    get url() {
        switch (this.type) {
            case 'clothing':
                return '/assets/media/clothing/icon/large'
            case 'furniture':
                return '/assets/media/furniture/icon/@5x'
            default:
                break
        }
    }

    get iconScale() {
        switch (this.type) {
            case 'clothing':
                return 0.75
            case 'furniture':
                return 0.65
            default:
                return 1
        }
    }

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
        if (!crumb) return

        this.item = item
        this.type = type

        this.text.text = this.getText(crumb.name, crumb.cost)
        this.visible = true

        this.loadIcon()
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

    loadIcon() {
        if (this.icon) this.icon.destroy()

        let key = `${this.type}/${this.prefix}/${this.item}`

        if (this.scene.textures.exists(key)) return this.onFileComplete(key)

        this.load.image({
            key: key,
            url: `${this.url}/${this.item}.png`,
        })

        this.load.start()
    }

    onFileComplete(key) {
        if (!this.visible) return
        if (!this.scene.textures.exists(key)) return

        let item = parseInt(key.split('/')[3])
        if (item != this.item) return

        let icon = this.scene.add.image(0, -182, key)
        icon.scale = this.iconScale

        this.add(icon)
        this.icon = icon
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

export default ItemPrompt
