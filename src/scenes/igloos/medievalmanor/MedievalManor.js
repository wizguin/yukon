import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class MedievalManor extends IglooScene {

    constructor() {
        super("MedievalManor");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [108, 472]
        this.wallSpawn = [1040, 250]
        this.wallBounds = [610, 960]
        this.floorFrame = 15

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("medievalmanor-igloo-pack", "assets/media/igloos/buildings/sprites/medievalmanor/medievalmanor-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "medievalmanor-igloo", "bg");

        // bg_upper
        this.add.image(760, 480, "medievalmanor-igloo", "bg-upper");

        // fg
        const fg = this.add.image(760, 980.486100501291, "medievalmanor-igloo", "fg");
        fg.setOrigin(0.5, 1.0213396880221781);

        // lists
        const sort = [fg];

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
