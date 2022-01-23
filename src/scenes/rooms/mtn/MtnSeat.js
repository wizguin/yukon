/* START OF COMPILED CODE */

export default class MtnSeat extends Phaser.GameObjects.Image {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 760, y ?? 480, texture || "mtn", frame ?? "seat");

        /** @type {number} */
        this.sitFrame = 17;
        /** @type {number} */
        this.offsetX = 0;
        /** @type {number} */
        this.offsetY = 0;


        this.setOrigin(0.49504950495049505, 0.5064935064935064);

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
