import IglooScene from '../IglooScene'
import {SimpleButton, MoveTo} from '@components/components'

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

        // fg
        const fg = this.add.image(760, 962.2032731464075, "sharksgym-igloo", "fg");
        fg.setOrigin(0.5, 1.0022950761941745);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(204.70242562990978, 730.9859953942396, 128, 300);
        rectangle_1.angle = -11;
        rectangle_1.setOrigin(0.3991374119784773, 0.6987264098703221);

        // lists
        const sort = [fg];

        // rectangle_1 (components)
        new SimpleButton(rectangle_1);
        new MoveTo(rectangle_1);

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
