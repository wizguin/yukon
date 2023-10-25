export const preload = {
    key: 'ninjainstructions-pack',
    url: 'assets/media/interface/instructions/ninjainstructions/ninjainstructions-pack.json',
    loadString: ['loading', 'ninjainstructions']
}

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class NinjaInstructions extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.image(0, -24, "ninjainstructions", "bg");
        this.add(bg);

        // close
        const close = scene.add.image(216, -399, "ninjainstructions", "close");
        this.add(close);

        // block (components)
        new Interactive(block);

        // close (components)
        const closeButton = new Button(close);
        closeButton.spriteName = "close";
        closeButton.callback = () => this.close();

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
