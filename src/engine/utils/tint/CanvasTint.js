export default class CanvasTint {

    static getTintedCanvas(frame, color) {
        let texture = frame.texture
        let stringColor = `#${(`00000${(color | 0).toString(16)}`).substr(-6)}`

        texture.tintCache = texture.tintCache || {}

        let cachedCanvas = texture.tintCache[stringColor]
        let canvas

        if (cachedCanvas) {
            canvas = cachedCanvas

            if (canvas.tintId == frame.name) {
                return canvas
            }

        } else {
            canvas = document.createElement('canvas')
        }

        this.tintWithMultiply(frame, color, canvas)

        canvas.tintId = frame.name
        texture.tintCache[stringColor] = canvas

        return canvas
    }

    static tintWithMultiply(frame, color, canvas) {
        let context = canvas.getContext('2d')
        let res = frame.source.resolution

        let frameX = frame.canvasData.x
        let frameY = frame.canvasData.y
        let frameWidth = frame.cutWidth
        let frameHeight = frame.cutHeight

        canvas.width = frameWidth
        canvas.height = frameHeight

        context.save()
        context.fillStyle = `#${(`00000${(color | 0).toString(16)}`).substr(-6)}`

        context.fillRect(0, 0, frameWidth, frameHeight)

        context.globalCompositeOperation = 'multiply'

        context.drawImage(frame.source.image, frameX, frameY, frameWidth, frameHeight, 0, 0, frameWidth / res, frameHeight / res)

        context.globalCompositeOperation = 'destination-atop'

        context.drawImage(frame.source.image, frameX, frameY, frameWidth, frameHeight, 0, 0, frameWidth / res, frameHeight / res)
        context.restore()
    }

    /**
     * A modified version of batchSprite from the Phaser Canvas renderer, with added support for canvas tinting.
     * Takes a Sprite Game Object, or any object that extends it, and draws it to the current context.
     *
     * @param {Phaser.Renderer.Canvas.CanvasRenderer} renderer - A reference to the current active Canvas renderer
     * @param {Phaser.GameObjects.GameObject} sprite - The texture based Game Object to draw
     * @param {Phaser.Textures.Frame} frame - The frame to draw, doesn't have to be that owned by the Game Object
     * @param {Phaser.Cameras.Scene2D.Camera} camera - The Camera to use for the rendering transform
     * @param {Phaser.GameObjects.Components.TransformMatrix} [parentTransformMatrix] - The transform matrix of the parent container, if set
     */
    static batchSprite(renderer, sprite, frame, camera, parentTransformMatrix) {
        let alpha = camera.alpha * sprite.alpha

        if (alpha === 0) {
            // Nothing to see, so abort early
            return
        }

        let ctx = renderer.currentContext

        let camMatrix = renderer._tempMatrix1
        let spriteMatrix = renderer._tempMatrix2

        let cd = frame.canvasData

        let frameX = cd.x
        let frameY = cd.y
        let frameWidth = frame.cutWidth
        let frameHeight = frame.cutHeight
        let customPivot = frame.customPivot

        let res = frame.source.resolution

        let displayOriginX = sprite.displayOriginX
        let displayOriginY = sprite.displayOriginY

        let x = -displayOriginX + frame.x
        let y = -displayOriginY + frame.y

        if (sprite.isCropped) {
            let crop = sprite._crop

            if (crop.flipX !== sprite.flipX || crop.flipY !== sprite.flipY) {
                frame.updateCropUVs(crop, sprite.flipX, sprite.flipY)
            }

            frameWidth = crop.cw
            frameHeight = crop.ch

            frameX = crop.cx
            frameY = crop.cy

            x = -displayOriginX + crop.x
            y = -displayOriginY + crop.y

            if (sprite.flipX) {
                if (x >= 0) {
                    x = -(x + frameWidth)

                } else if (x < 0) {
                    x = (Math.abs(x) - frameWidth)
                }
            }

            if (sprite.flipY) {
                if (y >= 0) {
                    y = -(y + frameHeight)

                } else if (y < 0) {
                    y = (Math.abs(y) - frameHeight)
                }
            }
        }

        let flipX = 1
        let flipY = 1

        if (sprite.flipX) {
            if (!customPivot) {
                x += (-frame.realWidth + (displayOriginX * 2))
            }

            flipX = -1
        }

        // Auto-invert the flipY if this is coming from a GLTexture
        if (sprite.flipY) {
            if (!customPivot) {
                y += (-frame.realHeight + (displayOriginY * 2))
            }

            flipY = -1
        }

        spriteMatrix.applyITRS(sprite.x, sprite.y, sprite.rotation, sprite.scaleX * flipX, sprite.scaleY * flipY)

        camMatrix.copyFrom(camera.matrix)

        if (parentTransformMatrix) {
            // Multiply the camera by the parent matrix
            camMatrix.multiplyWithOffset(parentTransformMatrix, -camera.scrollX * sprite.scrollFactorX, -camera.scrollY * sprite.scrollFactorY)

            // Undo the camera scroll
            spriteMatrix.e = sprite.x
            spriteMatrix.f = sprite.y

        } else {
            spriteMatrix.e -= camera.scrollX * sprite.scrollFactorX
            spriteMatrix.f -= camera.scrollY * sprite.scrollFactorY
        }

        // Multiply by the Sprite matrix
        camMatrix.multiply(spriteMatrix)

        ctx.save()

        camMatrix.setToContext(ctx)

        ctx.globalCompositeOperation = renderer.blendModes[sprite.blendMode]

        ctx.globalAlpha = alpha

        ctx.imageSmoothingEnabled = !(!renderer.antialias || frame.source.scaleMode)

        if (sprite.mask) {
            sprite.mask.preRenderCanvas(renderer, sprite, camera)
        }

        let color = sprite.tintTopLeft

        if (sprite.isTinted) {
            // Check if tinted canvas needs to be created/redrawn
            if (sprite.cachedTint != color || sprite.tintedCanvas.tintId != frame.name) {
                sprite.cachedTint = color
                sprite.tintedCanvas = this.getTintedCanvas(frame, color)
            }

            ctx.drawImage(sprite.tintedCanvas, 0, 0, frameWidth, frameHeight, x, y, frameWidth / res, frameHeight / res)

        } else {
            ctx.drawImage(frame.source.image, frameX, frameY, frameWidth, frameHeight, x, y, frameWidth / res, frameHeight / res)
        }

        if (sprite.mask) {
            sprite.mask.postRenderCanvas(renderer, sprite, camera)
        }

        ctx.restore()
    }

}
