export default class EventComponent {

    /**
     * @param {Phaser.GameObjects.GameObject} gameObject The entity.
     */
    constructor(gameObject) {

        this.scene = gameObject.scene

        const listenAwake = this.awake !== EventComponent.prototype.awake
        const listenStart = this.start !== EventComponent.prototype.start
        const listenUpdate = this.update !== EventComponent.prototype.update
        const listenDestroy = this.destroy !== EventComponent.prototype.destroy

        if (listenAwake) {
            this.scene.events.once('scene-awake', this.awake, this)
        }

        if (listenStart) {
            this.scene.events.once('update', this.start, this)
        }

        if (listenUpdate) {
            this.scene.events.on('update', this.update, this)
        }

        if (listenStart || listenUpdate || listenDestroy) {
            gameObject.on('destroy', () => {

                this.scene.events.off('update', this.start, this)
                this.scene.events.off('update', this.update, this)

                if (listenDestroy) {
                    this.destroy()
                }
            })
        }
    }

    awake() {
        // override this
    }

    start() {
        // override this
    }

    update() {
        // override this
    }

    destroy() {
        // override this
    }

}
