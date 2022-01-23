import IglooScene from '../IglooScene'


/* START OF COMPILED CODE */

export default class Candy extends IglooScene {

    constructor() {
        super("Candy");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 760]
        this.wallSpawn = [750, 320]
        this.wallBounds = [580, 1000]
        this.floorFrame = 1

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("candy-pack", "assets/media/igloos/buildings/sprites/candy/candy-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(765, 639, "candy", "floor");
        floor.setOrigin(0.5006337135614702, 0.5);

        // wall_1
        const wall_1 = this.add.image(570, 378, "candy", "wall_1");
        wall_1.setOrigin(0.5010266940451745, 0.5);

        // wall_2
        this.add.image(972, 388, "candy", "wall_2");

        // chimney
        const chimney = this.add.image(887, 120, "candy", "chimney");
        chimney.setOrigin(0.5050505050505051, 0.5);

        // window
        const window = this.add.image(828, 476, "candy", "window");
        window.setOrigin(0.5014164305949008, 0.5);

        // door
        this.add.image(491, 467, "candy", "door");

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
