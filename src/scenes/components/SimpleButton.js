import EventComponent from './EventComponent'


/* START OF COMPILED CODE */

class SimpleButton extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        gameObject["__SimpleButton"] = this;

        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject = gameObject;
        /** @type {any} */
        this.hoverCallback = null;
        /** @type {any} */
        this.callback = () => {};
        /** @type {boolean} */
        this.pixelPerfect = false;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {SimpleButton} */
    static getComponent(gameObject) {
        return gameObject["__SimpleButton"];
    }

    /* START-USER-CODE */

    start() {
        this.gameObject.setInteractive({
            cursor: 'pointer',
            pixelPerfect: this.pixelPerfect
        })

        this.gameObject.on('pointerover', () => this.onOver())
        this.gameObject.on('pointerup', () => this.onUp())
    }

    onOver() {
        if (this.hoverCallback) this.hoverCallback()
    }

    onUp() {
        this.callback()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default SimpleButton
