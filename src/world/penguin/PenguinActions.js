export default class PenguinActions {

    constructor(penguin) {
        this.penguin = penguin
        this.room = penguin.room

        this.speed = 260

        this.tween = null
    }

    sit(x, y) {
        let angle = this.getAngle({ x: this.penguin.x, y: this.penguin.y }, { x: x, y: y })
        let direction = this.getDirection(angle)

        this.playFrame(direction + 17) // + 17 for sitting frame id
    }

    rotate(x, y) {
        if (this.penguin.frame > 8) return

        let angle = this.getAngle({ x: this.penguin.x, y: this.penguin.y }, { x: x, y: y })
        let direction = this.getDirection(angle)

        this.playFrame(direction + 1) // + 1 for standing frame id
    }

    move(x, y) {
        if (this.tween) this.removeTween()

        let pos = { x: this.penguin.x, y: this.penguin.y }
        let newPos = { x: x, y: y }

        let duration = this.getDuration(pos, newPos)
        let angle = this.getAngle(pos, newPos)
        let direction = this.getDirection(angle)

        this.playFrame(direction + 9) // + 9 for walking frame id

        this.tween = this.room.tweens.add({
            targets: this.penguin,
            ease: 'Linear',
            duration: duration,
            x: Math.floor(x),
            y: Math.floor(y),

            onUpdate: () => { this.onMoveUpdate() },
            onComplete: () => { this.onMoveComplete(direction) }
        })
    }

    onMoveUpdate() {
        this.penguin.depth = this.penguin.y

        if (this.penguin.nameTag) this.updateNameTag()
    }

    onMoveComplete(direction) {
        this.removeTween()
        this.playFrame(direction + 1) // + 1 for standing frame id
    }

    updateNameTag() {
        this.penguin.nameTag.x = this.penguin.x
        this.penguin.nameTag.y = this.penguin.y + 40
    }

    playFrame(frame) {
        let sprites = this.penguin.list.filter(child => child.type == 'Sprite')

        if (this.tween == null) {
            for (let sprite of sprites) {
                sprite.anims.play(`${sprite.texture.key}_${frame}`)
            }

            this.penguin.frame = frame
        }
    }

    removeTween() {
        this.tween.remove()
        this.tween = null
    }

    /*========== Tween calculations ==========*/

    getDuration(pos, newPos) {
        let a = (pos.x - newPos.x) ** 2
        let b = (pos.y - newPos.y) ** 2
        let distance = Math.sqrt(a + b)

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

}
