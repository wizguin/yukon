import InterfaceScene from '@scenes/interface/InterfaceScene'


/* START OF COMPILED CODE */

class Load extends InterfaceScene {

    constructor() {
        super("Load");

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    create() {

        // bg
        const bg = this.add.image(0, 0, "load", "bg");
        bg.setOrigin(0, 0);
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Load
