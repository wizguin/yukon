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

    process() {
        this.visible = true

        if (this.state == States.Active && this.isLimiter) {
            this.onStateProcessed()
            return
        }

        let target = this.getTarget()

        this.tweenTo(target.x, target.y)

        this.tween.once('complete', this.onTweenComplete, this)
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

    onTweenComplete() {
        this.onStateProcessed()
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

            default:
                this.nextPower()
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

        return this.state == States.Active
            ? this.getActiveTarget(seat, oppositeSeat)
            : this.getPickTarget(seat, oppositeSeat)
    }

    getPickTarget(seat, oppositeSeat) {
        let top = layout.pos.power.top

        if (this.powerId == 1) {
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

        if (this.powerId == 1) {
            this.visible = false
        }

        if (this.isAffectsOwnPlayer) {
            return pick[seat]
        }

        return pick[oppositeSeat]
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
        this.scene.time.delayedCall(250, () => this.removePower())
    }

    removePower() {
        this.scene.removePower(this)

        this.nextPower()

        this.destroy()
    }

}
