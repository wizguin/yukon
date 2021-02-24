import BaseContainer from '@scenes/base/BaseContainer'

import PaperDollLoader from './PaperDollLoader'


/* START OF COMPILED CODE */

class PaperDoll extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y);

        // body
        const body = scene.add.image(0, 0, "main", "paperdoll/body");
        body.tintFill = true;
        body.tintTopLeft = 13158;
        body.tintTopRight = 13158;
        body.tintBottomLeft = 13158;
        body.tintBottomRight = 13158;
        this.add(body);

        // paperdoll
        const paperdoll = scene.add.image(0, 0, "main", "paperdoll/paperdoll");
        this.add(paperdoll);

        this.body = body;
        this.paperdoll = paperdoll;

        /** @type {boolean} */
        this.fadeIn = true;
        /** @type {boolean} */
        this.crop = false;

        /* START-USER-CTR-CODE */

        body.depth = 1
        paperdoll.depth = 2

        // Slots ordered by depth
        // '' representing paperdoll
        this.slots = [ 'photo', 'color', '', 'feet', 'body', 'neck', 'hand', 'face', 'head', 'flag' ]
        this.items = this.setItems()

        this.paperDollLoader = new PaperDollLoader(this)
        this.isInputEnabled = false

        scene.events.once('create', () => this.setCrop())

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    setItems() {
        let items = {}

        for (let slot of this.slots) {
            if (!slot) continue
            items[slot] = {
                depth: this.slots.indexOf(slot)
            }
        }

        return items
    }

    setCrop() {
        if (this.crop) {
            this.body.setTexture('login', 'body-crop')
            this.paperdoll.setTexture('login', 'paperdoll-crop')
        }
    }

    removeItems() {
        for (let item in this.items) {
            let sprite = this.items[item].sprite

            if (this.items[item].sprite) {
                sprite.destroy()
                sprite = null
            }
        }
    }

    loadDoll(penguin, isInputEnabled = false) {
        // Clear items for next penguin
        this.removeItems()

        this.isInputEnabled = isInputEnabled

        if (isInputEnabled) {
            this.enableInput()
        } else {
            this.disableInput()
        }

        this.paperDollLoader.loadItems(penguin)
    }

    /**
     * Enables input on body and paperdoll sprites,
     * does not include clothing items.
     */
    enableInput() {
        this.body.setInteractive({ pixelPerfect: true })
        this.paperdoll.setInteractive({ pixelPerfect: true })
    }

    /**
     * Disables input on body and paperdoll sprites,
     * does not include clothing items.
     */
    disableInput() {
        this.body.removeInteractive()
        this.paperdoll.removeInteractive()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default PaperDoll
