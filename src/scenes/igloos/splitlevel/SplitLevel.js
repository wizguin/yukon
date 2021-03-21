import IglooScene from '../IglooScene'


/* START OF COMPILED CODE */

class SplitLevel extends IglooScene {

    constructor() {
        super("SplitLevel");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image} */
        this.mask;

        /* START-USER-CTR-CODE */

        this.floorSpawn = [1080, 490]
        this.wallSpawn = [970, 200]
        this.wallBounds = [410, 1110]
        this.floorFrame = 3

        /* END-USER-CTR-CODE */
    }

    _preload() {

        this.load.pack("splitlevel-pack", "assets/media/igloos/buildings/sprites/splitlevel/splitlevel-pack.json");
    }

    _create() {

        // floor
        const floor = this.add.image(760, 630, "splitlevel", "floor");
        floor.setOrigin(0.5003861003861004, 0.5);

        // mask
        const mask = this.add.image(759, 635, "splitlevel", "mask");
        mask.visible = false;

        // door
        this.add.image(235, 556, "splitlevel", "door");

        // wall_1
        const wall_1 = this.add.image(760, 380, "splitlevel", "wall_1");
        wall_1.setOrigin(0.5003615328994938, 0.5);

        // stairs_top
        const stairs_top = this.add.image(763, 667, "splitlevel", "stairs_top");
        stairs_top.setOrigin(0.5, 0.5035971223021583);

        // stairs
        this.add.image(779, 664, "splitlevel", "stairs");

        // wall_2
        const wall_2 = this.add.image(925, 811, "splitlevel", "wall_2");
        wall_2.setOrigin(0.5, 0.5015197568389058);

        this.floor = floor;
        this.mask = mask;
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default SplitLevel
