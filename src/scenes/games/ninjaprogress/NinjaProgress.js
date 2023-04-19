export const preload = {
    key: 'ninjaprogress-pack',
    url: 'assets/media/games/ninjaprogress/ninjaprogress-pack.json',
    loadString: ['loading', 'ninjaprogress']
}

/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Interactive from "../../components/Interactive";
import ProgressView from "./ProgressView";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class NinjaProgress extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {ProgressView} */
        this.progress;
        /** @type {Phaser.GameObjects.Container} */
        this.separator;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.image(0, 51, "ninjaprogress", "bg");
        this.add(bg);

        // progress
        const progress = new ProgressView(scene, 0, 0);
        this.add(progress);

        // frame2
        const frame2 = scene.add.image(0, -2, "ninjaprogress", "frame/2");
        frame2.setOrigin(0.500374531835206, 0.5);
        this.add(frame2);

        // separator
        const separator = scene.add.container(-20, -217);
        this.add(separator);

        // sep
        const sep = scene.add.image(18, 0, "ninjaprogress", "separator/separator");
        separator.add(sep);

        // arrow
        const arrow = scene.add.image(0, 9, "ninjaprogress", "separator/arrow");
        arrow.setOrigin(0.5, 0.5454545454545454);
        separator.add(arrow);

        // frame1
        const frame1 = scene.add.image(2, 23, "ninjaprogress", "frame/1");
        this.add(frame1);

        // xButton
        const xButton = scene.add.image(541, -305, "ninjaprogress", "close");
        this.add(xButton);

        // block (components)
        new Interactive(block);

        // xButton (components)
        const xButtonButton = new Button(xButton);
        xButtonButton.spriteName = "close";
        xButtonButton.callback = () => this.close();

        this.progress = progress;
        this.separator = separator;

        /* START-USER-CTR-CODE */

        window.test = (rank, progress) => {
            this.progress.show(rank, progress)
        }

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
