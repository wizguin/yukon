/* START OF COMPILED CODE */

class MtnSeat extends Phaser.GameObjects.Image {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture || "mtn", frame !== undefined && frame !== null ? frame : "seat");

        this.setOrigin(0.49504950495049505, 0.5064935064935064);

        /** @type {number} */
        this.sitFrame = 17;
        /** @type {number} */
        this.offsetX = 0;
        /** @type {number} */
        this.offsetY = 0;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default MtnSeat
