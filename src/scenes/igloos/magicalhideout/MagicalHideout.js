import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class MagicalHideout extends IglooScene {

    constructor() {
        super("MagicalHideout");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [720, 720]
        this.wallSpawn = [860, 320]
        this.wallBounds = [520, 1200]
        this.floorFrame = 16

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("magicalhideout-igloo-pack", "assets/media/igloos/buildings/sprites/magicalhideout/magicalhideout-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(760, 480, "magicalhideout-igloo", "bg");

        // fg
        const fg = this.add.image(760, 999.630172000273, "magicalhideout-igloo", "fg");
        fg.setOrigin(0.5, 1.041281429166951);

        // lists
        const sort = [fg];

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
