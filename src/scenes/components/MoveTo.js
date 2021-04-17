/* START OF COMPILED CODE */

class MoveTo {

    constructor(gameObject) {
        gameObject["__MoveTo"] = this;

        /** @type {Phaser.GameObjects.GameObject} */
        this.gameObject = gameObject;
        /** @type {number} */
        this.x = 0;
        /** @type {number} */
        this.y = 0;

        /* START-USER-CTR-CODE */

        this.gameObject.on('pointerdown', () => this.setMoveTo())
        this.gameObject.on('pointerup', () => this.setMoveTo())

        /* END-USER-CTR-CODE */
    }

    /** @returns {MoveTo} */
    static getComponent(gameObject) {
        return gameObject["__MoveTo"];
    }

    /* START-USER-CODE */

    setMoveTo() {
        this.gameObject.scene.world.client.input.moveTo = [this.x, this.y]
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default MoveTo
