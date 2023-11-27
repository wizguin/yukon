/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
import SimpleButton from "../../../components/SimpleButton";
import Animation from "../../../components/Animation";
/* START-USER-IMPORTS */

import PostcardLoader from '@engine/loaders/PostcardLoader'

/* END-USER-IMPORTS */

export default class Mail extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Sprite} */
        this.arrow;
        /** @type {Phaser.GameObjects.Container} */
        this.reply;
        /** @type {Phaser.GameObjects.Container} */
        this.noMessages;


        // bg
        const bg = scene.add.image(1, -23, "mail", "bg");
        bg.setOrigin(0.5003170577045022, 0.5004389815627743);
        this.add(bg);

        // display
        const display = scene.add.image(-1, -2, "mail", "display");
        display.setOrigin(0.5004878048780488, 0.500651890482399);
        display.visible = false;
        this.add(display);

        // nextButton
        const nextButton = scene.add.image(569, -28, "mail", "next_button");
        nextButton.setOrigin(0.5033112582781457, 0.5);
        this.add(nextButton);

        // prevButton
        const prevButton = scene.add.image(-573, 15, "mail", "prev_button");
        prevButton.setOrigin(0.5033112582781457, 0.5);
        this.add(prevButton);

        // trashButton
        const trashButton = scene.add.sprite(4, 7, "mail", "trash/trash0001");
        trashButton.setOrigin(0.5, 0.5004887585532747);
        this.add(trashButton);

        // removeButton
        const removeButton = scene.add.sprite(-45, 2, "mail", "remove/remove0001");
        removeButton.setOrigin(0.5, 0.500517063081696);
        this.add(removeButton);

        // newButton
        const newButton = scene.add.sprite(-28, -21, "mail", "new/new0001");
        newButton.angle = 19.5;
        newButton.setOrigin(0.5, 0.5003518648838846);
        this.add(newButton);

        // reply
        const reply = scene.add.container(541, -810);
        reply.angle = 24.000000000000004;
        this.add(reply);

        // replyShadow
        const replyShadow = scene.add.image(173, 13, "mail", "reply/shadow");
        replyShadow.setOrigin(0.5005727376861397, 0.5);
        reply.add(replyShadow);

        // replyNote
        const replyNote = scene.add.sprite(171, 0, "mail", "reply/reply0001");
        replyNote.setOrigin(0.5, 0.5006242197253433);
        reply.add(replyNote);

        // arrow
        const arrow = scene.add.sprite(0, 219, "mail", "reply/arrow0001");
        arrow.angle = -24.000000000000004;
        arrow.setOrigin(0.5, 0.5028248587570622);
        reply.add(arrow);

        // noMessages
        const noMessages = scene.add.container(-170, -43);
        noMessages.visible = false;
        this.add(noMessages);

        // note
        const note = scene.add.image(170, 43, "mail", "note");
        note.setOrigin(0.5011337868480725, 0.5011286681715575);
        noMessages.add(note);

        // text
        const text = scene.add.text(0, 0, "", {});
        text.angle = -9;
        text.text = "You Have No\nMessages";
        text.setStyle({ "align": "center", "color": "#223C3C", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold" });
        noMessages.add(text);

        // closeButton
        const closeButton = scene.add.image(707, -424, "mail", "close_button");
        closeButton.setOrigin(0.5029239766081871, 0.5038167938931297);
        this.add(closeButton);

        // bg (components)
        new Interactive(bg);

        // nextButton (components)
        const nextButtonButton = new Button(nextButton);
        nextButtonButton.spriteName = "next_button";
        nextButtonButton.callback = () => this.onNextClick();
        nextButtonButton.pixelPerfect = true;

        // prevButton (components)
        const prevButtonButton = new Button(prevButton);
        prevButtonButton.spriteName = "prev_button";
        prevButtonButton.callback = () => this.onPrevClick();
        prevButtonButton.pixelPerfect = true;

        // trashButton (components)
        const trashButtonSimpleButton = new SimpleButton(trashButton);
        trashButtonSimpleButton.pixelPerfect = true;
        const trashButtonAnimation = new Animation(trashButton);
        trashButtonAnimation.key = "trash/trash";
        trashButtonAnimation.start = 2;
        trashButtonAnimation.end = 11;
        trashButtonAnimation.repeat = 0;
        trashButtonAnimation.autoPlay = false;
        trashButtonAnimation.onHover = true;

        // removeButton (components)
        const removeButtonSimpleButton = new SimpleButton(removeButton);
        removeButtonSimpleButton.pixelPerfect = true;
        const removeButtonAnimation = new Animation(removeButton);
        removeButtonAnimation.key = "remove/remove";
        removeButtonAnimation.start = 2;
        removeButtonAnimation.end = 7;
        removeButtonAnimation.repeat = 0;
        removeButtonAnimation.autoPlay = false;
        removeButtonAnimation.onHover = true;

        // newButton (components)
        const newButtonSimpleButton = new SimpleButton(newButton);
        newButtonSimpleButton.callback = () => this.interface.main.mailbook.show();
        newButtonSimpleButton.pixelPerfect = true;
        const newButtonAnimation = new Animation(newButton);
        newButtonAnimation.key = "new/new";
        newButtonAnimation.start = 2;
        newButtonAnimation.end = 8;
        newButtonAnimation.repeat = 0;
        newButtonAnimation.autoPlay = false;
        newButtonAnimation.onHover = true;

        // replyNote (components)
        const replyNoteSimpleButton = new SimpleButton(replyNote);
        replyNoteSimpleButton.hoverCallback = () => this.onReplyOver();
        replyNoteSimpleButton.hoverOutCallback = () => this.onReplyOut();
        replyNoteSimpleButton.pixelPerfect = true;
        const replyNoteAnimation = new Animation(replyNote);
        replyNoteAnimation.key = "reply/reply";
        replyNoteAnimation.start = 2;
        replyNoteAnimation.end = 8;
        replyNoteAnimation.repeat = 0;
        replyNoteAnimation.autoPlay = false;
        replyNoteAnimation.onHover = true;

        // arrow (components)
        const arrowAnimation = new Animation(arrow);
        arrowAnimation.key = "reply/arrow";
        arrowAnimation.end = 32;
        arrowAnimation.autoPlay = false;
        arrowAnimation.stopOnOut = false;
        arrowAnimation.showOnStart = true;
        arrowAnimation.hideOnComplete = true;

        // closeButton (components)
        const closeButtonSimpleButton = new SimpleButton(closeButton);
        closeButtonSimpleButton.callback = () => this.close();
        closeButtonSimpleButton.pixelPerfect = true;

        this.arrow = arrow;
        this.reply = reply;
        this.noMessages = noMessages;

        /* START-USER-CTR-CODE */

        this.postcardLoader = new PostcardLoader(this)

        this.postcardX = -515
        this.postcardY = -308
        this.postcardAngle = -4.5

        // Current postcard object
        this.currentCard
        // Current postcard prefab
        this.currentPrefab

        this.page = 1

        this.replyTween = this.scene.tweens.add({
            targets: this.reply,
            duration: 300,
            x: 592,
            y: -620,
            angle: 0,
            ease: this.easeOutBack
        })

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get cards() {
        return this.world.client.postcards
    }

    get maxPage() {
        return this.cards.length
    }

    show() {
        if (this.world.client.unreadMailCount > 0) {
            this.network.send('read_mail')
        }

        this.page = 1

        this.replyTween = this.scene.tweens.add({
            targets: this.reply,
            duration: 300,
            x: { from: 541, to: 592 },
            y: { from: -810, to: -620 },
            angle: { from: 24, to: 0 },
            ease: this.easeOutBack
        })

        if (this.cards.length) {
            this.loadPostcard()
        }

        super.show()
    }

    close() {
        this.checkDestroyCurrent()

        super.close()
    }

    easeOutBack(value) {
        return Phaser.Math.Easing.Back.Out(value, 2)
    }

    onReplyOver() {
        this.arrow.__Animation.play()
    }

    onReplyOut() {
        this.arrow.__Animation.stop()
    }

    onPrevClick() {
        const page = this.page - 1
        if (page < 1) {
            return
        }

        this.page = page
        this.loadPostcard()
    }

    onNextClick() {
        const page = this.page + 1
        if (page > this.maxPage) {
            return
        }

        this.page = page
        this.loadPostcard()
    }

    loadPostcard() {
        this.checkDestroyCurrent()

        this.currentCard = this.cards[this.page - 1]

        this.readPostcard(this.currentCard)
        this.postcardLoader.loadPostcard(this.currentCard)
    }

    readPostcard(postcard) {
        postcard.hasRead = true

        this.interface.main.updateMailCount()
    }

    addPostcard(postcard) {
        if (postcard !== this.currentCard) {
            return
        }

        this.checkDestroyCurrent()

        this.currentPrefab = new this.crumbs.scenes.postcards[postcard.postcardId](this.scene, this.postcardX, this.postcardY)
        this.currentPrefab.angle = this.postcardAngle
        this.currentPrefab.setName(postcard.sender)

        this.addAt(this.currentPrefab, 2)
    }

    checkDestroyCurrent() {
        if (this.currentPrefab) {
            this.currentPrefab.destroy()
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
