import BaseSprite from '@scenes/base/BaseSprite'


export default class IglooPet extends BaseSprite {

    constructor(textureKey, pet, room) {
        super(room, 0, 0, textureKey, '1_1')

        this.room = room

        const randomPos = this.getRandomSafePos()
        this.setPosition(randomPos.x, randomPos.y)

        this.updateTimer = null
        this.tween = null
        this.depth = this.y
    }

    get safeZone() {
        return this.room.pet
    }

    /**
     * Update that controls movement and other events, only ran for pet owner.
     */
    startUpdate() {
        const delayOffset = Phaser.Math.Between(0, 10) * 1000

        this.updateTimer = this.room.time.addEvent({
            delay: 10000 + delayOffset,
            callback: () => this.handleUpdate(),
            loop: true
        })
    }

    stopUpdate() {
        if (this.updateTimer) {
            this.updateTimer.remove()
            this.room.time.removeEvent(this.updateTimer)

            this.updateTimer = null
        }
    }

    handleUpdate() {
        const newPos = this.getRandomSafePos()

        // * 24 to simulate 24fps frame based tween
        const duration = Phaser.Math.Distance.BetweenPoints(this, newPos) / 4 * 24

        this.addMoveTween(newPos, duration)
    }

    addMoveTween(pos, duration) {
        this.removeTween()

        this.tween = this.room.tweens.add({
            targets: this,
            duration: duration,

            x: pos.x,
            y: pos.y,

            onUpdate: () => this.onMoveUpdate(),
            onComplete: () => this.onMoveComplete()
        })
    }

    onMoveUpdate() {
        this.depth = this.y
    }

    onMoveComplete() {
        this.removeTween()
    }

    getRandomSafePos() {
        const bounds = this.safeZone.bounds

        let x = 0
        let y = 0
        let isSafe = false

        while (!isSafe) {
            x = Phaser.Math.RND.between(bounds.min.x, bounds.max.x)
            y = Phaser.Math.RND.between(bounds.min.y, bounds.max.y)

            isSafe = this.isSafe(x, y)
        }

        return { x: x, y: y }
    }

    isSafe(x, y) {
        return this.room.matter.containsPoint(this.safeZone, x, y)
    }

    removeTween() {
        if (this.tween) {
            this.tween.remove()
            this.tween = null
        }
    }

}
