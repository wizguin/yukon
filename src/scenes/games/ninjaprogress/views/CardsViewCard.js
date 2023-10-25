/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
/* START-USER-IMPORTS */

import layout from '@scenes/games/card/layout'

/* END-USER-IMPORTS */

export default class CardsViewCard extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Sprite} */
        this.glow;
        /** @type {Phaser.GameObjects.Image} */
        this.back;
        /** @type {Phaser.GameObjects.Image} */
        this.icon;
        /** @type {Phaser.GameObjects.Image} */
        this.color;
        /** @type {Phaser.GameObjects.Image} */
        this.element;
        /** @type {Phaser.GameObjects.Text} */
        this.value;


        // glow
        const glow = scene.add.sprite(1, 0, "ninjaprogress", "card/glow0001");
        glow.setOrigin(0.503030303030303, 0.5);
        glow.visible = false;
        this.add(glow);

        // back
        const back = scene.add.image(0, 0, "ninjaprogress", "card/back");
        back.scaleX = 0.95;
        back.scaleY = 0.95;
        back.setOrigin(0.5038167938931297, 0.5);
        this.add(back);

        // shadow
        const shadow = scene.add.image(3, 3, "ninjaprogress", "card/shadow");
        shadow.setOrigin(0.5038167938931297, 0.5);
        this.add(shadow);

        // icon
        const icon = scene.add.image(-66, -74, "_MISSING");
        icon.scaleX = 0.7;
        icon.scaleY = 0.7;
        icon.setOrigin(0, 0);
        icon.visible = false;
        this.add(icon);

        // color
        const color = scene.add.image(0, 0, "ninjaprogress", "card/color");
        color.setOrigin(0.5038167938931297, 0.5);
        color.tintTopLeft = 1132705;
        color.tintTopRight = 1132705;
        color.tintBottomLeft = 1132705;
        color.tintBottomRight = 1132705;
        this.add(color);

        // element
        const element = scene.add.image(-47, -54, "ninjaprogress", "card/f");
        element.setOrigin(0.5, 0.5185185185185185);
        this.add(element);

        // value
        const value = scene.add.text(-66, -40, "", {});
        value.text = "88";
        value.setStyle({ "align": "center", "color": "#000", "fixedWidth":36,"fontFamily": "Burbank Big Regular", "fontSize": "26px", "fontStyle": "bold" });
        this.add(value);

        this.glow = glow;
        this.back = back;
        this.icon = icon;
        this.color = color;
        this.element = element;
        this.value = value;

        /* START-USER-CTR-CODE */

        this.id

        this.glow.anims.play('ninjaprogress/glow')

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(card) {
        let tint = layout.colors[card.color].color

        this.value.text = card.value
        this.color.tint = tint

        this.element.setFrame(`card/${card.element}`)

        if (card.powerId > 0) {
            this.glow.tint = tint
        }

        this.glow.visible = card.powerId > 0

        super.show()
    }

    setIcon(key) {
        this.icon.setTexture(key)
        this.icon.visible = true
    }

    removeIcon() {
        this.icon.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
