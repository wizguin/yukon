/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */

import CardLoader from '@engine/loaders/CardLoader'
import CardsViewCard from './CardsViewCard'
import { alignGrid } from '@engine/utils/grid/Grid'

/* END-USER-IMPORTS */

export default class CardsView extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.bg;
        /** @type {Phaser.GameObjects.Image} */
        this.down;
        /** @type {Phaser.GameObjects.Image} */
        this.up;
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
        downButton.callback = () => this.nextPage();

        // up (components)
        const upButton = new Button(up);
        upButton.spriteName = "scroll/up";
        upButton.callback = () => this.prevPage();

        this.bg = bg;
        this.down = down;
        this.up = up;
        this.cards = cards;

        /* START-USER-CTR-CODE */

        this.startX = -478
        this.startY = -146

        this.width = 5
        this.height = 3

        this.cellWidth = 188
        this.cellHeight = 166

        this.page = 1
        this.pageSize = this.width * this.height

        this.ninjaCards = []

        this.cardLoader = new CardLoader(scene)
        this.createCards()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get maxPage() {
        return Math.ceil(this.ninjaCards.length / this.pageSize)
    }

    createCards() {
        for (let i = 0; i < this.pageSize; i++) {
            let card = new CardsViewCard(this.scene, this.startX, this.startY)

            this.add(card)
            this.cards.push(card)
        }

        this.createGrid()
    }

    createGrid() {
        alignGrid({
            items: this.cards,
            cols: this.width,
            cellWidth: this.cellWidth,
            cellHeight: this.cellHeight,
            startX: this.startX,
            startY: this.startY
        })
    }

    setCards(ninjaCards) {
        this.ninjaCards = ninjaCards

        this.showPage()
    }

    showPage() {
        let page = this.ninjaCards.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)

        for (let i = 0; i < this.cards.length; i++) {
            let prefab = this.cards[i]

            prefab.removeIcon()

            if (!page[i]) {
                prefab.id = null
                prefab.close()

                continue
            }

            let card = page[i]
            let key = this.cardLoader.getKey(card.id)

            prefab.id = card.id

            this.cardLoader.loadCard(card, () => this.onCardLoad(key, card, prefab))

            prefab.show(card)
        }

        this.updateButtons()
    }

    prevPage() {
        let page = this.page - 1
        if (page < 1) {
            return
        }

        this.page = page
        this.showPage()
    }

    nextPage() {
        let page = this.page + 1
        if (page > this.maxPage) {
            return
        }

        this.page = page
        this.showPage()
    }

    onCardLoad(key, card, prefab) {
        if (prefab.id == card.id) {
            prefab.setIcon(key)
        }
    }

    updateButtons() {
        if (!this.parentContainer.down) {
            this.disableButtons()
            return
        }

        let upEnabled = this.page > 1
        let downEnabled = this.page < this.maxPage

        this.setButtons(upEnabled, downEnabled)
    }

    disableButtons() {
        this.setButtons(false, false)
    }

    setButtons(upEnabled, downEnabled) {
        this.up.input.enabled = upEnabled
        this.down.input.enabled = downEnabled

        this.up.alpha = upEnabled ? 1 : 0.5
        this.down.alpha = downEnabled ? 1 : 0.5
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
