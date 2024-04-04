import BaseScene from '@scenes/base/BaseScene'

import { Animation, NineSlice, SimpleButton } from '@components/components'
import { alignGrid, getCenteredStartPos } from '@engine/utils/grid/Grid'

import PenguinLarge from '../card/PenguinLarge'
import PenguinSmall from '../card/PenguinSmall'


/* START OF COMPILED CODE */

export default class PenguinSelect extends BaseScene {

    constructor() {
        super("PenguinSelect");

        /** @type {Phaser.GameObjects.Rectangle} */
        this.largeBg;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.smallBg;
        /** @type {Phaser.GameObjects.Container} */
        this.container;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "load", "bg");
        bg.setOrigin(0, 0);

        // largeBg
        const largeBg = this.add.rectangle(760, 430, 1368, 664);
        largeBg.visible = false;
        largeBg.isFilled = true;
        largeBg.fillColor = 164045;

        // smallBg
        const smallBg = this.add.rectangle(760, 430, 1308, 728);
        smallBg.visible = false;
        smallBg.isFilled = true;
        smallBg.fillColor = 164045;

        // backButton
        const backButton = this.add.sprite(760, 876, "login", "larger-button");

        // backText
        const backText = this.add.text(760, 876, "", {});
        backText.setOrigin(0.5, 0.5);
        backText.text = "Login as a different penguin";
        backText.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":400,"fontFamily": "Arial Narrow", "fontSize": "30px" });
        backText.setLineSpacing(25);

        // container
        const container = this.add.container(760, 430);

        // largeBg (components)
        const largeBgNineSlice = new NineSlice(largeBg);
        largeBgNineSlice.corner = 50;

        // smallBg (components)
        const smallBgNineSlice = new NineSlice(smallBg);
        smallBgNineSlice.corner = 50;

        // backButton (components)
        const backButtonSimpleButton = new SimpleButton(backButton);
        backButtonSimpleButton.callback = () => this.onBackClick();
        const backButtonAnimation = new Animation(backButton);
        backButtonAnimation.key = "small-button";
        backButtonAnimation.end = 3;
        backButtonAnimation.repeat = 0;
        backButtonAnimation.onHover = true;

        this.largeBg = largeBg;
        this.smallBg = smallBg;
        this.container = container;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        this._create()

        this.container.depth = 1
        this.smallBg.depth = 2

        let savedPenguins = Object.values(this.network.savedPenguins).slice(0, 6)
        let numSaved = savedPenguins.length

        let size = (numSaved > 3) ? PenguinSmall : PenguinLarge
        let hideBg = ([3, 5, 6].includes(numSaved)) ? true : false

        if (size == PenguinSmall && hideBg) {
            this.smallBg.visible = true
        }
        if (size == PenguinLarge && hideBg) {
            this.largeBg.visible = true
        }

        this.createObjects(savedPenguins, size, hideBg)

        switch (numSaved) {
            case 1:
                this.createGrid(1, 1, 0, 0)
                break
            case 2:
                this.createGrid(2, 1, 532, 0)
                break
            case 3:
                this.createGrid(3, 1, 432, 0)
                break
            case 4:
                this.createGrid(2, 2, 700, 300)
                break
            case 5:
                this.createGrid(2, 3, 620, 220)
                break
            case 6:
                this.createGrid(2, 3, 620, 220)
                break
            default:
                this.onError()
                break
        }

        if (size == PenguinSmall) {
            this.updateMasks()
        }
    }

    createObjects(savedPenguins, size, hideBg) {
        for (let penguin of savedPenguins) {
            let object = new size(this, 0, 0)

            object.paperDoll.loadDoll(penguin)
            object.username.text = penguin.username.toUpperCase()
            object.button.callback = () => this.onPenguinClick(penguin)

            if (hideBg) object.bg.visible = false

            this.add.existing(object)
            this.container.add(object)
        }
    }

    createGrid(cols, rows, cellWidth, cellHeight) {
        const startPos = getCenteredStartPos(cols, rows, cellWidth, cellHeight)

        alignGrid({
            items: this.container.getAll(),
            cols: cols,
            cellWidth: cellWidth,
            cellHeight, cellHeight,
            startX: startPos.x,
            startY: startPos.y
        })
    }

    updateMasks() {
        for (let card of this.container.getAll()) {
            let mask = card.paperDoll.mask.geometryMask
            if (!mask) continue

            // Get global coordinates of card button
            let matrix = card.penguinSmall.getWorldTransformMatrix()

            // Set correct mask position
            mask.x = matrix.getX(0, 0) - (card.penguinSmall.width / 2)
            mask.y = matrix.getY(0, 0) - (card.penguinSmall.height / 2)
        }
    }

    onPenguinClick(penguin) {
        this.scene.start('PenguinLogin', { penguin: penguin })
    }

    onBackClick() {
        this.scene.start('Login')
    }

    onError() {
        localStorage.removeItem('saved_penguins')
        this.scene.start('Login')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
