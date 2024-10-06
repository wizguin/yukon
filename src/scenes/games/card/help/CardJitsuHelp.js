/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import SimpleButton from "../../../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CardJitsuHelp extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // help
        const help = scene.add.image(0, 0, "cardjitsu", "help");
        help.setOrigin(0.5005370569280344, 0.5004436557231589);
        this.add(help);

        // text
        const text = scene.add.text(0, -275, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "If tied, the highest number wins.";
        text.setStyle({ "align": "center", "color": "#333", "fixedWidth":828,"fixedHeight":50,"fontFamily": "Burbank Small", "fontSize": "32px" });
        this.add(text);

        // help (components)
        const helpSimpleButton = new SimpleButton(help);
        helpSimpleButton.hoverCallback = () => this.onOver();
        helpSimpleButton.hoverOutCallback = () => this.onOut();
        helpSimpleButton.pixelPerfect = true;

        /* START-USER-CTR-CODE */

        text.text = this.getString('help_card')

        this.closedY = this.y
        this.openY = this.y + 464

        this.tween

        this.State = {
            Closed: 0,
            Open: 1
        }

        this.currentState = this.State.Closed
        this.locked = true

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    onOver() {
        if (this.tween || this.currentState === this.State.Open || this.locked) {
            return
        }

        this.tween = this.scene.tweens.add({
            targets: this,
            duration: 500,
            y: this.openY,
            ease: Phaser.Math.Easing.Cubic.Out,

            onComplete: () => this.onOpened()
        })
    }

    onOut() {
        if (this.tween || this.currentState === this.State.Closed || this.locked) {
            return
        }

        this.tween = this.scene.tweens.add({
            targets: this,
            duration: 400,
            y: this.closedY,

            onComplete: () => this.onClosed()
        })
    }

    onOpened() {
        this.currentState = this.State.Open
        this.removeTween()
    }

    onClosed() {
        this.currentState = this.State.Closed
        this.removeTween()
    }

    close() {
        this.y = this.closedY
        this.onClosed()
    }

    lock() {
        this.locked = true
        this.close()
    }

    unlock() {
        this.locked = false
    }

    removeTween() {
        if (!this.tween) {
            return
        }

        this.tween.stop()
        this.tween = null
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
