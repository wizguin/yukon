import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class MermaidCove extends IglooScene {

    constructor() {
        super("MermaidCove");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [616, 512]
        this.wallSpawn = [850, 216]
        this.wallBounds = [260, 1140]
        this.floorFrame = 14

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("mermaidcove-igloo-pack", "assets/media/igloos/buildings/sprites/mermaidcove/mermaidcove-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "mermaidcove-igloo", "bg");

        // bridge
        const bridge = this.add.image(478.71526559673634, 686.5007154026904, "mermaidcove-igloo", "bridge");
        bridge.setOrigin(0.5517666298233039, 0.09254678465999935);

        // lists
        const sort = [bridge];

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
