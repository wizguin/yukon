import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class TrainStation extends IglooScene {

    constructor() {
        super("TrainStation");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [500, 700]
        this.wallSpawn = [854, 190]
        this.wallBounds = [420, 1260]
        this.floorFrame = 16

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("trainstation-igloo-pack", "assets/media/igloos/buildings/sprites/trainstation/trainstation-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "trainstation-igloo", "bg-lower");

        // door
        const door = this.add.image(213.32162953120633, 533.8495897445486, "trainstation-igloo", "door");
        door.setOrigin(0.3490670182286467, 0.7170441225472356);

        // bg_upper
        this.add.image(760, 480, "trainstation-igloo", "bg-upper");

        // fg
        const fg = this.add.image(760, 962.2032731464072, "trainstation-igloo", "fg");
        fg.setOrigin(0.5, 1.0022950761941742);

        // lists
        const sort = [fg];

        // door (components)
        new MoveTo(door);
        const doorButton = new Button(door);
        doorButton.spriteName = "door";;

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
