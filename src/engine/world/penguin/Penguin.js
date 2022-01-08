import BaseContainer from '@scenes/base/BaseContainer'

import ItemLoader from './loader/ItemLoader'
import PathEngine from './pathfinding/PathEngine'
import PenguinItems from './PenguinItems'


export default class Penguin extends BaseContainer {

    constructor(user, room, penguinLoader) {
        super(room, user.x, user.y)

        // Assign user attributes
        Object.assign(this, user)
        this.room = room
        this.penguinLoader = penguinLoader

        this.items = new PenguinItems(this)
        this.itemLoader = new ItemLoader(this)
        this.bodySprite

        PathEngine.setStartPos(this)
        this.depth = this.y
        this.tween
        this.direction

        this.nameTag = penguinLoader.addName(this)

        // Active balloon
        this.balloon

        this.balloonTimer
        this.textBalloon
        this.emoteBalloon

        this.on('destroy', () => this.onDestroy())
        this.isButton = true

        // Function that is called after move completes, used to set a frame after move etc
        this.afterMove

        this.load()
    }

    get isTweening() {
        return (this.tween) ? true : false
    }

    get pos() {
        return { x: this.x, y: this.y }
    }

    get playerCard() {
        return this.interface.main.playerCard
    }

    get paperDollLoader() {
        return this.playerCard.paperDoll.paperDollLoader
    }

    /**
     * this.body is a Phaser property and will result in an error on destruction,
     * so it must be deleted manually first.
     */
    onDestroy() {
        delete this.body
    }

    load() {
        this.penguinLoader.loadPenguin(this)
        this.itemLoader.loadItems()

        this.room.add.existing(this)
    }

    update(item, slot) {
        this.items.setItem(item, slot)

        if (slot == 'color' && this.bodySprite) {
            this.bodySprite.tint = this.world.getColor(item)
        }

        // Load item sprite
        if (slot in this.items.equipped) {
            this.itemLoader.loadItem(item, slot)
            this.itemLoader.load.start()
        }

        // Load item paper, only if card is active
        if (this.playerCard.visible && this.playerCard.id == this.id) {
            this.paperDollLoader.loadItem(item, slot)
            this.paperDollLoader.load.start()
        }
    }

    move(x, y) {
        let path = PathEngine.getPath(this, { x: x, y: y })
        if (path) this.addMoveTween(path)
    }

    setPos(x, y) {
        this.x = x
        this.y = y
    }

    /*========== Frames ==========*/

    playFrame(_frame, set = true) {
        // Moving penguin can only update when frames are movement frames (9-16)
        if (this.isTweening && (frame < 9 || frame > 16)) {
            return
        }

        // Filters out shadow and ring
        let sprites = this.list.filter(child => child.type == 'Sprite')

        // Get correct frame id
        let frame = ([25, 26].includes(_frame))
            ? this.getSecretFrame(_frame)
            : _frame

        for (let sprite of sprites) {
            let key = `${sprite.texture.key}_${frame}`

            if (!this.world.anims.exists(key)) {
                this.createAnim(sprite.texture.key, frame)
            }

            if (this.checkAnim(key)) {
                sprite.visible = true
                sprite.anims.play(key)
            } else {
                sprite.visible = false
            }
        }

        // Frames that aren't set get set to 1
        this.frame = (set) ? _frame : 1
    }

    createAnim(key, frame) {
        let animation = this.crumbs.penguin[frame]
        let frames = this.generateFrames(key, frame, animation)

        this.world.anims.create({
            key: `${key}_${frame}`,
            frames: frames,
            frameRate: 24,
            repeat: animation.repeat || 0
        })
    }

    generateFrames(key, frame, animation) {
        let config = {
            prefix: `${frame}_`,
            frames: animation.frames || Phaser.Utils.Array.NumberArray(animation.start || 1, animation.end)
        }

        let textureFrames = this.world.textures.get(key).getFrameNames(false)

        // Filter out null frames
        config.frames = config.frames.filter((i) => {
            return textureFrames.includes(`${frame}_${i}`)
        })

        return this.world.anims.generateFrameNames(key, config)
    }

    checkAnim(key) {
        let animation = this.world.anims.get(key)
        return animation && animation.frames.length > 0
    }

    getSecretFrame(frame) {
        let equipped = this.items.equippedFlat

        for (let secret of this.crumbs.secretFrames[frame]) {
            if (this.checkSecretFrames(equipped, secret)) {
                return secret.secret_frame
            }
        }

        return frame
    }

    checkSecretFrames(equipped, secret) {
        for (let item in equipped) {
            if (equipped[item] !== secret[item]) {
                return false
            }
        }

        // Only return true if frame is found in crumbs
        return secret.secret_frame in this.crumbs.penguin
    }

    /*========== Tweening ==========*/

    addMoveTween(path) {
        if (this.tween) {
            this.removeTween(false)
        }

        this.playFrame(this.direction + 8) // + 8 for walking frame id

        this.tween = this.room.tweens.add({
            targets: this,
            duration: path.duration,

            x: Math.round(path.target.x),
            y: Math.round(path.target.y),

            onUpdate: () => this.onMoveUpdate(),
            onComplete: () => this.onMoveComplete()
        })
    }

    onMoveUpdate() {
        this.depth = this.y

        if (this.nameTag) {
            this.updateNameTag()
        }

        if (this.balloon) {
            this.updateBalloon()
        }
    }

    onMoveComplete() {
        this.removeTween()

        if (this.afterMove) {
            this.afterMove()
            this.afterMove = null
        }
    }

    updateNameTag() {
        this.nameTag.x = this.x
        this.nameTag.y = this.y + 40
        this.nameTag.depth = this.depth + 2000
    }

    updateBalloon() {
        this.balloon.x = this.x
        this.balloon.y = this.y - 95
    }

    removeTween(playFrame = true) {
        if (!this.tween) {
            return
        }

        this.tween.remove()
        this.tween = null

        if (playFrame) {
            this.playFrame(this.direction)
        }
    }

}
