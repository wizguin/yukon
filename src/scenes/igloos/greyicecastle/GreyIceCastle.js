import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class GreyIceCastle extends IglooScene {

    constructor() {
        super("GreyIceCastle");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 800]
        this.wallSpawn = [760, 430]
        this.wallBounds = [4420, 1100]
        this.floorFrame = 8

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("greyicecastle-igloo-pack", "assets/media/igloos/buildings/sprites/greyicecastle/greyicecastle-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "greyicecastle-igloo", "bg-upper");

        // door
        const door = this.add.image(757.8242352528688, 635.7270575860633, "greyicecastle-igloo", "door");
        door.setOrigin(0.5148643960677305, 0.9344977312105811);

        // door (components)
        new MoveTo(door);
        new Button(door);

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
