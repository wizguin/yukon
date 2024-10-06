import IglooScene from '../IglooScene'
import {Zone, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class Tent extends IglooScene {

    constructor() {
        super("Tent");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 800]
        this.wallSpawn = [760, 440]
        this.wallBounds = [300, 1230]
        this.floorFrame = 10

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("tent-igloo-pack", "assets/media/igloos/buildings/sprites/tent/tent-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "tent-igloo", "bg");

        // fg
        const fg = this.add.image(760, 994.1047699026867, "tent-igloo", "fg");
        fg.setOrigin(0.5, 1.0355258019819653);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(759.2484479811357, 666.4161909813262, 128, 160);
        rectangle_1.setOrigin(0.5097534998526223, 0.9213511936332885);
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 368099;
        rectangle_1.fillAlpha = 0.5;

        // lists
        const sort = [fg];

        // rectangle_1 (components)
        new Zone(rectangle_1);
        new MoveTo(rectangle_1);

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
