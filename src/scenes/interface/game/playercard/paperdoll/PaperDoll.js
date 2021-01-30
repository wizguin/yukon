import BaseContainer from '@scenes/base/BaseContainer'

import PaperDollLoader from './PaperDollLoader'


/* START OF COMPILED CODE */

class PaperDoll extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y);

        // body
        const body = scene.add.image(0, 3, "main", "paperdoll/body");
        this.add(body);

        // paperdoll
        const paperdoll = scene.add.image(0, 30, "main", "paperdoll/paperdoll");
        this.add(paperdoll);

        this.body = body;

        /** @type {boolean} */
        this.fadeIn = true;

        /* START-USER-CTR-CODE */

        body.depth = -2
        paperdoll.depth = -1

        // Slots ordered by depth
        this.slots = [ 'photo', 'flag', 'feet', 'body', 'neck', 'hand', 'face', 'head' ]
        this.items = this.setItems()

        this.paperDollLoader = new PaperDollLoader(this)

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    setItems() {
        let items = {}

        for (let slot of this.slots) {
            items[slot] = {
                depth: this.slots.indexOf(slot)
            }
        }

        return items
    }

    loadPenguin(penguin) {
        this.body.tint = this.crumbs.colors[penguin.color - 1]

        this.paperDollLoader.loadItems(penguin)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default PaperDoll
