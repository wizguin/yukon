/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import SimpleButton from "../../../../components/SimpleButton";
/* START-USER-IMPORTS */

const overColor = 0x016D01
const outColor = 0x003300

/* END-USER-IMPORTS */

export default class MissionButton extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.button;
        /** @type {Phaser.GameObjects.Text} */
        this.title;


        // button
        const button = scene.add.rectangle(0, 0, 562, 100);
        button.setOrigin(0, 0);
        button.isFilled = true;
        button.fillColor = 13056;
        this.add(button);

        // separator
        const separator = scene.add.image(261.2, -1, "missions", "separator");
        separator.setOrigin(0.5009671179883946, 0.5);
        this.add(separator);

        // title
        const title = scene.add.text(22, 13, "", {});
        title.text = "text";
        title.setStyle({ "color": "#e0ffcc", "fixedWidth":338,"fontFamily": "CPLCD", "fontSize": "38px" });
        title.setLineSpacing(-4);
        title.setWordWrapWidth(338);
        this.add(title);

        // button (components)
        const buttonSimpleButton = new SimpleButton(button);
        buttonSimpleButton.hoverCallback = () => this.onOver();
        buttonSimpleButton.hoverOutCallback = () => this.onOut();
        buttonSimpleButton.callback = () => this.onClick();

        this.button = button;
        this.title = title;

        /* START-USER-CTR-CODE */

        this.callback = () => {}

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onOver() {
        this.button.setFillStyle(overColor)
    }

    onOut() {
        this.button.setFillStyle(outColor)
    }

    onClick() {
        this.soundManager.play('switch')
        this.callback()
    }

    setMission(mission) {
        this.title.text = mission.title
    }

    setCallback(callback) {
        this.callback = callback
    }

    setActive(active) {
        if (active) {
            this.button.setInteractive()

        } else {
            this.button.disableInteractive()
            this.button.emit('pointerout')
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
