export const preload = {
    key: 'missions-pack',
    url: 'assets/media/interface/agent/missions/missions-pack.json',
    loadString: 'missions'
}

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Missions extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.setOrigin(0, 0);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.rectangle(764, 455, 1200, 750);
        bg.isFilled = true;
        bg.fillColor = 13056;
        this.add(bg);

        // frame
        const frame = scene.add.image(764, 455, "missions", "frame");
        frame.setOrigin(0.5003385240352065, 0.5005959475566151);
        this.add(frame);

        // block (components)
        new Interactive(block);

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
