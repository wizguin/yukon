import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class BluePuffleTreeHouse extends IglooScene {

    constructor() {
        super("BluePuffleTreeHouse");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [580, 634]
        this.wallSpawn = [1040, 250]
        this.wallBounds = [460, 1060]
        this.floorFrame = 15

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("bluepuffletreehouse-igloo-pack", "assets/media/igloos/buildings/sprites/bluepuffletreehouse/bluepuffletreehouse-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "bluepuffletreehouse-igloo", "bg");

        // fg
        const fg = this.add.image(760, 952.1090928832191, "bluepuffletreehouse-igloo", "fg");
        fg.setOrigin(0.5, 0.9917803245687947);

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
