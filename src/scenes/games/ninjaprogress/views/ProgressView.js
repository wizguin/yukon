/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ProgressView extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.cardsNum;
        /** @type {Phaser.GameObjects.Image} */
        this.nextBelt;
        /** @type {Phaser.GameObjects.Image} */
        this.currentBelt;
        /** @type {Phaser.GameObjects.Text} */
        this.nextText;
        /** @type {Phaser.GameObjects.Text} */
        this.currentText;
        /** @type {Phaser.GameObjects.Image} */
        this.bar;
        /** @type {Phaser.GameObjects.Text} */
        this.progressText;
        /** @type {Phaser.GameObjects.Container} */
        this.sensei;
        /** @type {Phaser.GameObjects.Container} */
        this.hideout;


        // cardsButton
        const cardsButton = scene.add.image(0, 254, "ninjaprogress", "button");
        cardsButton.setOrigin(0.5, 0.5060240963855421);
        this.add(cardsButton);

        // cards
        const cards = scene.add.image(68, 245, "ninjaprogress", "cards");
        this.add(cards);

        // cardsNum
        const cardsNum = scene.add.text(64, 248, "", {});
        cardsNum.setOrigin(0.5, 0.5);
        cardsNum.text = "0";
        cardsNum.setStyle({ "align": "center", "fixedWidth":100,"fontFamily": "Burbank Big Regular", "fontSize": "48px", "fontStyle": "bold", "stroke": "#000", "strokeThickness":8,"shadow.blur":2,"shadow.stroke":true,"shadow.fill":true});
        this.add(cardsNum);

        // cardsText
        const cardsText = scene.add.text(-81, 254, "", {});
        cardsText.setOrigin(0.5, 0.5);
        cardsText.text = "VIEW YOUR\nCARDS";
        cardsText.setStyle({ "align": "center", "color": "#736357", "fixedWidth":140,"fontFamily": "CCFaceFront", "fontSize": "20px", "fontStyle": "bold italic" });
        this.add(cardsText);

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

        // sensei
        const sensei = scene.add.container(12, -14);
        sensei.visible = false;
        this.add(sensei);

        // senseiImage
        const senseiImage = scene.add.image(116, 0, "ninjaprogress", "sensei");
        senseiImage.setOrigin(0.5, 0.5023255813953489);
        sensei.add(senseiImage);

        // senseiText
        const senseiText = scene.add.text(0, 20, "", {});
        senseiText.setOrigin(0.5, 0.5);
        senseiText.text = "Well done, grasshopper. You have earned your\nblack belt. Take the next step of your training\njourney and challenge Sensei to become a ninja.";
        senseiText.setStyle({ "align": "center", "color": "#333", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "26px" });
        senseiText.setLineSpacing(8);
        sensei.add(senseiText);

        // hideout
        const hideout = scene.add.container(-26, -6);
        hideout.visible = false;
        this.add(hideout);

        // hideoutImage
        const hideoutImage = scene.add.image(0, 0, "ninjaprogress", "hideout");
        hideout.add(hideoutImage);

        // hideoutText
        const hideoutText = scene.add.text(132, 10, "", {});
        hideoutText.setOrigin(0.5, 0.5);
        hideoutText.text = "Congratulations, ninja! You are a wise Card-Jitsu\nmaster and you now have access to the Ninja Hideout.";
        hideoutText.setStyle({ "align": "center", "color": "#333", "fixedWidth":800,"fontFamily": "Burbank Small", "fontSize": "26px" });
        hideoutText.setLineSpacing(8);
        hideout.add(hideoutText);

        // cardsButton (components)
        const cardsButtonButton = new Button(cardsButton);
        cardsButtonButton.spriteName = "button";
        cardsButtonButton.callback = () => this.onButtonClick();

        this.cardsNum = cardsNum;
        this.nextBelt = nextBelt;
        this.currentBelt = currentBelt;
        this.nextText = nextText;
        this.currentText = currentText;
        this.bar = bar;
        this.progressText = progressText;
        this.sensei = sensei;
        this.hideout = hideout;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(rank, progress) {
        this.setRank(rank)
        this.setProgress(progress)

        super.show()
    }

    setRank(rank) {
        this.setVisibleElements(rank)
        this.setCurrentBelt(rank)
        this.setNextBelt(rank)
    }

    setCurrentBelt(rank) {
        this.currentBelt.alpha = rank > 0 ? 1 : 0.25

        rank = Phaser.Math.Clamp(rank, 1, 9)

        this.currentBelt.setFrame(`belt/${rank}`)
    }

    setNextBelt(rank) {
        rank = Phaser.Math.Clamp(rank + 1, 1, 9)

        this.nextBelt.setFrame(`next/${rank}`)
    }

    setProgress(progress) {
        progress = Phaser.Math.Clamp(progress, 1, 100)

        this.bar.setFrame(`progress/${progress}`)
    }

    setCardsNum(num) {
        this.cardsNum.text = num
    }

    setVisibleElements(rank) {
        let nextVisible = rank < 9
        let senseiVisible = rank == 9
        let ninjaVisible = rank == 10

        this.bar.visible = nextVisible
        this.nextText.visible = nextVisible
        this.nextBelt.visible = nextVisible

        this.sensei.visible = senseiVisible
        this.hideout.visible = ninjaVisible

        this.currentText.visible = !ninjaVisible
        this.currentBelt.visible = !ninjaVisible
    }

    onButtonClick() {
        this.parentContainer.separator.onClick()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
