import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class SnowyBackyard extends IglooScene {

    constructor() {
        super("SnowyBackyard");

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

        this.load.pack("snowybackyard-igloo-pack", "assets/media/igloos/buildings/sprites/snowybackyard/snowybackyard-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "snowybackyard-igloo", "bg");

        // door
        const door = this.add.image(680, 318, "snowybackyard-igloo", "door");
        door.setOrigin(0.4387755102040816, 0.8557692307692307);

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";;
        new MoveTo(door);

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
