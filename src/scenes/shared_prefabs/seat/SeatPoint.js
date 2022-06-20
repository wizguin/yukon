/* START OF COMPILED CODE */

export default class SeatPoint extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // point
        const point = scene.add.ellipse(0, 0, 5, 5);
        point.isFilled = true;
        point.fillColor = 65280;
        this.add(point);

        /* START-USER-CTR-CODE */

        this.visible = false

        /* END-USER-CTR-CODE */
    }

    /** @type {number} */
    sitFrame = 0;
    /** @type {Phaser.GameObjects.GameObject} */
    donePoint;

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
