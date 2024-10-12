import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class DragonsLair extends IglooScene {

    constructor() {
        super("DragonsLair");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 800]
        this.wallSpawn = [760, 430]
        this.wallBounds = [420, 1100]
        this.floorFrame = 8

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dragonslair-igloo-pack", "assets/media/igloos/buildings/sprites/dragonslair/dragonslair-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "dragonslair-igloo", "bg-lower-lower");

        // bg_lower_upper
        this.add.image(760, 480, "dragonslair-igloo", "bg-lower-upper");

        // bg_upper
        this.add.image(760, 656, "dragonslair-igloo", "bg-upper");

        // door
        const door = this.add.image(758, 674, "dragonslair-igloo", "door");
        door.setOrigin(0.48402590063732504, 1.006368509208996);

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        new MoveTo(door);

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
