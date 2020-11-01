export default class PenguinActions {

    constructor(penguin) {
        this.penguin = penguin
        this.room = penguin.room
        this.network = penguin.room.network

        this.speed = 260
        this.tween = null
        this.direction = 0
    }

    sit(x, y) {
        let angle = this.getAngle({ x: this.penguin.x, y: this.penguin.y }, { x: x, y: y })
        let direction = this.getDirection(angle)
        let frame = direction + 17 // + 17 for sitting frame id

        this.playFrame(frame)

        if (this.penguin.isClient) this.network.send('send_frame', { loop: true, frame: frame })
    }

    rotate(x, y) {
        if (this.penguin.frame > 8) return // Only rotate on standing frames

        let angle = this.getAngle({ x: this.penguin.x, y: this.penguin.y }, { x: x, y: y })
        let direction = this.getDirection(angle)

        this.playFrame(direction + 1) // + 1 for standing frame id
    }

    move(x, y) {
        if (this.tween) this.removeTween()

        let pos = { x: this.penguin.x, y: this.penguin.y }
        let newPos = this.getPath(pos, { x: x, y: y })

        if (!newPos) return

        let duration = this.getDuration(pos, newPos)
        let angle = this.getAngle(pos, newPos)
        this.direction = this.getDirection(angle)

        this.playFrame(this.direction + 9) // + 9 for walking frame id

        if (this.penguin.isClient) this.network.send('send_position', { x: newPos.x, y: newPos.y })

        this.tween = this.room.tweens.add({
            targets: this.penguin,
            duration: duration,

            x: Math.floor(newPos.x),
            y: Math.floor(newPos.y),

            onUpdate: () => { this.onMoveUpdate() },
            onComplete: () => { this.onMoveComplete() },
        })
    }

    onMoveUpdate() {
        this.penguin.depth = this.penguin.y

        if (this.penguin.nameTag) this.updateNameTag()
    }

    onMoveComplete() {
        this.removeTween()

        if (this.penguin.isClient) this.triggerTest()
    }

    updateNameTag() {
        this.penguin.nameTag.x = this.penguin.x
        this.penguin.nameTag.y = this.penguin.y + 40
    }

    triggerTest() {
        if (!this.room.triggers) return

        for (let [roomId, trigger] of Object.entries(this.room.triggers)) {

            if (this.room.matter.containsPoint(trigger, this.penguin.x, this.penguin.y)) {
                console.log('trigger')
                return
            }
        }
    }

    playFrame(frame, loop = true) {
        if (this.tween) return

        // Filters out shadow and ring
        let sprites = this.penguin.list.filter(child => child.type == 'Sprite')

        for (let sprite of sprites) {
            sprite.anims.play(`${sprite.texture.key}_${frame}`)
        }

        this.penguin.frame = frame
    }

    removeTween() {
        if (!this.tween) return

        this.tween.remove()
        this.tween = null

        this.playFrame(this.direction + 1) // + 1 for standing frame id
    }

    /*========== Tween calculations ==========*/

    getPath(pos, newPos) {
        let distance = this.getDistance(pos, newPos)

        if (distance < 1) return null

        let steps = Math.round(distance) / 2
        let move = {
            x: (newPos.x - pos.x) / steps,
            y: (newPos.y - pos.y) / steps
        }
        let safe = { x: pos.x, y: pos.y }
        let startBlocked = this.blockTest(safe.x, safe.y)

        while (steps > 0) {
            safe.x += move.x
            safe.y += move.y

            if (this.blockTest(safe.x, safe.y) && !startBlocked) {
                break
            }

            startBlocked = false
            steps--
        }

        distance = this.getDistance(pos, safe)

        if (distance > 10) {
            return safe
        } else {
            return null
        }
    }

    getDistance(pos, newPos) {
        let a = (pos.x - newPos.x) ** 2
        let b = (pos.y - newPos.y) ** 2

        return Math.sqrt(a + b)
    }

    getDuration(pos, newPos) {
        let distance = this.getDistance(pos, newPos)

        return (distance / this.speed) * 1000
    }

    getAngle(pos, newPos) {
        let dx = newPos.x - pos.x
        let dy = newPos.y - pos.y
        let angle = Math.floor((Math.atan2(dy, dx) * (180 / Math.PI)) - 90)

        if (angle < 0) {
            return angle + 360
        } else {
            return angle
        }
    }

    getDirection(angle) {
        let direction = Math.round(angle / 45)

        if (direction > 7) {
            return 0
        } else {
            return direction
        }
    }

    blockTest(x, y) {
        return this.room.matter.containsPoint(this.room.block, x, y)
    }

}
