/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ShowHint {

    constructor(gameObject) {

        /** @type {Phaser.GameObjects.GameObject} */
        this.gameObject;
        /** @type {string} */
        this.text = "";

        this.gameObject = gameObject;
        gameObject["__ShowHint"] = this;

        /* START-USER-CTR-CODE */

        this.gameObject.on('pointerover', () => this.onOver())
        this.gameObject.on('pointerout', () => this.onOut())
        this.gameObject.on('pointerup', () => this.onOut())

        /* END-USER-CTR-CODE */
    }

    /** @returns {ShowHint} */
    static getComponent(gameObject) {
        return gameObject["__ShowHint"];
    }


    /* START-USER-CODE */

    get hint() {
        return this.gameObject.scene.interface.main.hint
    }

    onOver() {
        if (!this.text) {
            return
        }

        this.hint.showHint(
            this.gameObject,
            this.gameObject.scene.getString(this.text) || this.text
        )
    }

    onOut() {
        this.hint.hideHint()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
