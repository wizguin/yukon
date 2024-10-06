import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class CreepyCavern extends IglooScene {

    constructor() {
        super("CreepyCavern");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [720, 720]
        this.wallSpawn = [720, 720]
        this.wallBounds = [400, 340]
        this.floorFrame = 16

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("creepycavern-igloo-pack", "assets/media/igloos/buildings/sprites/creepycavern/creepycavern-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "creepycavern-igloo", "bg-lower");

        // door
        const door = this.add.image(687, 416, "creepycavern-igloo", "door");
        door.setOrigin(0.5228700011111012, 0.7960958252944188);

        // bg_upper
        this.add.image(760, 480, "creepycavern-igloo", "bg-upper");

        // fg
        const fg = this.add.image(760, 1016.4177455978373, "creepycavern-igloo", "fg");
        fg.setOrigin(0.5, 1.0587684849977472);

        // lists
        const sort = [fg];

        // door (components)
        new MoveTo(door);
        const doorButton = new Button(door);
        doorButton.spriteName = "door";

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
