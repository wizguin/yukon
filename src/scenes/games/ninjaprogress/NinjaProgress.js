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
        this.bar;
        /** @type {Phaser.GameObjects.Text} */
        this.progressText;
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

        // progressBg
        const progressBg = scene.add.image(0, 0, "ninjaprogress", "progress");
        this.add(progressBg);

        // nextBelt
        const nextBelt = scene.add.image(436, 27, "ninjaprogress", "next/1");
        nextBelt.setOrigin(0.5042735042735043, 0.5052631578947369);
        this.add(nextBelt);

        // currentBelt
        const currentBelt = scene.add.image(-399, 66, "ninjaprogress", "belt/1");
        currentBelt.setOrigin(0.502262443438914, 0.5);
        this.add(currentBelt);

        // nextText
        const nextText = scene.add.text(244, -42, "", {});
        nextText.setOrigin(0.5, 1);
        nextText.text = "Next Belt";
        nextText.setStyle({ "align": "right", "color": "#333", "fixedWidth":500,"fontFamily": "Burbank Small", "fontSize": "26px", "fontStyle": "bold" });
        this.add(nextText);

        // currentText
        const currentText = scene.add.text(-256, -42, "", {});
        currentText.setOrigin(0.5, 1);
        currentText.text = "Current Belt";
        currentText.setStyle({ "color": "#333", "fixedWidth":500,"fontFamily": "Burbank Small", "fontSize": "32px", "fontStyle": "bold" });
        this.add(currentText);

        // bar
        const bar = scene.add.image(46, 7, "ninjaprogress", "progress/1");
        bar.setOrigin(0.5008347245409015, 0.5);
        this.add(bar);

        // progressText
        const progressText = scene.add.text(-192, 8, "", {});
        progressText.setOrigin(1, 0.5);
        progressText.visible = false;
        progressText.text = "0%";
        progressText.setStyle({ "align": "right", "color": "#333", "fixedWidth":80,"fontFamily": "Burbank Small", "fontSize": "28px", "fontStyle": "bold" });
        this.add(progressText);

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

        this.nextBelt = nextBelt;
        this.currentBelt = currentBelt;
        this.bar = bar;
        this.progressText = progressText;
        this.separator = separator;

        /* START-USER-CTR-CODE */

        this.progressStartX = this.progressText.x

        this.setRank(5)
        this.setProgress(50)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setRank(rank) {
        this.setCurrentBelt(rank)
        this.setNextBelt(rank)
    }

    setCurrentBelt(rank) {
        this.currentBelt.setFrame(`belt/${rank}`)
    }

    setNextBelt(rank) {
        this.nextBelt.setFrame(`next/${rank + 1}`)
    }

    setProgress(progress) {
        progress = Phaser.Math.Clamp(progress, 1, 100)

        this.bar.setFrame(`progress/${progress}`)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
