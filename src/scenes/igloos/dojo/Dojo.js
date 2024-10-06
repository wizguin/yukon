import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class Dojo extends IglooScene {

    constructor() {
        super("Dojo");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [758, 724]
        this.wallSpawn = [756, 506]
        this.wallBounds = [416, 1100]
        this.floorFrame = 5

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dojo-igloo-pack", "assets/media/igloos/buildings/sprites/dojo/dojo-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "dojo-igloo", "bg");

        // door
        const door = this.add.image(521.9537353515625, 607.684457871213, "dojo-igloo", "door");
        door.setOrigin(0.48974231971909804, 0.8447979348966812);

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
