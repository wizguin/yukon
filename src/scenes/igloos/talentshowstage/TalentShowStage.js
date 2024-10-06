import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class TalentShowStage extends IglooScene {

    constructor() {
        super("TalentShowStage");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 740]
        this.wallSpawn = [760, 320]
        this.wallBounds = [470, 1050]
        this.floorFrame = 15

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("talentshowstage-igloo-pack", "assets/media/igloos/buildings/sprites/talentshowstage/talentshowstage-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "talentshowstage-igloo", "bg");

        // fg
        const fg = this.add.image(760, 966.8674310998953, "talentshowstage-igloo", "fg");
        fg.setOrigin(0.5, 1.007153574062391);

        // lists
        const sort = [fg];

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
