import BaseContainer from '@scenes/base/BaseContainer'

import { Button, DraggableContainer, NineSlice } from '@components/components'

import LobbyItem from './lobby_item/LobbyItem'


/* START OF COMPILED CODE */

class Lobby extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y);

        // bg
        const bg = scene.add.rectangle(0, 0, 464, 360);
        bg.isFilled = true;
        bg.fillColor = 164045;
        this.add(bg);

        // tab_2
        const tab_2 = scene.add.image(0, -190, "main", "tab-2");
        this.add(tab_2);

        // lobby_item_3
        const lobby_item_3 = new LobbyItem(scene, 0, 100);
        this.add(lobby_item_3);

        // lobby_item_2
        const lobby_item_2 = new LobbyItem(scene, 0, 48);
        this.add(lobby_item_2);

        // lobby_item_1
        const lobby_item_1 = new LobbyItem(scene, 0, -4);
        this.add(lobby_item_1);

        // lobby_item
        const lobby_item = new LobbyItem(scene, 0, -56);
        this.add(lobby_item);

        // text
        const text = scene.add.text(0, -122, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "Sled Racing";
        text.setStyle({"align":"center","color":"#000000","fixedWidth":420,"fontFamily":"Arial Narrow","fontSize":"32px"});
        this.add(text);

        // x_button
        const x_button = scene.add.image(178, -126, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(178, -128, "main", "blue-x");
        this.add(blue_x);

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = bg;

        // bg (components)
        const bgNineSlice = new NineSlice(bg);
        bgNineSlice.corner = 50;

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => { this.visible = false };

        this.text = text;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Lobby
