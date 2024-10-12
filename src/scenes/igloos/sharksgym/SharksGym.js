import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class SharksGym extends IglooScene {

    constructor() {
        super("SharksGym");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 800]
        this.wallSpawn = [760, 430]
        this.wallBounds = [340, 1200]
        this.floorFrame = 16

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("sharksgym-igloo-pack", "assets/media/igloos/buildings/sprites/sharksgym/sharksgym-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "sharksgym-igloo", "bg");

        // door
        const door = this.add.image(211, 754, "sharksgym-igloo", "door");
        door.setOrigin(0.6614634532434245, 0.7539283342233536);

        // bg-upper
        this.add.image(746, 712, "sharksgym-igloo", "bg-upper");

        // fg
        const fg = this.add.image(760, 962.2032731464075, "sharksgym-igloo", "fg");
        fg.setOrigin(0.5, 1.0022950761941745);

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
