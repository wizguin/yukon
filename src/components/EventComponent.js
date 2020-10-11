
// You can write more code here

/* START OF COMPILED CODE */

class EventComponent {
    
    constructor(gameObject) {
        gameObject["__EventComponent"] = this;
        
        /** @type {Phaser.GameObjects.GameObject} */
        this.gameObject = gameObject;
        
        /* START-USER-CTR-CODE */

        this.scene = gameObject.scene

        // First time the scene is updated, call the `start` method
        this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this)
        // Each time the scene is updated, call the `update` method
        this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
        // If the object is destroyed, call the `destroy` method
        gameObject.on(Phaser.GameObjects.Events.DESTROY, this.destroy, this)

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
        this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.start, this)
        this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default EventComponent
