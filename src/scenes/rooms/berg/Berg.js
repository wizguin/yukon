import RoomScene from '../RoomScene'


/* START OF COMPILED CODE */

class Berg extends RoomScene {

    constructor() {
        super("Berg");

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    preload() {

        this.load.pack("berg-pack", "assets/media/rooms/berg/berg-pack.json");
    }

    _create() {

        // bg
        const bg = this.add.image(-18, -18, "berg", "bg");
        bg.setOrigin(0, 0);

        // aqua0001
        const aqua0001 = this.add.image(1255, 325, "berg", "aqua0001");
        aqua0001.setOrigin(0.5, 0.4014336917562724);
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Berg
