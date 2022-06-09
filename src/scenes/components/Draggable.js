import EventComponent from './EventComponent'


/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Draggable extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.GameObject} */
        this.gameObject;


        this.gameObject = gameObject;
        gameObject["__Draggable"] = this;

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
        this.gameObject.x = Math.round(dragX)
        this.gameObject.y = Math.round(dragY)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
