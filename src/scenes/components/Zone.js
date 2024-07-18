import SimpleButton from './SimpleButton'


/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Zone extends SimpleButton {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.gameObject;
        /** @type {any} */
        this.hoverCallback = null;
        /** @type {any} */
        this.hoverOutCallback = null;
        /** @type {any} */
        this.callback = () => {};


        this.gameObject = gameObject;
        gameObject["__Zone"] = this;

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

        const zone = this.scene.add.zone(this.gameObject.x, this.gameObject.y, this.gameObject.width, this.gameObject.height)

        if (this.gameObject.parentContainer) {
            this.gameObject.parentContainer.add(zone)
        }

        zone.isButton = true
        zone.angle = this.gameObject.angle

        zone.setOrigin(this.gameObject.originX, this.gameObject.originY)

        zone.setInteractive({
            cursor: 'pointer'
        })

        zone.on('pointerover', () => this.onOver())
        zone.on('pointerout', () => this.onOut())
        zone.on('pointerup', (pointer) => this.onUp(pointer))

        this.gameObject.zone = zone
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
