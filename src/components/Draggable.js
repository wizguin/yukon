import EventComponent from './EventComponent'


/* START OF COMPILED CODE */

class Draggable extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        gameObject["__Draggable"] = this;

        /** @type {Phaser.GameObjects.GameObject} */
        this.gameObject = gameObject;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {Draggable} */
    static getComponent(gameObject) {
        return gameObject["__Draggable"];
    }

    /* START-USER-CODE */

    start() {
        this.gameObject.setInteractive({ draggable: true })

        this.gameObject.on('drag', (pointer, dragX, dragY) => {
            this.onDrag(dragX, dragY)
        })
    }

    onDrag(dragX, dragY) {
        this.gameObject.x = dragX
        this.gameObject.y = dragY
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Draggable
