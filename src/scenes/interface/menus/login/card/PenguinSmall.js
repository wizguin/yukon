import BaseContainer from '@scenes/base/BaseContainer'

import { Button, NineSlice } from '@components/components'

import PaperDoll from '@scenes/interface/game/playercard/paperdoll/PaperDoll'


/* START OF COMPILED CODE */

class PenguinSmall extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y);

        // penguin_small
        const penguin_small = scene.add.image(0, 0, "login", "player_small");
        penguin_small.scaleX = 1.01;
        penguin_small.scaleY = 1.01;
        this.add(penguin_small);

        // paperDoll
        const paperDoll = new PaperDoll(scene, -212, 60);
        this.add(paperDoll);

        // username
        const username = scene.add.text(90, 0, "", {});
        username.setOrigin(0.5, 0.5);
        username.setStyle({"align":"center","fixedWidth":420,"fontFamily":"CCFaceFront","fontSize":"48px","fontStyle":"bold italic","stroke":"#003366","strokeThickness":10,"shadow.color":"#000000ff"});
        this.add(username);

        // bg
        const bg = scene.add.image(1, 0, "login", "card_small");
        this.add(bg);

        // penguin_small (components)
        const penguin_smallButton = new Button(penguin_small);
        penguin_smallButton.spriteName = "player_small";
        penguin_smallButton.activeFrame = false;

        // paperDoll (prefab fields)
        paperDoll.fadeIn = false;
        paperDoll.crop = true;

        this.paperDoll = paperDoll;
        this.username = username;
        this.bg = bg;

        /* START-USER-CTR-CODE */

        this.button = penguin_smallButton

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default PenguinSmall
