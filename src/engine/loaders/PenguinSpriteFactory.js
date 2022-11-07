import TintedSprite from '@engine/utils/tint/TintedSprite'


export default class PenguinSpriteFactory {

    static create(penguin, key, depth) {
        if (!penguin.active) {
            return
        }

        let sprite

        switch (key) {
            case 'body':
                sprite = new TintedSprite(penguin.room, 0, 0, 'penguin', 'body/1_1')
                sprite.tint = penguin.room.world.getColor(penguin.color)

                penguin.room.add.existing(sprite)
                break

            case 'penguin':
                sprite = penguin.room.add.sprite(0, 0, 'penguin', 'penguin/1_1')
                break

            default:
                if (!penguin.textures.exists(key)) {
                    return
                }

                sprite = penguin.room.add.sprite(0, 0, key, '1_1')
                break
        }

        // Attach depth so that children can be sorted using penguin.sort('depth')
        sprite.depth = depth

        penguin.add(sprite)

        return sprite
    }

}
