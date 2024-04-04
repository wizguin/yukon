/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import SimpleButton from "../../../../components/SimpleButton";
/* START-USER-IMPORTS */

import MailReplyState from './MailReplyState'

/* END-USER-IMPORTS */

export default class MailReply extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? -1);

        /** @type {Phaser.GameObjects.Sprite} */
        this.note;
        /** @type {Phaser.GameObjects.Sprite} */
        this.arrow;


        this.angle = 24.000000000000004;

        // shadow
        const shadow = scene.add.image(-223, 396, "mail", "reply/shadow");
        shadow.setOrigin(0.5005727376861397, 0.5);
        this.add(shadow);

        // note
        const note = scene.add.sprite(-225, 383, "mail", "reply/reply0001");
        note.setOrigin(0.5, 0.5006242197253433);
        this.add(note);

        // arrow
        const arrow = scene.add.sprite(-396, 603, "mail", "reply/arrow0001");
        arrow.angle = -24.000000000000004;
        arrow.setOrigin(0.5, 0.5028248587570622);
        arrow.visible = false;
        this.add(arrow);

        // note (components)
        const noteSimpleButton = new SimpleButton(note);
        noteSimpleButton.hoverCallback = () => this.onOver();
        noteSimpleButton.hoverOutCallback = () => this.onOut();
        noteSimpleButton.callback = () => this.onClick();
        noteSimpleButton.pixelPerfect = true;

        this.note = note;
        this.arrow = arrow;

        /* START-USER-CTR-CODE */

        this.state = MailReplyState.Up

        this.upAngle = this.angle
        this.downAngle = 0

        this.tween = null
        this.tweenDuration = 300

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get currentCard() {
        return this.parentContainer.currentCard
    }

    get isCurrentBuddy() {
        return this.parentContainer.isCurrentBuddy
    }

    onOver() {
        this.playAnims()
    }

    onOut() {
        this.stopAnims()
    }

    onClick() {
        if (this.isCurrentBuddy) {
            this.interface.main.mailbook.showPostcards(this.currentCard.senderId, this.currentCard.senderName)
        }
    }

    playAnims() {
        this.arrow.play('reply/arrow')
        this.note.play('reply/note')
    }

    stopAnims() {
        this.arrow.stop()
        this.note.stop()

        this.arrow.visible = false
        this.note.setFrame('reply/reply0001')
    }

    updateState() {
        if (this.isCurrentBuddy) {
            this.tweenDown()
        } else {
            this.tweenUp()
        }
    }

    tweenDown() {
        if (this.state === MailReplyState.Down) return

        this.state = MailReplyState.Down

        this.addTween(this.upAngle, this.downAngle, this.easeOutBack)
    }

    tweenUp() {
        if (this.state === MailReplyState.Up) return

        this.state = MailReplyState.Up

        this.addTween(this.downAngle, this.upAngle, this.easeInBack)
    }

    addTween(from, to, ease) {
        if (this.tween) this.removeTween()

        this.tween = this.scene.tweens.add({
            targets: this,
            duration: this.tweenDuration,
            angle: { from: from, to: to },
            ease: ease
        })
    }

    removeTween() {
        this.tween.stop()
        this.tween = null
    }

    easeInBack(value) {
        return Phaser.Math.Easing.Back.In(value, 2)
    }

    easeOutBack(value) {
        return Phaser.Math.Easing.Back.Out(value, 2)
    }

    reset() {
        if (this.tween) this.removeTween()

        this.state = MailReplyState.Up
        this.angle = this.upAngle
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
