import SimpleButton from './SimpleButton'


/* START OF COMPILED CODE */

class Button extends SimpleButton {

    constructor(gameObject) {
        super(gameObject);

        gameObject["__Button"] = this;

        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject = gameObject;
        /** @type {string} */
        this.spriteName = "";
        /** @type {any} */
        this.hoverCallback = null;
        /** @type {any} */
        this.hoverOutCallback = null;
        /** @type {any} */
        this.callback = () => {};
        /** @type {boolean} */
        this.activeFrame = true;
        /** @type {boolean} */
        this.pixelPerfect = false;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {Button} */
    static getComponent(gameObject) {
        return gameObject["__Button"];
    }

    /* START-USER-CODE */

    start() {
        super.start()
        this.gameObject.on('pointerdown', () => this.onDown())
    }

    onOver() {
        this.gameObject.setFrame(`${this.spriteName}-hover`)
        super.onOver()
    }

    onOut() {
        this.gameObject.setFrame(this.spriteName)
        super.onOut()
    }

    onDown() {
        if (this.activeFrame) {
            this.gameObject.setFrame(`${this.spriteName}-active`)
        } else {
            this.gameObject.setFrame(`${this.spriteName}-hover`)
        }
    }

    onUp() {
        if (this.activeFrame) {
            this.gameObject.setFrame(this.spriteName)
        } else {
            this.gameObject.setFrame(`${this.spriteName}-hover`)
        }

        super.onUp()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Button
