/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import CardJitsuThumb from "./CardJitsuThumb";
/* START-USER-IMPORTS */

import layout from '../layout'

/* END-USER-IMPORTS */

export default class CardJitsuCard extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 750, y ?? 1000);

        /** @type {Phaser.GameObjects.Image} */
        this.shadow;
        /** @type {Phaser.GameObjects.Image} */
        this.hover;
        /** @type {Phaser.GameObjects.Image} */
        this.back;
        /** @type {Phaser.GameObjects.Sprite} */
        this.glow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.icon;
        /** @type {Phaser.GameObjects.Image} */
        this.color;
        /** @type {Phaser.GameObjects.Image} */
        this.element;
        /** @type {Phaser.GameObjects.Image} */
        this.disabled;
        /** @type {Phaser.GameObjects.Text} */
        this.value;
        /** @type {CardJitsuThumb} */
        this.thumbnail;


        // shadow
        const shadow = scene.add.image(99, 111, "cardjitsu", "card/shadow");
        shadow.setOrigin(0.5010660980810234, 0.500945179584121);
        this.add(shadow);

        // hover
        const hover = scene.add.image(97, 108, "cardjitsu", "card/hover");
        hover.visible = false;
        this.add(hover);

        // back
        const back = scene.add.image(95, 107, "cardjitsu", "card/back");
        back.setOrigin(0.5010660980810234, 0.500945179584121);
        back.visible = false;
        this.add(back);

        // glow
        const glow = scene.add.sprite(95, 104, "cardjitsu", "card/glow0001");
        glow.setOrigin(0.5008695652173913, 0.5);
        glow.visible = false;
        glow.alpha = 0.5;
        glow.alphaTopLeft = 0.5;
        glow.alphaTopRight = 0.5;
        glow.alphaBottomLeft = 0.5;
        glow.alphaBottomRight = 0.5;
        this.add(glow);

        // icon
        const icon = scene.add.sprite(95, 107, "_MISSING");
        icon.visible = false;
        this.add(icon);

        // color
        const color = scene.add.image(95, 107, "cardjitsu", "card/color");
        color.setOrigin(0.5010660980810234, 0.500945179584121);
        color.tintTopLeft = 1132705;
        color.tintTopRight = 1132705;
        color.tintBottomLeft = 1132705;
        color.tintBottomRight = 1132705;
        this.add(color);

        // element
        const element = scene.add.image(28, 28, "cardjitsu", "card/f");
        element.setOrigin(0.5, 0.5051546391752577);
        this.add(element);

        // disabled
        const disabled = scene.add.image(95, 107, "cardjitsu", "card/disabled");
        disabled.setOrigin(0.5010660980810234, 0.500945179584121);
        disabled.visible = false;
        this.add(disabled);

        // value
        const value = scene.add.text(1, 48, "", {});
        value.text = "88";
        value.setStyle({ "align": "center", "color": "#000", "fixedWidth":52,"fontFamily": "Arial", "fontSize": "38px", "fontStyle": "bold" });
        this.add(value);

        // thumbnail
        const thumbnail = new CardJitsuThumb(scene, 47, 45);
        thumbnail.visible = false;
        this.add(thumbnail);

        this.shadow = shadow;
        this.hover = hover;
        this.back = back;
        this.glow = glow;
        this.icon = icon;
        this.color = color;
        this.element = element;
        this.disabled = disabled;
        this.value = value;
        this.thumbnail = thumbnail;

        /* START-USER-CTR-CODE */

        this.player
        this.state

        this.id
        this.powerId
        this.elementId

        this.spacer
        this.color
        this.glow

        this.tween

        this.glow.anims.play('card/glow')

        this.on('pointerup', this.onUp, this)
        this.on('pointerover', this.onOver, this)
        this.on('pointerout', this.onOut, this)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    init(player, state, card = null) {
        if (!player.dealtCards.includes(null)) {
            return
        }

        this.player = player

        let empty = player.dealtCards.indexOf(null)
        player.dealtCards[empty] = this

        if (card) {
            this.updateCard(card)
        }

        this.updateDepth()
        this.setState(state)

        this.tweenToDealt(empty)
    }

    updateCard(card) {
        let tint = layout.colors[card.color].color

        this.id = parseInt(card.card_id)
        this.powerId = parseInt(card.power_id)
        this.elementId = card.element

        this.value.text = card.value
        this.color.tint = tint

        this.element.setFrame(`card/${card.element}`)

        if (card.power_id > 0) {
            this.glow.tint = tint
        }

        this.thumbnail.color.tint = tint
        this.thumbnail.element.setFrame(`card/thumbnail/${card.element}`)
    }

    setState(state) {
        this.state = state

        switch (state) {
            case 'back':
                this.setStateBack()
                break
            case 'reveal':
                this.setStateReveal()
                break
            case 'thumbnail':
                this.setStateThumbnail()
                break
            default:
                this.setStateFront()
                break
        }
    }

    setStateFront() {
        this.scale = layout.scale.front
        this.spacer = layout.spacer.dealtFront

        this.showFrontSprites(true)
    }

    setStateBack() {
        this.scale = layout.scale.back
        this.spacer = layout.spacer.dealtBack

        this.showFrontSprites(false)
    }

    setStateReveal() {
        this.scale = layout.scale.pick

        if (!this.tween) {
            this.revealCard()
            return
        }

        this.tween.once('complete', this.revealCard, this)
    }

    setStateThumbnail() {
        this.spacer = layout.spacer.win

        this.list.map(sprite => sprite.visible = false)
        this.thumbnail.visible = true

        this.tweenToWin()
    }

    showFrontSprites(show) {
        this.thumbnail.visible = false
        this.back.visible = !show
        this.value.visible = show
        this.element.visible = show
        this.color.visible = show
        this.icon.visible = show
        this.glow.visible = show && this.powerId > 0
    }

    tweenToDealt(empty) {
        let index = this.scene.players.indexOf(this.player)

        let pos = layout.pos.dealts[index]

        let x = (index === 0)
            ? pos.x + (this.spacer * empty)
            : pos.x - (this.spacer * empty) - this.spacer

        this.tweenTo(x, pos.y)
    }

    pick() {
        if (!this.tween) {
            this.tweenToPick()
            return
        }

        this.tween.once('complete', this.tweenToPick, this)
    }

    tweenToPick() {
        this.scale = layout.scale.pick

        let index = this.scene.players.indexOf(this.player)
        let pos = layout.pos.picks[index]

        this.tweenTo(pos.x, pos.y)
    }

    tweenToWin() {
        let index = this.scene.players.indexOf(this.player)
        let pos = layout.pos.wins[index][this.elementId]

        let wins = this.player.getElementWins(this.elementId).length

        let y = pos.y + (this.spacer * wins)

        this.tweenTo(pos.x, y)

        this.tween.once('complete', this.updateDepth, this)
    }

    tweenTo(x, y) {
        this.tween = this.scene.tweens.add({
            targets: this,
            duration: 500,

            x: x,
            y: y
        })

        this.tween.once('complete', this.removeTween, this)
    }

    removeTween() {
        if (!this.tween) {
            return
        }

        this.tween.remove()
        this.tween = null
    }

    revealCard() {
        this.scene.time.delayedCall(1000, () => this.flip())
    }

    flip() {
        let timeline = this.scene.tweens.createTimeline({
            onComplete: () => this.scene.events.emit('flipped')
        })

        timeline.add({
            targets: this,
            duration: 250,

            x: this.x + this.back.width / 2,
            scaleX: 0,

            onComplete: () => this.showFrontSprites(true)
        })

        timeline.add({
            targets: this,
            duration: 250,

            x: this.x,
            scaleX: 1,
        })

        timeline.play()
    }

    enableInput() {
        this.setSize(this.color.width, this.color.height)
        this.setInteractive()

        // Offset
        this.input.hitArea.x = this.color.x
        this.input.hitArea.y = this.color.y
    }

    disableInput() {
        this.disableInteractive()
        this.onOut()
    }

    onUp() {
        this.scene.pickCard(this)
    }

    onOver() {
        this.hover.visible = true
    }

    onOut() {
        this.hover.visible = false
    }

    updateDepth() {
        this.depth = this.y
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
