
// You can write more code here

/* START OF COMPILED CODE */

class Button {

    constructor(gameObject) {
        gameObject["__Button"] = this;

        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject = gameObject;
        /** @type {string} */
        this.spriteName = "";
        /** @type {any} */
        this.callback = () => {};

        /* START-USER-CTR-CODE */

        this.gameObject.setInteractive({ cursor: 'pointer' })

        this.gameObject.on('pointerover', () => this.onOver())
        this.gameObject.on('pointerout', () => this.onOut())
        this.gameObject.on('pointerdown', () => this.onDown())
        this.gameObject.on('pointerup', () => this.onUp())

        /* END-USER-CTR-CODE */
    }

    /** @returns {Button} */
    static getComponent(gameObject) {
        return gameObject["__Button"];
    }

    /* START-USER-CODE */

    onOver() {
        this.gameObject.setFrame(`${this.spriteName}-hover`)
    }

    onOut() {
        this.gameObject.setFrame(this.spriteName)
    }

    onDown() {
        this.gameObject.setFrame(`${this.spriteName}-active`)
    }

    onUp() {
        this.gameObject.setFrame(this.spriteName)
        this.callback()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Button
