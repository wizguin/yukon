import BaseContainer from '@scenes/base/BaseContainer'

import PaperDollLoader from '@engine/loaders/PaperDollLoader'
import TintedImage from '@engine/utils/tint/TintedImage'


/* START OF COMPILED CODE */

export default class PaperDoll extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.paperdoll;
        /** @type {boolean} */
        this.fadeIn = true;


        // paperdoll
        const paperdoll = scene.add.image(0, 0, "main", "paperdoll/paperdoll");
        this.add(paperdoll);

        this.paperdoll = paperdoll;

        /* START-USER-CTR-CODE */

        // Tinted body
        this.body = new TintedImage(scene, 0, 0, 'main', 'paperdoll/body')
        this.body.tint = this.crumbs.colors[0]

        scene.add.existing(this.body)
        this.addAt(this.body, 0)

        this.body.depth = 1
        this.paperdoll.depth = 2

        // Slots ordered by depth
        this.slots = ['photo', 'color', 'feet', 'body', 'neck', 'face', 'head', 'hand', 'flag']

        this.items = this.setItems()

        this.paperDollLoader = new PaperDollLoader(scene, this)
        this.isInputEnabled = false

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setItems() {
        let items = {}

        for (let slot of this.slots) {
            if (!slot) {
                continue
            }

            items[slot] = {
                id: 0,
                depth: this.slots.indexOf(slot) + 100
            }
        }

        return items
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
