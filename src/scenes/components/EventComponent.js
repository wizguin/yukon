/* START OF COMPILED CODE */

export default class EventComponent {

    constructor(gameObject) {

        /** @type {Phaser.GameObjects.GameObject} */
        this.gameObject;

        this.gameObject = gameObject;
        gameObject["__EventComponent"] = this;

        /* START-USER-CTR-CODE */

        this.scene = gameObject.scene

        // First time the scene is created, call the `start` method
        this.scene.events.once('create', this.start, this)
        // Each time the scene is updated, call the `update` method
        this.scene.events.on('update', this.update, this)
        // If the object is destroyed, call the `destroy` method
        gameObject.on('destroy', this.destroy, this)

        /* END-USER-CTR-CODE */
    }

    /** @returns {EventComponent} */
    static getComponent(gameObject) {
        return gameObject["__EventComponent"];
    }


    /* START-USER-CODE */

    start() {
        // To be overridden in derived classes
    }

    update() {
        // To be overridden in derived classes
    }

    destroy() {
        // The object is destroyed, so we remove all the event handlers
        this.scene.events.off('create', this.start, this)
        this.scene.events.off('update', this.update, this)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
