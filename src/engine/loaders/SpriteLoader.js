import TintedSprite from '@engine/utils/tint/TintedSprite'


export default class SpriteLoader {

    constructor(world) {
        this.world = world
    }

    loadSprite(penguin, id, depth) {
        if (!penguin.active) {
            return
        }

        let sprite

        if (id == 'penguin_body') {
            sprite = new TintedSprite(penguin.room, 0, 0, id, '1_1')
            sprite.tint = this.world.getColor(penguin.color)

            penguin.bodySprite = sprite
            penguin.room.add.existing(sprite)

        } else {
            sprite = penguin.room.add.sprite(0, 0, id, '1_1')
        }

        // Attach depth so that children can be sorted using penguin.sort('depth')
        sprite.depth = depth

        penguin.add(sprite)

        return sprite
    }

}
