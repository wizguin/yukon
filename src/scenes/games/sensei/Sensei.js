export const preload = {
    key: 'sensei-pack',
    url: 'assets/media/games/sensei/sensei-pack.json',
    loadString: ['loading', 'sensei']
}

/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import SenseiSprite from "./SenseiSprite";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Sensei extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 409, y ?? 350);

        /** @type {SenseiSprite} */
        this.sensei;


        // bg
        const bg = scene.add.image(189, 212, "sensei", "bg");
        this.add(bg);

        // sensei
        const sensei = new SenseiSprite(scene, -189, 11);
        this.add(sensei);

        this.sensei = sensei;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
