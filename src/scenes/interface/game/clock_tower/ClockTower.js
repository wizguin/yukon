/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ClockTower extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.ninePatchContainer(0, -38, 685, 560, "prompt", "window");
        bg.marginLeft = 50;
        bg.marginTop = 50;
        bg.marginRight = 50;
        bg.marginBottom = 50;
        this.add(bg);

        // title
        const title = scene.add.text(0, -238, "", {});
        title.setOrigin(0.5, 0.5);
        title.text = "CLUB PENGUIN\nCLOCK TOWER";
        title.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        this.add(title);

        // text
        const text = scene.add.text(0, -5, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "The time showing on this clock may not match\nthe time on your computer. This snowball-\npowered clock, like all other clocks in Club\nPenguin, is in PST (Penguin Standard Time).\n\nThis means that penguins from all over the world\nwill see this clock as the exact same time, even if\nthe penguins are in different time zones.\nBecause of this, you can use this clock to plan\nparties and fun events with friends.";
        text.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":600,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        text.setLineSpacing(1);
        this.add(text);

        // x_button
        const x_button = scene.add.image(293, -269, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(293, -271, "main", "blue-x");
        this.add(blue_x);

        // block (components)
        new Interactive(block);

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.close();

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */