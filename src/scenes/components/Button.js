import SimpleButton from './SimpleButton'


/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Button extends SimpleButton {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject;
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


        this.gameObject = gameObject;
        gameObject["__Button"] = this;

        /* START-USER-CTR-CODE */

        this.lockFrame = false

        /* END-USER-CTR-CODE */
    }

    /** @returns {Button} */
    static getComponent(gameObject) {
        return gameObject["__Button"];
    }


    /* START-USER-CODE */

    start() {
        super.start()
        this.gameObject.on('pointerdown', (pointer) => this.onDown(pointer))
    }

    onOver() {
        if (!this.lockFrame) {
            this.gameObject.setFrame(`${this.spriteName}-hover`)
        }

        super.onOver()
    }

    onOut() {
        if (!this.lockFrame) {
            this.gameObject.setFrame(this.spriteName)
        }

        super.onOut()
    }

    onDown(pointer) {
        if (pointer.button != 0) {
            return
        }

        if (this.activeFrame) {
            this.gameObject.setFrame(`${this.spriteName}-active`)
        } else {
            this.gameObject.setFrame(`${this.spriteName}-hover`)
        }
    }

    onUp(pointer) {
        if (pointer.button != 0) {
            return
        }

        if (this.activeFrame) {
            this.gameObject.setFrame(this.spriteName)
        } else {
            this.gameObject.setFrame(`${this.spriteName}-hover`)
        }

        super.onUp(pointer)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
