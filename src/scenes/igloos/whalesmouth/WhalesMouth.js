import IglooScene from '../IglooScene'
import {Button, MoveTo, LocalisedSprite} from '@components/components'

/* START OF COMPILED CODE */

export default class WhalesMouth extends IglooScene {

    constructor() {
        super("WhalesMouth");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [880, 700]
        this.wallSpawn = [568, 246]
        this.wallBounds = [360, 1140]
        this.floorFrame = 15

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("whalesmouth-igloo-pack", "assets/media/igloos/buildings/sprites/whalesmouth/whalesmouth-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "whalesmouth-igloo", "bg");

        // exit_en
        this.add.image(740, 316, "whalesmouth-igloo", "exit-en");

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
