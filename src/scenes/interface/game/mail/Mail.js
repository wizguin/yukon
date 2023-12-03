/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
import SimpleButton from "../../../components/SimpleButton";
import Animation from "../../../components/Animation";
import MailReply from "./reply/MailReply";
/* START-USER-IMPORTS */

import PostcardLoader from '@engine/loaders/PostcardLoader'

/* END-USER-IMPORTS */

export default class Mail extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.error;
        /** @type {Phaser.GameObjects.Image} */
        this.spinner;
        /** @type {MailReply} */
        this.replyButton;
        /** @type {Phaser.GameObjects.Container} */
        this.noMessages;
        /** @type {Phaser.GameObjects.Text} */
        this.count;
        /** @type {Array<Phaser.GameObjects.Text|Phaser.GameObjects.Sprite|MailReply|Phaser.GameObjects.Image>} */
        this.activeElements;


        // bg
        const bg = scene.add.image(1, -23, "mail", "bg");
        bg.setOrigin(0.5003170577045022, 0.5004389815627743);
        this.add(bg);

        // error
        const error = scene.add.image(-1, -2, "mail", "display");
        error.setOrigin(0.5004878048780488, 0.500651890482399);
        error.visible = false;
        this.add(error);

        // spinner
        const spinner = scene.add.image(0, 0, "mail", "spinner");
        spinner.visible = false;
        this.add(spinner);

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

        // replyButton
        const replyButton = new MailReply(scene, 991, -1004);
        this.add(replyButton);

        // removeButton
        const removeButton = scene.add.sprite(-45, 2, "mail", "remove/remove0001");
        removeButton.setOrigin(0.5, 0.500517063081696);
        this.add(removeButton);

        // newButton
        const newButton = scene.add.sprite(-28, -21, "mail", "new/new0001");
        newButton.angle = 19.5;
        newButton.setOrigin(0.5, 0.5003518648838846);
        this.add(newButton);

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

        // count
        const count = scene.add.text(590, -175, "", {});
        count.scaleX = 1.1;
        count.setOrigin(0.5, 0.5);
        count.setStyle({ "align": "center", "fixedWidth":232,"fixedHeight":110,"fontFamily": "CCFaceFront", "fontSize": "32px", "fontStyle": "bold italic", "stroke": "#000", "strokeThickness":8,"shadow.blur":3,"shadow.stroke":true,"shadow.fill":true});
        this.add(count);

        // closeButton
        const closeButton = scene.add.image(707, -424, "mail", "close_button");
        closeButton.setOrigin(0.5029239766081871, 0.5038167938931297);
        this.add(closeButton);

        // lists
        const activeElements = [count, removeButton, replyButton, trashButton, prevButton, nextButton];

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
        trashButtonSimpleButton.callback = () => this.onTrashClick();
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
        removeButtonSimpleButton.callback = () => this.onRemoveClick();
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

        // closeButton (components)
        const closeButtonSimpleButton = new SimpleButton(closeButton);
        closeButtonSimpleButton.callback = () => this.close();
        closeButtonSimpleButton.pixelPerfect = true;

        this.error = error;
        this.spinner = spinner;
        this.replyButton = replyButton;
        this.noMessages = noMessages;
        this.count = count;
        this.activeElements = activeElements;

        /* START-USER-CTR-CODE */

        this.postcardLoader = new PostcardLoader(this)
        this.postcardLoader.on('loaderror', this.onPostcardLoadError, this)

        this.postcardX = -515
        this.postcardY = -308
        this.postcardAngle = -4.5

        // Current postcard object
        this.currentCard
        // Current postcard prefab
        this.currentPrefab

        this.page = 1

        this.spinnerTween = scene.tweens.add({
            targets: spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic',
            paused: true
        })

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get cards() {
        return this.world.client.postcards
    }

    get maxPage() {
        return this.world.client.mailCount
    }

    get isMailEmpty() {
        return this.world.client.mailCount < 1
    }

    get isCurrentBuddy() {
        return this.world.isBuddy(this.currentCard.senderId)
    }

    show() {
        this.replyButton.reset()

        if (this.world.client.unreadMailCount > 0) {
            this.network.send('read_mail')
        }

        this.goToFirstPage()

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
        if (this.isMailEmpty) {
            return
        }

        const page = this.page - 1
        if (page < 1) {
            return
        }

        this.goToPage(page)
    }

    onNextClick() {
        if (this.isMailEmpty) {
            return
        }

        const page = this.page + 1
        if (page > this.maxPage) {
            return
        }

        this.goToPage(page)
    }

    onTrashClick() {
        const text = `Are you sure you want to recycle this postcard from ${this.currentCard.senderName}?`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.interface.prompt.window.visible = false

            this.sendDeleteMail()
        })
    }

    onRemoveClick() {
        const text = `This will permanently remove all postcards from ${this.currentCard.senderName}. Do you want to do this?`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.interface.prompt.window.visible = false

            this.sendDeleteMailFrom()
        })
    }

    goToFirstPage() {
        if (this.isMailEmpty) {
            this.checkDestroyCurrent()
            this.updateVisibleElements()

        } else {
            this.goToPage(1)
        }
    }

    goToPage(page) {
        this.page = page
        this.loadPostcard()
    }

    loadPostcard() {
        this.checkDestroyCurrent()

        this.currentCard = this.cards[this.page - 1]

        this.readPostcard(this.currentCard)

        this.updateVisibleElements()
        this.updateReplyButton()
        this.updateCount()

        this.error.visible = false
        this.startSpinner()

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

        this.stopSpinner()

        this.checkDestroyCurrent()

        this.currentPrefab = new this.crumbs.scenes.postcards[postcard.postcardId](this.scene, this.postcardX, this.postcardY)
        this.currentPrefab.angle = this.postcardAngle
        this.currentPrefab.setName(postcard.senderName)

        this.addAt(this.currentPrefab, 2)
    }

    checkDestroyCurrent() {
        if (this.currentPrefab) {
            this.currentPrefab.destroy()
        }
    }

    updateCount() {
        this.count.text = `MESSAGE\n${this.page} of ${this.cards.length}`
    }

    updateVisibleElements() {
        this.noMessages.visible = this.isMailEmpty

        this.activeElements.forEach(control => control.visible = !this.isMailEmpty)
    }

    updateReplyButton() {
        this.replyButton.updateState()
    }

    sendDeleteMail() {
        this.network.send('delete_mail', { id: this.currentCard.id })

        this.world.client.filterPostcards((postcard) => postcard.id !== this.currentCard.id)
    }

    sendDeleteMailFrom() {
        this.network.send('delete_mail_from', { senderId: this.currentCard.senderId })

        this.world.client.filterPostcards((postcard) => postcard.senderId !== this.currentCard.senderId)
    }

    startSpinner() {
        this.spinnerTween.seek(0)
        this.spinnerTween.resume()

        this.spinner.visible = true
    }

    stopSpinner() {
        this.spinner.visible = false

        this.spinnerTween.pause()
        this.spinner.angle = 0
    }

    onPostcardLoadError(file) {
        const id = this.postcardLoader.getKeyId(file.key)

        if (id === this.currentCard.postcardId) {
            this.stopSpinner()
            this.error.visible = true
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
