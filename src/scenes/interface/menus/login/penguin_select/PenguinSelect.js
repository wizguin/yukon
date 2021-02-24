import BaseScene from '@scenes/base/BaseScene'

import animations from '../animations.json'
import { Animated, NineSlice, SimpleButton } from '@components/components'

import PenguinLarge from '../card/PenguinLarge'
import PenguinSmall from '../card/PenguinSmall'


/* START OF COMPILED CODE */

class PenguinSelect extends BaseScene {

    constructor() {
        super("PenguinSelect");

        /** @type {Phaser.GameObjects.Rectangle} */
        this.largeBg;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.smallBgBack;
        /** @type {Phaser.GameObjects.Image} */
        this.smallBg;
        /** @type {Phaser.GameObjects.Container} */
        this.container;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    _create() {

        // bg
        const bg = this.add.image(0, 0, "load", "bg");
        bg.setOrigin(0, 0);

        // largeBg
        const largeBg = this.add.rectangle(760, 430, 1368, 664);
        largeBg.visible = false;
        largeBg.isFilled = true;
        largeBg.fillColor = 164045;

        // smallBgBack
        const smallBgBack = this.add.rectangle(760, 430, 1250, 680);
        smallBgBack.visible = false;
        smallBgBack.isFilled = true;
        smallBgBack.fillColor = 164045;

        // smallBg
        const smallBg = this.add.image(760, 430, "login", "small-bg");
        smallBg.visible = false;

        // backButton
        const backButton = this.add.sprite(760, 876, "login", "larger-button");

        // backText
        const backText = this.add.text(760, 876, "", {});
        backText.setOrigin(0.5, 0.5);
        backText.text = "Login as a different penguin";
        backText.setStyle({"align":"center","color":"#ffffffff","fixedWidth":400,"fontFamily":"Arial Narrow","fontSize":"30px"});

        // container
        const container = this.add.container(0, 0);

        // largeBg (components)
        const largeBgNineSlice = new NineSlice(largeBg);
        largeBgNineSlice.corner = 50;

        // backButton (components)
        const backButtonSimpleButton = new SimpleButton(backButton);
        backButtonSimpleButton.callback = () => this.onBackClick();
        const backButtonAnimated = new Animated(backButton);
        backButtonAnimated.animation = "larger-button";
        backButtonAnimated.onHover = true;

        this.largeBg = largeBg;
        this.smallBgBack = smallBgBack;
        this.smallBg = smallBg;
        this.container = container;
    }

    /* START-USER-CODE */

    create() {
        this._create()

        this.anims.fromJSON(animations)

        this.container.depth = 1
        this.smallBg.depth = 2

        let savedPenguins = Object.values(this.network.savedPenguins).slice(0, 6)
        let numSaved = savedPenguins.length

        let size = (numSaved > 3) ? PenguinSmall : PenguinLarge
        let hideBg = ([3, 5, 6].includes(numSaved)) ? true : false

        if (size == PenguinSmall && hideBg) {
            this.smallBgBack.visible = true
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

    createGrid(width, height, cellWidth, cellHeight) {
        Phaser.Actions.GridAlign(this.container.getAll(), {
            width: width,
            height: height,
            cellWidth: cellWidth,
            cellHeight: cellHeight,
            position: Phaser.Display.Align.BOTTOM_RIGHT
        })

        // Centers container
        let remainingWidth = 1520 - (cellWidth * width)
        let remainingHeight = 960 - (cellHeight * height)

        this.container.x = remainingWidth / 2
        // Offset y position by -50
        this.container.y = remainingHeight / 2 - 50
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

export default PenguinSelect
