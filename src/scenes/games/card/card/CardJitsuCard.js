/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import CardJitsuThumb from "./CardJitsuThumb";
import CardJitsuHint from "./CardJitsuHint";
import CardJitsuExplosion from "./explosion/CardJitsuExplosion";
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
        this.colorSprite;
        /** @type {Phaser.GameObjects.Image} */
        this.element;
        /** @type {Phaser.GameObjects.Image} */
        this.disabled;
        /** @type {Phaser.GameObjects.Text} */
        this.valueText;
        /** @type {CardJitsuThumb} */
        this.thumbnail;
        /** @type {CardJitsuHint} */
        this.hint;
        /** @type {CardJitsuExplosion} */
        this.explosion;


        // shadow
        const shadow = scene.add.image(99, 111, "cardjitsu", "card/shadow");
        this.add(shadow);

        // hover
        const hover = scene.add.image(95, 107, "cardjitsu", "card/hover");
        hover.visible = false;
        this.add(hover);

        // back
        const back = scene.add.image(95, 107, "cardjitsu", "card/back");
        back.visible = false;
        this.add(back);

        // glow
        const glow = scene.add.sprite(95, 105, "cardjitsu", "card/glow0001");
        glow.visible = false;
        glow.alpha = 0.5;
        glow.alphaTopLeft = 0.5;
        glow.alphaTopRight = 0.5;
        glow.alphaBottomLeft = 0.5;
        glow.alphaBottomRight = 0.5;
        this.add(glow);

        // icon
        const icon = scene.add.sprite(1, 1, "_MISSING");
        icon.setOrigin(0, 0);
        icon.visible = false;
        this.add(icon);

        // colorSprite
        const colorSprite = scene.add.image(95, 107, "cardjitsu", "card/color");
        colorSprite.tintTopLeft = 1132705;
        colorSprite.tintTopRight = 1132705;
        colorSprite.tintBottomLeft = 1132705;
        colorSprite.tintBottomRight = 1132705;
        this.add(colorSprite);

        // element
        const element = scene.add.image(28, 28, "cardjitsu", "card/f");
        element.setOrigin(0.5116279069767442, 0.5128205128205128);
        this.add(element);

        // disabled
        const disabled = scene.add.image(95, 107, "cardjitsu", "card/disabled");
        disabled.visible = false;
        this.add(disabled);

        // valueText
        const valueText = scene.add.text(1, 48, "", {});
        valueText.text = "88";
        valueText.setStyle({ "align": "center", "color": "#000", "fixedWidth":52,"fontFamily": "Burbank Big Regular", "fontSize": "38px", "fontStyle": "bold" });
        this.add(valueText);

        // thumbnail
        const thumbnail = new CardJitsuThumb(scene, 47, 45);
        thumbnail.visible = false;
        this.add(thumbnail);

        // hint
        const hint = new CardJitsuHint(scene, 95, -120);
        hint.visible = false;
        this.add(hint);

        // explosion
        const explosion = new CardJitsuExplosion(scene, 101, 129);
        explosion.visible = false;
        this.add(explosion);

        this.shadow = shadow;
        this.hover = hover;
        this.back = back;
        this.glow = glow;
        this.icon = icon;
        this.colorSprite = colorSprite;
        this.element = element;
        this.disabled = disabled;
        this.valueText = valueText;
        this.thumbnail = thumbnail;
        this.hint = hint;
        this.explosion = explosion;

        /* START-USER-CTR-CODE */

        this.player
        this.state

        this.id
        this.powerId
        this.description
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

    get isDisabled() {
        return this.disabled.visible
    }

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

    get isPowerCard() {
        return this.powerId > 0
    }

    updateCard(card) {
        let tint = layout.colors[card.color].color

        this.id = card.id
        this.powerId = card.powerId
        this.elementId = card.element
        this.value = card.value
        this.color = card.color

        this.description = this.powerId
            ? this.getString(`pow_${this.powerId}`)
            : ''

        this.valueText.text = card.value
        this.colorSprite.tint = tint

        this.element.setFrame(`card/${card.element}`)

        if (this.isPowerCard) {
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
            case 'pick':
                this.setStatePick()
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

    setStatePick() {
        this.scale = layout.scale.pick

        if (!this.tween) {
            this.tweenToPick()
            return
        }

        this.tween.once('complete', this.tweenToPick, this)
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
        this.valueText.visible = show
        this.element.visible = show
        this.colorSprite.visible = show
        this.icon.visible = show
        this.glow.visible = show && this.isPowerCard
    }

    tweenToDealt(empty) {
        let seat = this.player.seat

        let pos = layout.pos.dealts[seat]

        let x = (seat === 0)
            ? pos.x + (this.spacer * empty)
            : pos.x - (this.spacer * empty) - this.spacer

        this.tweenTo(x, pos.y)

        this.tween.once('complete', this.onTweenToDealtComplete, this)
    }

    onTweenToDealtComplete() {
        if (this.player != this.scene.myPlayer) {
            return
        }

        for (let card of this.player.dealtNotNull) {
            if (card.tween) {
                return
            }
        }

        this.scene.allCardsDealt()
    }

    tweenToPick() {
        this.scale = layout.scale.pick

        let pos = layout.pos.picks[this.player.seat]

        this.tweenTo(pos.x, pos.y)
    }

    tweenToWin() {
        let pos = layout.pos.wins[this.player.seat][this.elementId]

        let wins = this.player.getElementWins(this.elementId)
        let index = wins.indexOf(this) + 1

        let y = pos.y + (this.spacer * index)

        this.tweenTo(pos.x, y)

        this.tween.once('complete', this.updateDepth, this)
    }

    tweenToOver(cardIndex) {
        if (this.tween) {
            this.tween.once('complete', () => this.tweenToOver(cardIndex))
            return
        }

        let spacer = layout.spacer.out

        let pos = layout.pos.over[this.player.seat]

        let x = pos.x + (spacer * cardIndex)

        this.tweenTo(x, pos.y)
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

        this.tween.stop()
        this.tween = null
    }

    revealCard() {
        this.scene.time.delayedCall(1000, () => this.flip())
    }

    flip() {
        this.scene.tweens.chain({
            targets: this,

            tweens: [
                {
                    x: this.x + this.back.width / 2,
                    scaleX: 0,
                    duration: 250,

                    onComplete: () => this.showFrontSprites(true)
                },
                {
                    x: this.x,
                    scaleX: 1,
                    duration: 250
                }
            ],

            onComplete: () => this.scene.time.delayedCall(500, () => {
                this.scene.events.emit('flipped')
            })
        })
    }

    enableInput() {
        this.setSize(this.colorSprite.width, this.colorSprite.height)
        this.setInteractive()

        // Offset
        this.input.hitArea.x = this.colorSprite.x
        this.input.hitArea.y = this.colorSprite.y

        this.disabled.visible = false
    }

    disableInput() {
        this.disableInteractive()
        this.onOut()
    }

    disableCard() {
        this.disableInput()
        this.disabled.visible = true
    }

    onUp() {
        this.scene.pickCard(this)
    }

    onOver() {
        this.hover.visible = true

        if (this.isPowerCard) {
            this.hint.show()
        }
    }

    onOut() {
        this.hover.visible = false

        this.hint.close()
    }

    updateDepth() {
        this.depth = this.y
    }

    explode() {
        this.explosion.show()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
