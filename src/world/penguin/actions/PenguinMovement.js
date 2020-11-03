export default class PenguinMovement {

    constructor(penguin) {
        this.penguin = penguin
        this.room = penguin.room

        this.speed = 260
        this.tween = null
        this.direction = 0
    }

    movePenguin(path) {
        if (this.tween) this.removeTween()

        this.penguin.playFrame(this.direction + 9) // + 9 for walking frame id

        this.tween = this.room.tweens.add({
            targets: this.penguin,
            duration: path.duration,

            x: Math.floor(path.target.x),
            y: Math.floor(path.target.y),

            onUpdate: () => { this.onMoveUpdate() },
            onComplete: () => { this.onMoveComplete() }
        })
    }

    onMoveUpdate() {
        this.penguin.depth = this.penguin.y

        if (this.penguin.nameTag) this.updateNameTag()
    }

    onMoveComplete() {
        this.removeTween()
    }

    updateNameTag() {
        this.penguin.nameTag.x = this.penguin.x
        this.penguin.nameTag.y = this.penguin.y + 40
    }

    removeTween() {
        if (!this.tween) return

        this.tween.remove()
        this.tween = null

        this.penguin.playFrame(this.direction + 1) // + 1 for standing frame id
    }

    /*========== Tween calculations ==========*/

    getPath(x, y) {
        let pos = this.penguin.pos
        let newPos = { x: x, y: y }

        let target = this.getTargetPos(pos, newPos)
        if (!target) return

        let duration = this.getDuration(pos, target)
        let angle = this.getAngle(pos, target)
        this.direction = this.getDirection(angle)

        return {
            target: target,
            duration: duration
        }
    }

    getTargetPos(pos, newPos) {
        let distance = this.getDistance(pos, newPos)

        if (distance < 1) return null

        let steps = Math.round(distance) / 2

        let move = {
            x: (newPos.x - pos.x) / steps,
            y: (newPos.y - pos.y) / steps
        }
        let safe = {
            x: pos.x,
            y: pos.y
        }

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
