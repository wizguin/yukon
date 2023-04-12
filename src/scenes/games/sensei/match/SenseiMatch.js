/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import DraggableContainer from "../../../components/DraggableContainer";
import SenseiMatchItem from "./SenseiMatchItem";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SenseiMatch extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // bg
        const bg = scene.add.image(0, 0, "sensei", "match/window");
        this.add(bg);

        // item2
        const item2 = new SenseiMatchItem(scene, 0, 46);
        this.add(item2);

        // item1
        const item1 = new SenseiMatchItem(scene, 2, 98);
        this.add(item1);

        // text_1
        const text_1 = scene.add.text(0, -20, "", {});
        text_1.setOrigin(0.5, 0.5);
        text_1.text = "Waiting for more players";
        text_1.setStyle({ "align": "center", "fixedWidth":460,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(text_1);

        // spinner
        const spinner = scene.add.image(0, -100, "sensei", "match/spinner");
        spinner.setOrigin(0.5, 0.5063291139240507);
        spinner.visible = false;
        this.add(spinner);

        // xButton
        const xButton = scene.add.image(234, -124, "main", "blue-button");
        this.add(xButton);

        // xIcon
        const xIcon = scene.add.image(234, -126, "main", "blue-x");
        this.add(xIcon);

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = bg;

        // xButton (components)
        const xButtonButton = new Button(xButton);
        xButtonButton.spriteName = "blue-button";
        xButtonButton.callback = () => this.close();

        /* START-USER-CTR-CODE */

        // Spinner
        scene.tweens.add({
            targets: spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        this.originalX = this.x
        this.originalY = this.y

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    show() {
        this.x = this.originalX
        this.y = this.originalY

        super.show()
    }

    close() {
        super.close()

        this.scene.showMenu('start')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
