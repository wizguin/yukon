import IglooScene from '../IglooScene'
import {SimpleButton, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class GingerbreadHouse extends IglooScene {

    constructor() {
        super("GingerbreadHouse");

        /** @type {Phaser.GameObjects.Image} */
        this.door;
        /** @type {Phaser.GameObjects.Container} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [754, 696]
        this.wallSpawn = [804, 472]
        this.wallBounds = [510, 1044]
        this.floorFrame = 11

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("gingerbreadhouse-igloo-pack", "assets/media/igloos/buildings/sprites/gingerbreadhouse/gingerbreadhouse-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.container(643, 480);

        // bg_lower
        const bg_lower = this.add.image(117, 0, "gingerbreadhouse-igloo", "bg-lower");
        floor.add(bg_lower);

        // door
        const door = this.add.image(0, 72, "gingerbreadhouse-igloo", "door");
        floor.add(door);

        // bg_upper
        const bg_upper = this.add.image(117, 0, "gingerbreadhouse-igloo", "bg-upper");
        floor.add(bg_upper);

        // fg
        const fg = this.add.image(760, 981.0723668360147, "gingerbreadhouse-igloo", "fg");
        fg.setOrigin(0.5, 1.0219504065289033);

        // lists
        const sort = [fg];

        // door (components)
        const doorSimpleButton = new SimpleButton(door);
        doorSimpleButton.hoverCallback = () => {this.door.alpha = 0.01};
        doorSimpleButton.hoverOutCallback = () => {this.door.alpha = 1};
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 596;
        doorMoveTo.y = 596;

        this.door = door;
        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
