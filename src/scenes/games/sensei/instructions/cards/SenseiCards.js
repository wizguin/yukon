/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SenseiCards extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Sprite} */
        this.glow;


        // glow
        const glow = scene.add.sprite(-62, -70, "senseiinstructions", "cards/glow/glow0001");
        this.add(glow);

        // cards
        const cards = scene.add.image(-317, -158, "senseiinstructions", "cards/cards");
        cards.setOrigin(0.5007874015748032, 0.5);
        this.add(cards);

        this.glow = glow;

        /* START-USER-CTR-CODE */

        // Slide in from right
        this.startX = this.x + 1046
        this.endX = this.x

        // Slide out to bottom
        this.startY = this.y
        this.endY = this.y + 792

        this.tween = null

        this.bounceDelay = (1 / 24) * 1000

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        this.removeTween()

        this.x = this.startX
        this.y = this.startY

        this.glow.play('instructions/cards/glow')

        super.show()

        this.playShow()
    }

    playShow() {
        this.tween = this.scene.tweens.add({
            targets: this,

            x: { from: this.startX, to: this.endX },
            duration: 542,

            onComplete: () => this.onShowTweenComplete(),
        })
    }

    onShowTweenComplete() {
        // Create bounce effect at end of tween
        this.scaleX = 1.035

        // Reset scale
        this.scene.time.delayedCall(this.bounceDelay, () => this.resetScale())
    }

    close() {
        this.removeTween()

        this.x = this.endX
        this.y = this.startY

        this.scaleY = 1.08

        this.scene.time.delayedCall(this.bounceDelay, () => this.playClose())
    }

    playClose() {
        this.resetScale()

        this.tween = this.scene.tweens.add({
            targets: this,

            y: { from: this.startY, to: this.endY },
            duration: 417
        })
    }

    stop() {
        this.glow.stop()

        if (this.tween) {
            this.removeTween()
        }
    }

    removeTween() {
        if (!this.tween) {
            return
        }

        this.tween.stop()
        this.tween = null
    }

    resetScale() {
        this.scaleX = 1
        this.scaleY = 1
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
