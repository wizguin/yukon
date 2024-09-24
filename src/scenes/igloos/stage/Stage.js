import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class Stage extends IglooScene {

    constructor() {
        super("Stage");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 500]
        this.wallSpawn = [740, 140]
        this.wallBounds = [470, 1050]
        this.floorFrame = 15

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("stage-igloo-pack", "assets/media/igloos/buildings/sprites/stage/stage-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "stage-igloo", "bg-lower");

        // door
        const door = this.add.image(137.6561528740181, 636.5712463139853, "stage-igloo", "door");
        door.setOrigin(0.6593060095001967, 0.717075180914005);

        // bg_upper
        this.add.image(760, 480, "stage-igloo", "bg-upper");

        // fg
        const fg = this.add.image(760, 964.4392818771167, "stage-igloo", "fg");
        fg.setOrigin(0.5, 1.00462425195533);

        // lists
        const sort = [fg];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        new MoveTo(door);

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
