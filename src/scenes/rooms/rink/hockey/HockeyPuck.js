/* START OF COMPILED CODE */

import BaseImage from "../../../base/BaseImage";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class HockeyPuck extends BaseImage {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "rink", frame ?? "ball");

        this.setOrigin(0.5, 0.7037037);

        /* START-USER-CTR-CODE */

        this.isMoving = false
        this.velocity = new Phaser.Math.Vector2(0, 0)

        this.intersectingPoint = new Phaser.Geom.Point()
        this.line = null

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    get bounds() {
        return this.getBounds()
    }

    get worldX() {
        return this.x + this.parentContainer.x
    }

    get worldY() {
        return this.y + this.parentContainer.y
    }

    get isInStartPos() {
        return this.x === 0 && this.y === 0
    }

    setVelocity(x, y) {
        this.velocity.set(x, y)
    }

    createLine() {
        this.line = new Phaser.GameObjects.Line(this.scene, 0, 0, this.x, this.y, this.x, this.y)

        this.line.setOrigin(0, 0)

        this.parentContainer.add(this.line)
    }

    reset() {
        this.setPosition(0, 0)
        this.setVelocity(0, 0)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
