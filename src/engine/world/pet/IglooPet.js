import BaseSprite from '@scenes/base/BaseSprite'

import PathEngine from '../penguin/pathfinding/PathEngine'


export default class IglooPet extends BaseSprite {

    constructor(textureKey, pet, room) {
        super(room, 0, 0, textureKey, '1_1')

        Object.assign(this, pet)

        this.room = room

        this.createAnims()
        this.playFrame(1)

        const randomPos = this.getRandomSafePos()
        this.setPosition(randomPos.x, randomPos.y)

        this.isButton = true
        this.updateTimer = null
        this.tween = null
        this.depth = this.y
    }

    get safeZone() {
        return this.room.pet
    }

    get happiness() {
        const statTotal = this.energy + this.health + this.rest

        return Math.round((statTotal / 300) * 100)
    }

    setInteractive() {
        super.setInteractive({ cursor: 'pointer', pixelPerfect: true })

        this.on('pointerdown', this.onPointerDown, this)
    }

    onPointerDown() {
        this.interface.main.petCard.show(this)
    }

    /**
     * Update that controls movement and other events, only ran for pet owner.
     */
    startUpdate() {
        this.removeUpdateTimer()

        const delayOffset = Phaser.Math.Between(0, 10) * 1000

        this.updateTimer = this.room.time.addEvent({
            delay: 10000 + delayOffset,
            callback: () => this.handleUpdate(),
            loop: true
        })
    }

    stopUpdate() {
        this.removeUpdateTimer()
        this.removeTween()
    }

    handleUpdate() {
        const newPos = this.getRandomSafePos()

        // * 24 to simulate 24fps frame based tween
        const duration = Phaser.Math.Distance.BetweenPoints(this, newPos) / 4 * 24

        this.addMoveTween(newPos, duration)
    }

    addMoveTween(pos, duration) {
        this.removeTween()

        const angle = PathEngine.getAngle(this, pos)
        const direction = PathEngine.getDirection(angle)

        const happyWalk = this.happiness > 50

        this.playFrame(direction + (happyWalk ? 16 : 8))

        this.tween = this.room.tweens.add({
            targets: this,
            duration: duration,

            x: pos.x,
            y: pos.y,

            onUpdate: () => this.onMoveUpdate(),
            onComplete: () => this.onMoveComplete(direction)
        })
    }

    onMoveUpdate() {
        this.depth = this.y
    }

    onMoveComplete(direction) {
        this.removeTween()
        this.playFrame(direction)
    }

    playFrame(frame) {
        this.play(`${this.texture.key}_${frame}`)
    }

    startPlay() {
        this.playInteraction(35)
    }

    startRest() {
        this.playInteraction(25)
    }

    playInteraction(frame) {
        // Remove previous event if exists
        this.off('animationrepeat')

        this.stopUpdate()
        this.playFrame(frame)

        this.once('animationrepeat', this.onInteractionComplete, this)
    }

    onInteractionComplete() {
        this.playFrame(1)
        this.startUpdate()
    }

    createAnims() {
        const anims = {}

        // Gets max inner frame number for each animation
        this.texture.getFrameNames().map(frame => {
            frame = this.splitAnim(frame)

            // Update if doesn't exist or if current count is less
            if (!(anims[frame.key]) || frame.num > anims[frame.key]) {
                anims[frame.key] = frame.num
            }
        })

        // Create anim
        for (const frame in anims) {
            this.createAnim(frame, anims[frame])
        }
    }

    createAnim(frame, num) {
        const key = `${this.texture.key}_${frame}`

        // If animation already exists
        if (this.scene.anims.exists(key)) {
            return
        }

        // Create animation
        this.scene.anims.create({
            key: key,
            frames: this.scene.anims.generateFrameNames(this.texture.key, {
                prefix: `${frame}_`,
                start: 1,
                end: num
            }),
            frameRate: 24,
            repeat: -1
        })
    }

    /**
     * Separates an animation frame from its inner frame number.
     *
     * @param {string} frame - Full frame name
     */
    splitAnim(frame) {
        const split = frame.split('_')

        return {
            key: split[0],
            num: parseInt(split[1])
        }
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

    removeUpdateTimer() {
        if (this.updateTimer) {
            this.updateTimer.remove()
            this.room.time.removeEvent(this.updateTimer)

            this.updateTimer = null
        }
    }

    removeTween() {
        if (this.tween) {
            this.tween.remove()

            this.tween = null
        }
    }

}
