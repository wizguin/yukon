import BaseSprite from '@scenes/base/BaseSprite'


export default class IglooPet extends BaseSprite {

    constructor(textureKey, pet, room) {
        super(room, 0, 0, textureKey, '1_1')

        this.room = room

        const randomPos = this.getRandomSafePos()
        this.setPos(randomPos.x, randomPos.y)

        this.depth = this.y
    }

    get safeZone() {
        return this.room.pet
    }

    setPos(x, y) {
        this.x = x
        this.y = y
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

}
