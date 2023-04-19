export const preload = {
    key: 'ninjaprogress-pack',
    url: 'assets/media/games/ninjaprogress/ninjaprogress-pack.json',
    loadString: ['loading', 'ninjaprogress']
}

/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Interactive from "../../components/Interactive";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class NinjaProgress extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.nextBelt;
        /** @type {Phaser.GameObjects.Image} */
        this.currentBelt;
        /** @type {Phaser.GameObjects.Image} */
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

        // button
        const button = scene.add.image(0, 23, "ninjaprogress", "button");
        button.setOrigin(0.5, 0.5060240963855421);
        this.add(button);

        // cards
        const cards = scene.add.image(0, 23, "ninjaprogress", "cards");
        this.add(cards);

        // nextBelt
        const nextBelt = scene.add.image(0, 23, "ninjaprogress", "next/1");
        nextBelt.setOrigin(0.5042735042735043, 0.5052631578947369);
        nextBelt.visible = false;
        this.add(nextBelt);

        // currentBelt
        const currentBelt = scene.add.image(0, 23, "ninjaprogress", "belt/1");
        currentBelt.setOrigin(0.502262443438914, 0.5);
        currentBelt.visible = false;
        this.add(currentBelt);

        // progressBg
        const progressBg = scene.add.image(0, 0, "ninjaprogress", "progress");
        this.add(progressBg);

        // progress
        const progress = scene.add.image(0, 7, "ninjaprogress", "progress/1");
        progress.setOrigin(0.5008347245409015, 0.5);
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

        this.nextBelt = nextBelt;
        this.currentBelt = currentBelt;
        this.progress = progress;
        this.separator = separator;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
