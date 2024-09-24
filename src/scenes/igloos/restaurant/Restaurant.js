import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class Restaurant extends IglooScene {

    constructor() {
        super("Restaurant");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 780]
        this.wallSpawn = [760, 480]
        this.wallBounds = [410, 1110]
        this.floorFrame = 12

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("restaurant-igloo-pack", "assets/media/igloos/buildings/sprites/restaurant/restaurant-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "restaurant-igloo", "bg");

        // door
        const door = this.add.image(284.95653595912785, 620.56131911667, "restaurant-igloo", "door");
        door.setOrigin(0.589335999796656, 0.6799509688101575);

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
