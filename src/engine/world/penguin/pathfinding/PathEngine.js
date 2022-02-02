export default class PathEngine {

    static speed = 260

    // Valid screen region
    static minX = 30
    static maxX = 1490
    static minY = 30
    static maxY = 870

    /**
     * Sets a random position for spawning into a room, around the room's default spawn point.
     * If the generated position is blocked, then a different one will be tried up to 25 times.
     * If a correct position is unable to be generated then the room's default spawn point will be used.
     *
     * @param {object} penguin - Penguin object
     */
    static setStartPos(penguin) {
        penguin.x = this.clampX(penguin.x)
        penguin.y = this.clampY(penguin.y)

        if (!this.isBlocked(penguin)) return

        let room = (penguin.room.isIgloo)
            ? penguin.crumbs.scenes.igloos[penguin.room.args.type]
            : penguin.crumbs.scenes.rooms[penguin.room.id]

        for (let i = 0; i < 25; i++) {
            let random = this.getRandomPos(room.x, room.y, 80)

            if (!this.isBlocked(penguin, random.x, random.y)) {
                return penguin.setPos(random.x, random.y)
            }
        }

        penguin.setPos(room.x, room.y)
    }

    /**
     * Returns a correct path and duration, used for a penguin movement tween.
     * This will also set the respective direction to the penguin object.
     *
     * @param {object} penguin - Penguin object
     * @param {object} target - Target position
     * @returns {object} Path
     */
    static getPath(penguin, target) {
        let pos = penguin.pos
        let safe = this.getSafeTarget(penguin, pos, target)
        let distance = Phaser.Math.Distance.BetweenPoints(pos, safe)

        if (distance > 10) {
            let duration = this.getDuration(distance, this.speed)
            let angle = this.getAngle(pos, safe)

            penguin.direction = this.getDirection(angle)

            return {
                target: safe,
                duration: duration
            }
        }
    }

    /**
     * Returns the safe target position, ensuring it is not inside the block.
     * This will loop over the distance between the current position and the target position
     * until the position is inside the block, or the distance ends.
     *
     * @param {object} penguin - Penguin object
     * @param {object} pos - Current position
     * @param {object} target - Target position
     * @returns {object} Safe target
     */
    static getSafeTarget(penguin, pos, target) {
        target = this.clampPos(target)

        let distance = Math.round(Phaser.Math.Distance.BetweenPoints(pos, target))
        let moveX = (target.x - pos.x) / distance
        let moveY = (target.y - pos.y) / distance
        let safe = { ...pos }

        while (distance > 0) {
            if (this.isBlocked(penguin, safe.x + moveX, safe.y + moveY)) {
                break
            }

            safe.x += moveX
            safe.y += moveY
            distance--
        }

        safe.x = Math.round(safe.x)
        safe.y = Math.round(safe.y)

        return safe
    }

    static getDuration(distance, speed) {
        return (distance / speed) * 1000
    }

    static getAngle(pos, target) {
        let dx = target.x - pos.x
        let dy = target.y - pos.y
        let angle = Math.floor((Math.atan2(dy, dx) * (180 / Math.PI)) - 90)

        return (angle < 0) ? angle + 360 : angle
    }

    static getDirection(angle) {
        let direction = Math.round(angle / 45) + 1
        return (direction > 8) ? 1 : direction
    }

    static clampPos(pos) {
        pos.x = this.clampX(pos.x)
        pos.y = this.clampY(pos.y)

        return pos
    }

    static clampX(x) {
        let clamped = Math.max(this.minX, Math.min(x, this.maxX))
        return Math.round(clamped)
    }

    static clampY(y) {
        let clamped = Math.max(this.minY, Math.min(y, this.maxY))
        return Math.round(clamped)
    }

    static getRandomPos(x, y, range) {
        let randX = this.clampX(x + Phaser.Math.Between(-range, range))
        let randY = this.clampY(y + Phaser.Math.Between(-range, range))

        return { x: randX, y: randY }
    }

    static isBlocked(penguin, x = penguin.x, y = penguin.y) {
        return penguin.room.matter.containsPoint(penguin.room.block, x, y)
    }

}
