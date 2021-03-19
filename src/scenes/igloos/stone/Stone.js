import IglooScene from '../IglooScene'


/* START OF COMPILED CODE */

class Stone extends IglooScene {

    constructor() {
        super("Stone");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image} */
        this.mask;

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 760]
        this.wallSpawn = [750, 320]
        this.wallBounds = [580, 1000]
        this.floorFrame = 1

        /* END-USER-CTR-CODE */
    }

    _preload() {

        this.load.pack("stone-pack", "assets/media/igloos/buildings/sprites/stone/stone-pack.json");
    }

    _create() {

        // floor
        const floor = this.add.image(765, 639, "stone", "floor");
        floor.setOrigin(0.5006337135614702, 0.5);

        // mask
        const mask = this.add.image(765, 636, "stone", "mask");
        mask.setOrigin(0.5006402048655569, 0.5015015015015015);
        mask.visible = false;

        // wall_1
        const wall_1 = this.add.image(570, 378, "stone", "wall_1");
        wall_1.setOrigin(0.5010266940451745, 0.5);

        // wall_2
        this.add.image(972, 388, "stone", "wall_2");

        // door
        this.add.image(491, 467, "stone", "door");

        this.floor = floor;
        this.mask = mask;
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Stone
