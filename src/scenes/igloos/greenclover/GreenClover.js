import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class GreenClover extends IglooScene {

    constructor() {
        super("GreenClover");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [1080, 490]
        this.wallSpawn = [970, 200]
        this.wallBounds = [410, 1110]
        this.floorFrame = 3

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("greenclover-igloo-pack", "assets/media/igloos/buildings/sprites/greenclover/greenclover-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "greenclover-igloo", "bg");

        // door
        const door = this.add.image(685.3360133153067, 316.0552770686766, "greenclover-igloo", "door");
        door.setOrigin(0.43425859398167804, 0.8752657551378683);

        // door (components)
        new Button(door);
        new MoveTo(door);

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
