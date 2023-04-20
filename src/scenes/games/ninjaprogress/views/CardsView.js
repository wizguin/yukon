/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */

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

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

