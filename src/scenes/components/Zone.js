import SimpleButton from './SimpleButton'


/* START OF COMPILED CODE */

class Zone extends SimpleButton {

    constructor(gameObject) {
        super(gameObject);

        gameObject["__Zone"] = this;

        /** @type {Phaser.GameObjects.Rectangle} */
        this.gameObject = gameObject;
        /** @type {any} */
        this.hoverCallback = null;
        /** @type {any} */
        this.hoverOutCallback = null;
        /** @type {any} */
        this.callback = () => {};

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {Zone} */
    static getComponent(gameObject) {
        return gameObject["__Zone"];
    }

    /* START-USER-CODE */

    start() {
        this.gameObject.visible = false

        let zone = this.scene.add.zone(this.gameObject.x, this.gameObject.y, this.gameObject.width, this.gameObject.height)
        zone.isButton = true

        zone.setInteractive({
            cursor: 'pointer'
        })

        zone.on('pointerover', () => this.onOver())
        zone.on('pointerout', () => this.onOut())
        zone.on('pointerup', () => this.onUp())
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Zone
