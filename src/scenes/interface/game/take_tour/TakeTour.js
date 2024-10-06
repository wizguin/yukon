export const preload = {
    key: 'take_tour-pack',
    url: 'assets/media/interface/game/take_tour/take_tour-pack.json',
    loadString: 'take_tour'
}

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import SimpleButton from "../../../components/SimpleButton";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TakeTour extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? -1, y ?? 0);

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.setOrigin(0, 0);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // button
        const button = scene.add.image(461, 744, "take_tour", "button");
        button.setOrigin(0, 0);
        this.add(button);

        // bg
        const bg = scene.add.image(0, 0, "take_tour", "bg");
        bg.setOrigin(0, 0);
        this.add(bg);

        // closeButton
        const closeButton = scene.add.container(1100, 94);
        this.add(closeButton);

        // greyBbutton
        const greyBbutton = scene.add.image(0, 2, "main", "grey-button");
        closeButton.add(greyBbutton);

        // greyX
        const greyX = scene.add.image(0, 0, "main", "grey-x");
        closeButton.add(greyX);

        // block (components)
        new Interactive(block);

        // button (components)
        const buttonSimpleButton = new SimpleButton(button);
        buttonSimpleButton.callback = () => this.onButtonClick();

        // greyBbutton (components)
        const greyBbuttonButton = new Button(greyBbutton);
        greyBbuttonButton.spriteName = "grey-button";
        greyBbuttonButton.callback = () => this.close();

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    onButtonClick() {
        this.close()
        this.interface.loadWidget('TourQuiz')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
