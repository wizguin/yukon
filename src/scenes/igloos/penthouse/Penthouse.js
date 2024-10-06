import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class Penthouse extends IglooScene {

    constructor() {
        super("Penthouse");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [490, 600]
        this.wallSpawn = [680, 150]
        this.wallBounds = [490, 1330]
        this.floorFrame = 16

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("penthouse-igloo-pack", "assets/media/igloos/buildings/sprites/penthouse/penthouse-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "penthouse-igloo", "bg");

        // fg
        const fg = this.add.image(760, 964.9881605335881, "penthouse-igloo", "fg");
        fg.setOrigin(0.5, 1.005196000555821);

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
