/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */

import CardLoader from '@engine/loaders/CardLoader'
import CardsViewCard from './CardsViewCard'

/* END-USER-IMPORTS */

export default class CardsView extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.bg;
        /** @type {Array<any>} */
        this.cards;


        // bg
        const bg = scene.add.image(0, 0, "ninjaprogress", "bg/2");
        this.add(bg);

        // scroll
        const scroll = scene.add.image(470, 21, "ninjaprogress", "scroll/scroll");
        this.add(scroll);

        // down
        const down = scene.add.image(470, 238, "ninjaprogress", "scroll/down");
        this.add(down);

        // up
        const up = scene.add.image(470, -193, "ninjaprogress", "scroll/up");
        this.add(up);

        // lists
        const cards = [];

        // down (components)
        const downButton = new Button(down);
        downButton.spriteName = "scroll/down";

        // up (components)
        const upButton = new Button(up);
        upButton.spriteName = "scroll/up";

        this.bg = bg;
        this.cards = cards;

        /* START-USER-CTR-CODE */

        this.startX = -478
        this.startY = -146

        this.width = 5
        this.height = 3

        this.cellWidth = 188
        this.cellHeight = 166

        this.cardLoader = new CardLoader(scene)
        this.createCards()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    createCards() {
        for (let i = 0; i < this.width * this.height; i++) {
            let card = new CardsViewCard(this.scene, this.startX, this.startY)

            this.add(card)
            this.cards.push(card)
        }

        this.createGrid()
    }

    createGrid() {
        Phaser.Actions.GridAlign(this.cards, {
            width: this.width,
            height: this.height,

            cellWidth: this.cellWidth,
            cellHeight: this.cellHeight,

            position: Phaser.Display.Align.CENTER,

            x: this.startX,
            y: this.startY
        })
    }

    setCards(ninjaCards) {
        for (let i = 0; i < this.cards.length; i++) {
            let prefab = this.cards[i]

            prefab.removeIcon()

            if (!ninjaCards[i]) {
                prefab.id = null
                prefab.close()

                continue
            }

            let card = ninjaCards[i]
            let key = this.cardLoader.getKey(card.card_id)

            prefab.id = card.card_id

            this.cardLoader.loadCard(card, () => this.onCardLoad(key, card, prefab))

            prefab.show(card)
        }
    }

    onCardLoad(key, card, prefab) {
        if (prefab.id == card.card_id) {
            prefab.setIcon(key)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

