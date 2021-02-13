import BaseContainer from '@scenes/base/BaseContainer'

import { Button, NineSlice } from '@components/components'

import PaperDoll from '@scenes/interface/game/playercard/paperdoll/PaperDoll'


/* START OF COMPILED CODE */

class PenguinLarge extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y);

        // bg
        const bg = scene.add.rectangle(0, 0, 488, 664);
        bg.isFilled = true;
        bg.fillColor = 164045;
        this.add(bg);

        // penguin_large
        const penguin_large = scene.add.image(0, 0, "login", "player_large");
        this.add(penguin_large);

        // username
        const username = scene.add.text(0, 215, "", {});
        username.setOrigin(0.5, 0.5);
        username.setStyle({"align":"center","fixedWidth":420,"fontFamily":"CCFaceFront","fontSize":"44px","fontStyle":"bold italic","stroke":"#003366","strokeThickness":10,"shadow.color":"#000000ff"});
        this.add(username);

        // paperDoll
        const paperDoll = new PaperDoll(scene, 0, -45);
        this.add(paperDoll);

        // bg (components)
        const bgNineSlice = new NineSlice(bg);
        bgNineSlice.corner = 50;

        // penguin_large (components)
        const penguin_largeButton = new Button(penguin_large);
        penguin_largeButton.spriteName = "player_large";
        penguin_largeButton.activeFrame = false;

        // paperDoll (prefab fields)
        paperDoll.fadeIn = false;

        this.bg = bg;
        this.username = username;
        this.paperDoll = paperDoll;

        /* START-USER-CTR-CODE */

        this.button = penguin_largeButton

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default PenguinLarge
