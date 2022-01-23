/* START OF COMPILED CODE */

export default class MoveTo {

    constructor(gameObject) {

        /** @type {Phaser.GameObjects.GameObject} */
        this.gameObject;
        /** @type {number} */
        this.x = 0;
        /** @type {number} */
        this.y = 0;

        this.gameObject = gameObject;
        gameObject["__MoveTo"] = this;

        /* START-USER-CTR-CODE */

        // If x/y is 0 then use gameObject coordinate
        this.x = (this.x) ? this.x : gameObject.x
        this.y = (this.y) ? this.y : gameObject.y

        this.gameObject.on('pointerup', (pointer) => this.onPointerUp(pointer))

        /* END-USER-CTR-CODE */
    }

    /** @returns {MoveTo} */
    static getComponent(gameObject) {
        return gameObject["__MoveTo"];
    }


    /* START-USER-CODE */

    onPointerUp(pointer) {
        if (pointer.button != 0) {
            return
        }

        this.gameObject.scene.world.client.penguin.move(this.x, this.y)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
