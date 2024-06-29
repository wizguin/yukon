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

        // lightGreen
        const lightGreen = scene.add.sprite(221, 820, "missions", "light/green/green0001");
        lightGreen.setOrigin(0.5121951219512195, 0.5121951219512195);
        lightGreen.play("light_green");
        this.add(lightGreen);

        // lightRed
        const lightRed = scene.add.sprite(172, 821, "missions", "light/red/red0001");
        lightRed.setOrigin(0.5121951219512195, 0.5121951219512195);
        lightRed.play("light_red");
        this.add(lightRed);

        // closeButton
        const closeButton = scene.add.image(1361, 83, "missions", "close_button");
        this.add(closeButton);


        // block (components)
        new Interactive(block);

        // closeButton (components)
        const closeButtonButton = new Button(closeButton);
        closeButtonButton.spriteName = "close_button";
        closeButtonButton.callback = () => this.close();

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
