import EventComponent from './EventComponent'


/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DraggableContainer extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Container} */
        this.gameObject;
        /** @type {Phaser.GameObjects.GameObject} */
        this.handle;


        this.gameObject = gameObject;
        gameObject["__DraggableContainer"] = this;

        /* START-USER-CTR-CODE */

        // Offsets based on original center vs pointer position at start of drag
        this.offsetX = 0
        this.offsetY = 0

        /* END-USER-CTR-CODE */
    }

    /** @returns {DraggableContainer} */
    static getComponent(gameObject) {
        return gameObject["__DraggableContainer"];
    }


    /* START-USER-CODE */

    start() {
        this.handle.setInteractive({
            draggable: true,
            pixelPerfect: true
        })

        this.handle.on('pointerdown', (pointer) => this.onDown(pointer))
        this.handle.on('dragstart', (pointer) => this.onDragStart(pointer))
        this.handle.on('drag', (pointer) => this.onDrag(pointer))
    }

    onDown(pointer) {
        if (this.gameObject.widgetLayer && pointer.button == 0) {
            this.gameObject.widgetLayer.bringToTop(this.gameObject)
        }
    }

    onDragStart(pointer) {
        this.offsetX = this.gameObject.x - pointer.x
        this.offsetY = this.gameObject.y - pointer.y
    }

    onDrag(pointer) {
        this.gameObject.x = Math.round(pointer.x + this.offsetX)
        this.gameObject.y = Math.round(pointer.y + this.offsetY)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
