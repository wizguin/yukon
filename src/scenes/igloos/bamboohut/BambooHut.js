import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'


/* START OF COMPILED CODE */

export default class BambooHut extends IglooScene {

    constructor() {
        super("BambooHut");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            triggers: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [520, 1050]
        this.floorFrame = 4

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("bamboohut-pack", "assets/media/igloos/buildings/sprites/bamboohut/bamboohut-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(769, 691, "bamboohut", "floor");
        floor.setOrigin(0.5004468275245755, 0.5017421602787456);

        // door
        const door = this.add.image(428, 591, "bamboohut", "door");
        door.setOrigin(0.5494505494505495, 0.9301470588235294);

        // wall
        const wall = this.add.image(760, 402, "bamboohut", "wall");
        wall.setOrigin(0.5004101722723544, 0.5);

        // door (components)
        new MoveTo(door);
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
