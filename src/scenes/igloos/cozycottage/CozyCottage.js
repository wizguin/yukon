import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class CozyCottage extends IglooScene {

    constructor() {
        super("CozyCottage");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            triggers: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [656, 614]
        this.wallSpawn = [672, 266]
        this.wallBounds = [510, 874]
        this.floorFrame = 13

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cozycottage-igloo-pack", "assets/media/igloos/buildings/sprites/cozycottage/cozycottage-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "cozycottage-igloo", "bg");

        // door
        const door = this.add.image(228.4616230389906, 375.3638818594334, "cozycottage-igloo", "door");
        door.setOrigin(0.5335068898097584, 0.9320638809646956);

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
