/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CardJitsuHint extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.icon;
        /** @type {Phaser.GameObjects.Text} */
        this.description;


        // hint
        const hint = scene.add.image(0, 0, "cardjitsu", "card/hint");
        this.add(hint);

        // icon
        const icon = scene.add.image(0, -87, "cardjitsu", "card/power/1");
        icon.setOrigin(0.5, 0.5135135135135135);
        this.add(icon);

        // description
        const description = scene.add.text(0, 0, "", {});
        description.setOrigin(0.5, 0.5);
        description.setStyle({ "align": "center", "color": "#000", "fixedWidth":300,"fixedHeight":130,"fontFamily": "CCComiccrazy", "fontSize": "24px", "fontStyle": "bold" });
        description.setLineSpacing(1);
        description.setWordWrapWidth(300, true);
        this.add(description);

        this.icon = icon;
        this.description = description;

        /* START-USER-CTR-CODE */

        this.description.setResolution(1)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        this.icon.setFrame(`card/power/${this.parentContainer.powerId}`)

        this.description.text = this.parentContainer.description

        super.show()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
