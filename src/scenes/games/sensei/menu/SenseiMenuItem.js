/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SenseiMenuItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {Phaser.GameObjects.Image} */
        this.icon;


        // item
        const item = scene.add.image(0, 0, "sensei", "menu/item-hover");
        this.add(item);

        // text
        const text = scene.add.text(0, 0, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "This is a menu item!";
        text.setStyle({ "color": "#000", "fixedWidth":720,"fontFamily": "CCComiccrazy", "fontSize": "26px" });
        this.add(text);

        // icon
        const icon = scene.add.image(-342, 0, "sensei", "menu/icon/belt");
        icon.setOrigin(0.5106382978723404, 0.5106382978723404);
        icon.visible = false;
        this.add(icon);

        // item (components)
        const itemButton = new Button(item);
        itemButton.spriteName = "menu/item";
        itemButton.callback = () => this.onClick();
        itemButton.activeFrame = false;

        this.text = text;
        this.icon = icon;

        /* START-USER-CTR-CODE */

        this.callback

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(config) {
        this.text.text = config.text

        this.callback = config.callback

        if (config.icon) {
            this.showIcon(config.icon)
        } else {
            this.hideIcon()
        }

        super.show()
    }

    showIcon(icon) {
        this.icon.visible = true
        this.icon.setFrame(icon)

        this.text.x = 50
    }

    hideIcon() {
        this.icon.visible = false

        this.text.x = 0
    }

    onClick() {
        if (this.callback) {
            this.callback()
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
