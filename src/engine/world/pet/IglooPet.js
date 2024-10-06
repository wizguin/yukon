import BaseSprite from '@scenes/base/BaseSprite'

import PathEngine from '../penguin/pathfinding/PathEngine'


// Normal, super, great
const playFrames = [27, 28, 35]
const restFrame = 25
const feedFrame = 31
const bathFrame = 34
const gumFrame = 29
const cookieFrame = 30

// When to notify low stat
const lowStatValue = 20
const lowStatFrames = {
    energy: 32,
    health: 33,
    rest: 26
}

export default class IglooPet extends BaseSprite {

    constructor(textureKey, pet, room) {
        super(room, 0, 0, textureKey, '1_1')

        // Set walking last for update
        const { walking, ...petProperties } = pet
        Object.assign(this, petProperties)

        this.room = room

        this.createAnims()
        this.playFrame(1)

        this.setPos(pet.x, pet.y)

        this.isButton = true
        this.updateTimer = null
        this.tween = null
        this.depth = this.y

        // If the last update action was a move
        this.lastActionMove = false

         // If low stat notifications have happened
        this.statsNotified = {
            energy: false,
            health: false,
            rest: false
        }

        if (this.isClientIgloo) {
            this.setInteractive()
        }

        this._walking = false

        // Set walking
        this.walking = walking
    }

    get safeZone() {
        return this.room.pet
    }

    get happiness() {
        const statTotal = this.energy + this.health + this.rest

        return Math.round((statTotal / 300) * 100)
    }

    get petCard() {
        return this.interface.main.petCard
    }

    get isClientIgloo() {
        return this.room.isClientIgloo
    }

    get walking() {
        return this._walking
    }

    set walking(walking) {
        this._walking = walking
        this.visible = !walking
    }

    get visible() {
        return super.visible
    }

    set visible(visible) {
        super.visible = visible && !this.walking

        // Start or stop update
        this.visible ? this.startUpdate() : this.stopUpdate()
    }

    setInteractive() {
        super.setInteractive({ cursor: 'pointer', pixelPerfect: true })

        this.on('pointerup', this.onPointerUp, this)
    }

    setPos(x, y) {
        if (!this.isSafe(x, y)) {
            const randomPos = this.getRandomSafePos()

            x = randomPos.x
            y = randomPos.y
        }

        this.setPosition(x, y)
    }

    onPointerUp() {
        this.petCard.show(this)
    }

    /**
     * Update that controls movement and other events, only ran for pet owner.
     */
    startUpdate() {
        if (!this.isClientIgloo || this.walking) return

        this.removeUpdateTimer()

        const delayOffset = Phaser.Math.Between(0, 10) * 1000

        this.updateTimer = this.room.time.addEvent({
            delay: 10000 + delayOffset,
            callback: () => this.handleUpdate(),
            loop: true
        })
    }

    stopUpdate() {
        if (this.isClientIgloo) this.removeUpdateTimer()
    }

    handleUpdate() {
        // Low stat animation played, only check if last action was a move
        if (this.lastActionMove && this.checkLowStats()) {
            return
        }

        const newPos = this.getRandomSafePos()

        this.move(newPos)
        this.network.send('pet_move', { id: this.id, x: newPos.x, y: newPos.y })
    }

    /**
     * Returns whether a low stat notification has happened this update.
     *
     * @returns {boolean}
     */
    checkLowStats() {
        // Only check low stats every other move
        this.lastActionMove = false

        for (const stat in this.statsNotified) {
            const notify = this.checkLowStat(stat)

            if (notify) return true
        }

        // No notifications, reset all
        for (const stat in this.statsNotified) {
            this.statsNotified[stat] = false
        }

        return false
    }

    checkLowStat(stat) {
        const statValue = this[stat]

        if (statValue < lowStatValue && !this.statsNotified[stat]) {
            this.statsNotified[stat] = true

             // Send low stat notification for this stat
            this.network.send('pet_frame', { id: this.id, frame: lowStatFrames[stat] })

            return true
        }

        return false
    }

    updateStats(energy, health, rest) {
        this.energy = energy
        this.health = health
        this.rest = rest

        if (this.petCard.visible && this.petCard.pet === this) {
            this.petCard.updateStats()
        }
    }

    move(pos) {
        this.lastActionMove = true

        // * 24 to simulate 24fps frame based tween
        const duration = Phaser.Math.Distance.BetweenPoints(this, pos) / 4 * 24

        this.addMoveTween(pos, duration)
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
        this.onMoveUpdate()
        this.removeTween()
        this.playFrame(direction)
    }

    playFrame(frame) {
        this.play(`${this.texture.key}_${frame}`)
    }

    requestPlay() {
        if (this.rest < 20 || this.happiness < 10) {
            // Angry
            this.playInteraction(lowStatFrames.health)
            return
        }

        this.network.send('pet_play', { id: this.id })
    }

    requestRest() {
        this.network.send('pet_rest', { id: this.id })
    }

    requestWalk() {
        if (this.rest < 20 || this.energy < 40) {
            // Angry
            this.playInteraction(lowStatFrames.health)
            return
        }

        this.world.client.startWalkingPet(this.id)
    }

    startPlay(playType) {
        this.playInteraction(playFrames[playType])
    }

    startRest() {
        this.playInteraction(restFrame)
    }

    startFeed() {
        this.playInteraction(feedFrame)
    }

    startBath() {
        this.playInteraction(bathFrame)
    }

    startGum() {
        this.playInteraction(gumFrame)
    }

    startCookie() {
        this.playInteraction(cookieFrame)
    }

    /**
     * Handles pet_frame event.
     */
    startFrame(frame) {
        this.playInteraction(frame)
    }

    startWalk() {
        this.walking = true
    }

    stopWalk() {
        this.walking = false
    }

    playInteraction(frame) {
        // Remove previous event if exists
        this.off('animationrepeat')

        this.stopUpdate()
        this.removeTween()
        this.playFrame(frame)

        this.once('animationrepeat', (animation) => this.onInteractionComplete(animation, frame))
    }

    onInteractionComplete(animation, frame) {
        switch (frame) {
            case lowStatFrames.energy:
                // Stop on last frame
                const lastFrame = animation.getLastFrame().textureFrame

                this.stop()
                this.setFrame(lastFrame)
                break

            case lowStatFrames.rest:
                // Repeat frame
                break

            default:
                // Play frame 1
                this.playFrame(1)
                break
        }

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
            this.tween.stop()

            this.tween = null
        }
    }

}
