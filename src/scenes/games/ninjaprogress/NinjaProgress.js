export const preload = {
    key: 'ninjaprogress-pack',
    url: 'assets/media/games/ninjaprogress/ninjaprogress-pack.json',
    loadString: ['loading', 'ninjaprogress']
}

/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Interactive from "../../components/Interactive";
import ProgressView from "./views/ProgressView";
import Separator from "./Separator";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class NinjaProgress extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.cardsViewRect;
        /** @type {ProgressView} */
        this.progress;
        /** @type {Separator} */
        this.separator;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.image(0, 51, "ninjaprogress", "bg/1");
        this.add(bg);

        // cardsViewRect
        const cardsViewRect = scene.add.rectangle(-584, -210, 1168, 542);
        cardsViewRect.setOrigin(0, 0);
        cardsViewRect.visible = false;
        cardsViewRect.isFilled = true;
        this.add(cardsViewRect);

        // progress
        const progress = new ProgressView(scene, 0, 0);
        progress.visible = false;
        this.add(progress);

        // frame2
        const frame2 = scene.add.image(0, -2, "ninjaprogress", "frame/2");
        frame2.setOrigin(0.500374531835206, 0.5);
        this.add(frame2);

        // separator
        const separator = new Separator(scene, -18, -214);
        separator.visible = true;
        this.add(separator);

        // frame1
        const frame1 = scene.add.image(2, 23, "ninjaprogress", "frame/1");
        this.add(frame1);

        // xButton
        const xButton = scene.add.image(541, -305, "ninjaprogress", "close");
        this.add(xButton);

        // block (components)
        new Interactive(block);

        // xButton (components)
        const xButtonButton = new Button(xButton);
        xButtonButton.spriteName = "close";
        xButtonButton.callback = () => this.close();

        this.cardsViewRect = cardsViewRect;
        this.progress = progress;
        this.separator = separator;

        /* START-USER-CTR-CODE */

        this.ninjaRank
        this.ninjaProgress
        this.ninjaCards

        this.createCardsViewMask()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    addListeners() {
        this.network.events.on('get_ninja', this.handleGetNinja, this)
    }

    removeListeners() {
        this.network.events.off('get_ninja', this.handleGetNinja, this)
    }

    show() {
        this.addListeners()

        this.network.send('get_ninja')

        super.show()
    }

    close() {
        this.removeListeners()
        this.reset()

        super.close()
    }

    reset() {
        this.separator.close()
        this.separator.cards.setCards([])

        this.progress.close()
        this.progress.setCardsNum(0)

        this.separator.cards.page = 1
    }

    handleGetNinja(args) {
        this.ninjaRank = args.rank
        this.ninjaProgress = args.progress
        this.ninjaCards = args.cards

        this.progress.setCardsNum(args.cards.length)
        this.showProgress()

        this.setCards()

        this.separator.setEnable(true)
    }

    showProgress() {
        if (!this.progress.down) {
            this.progress.show(this.ninjaRank, this.ninjaProgress)
        }
    }

    hideProgress() {
        this.progress.close()
    }

    setCards() {
        this.separator.cards.setCards(this.ninjaCards)
    }

    createCardsViewMask() {
        let rect = this.cardsViewRect
        let graphics = this.scene.make.graphics()

        // World position
        let matrix = rect.getWorldTransformMatrix()

        graphics.fillRect(matrix.getX(0, 0), matrix.getY(0, 0), rect.width, rect.height)

        let mask = graphics.createGeometryMask()

        this.separator.cards.setMask(mask)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
