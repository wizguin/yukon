// v1.2.0

export default class NinePatchContainer extends Phaser.GameObjects.Container {

    static __BASE = '__BASE'

    drawCenter = true
    marginLeft = 20
    marginTop = 20
    marginRight = 20
    marginBottom = 20
    ninePatchContainerOriginX = 0.5
    ninePatchContainerOriginY = 0.5
    textureKey
    textureFrame
    ninePatchContainerTint = 0xffffff
    ninePatchContainerTintFill = false
    flipX = false
    flipY = false
    _originTexture
    _originFrame
    _textureXs
    _textureYs

    constructor(scene, x, y, width, height, key, frame) {
        super(scene, x, y)

        this.width = width
        this.height = height

        this.textureKey = key
        this.textureFrame = frame

        this.scene.events.once('update', () => this.redraw())
    }

    redraw() {
        if (!this.scene) {
            return
        }

        this._originTexture = this.scene.textures.get(this.textureKey)
        this._originFrame = this._originTexture.frames[this.textureFrame ?? NinePatchContainer.__BASE]
        this._textureXs = [0, this.marginLeft, this._originFrame.width - this.marginRight, this._originFrame.width]
        this._textureYs = [0, this.marginTop, this._originFrame.height - this.marginBottom, this._originFrame.height]

        this.createPatches()

        this.drawPatches()
    }

    createPatches() {
        for (let row = 0; row < 3; row++) {

            for (let col = 0; col < 3; col++) {

                const name = this.getPatchNameByPosition(row, col)

                this.createPatchFrame(
                    name,
                    this._textureXs[col], // x
                    this._textureYs[row], // y
                    this._textureXs[col + 1] - this._textureXs[col], // width
                    this._textureYs[row + 1] - this._textureYs[row] // height
                )
            }
        }
    }

    drawPatches() {
        this.removeAll(true)

        // the positions we want from the object's size

        const finalXs = this.flipX ?
            [this.width - this.marginLeft, this.marginRight, 0]
            : [0, this.marginLeft, this.width - this.marginRight]
        const finalYs = this.flipY ?
            [this.height - this.marginTop, this.marginBottom, 0]
            : [0, this.marginTop, this.height - this.marginBottom, this.height]

        const sizeXs = [this.marginLeft, this.width - this.marginLeft - this.marginRight, this.marginRight]
        const sizeYs = [this.marginTop, this.height - this.marginTop - this.marginBottom, this.marginBottom]

        for (let row = 0; row < 3; row++) {

            for (let col = 0; col < 3; col++) {
                const patch = this._originTexture.frames[this.getPatchNameByPosition(row, col)]

                const patchImg = new Phaser.GameObjects.Image(this.scene, 0, 0, patch.texture.key, patch.name)

                patchImg.setOrigin(0, 0)

                patchImg.setPosition(
                    finalXs[col] - this.width * this.ninePatchContainerOriginX,
                    finalYs[row] - this.height * this.ninePatchContainerOriginY)

                patchImg.setDisplaySize(sizeXs[col], sizeYs[row])

                patchImg.visible = this.drawCenter || col !== 1 || row !== 1

                patchImg.flipX = this.flipX
                patchImg.flipY = this.flipY

                patchImg.tint = this.ninePatchContainerTint
                patchImg.tintFill = this.ninePatchContainerTintFill

                this.add(patchImg)
            }
        }
    }

    createPatchFrame(patch, x, y, width, height) {
        if (this._originTexture.frames.hasOwnProperty(patch)) {
            // console.log('NinePatchContainer.createPatchFrame: get from cache ' + patch)
            return
        }

        // console.log('NinePatchContainer.createPatchFrame: generate frame ' + patch)

        this._originTexture.add(patch,
            this._originFrame.sourceIndex,
            this._originFrame.cutX + x,
            this._originFrame.cutY + y,
            width, height)
    }

    getPatchNameByPosition(row, col) {
        const x = this._textureXs[col]
        const y = this._textureYs[row]
        const width = this._textureXs[col + 1] - this._textureXs[col]
        const height = this._textureYs[row + 1] - this._textureYs[row]

        return `${this._originFrame.name}|${x},${y},${width},${height}`
    }

    setTexture(key, frame) {
        this.textureKey = key
        this.textureFrame = frame

        return this
    }

    setNinePatchContainerOrigin(x, y) {
        this.ninePatchContainerOriginX = x
        this.ninePatchContainerOriginY = y
    }

    updateDisplayOrigin() {
        // nothing, a dummy method
    }

    resize(width, height) {
        if (width != this.width || height != this.height) {
            this.width = width
            this.height = height

            this.redraw()
        }
    }

    setFrame(frame) {
        this.textureFrame = frame
        this.redraw()
    }

    setMargin(margin) {
        this.marginLeft = margin
        this.marginTop = margin
        this.marginRight = margin
        this.marginBottom = margin
    }

}
