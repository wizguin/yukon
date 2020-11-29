/* START OF COMPILED CODE */

class Interactive {

    constructor(gameObject) {
        gameObject["__Interactive"] = this;

        /** @type {Phaser.GameObjects.Image} */
        this.gameObject = gameObject;

        /* START-USER-CTR-CODE */

        this.gameObject.setInteractive()

        /* END-USER-CTR-CODE */
    }

    /** @returns {Interactive} */
    static getComponent(gameObject) {
        return gameObject["__Interactive"];
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Interactive
