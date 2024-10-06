/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import CardsView from "./views/CardsView";
import SimpleButton from "../../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Separator extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {CardsView} */
        this.cards;
        /** @type {Phaser.GameObjects.Image} */
        this.arrow;


        // cards
        const cards = new CardsView(scene, 18, -322);
        this.add(cards);

        // sep
        const sep = scene.add.image(18, -3, "ninjaprogress", "separator/separator");
        this.add(sep);

        // button
        const button = scene.add.image(0, -3, "ninjaprogress", "separator/button");
        this.add(button);

        // arrow
        const arrow = scene.add.image(0, 6, "ninjaprogress", "separator/arrow");
        arrow.setOrigin(0.5, 0.5454545454545454);
        this.add(arrow);

        // button (components)
        const buttonSimpleButton = new SimpleButton(button);
        buttonSimpleButton.callback = () => this.onClick();

        this.cards = cards;
        this.arrow = arrow;

        /* START-USER-CTR-CODE */

        this.enable = false

        this.tween
        this.down = false

        this.startX = this.x
        this.startY = this.y

        this.yDiff = 574

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setEnable(enable) {
        this.enable = enable
    }

    onClick() {
        if (this.tween || !this.enable) {
            return
        }

        this.cards.disableButtons()

        let duration = this.down ? 325 : 500
        let y = this.down ? this.y - this.yDiff : this.y + this.yDiff
        let ease = this.down ? 'Quad.easeOut' : 'Quad.easeIn'

        this.down = !this.down

        if (this.down) {
            this.parentContainer.hideProgress()
        }

        this.tween = this.scene.tweens.add({
            targets: this,
            duration: duration,
            y: y,
            ease: ease,

            onComplete: this.onTweenComplete,
            callbackScope: this
        })
    }

    onTweenComplete() {
        this.arrow.flipY = this.down
        this.tween = null

        if (!this.down) {
            this.parentContainer.showProgress()
        }

        this.cards.updateButtons()
    }

    close() {
        if (this.tween) {
            this.tween.stop()
            this.tween = null
        }

        this.down = false
        this.arrow.flipY = false

        this.x = this.startX
        this.y = this.startY

        this.setEnable(false)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
