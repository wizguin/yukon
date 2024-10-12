import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class FrostBitePalace extends IglooScene {

    constructor() {
        super("FrostBitePalace");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image} */
        this.bg_upper;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [720, 720]
        this.wallSpawn = [400, 340]
        this.wallBounds = [480, 940]
        this.floorFrame = 16

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("frostbitepalace-igloo-pack", "assets/media/igloos/buildings/sprites/frostbitepalace/frostbitepalace-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // door
        const door = this.add.image(221, 660, "frostbitepalace-igloo", "door");
        door.setOrigin(0.6926380709927753, 0.7975277914128519);

        // floor
        const floor = this.add.image(760, 480, "frostbitepalace-igloo", "bg");

        // bg_upper
        const bg_upper = this.add.image(760, 480, "frostbitepalace-igloo", "bg-upper");

        // fg
        const fg = this.add.image(760, 970.3177007592319, "frostbitepalace-igloo", "fg");
        fg.setOrigin(0.5, 1.0107476049575332);

        // lists
        const sort = [fg];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        new MoveTo(door);

        this.floor = floor;
        this.bg_upper = bg_upper;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
