export default class PenguinLoader {

    constructor(world) {
        this.world = world

        this.url = '/assets/media/clothing'

        this.animations = world.crumbs.penguin
        this.colors = world.crumbs.colors

        this.nameStyle = {
            fontFamily: 'Arial',
            fontSize: 23,
            color: '#000000',
            align: 'center'
        }
    }

    getItems({ feet, body, neck, hand, face, head }) {
        return { feet, body, neck, hand, face, head }
    }

    getZIndex(item) {
        return ['feet', 'body', 'neck', 'hand', 'face', 'head'].indexOf(item) + 10
    }

    loadPenguin(penguin) {
        this.addPenguin(penguin)
        this.addShadow(penguin)
        this.loadItems(penguin)
    }

    addPenguin(penguin) {
        this.loadSprite(penguin, 'penguin-body', 1)
        this.loadSprite(penguin, 'penguin', 2)
    }

    addShadow(penguin) {
        let shadow = penguin.room.add.image(0, 0, 'penguin-base', 'shadow')

        penguin.addAt(shadow, 0)
    }

    addRing(penguin) {
        let ring = penguin.room.add.image(0, 0, 'penguin-base', 'ring')

        penguin.addAt(ring, 0)
    }

    addName(penguin) {
        let x = penguin.x
        let y = penguin.y + 40
        let nameTag = penguin.room.add.text(x, y, penguin.username, this.nameStyle)

        nameTag.setOrigin(0.5)
        nameTag.depth = 2000 // Keep nametag above everything else

        return nameTag
    }

    loadItems(penguin) {
        let items = this.getItems(penguin.data)

        for (let item in items) {
            if (items[item] > 0) {
                this.loadItem(penguin, items[item])
            }
        }

        penguin.load.start()
        penguin.load.once('complete', () => { this.onLoadComplete(penguin, items) })
    }

    loadItem(penguin, item) {
        item = String(item)

        penguin.load.atlas({
            key: item,
            atlasURL: `${this.url}/${item}/${item}.json`,
            textureURL: `${this.url}/${item}/${item}.png`
        })
    }

    onLoadComplete(penguin, items) {
        for (let item in items) {
            if (items[item] > 0) {
                this.loadSprite(penguin, items[item], this.getZIndex(item))
            }
        }
    }

    loadSprite(penguin, id, depth) {
        id = String(id)
        let sprite = penguin.room.add.sprite(0, 0, id, '1_1')

        this.addAnims(id, sprite)

        if (id == 'penguin-body') sprite.tint = this.colors[penguin.data.color - 1]

        penguin.addAt(sprite, depth)
    }

    addAnims(id) {
        let anims = this.world.anims

        if (anims.exists(`${id}_1`)) return // If sprite animations are already loaded

        for (let [animationId, animation] of Object.entries(this.animations)) {

            let frames = anims.generateFrameNames(id, {
                start: (animation.start) ? animation.start : 1,
                end: animation.end,
                prefix: `${animationId}_`
            })

            anims.create({
                key: `${id}_${animationId}`,
                frames: frames,
                frameRate: 24,
                repeat: (animation.repeat) ? animation.repeat : 0
            })
        }
    }

}
