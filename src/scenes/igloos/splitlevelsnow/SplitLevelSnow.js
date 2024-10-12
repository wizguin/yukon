import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class SplitLevelSnow extends IglooScene {

    constructor() {
        super("SplitLevelSnow");

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

        this.load.pack("splitlevelsnow-igloo-pack", "assets/media/igloos/buildings/sprites/splitlevelsnow/splitlevelsnow-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "splitlevelsnow-igloo", "bg-lower");

        // bg_upper
        this.add.image(760, 480, "splitlevelsnow-igloo", "bg-upper");

        // door
        const door = this.add.image(241.45671992302226, 626.6936246395865, "splitlevelsnow-igloo", "door");
        door.setOrigin(0.5223338174820206, 0.8140467215513906);

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
