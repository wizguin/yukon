export default class FurnitureSprite extends Phaser.GameObjects.Sprite {

    constructor(scene, id, crate, x, y, texture, rotation, frame) {
        super(scene, x, y, texture, '1_1_1')

        this.id = id
        this.frames = this.texture.getFrameNames()
        this.visible = !crate
        this.crumb = scene.crumbs.furniture[id]
        this.isWall = this.crumb.type == 2
        this.trashIcon

        this.trashed = false

        // Physics body that the furniture is allowed inside
        this.safeArea = (this.isWall) ? scene['wall'] : scene['room']

        this.validatePos()
        this.depth = this.y - 1 // - 1 to appear behind explosion

        // Last safe position
        this.safeX = this.x
        this.safeY = this.y

        // Offsets based on original center vs pointer position at start of drag
        this.offsetX = 0
        this.offsetY = 0

        this.maxFrames = [
            // Item frames (rotations)
            this.getFrameCount(0),
            // Art frames (variations)
            this.getFrameCount(1)
        ]

        // Set animations
        if (this.crumb.fps) {
            this._anims = this.getAnims()
            this.setAnim(this.frame.name)
        }

        // Set frames
        if (this.isWall && crate && this.maxFrames[0] > 1) {
            // Start new wall item at middle rotation
            this.updateFrame(0, 2, true)
        } else {
            this.updateFrame(0, rotation, true)
        }
        this.updateFrame(1, frame, true)

        // Set input
        this.setInteractive({ draggable: true, pixelPerfect: true })
        this.on('dragend', () => this.drop())
        // Input disabled initially if not editing
        if (!this.editing) this.disableInteractive()

        if (crate) crate.drop(this)
    }

    get iglooEdit() {
        return this.scene.interface.iglooEdit
    }

    get editing() {
        if (!this.iglooEdit || !this.iglooEdit.controls) return false
        return this.iglooEdit.controls.visible
    }

    get currentFrame() {
        return this.frame.name.split('_')
    }

    get wallBounds() {
        return this.scene.wallBounds
    }

    get isSafe() {
        if (this.safeArea) {
            return this.scene.matter.containsPoint(this.safeArea, this.x, this.y)
        }
    }

    get isTrash() {
        if (this.scene.trash) {
            return (this.scene.matter.containsPoint(this.scene.trash, this.x, this.y))
                    || this.x < 0 || this.x > 1520 || this.y < 0 || this.y > 960
        }
    }

    getFrameCount(index) {
        let frames = this.getSplitFrames(index)
        return Math.max.apply(Math, frames)
    }

    getSplitFrames(index) {
        return this.frames.map(frame => frame.split('_')[index])
    }

    /**
     * Validates starting position.
     */
    validatePos() {
        if (!this.isSafe) {
            let spawn = (this.isWall) ? this.scene.wallSpawn : this.scene.floorSpawn

            this.x = spawn[0]
            this.y = spawn[1]
        }
    }

    drag(pointer) {
        this.x = Math.round(pointer.x + this.offsetX)
        this.y = Math.round(pointer.y + this.offsetY)
        this.depth = this.y

        this.checkPos()

        if (!this.isWall || !this.wallBounds) return

        // Auto rotate wall item
        if (this.x < this.wallBounds[0]) {
            this.updateFrame(0, 1, true)
        } else if (this.x > this.wallBounds[1]) {
            this.updateFrame(0, 3, true)
        } else {
            this.updateFrame(0, 2, true)
        }
    }

    hover(pointer) {
        if (this.trashed) {
            return
        }

        // Can't hover wall items
        if (!this.isWall) {
            let frame = this.currentFrame
            frame.splice(2, 0, 'hover')
            this.setFrame(frame.join('_'))
        }

        this.offsetX = this.x - pointer.x
        this.offsetY = this.y - pointer.y

        this.scene.setSelected(this)
    }

    drop() {
        if (!this.editing || this.trashed) {
            return
        }

        this.scene.setSelected()

        if (!this.isSafe) {
            if (this.isTrash) return this.sendToTrash()

            // Return to safe position
            this.x = this.safeX
            this.y = this.safeY
            this.depth = this.y
            this.alpha = 1
        }

        this.safeX = this.x
        this.safeY = this.y
        this.setFrame(this.frame.name.replace('_hover', ''))
    }

    /**
     * Updates the current frame by modifying a value within it,
     * e.g updating a rotation from 1_1_1 to 2_1_1.
     *
     * @param {number} index - Index of frame in currentFrame
     * @param {number} value - Value to modify the frame by
     * @param {boolean} set - If the value should be directly set instead
     * @returns
     */
    updateFrame(index, value, set = false) {
        // Can't rotate wall items with keys
        if (this.isWall && index == 0 && !set) return

        let frame = this.currentFrame
        // Don't update set values if they are equal
        if (set && frame[index] == value) return

        let newFrame = (set) ? value : parseInt(frame[index]) + value
        frame[index] = newFrame

        // Wrap value if necessary
        if (frame[index] > this.maxFrames[index]) {
            frame[index] = 1
        } else if (frame[index] < 1) {
            frame[index] = this.maxFrames[index]
        }

        this.setFrame(frame.join('_'))
    }

    /*========== Trash ==========*/

    /**
     * Validates position when dragging furniture.
     */
    checkPos() {
        // Furniture is outside allowed area
        if (!this.isSafe) {
            this.alpha = 0.5
        } else {
            this.alpha = 1
        }

        this.checkTrash()
    }

    /**
     * Validates trash position when dragging furniture.
     */
    checkTrash() {
        // Create trash icon if it doesn't exist yet
        let icon = (this.trashIcon) ? this.trashIcon : this.addTrashIcon()

        if (this.isTrash) {
            // Update trash icon
            icon.visible = true
            icon.x = this.x + this.frame.width / 2
            icon.y = this.y
            icon.depth = this.y + 1

            this.iglooEdit.button_furniture.setFrame('button/furniture-hover')

        } else {
            icon.visible = false

            this.iglooEdit.button_furniture.setFrame('button/furniture')
        }
    }

    addTrashIcon() {
        this.trashIcon = this.scene.add.image(0, 0, 'iglooedit', 'remove')
        this.trashIcon.visible = false
        return this.trashIcon
    }

    sendToTrash() {
        this.trashed = true

        // Update furniture quantity
        this.scene.quantities[this.id]--

        this.trashIcon.destroy()

        this.scene.tweens.add({
            targets: this,
            duration: 600,
            x: 1430,
            y: 460,
            scale: 0.5,
            ease: this.easeOutBack,
            onComplete: () => this.onTrashComplete()
        })
    }

    easeOutBack(value) {
        return Phaser.Math.Easing.Back.Out(value, 0.5)
    }

    onTrashComplete() {
        if (this.active) {
            this.iglooEdit.button_furniture.setFrame('button/furniture')
            this.destroy()
        }
    }

    /*========== Animations ==========*/

    getAnims() {
        let anims = {}

        // Gets max inner frame number for each animation
        this.frames.map(frame => {
            frame = this.splitAnim(frame)

            // Update if doesn't exist or if current count is less
            if ((!(anims[frame.key]) && frame.num > 1) || frame.num > anims[frame.key]) {
                anims[frame.key] = parseInt(frame.num)
            }
        })

        // Update to animation objects
        for (let frame in anims) {
            anims[frame] = this.createAnim(frame, anims[frame])
        }

        return anims
    }

    createAnim(frame, num) {
        let key = `${this.texture.key}_${frame}`

        // If animation already exists
        if (this.scene.anims.exists(key)) {
            return this.scene.anims.get(key)
        }

        // Create animation
        return this.scene.anims.create({
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

    setFrame(frame) {
        if (this.frame && this.frame.name == frame) return

        if (this._anims) {
            this.setAnim(frame)
        } else {
            super.setFrame(frame)
        }
    }

    setAnim(frame) {
        this.stop() // Stop current animation

        frame = this.splitAnim(frame)
        super.setFrame(`${frame.key}_1`)

        if (!frame.anim) return // Not an animation
        this.play(frame.anim)

        // Switch frame to inner frame number, used for keeping
        // same animation when transitioning between hover/rotation
        if (frame.anim.frames[frame.num]) {
            this.anims.setCurrentFrame(frame.anim.frames[frame.num])
        }
    }

    /**
     * Separates an animation frame from its inner frame number.
     *
     * @param {string} frame - Full frame name
     */
    splitAnim(frame) {
        frame = frame.split('_')
        let num = frame.pop()
        frame = frame.join('_')

        return {
            key: frame,
            anim: (this._anims) ? this._anims[frame] : null,
            num: num
        }
    }

}
