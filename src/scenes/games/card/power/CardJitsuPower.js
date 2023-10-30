import layout from '../layout'
import Rules from '../Rules'
import States from './States'


export default class CardJitsuPower extends Phaser.GameObjects.Sprite {

    constructor(scene, player, card) {
        const pos = layout.pos.power.pick[player.seat]
        const powerId = card.powerId

        super(scene, pos.x, pos.y, 'cardjitsu', `power/${powerId}`)

        this.player = player
        this.card = card
        this.powerId = powerId

        this.state = States.Pick
        this.tween

        this.visible = false

        this.setOrigin(0, 0)
    }

    get isCurrentRound() {
        return Rules.currentRound.includes(this.powerId)
    }

    get isAffectsOwnPlayer() {
        return Rules.affectsOwnPlayer.includes(this.powerId)
    }

    get isDiscardElement() {
        return this.powerId in Rules.discardElements
    }

    get isDiscardColor() {
        return this.powerId in Rules.discardColors
    }

    get isReplacement() {
        return this.powerId in Rules.replacements
    }

    get isLimiter() {
        return this.powerId in Rules.limiters
    }

    get isPick() {
        return this.state == States.Pick
    }

    get isActive() {
        return this.state == States.Active
    }

    get isComplete() {
        return this.state == States.Complete
    }

    get isReverseEffect() {
        return this.powerId == 1
    }

    process() {
        this.visible = true

        let target = this.getTarget()

        // No target
        if (!target) {
            this.onStateProcessed()
            return
        }

        // Target not moved
        if (this.isTargetSame(target)) {
            this.scene.time.delayedCall(1000, () => this.onStateProcessed())
            return
        }

        this.tweenTo(target.x, target.y)

        this.tween.once('complete', this.onStateProcessed, this)
    }

    isTargetSame(target) {
        return target.x == this.x && target.y == this.y
    }

    tweenTo(x, y) {
        this.tween = this.scene.tweens.add({
            targets: this,
            duration: 1000,

            x: x,
            y: y,

            ease: 'Cubic.easeOut'
        })
    }

    onStateProcessed() {
        this.updateState()

        switch (this.state) {
            case States.Active:
                this.updateActive()
                break

            case States.Complete:
                this.removePower()
                break
        }
    }

    updateActive() {
        if (this.isCurrentRound) {
            this.startRemove()
        } else {
            this.nextPower()
        }
    }

    getTarget() {
        let seat = this.player.seat
        let oppositeSeat = this.scene.getOppositeSeat(seat)

        return this.isActive
            ? this.getActiveTarget(seat, oppositeSeat)
            : this.getPickTarget(seat, oppositeSeat)
    }

    getPickTarget(seat, oppositeSeat) {
        let top = layout.pos.power.top

        if (this.isReverseEffect) {
            return top[2]
        }

        if (this.isAffectsOwnPlayer) {
            return top[seat]
        }

        if (this.isReplacement) {
            return layout.pos.power.pick[oppositeSeat]
        }

        return top[oppositeSeat]
    }

    getActiveTarget(seat, oppositeSeat) {
        let pick = layout.pos.power.pick

        if (this.isReverseEffect) {
            return this.getReverseEffectTarget(seat, oppositeSeat)
        }

        if (this.isAffectsOwnPlayer) {
            return pick[seat]
        }

        if (this.isLimiter) {
            return null
        }

        return pick[oppositeSeat]
    }

    getReverseEffectTarget(seat, oppositeSeat) {
        let opponentCard = this.scene.players[oppositeSeat].pick
        let pick = layout.pos.power.pick

        if (this.card.elementId != opponentCard.elementId) {
            this.playPoof()
            return this
        }

        if (this.card.value > opponentCard.value) {
            return pick[oppositeSeat]
        }

        if (this.card.value < opponentCard.value) {
            return pick[seat]
        }

        this.playPoof()
        return this
    }

    playPoof() {
        this.anims.play('power/poof')
    }

    updateState() {
        this.state = this.getNextState()
    }

    getNextState() {
        return (this.state + 1) % Object.keys(States).length
    }

    nextPower() {
        this.scene.nextPower()
    }

    startRemove() {
        this.scene.time.delayedCall(500, () => this.removePower())
    }

    removePower() {
        this.scene.removePower(this)

        this.nextPower()
        this.afterRemove()

        this.destroy()
    }

    afterRemove() {
        let opponent = this.scene.players[this.scene.getOppositeSeat(this.player.seat)]

        if (this.isDiscardElement) {
            opponent.discardElement(Rules.discardElements[this.powerId])
        }

        if (this.isDiscardColor) {
            opponent.discardColor(Rules.discardColors[this.powerId])
        }

        opponent.arrangeWinCards()
    }

}
