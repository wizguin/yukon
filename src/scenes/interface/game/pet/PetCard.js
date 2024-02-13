/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import DraggableContainer from "../../../components/DraggableContainer";
import Button from "../../../components/Button";
import ShowHint from "../../../components/ShowHint";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PetCard extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // cardBg
        const cardBg = scene.add.image(0, 0, "main", "card-bg");
        this.add(cardBg);

        // petBg
        const petBg = scene.add.image(0, 0, "main", "pet/card_bg");
        petBg.setOrigin(0.5, 0.5012285012285013);
        this.add(petBg);

        // pet_bar0001
        const pet_bar0001 = scene.add.image(73, 78, "main", "pet/bar0001");
        this.add(pet_bar0001);

        // pet_bar
        const pet_bar = scene.add.image(73, 122, "main", "pet/bar0001");
        this.add(pet_bar);

        // pet_bar_1
        const pet_bar_1 = scene.add.image(73, 166, "main", "pet/bar0001");
        this.add(pet_bar_1);

        // walkButton
        const walkButton = scene.add.image(99, 258, "main", "blue-button");
        this.add(walkButton);

        // feedButton
        const feedButton = scene.add.image(37, 258, "main", "blue-button");
        this.add(feedButton);

        // restButton
        const restButton = scene.add.image(-23, 258, "main", "blue-button");
        this.add(restButton);

        // playButton
        const playButton = scene.add.image(-83, 258, "main", "blue-button");
        this.add(playButton);

        // walk
        const walk = scene.add.image(100, 257, "main", "pet/walk");
        this.add(walk);

        // feed
        const feed = scene.add.image(38, 256, "main", "pet/feed");
        feed.setOrigin(0.5185185185185185, 0.5);
        this.add(feed);

        // rest
        const rest = scene.add.image(-24, 257, "main", "pet/rest");
        rest.setOrigin(0.5, 0.52);
        this.add(rest);

        // play
        const play = scene.add.image(-84, 255, "main", "pet/play");
        this.add(play);

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = cardBg;

        // walkButton (components)
        const walkButtonButton = new Button(walkButton);
        walkButtonButton.spriteName = "blue-button";
        const walkButtonShowHint = new ShowHint(walkButton);
        walkButtonShowHint.text = "walk_pet_hint";

        // feedButton (components)
        const feedButtonButton = new Button(feedButton);
        feedButtonButton.spriteName = "blue-button";
        const feedButtonShowHint = new ShowHint(feedButton);
        feedButtonShowHint.text = "feed_pet_hint";

        // restButton (components)
        const restButtonButton = new Button(restButton);
        restButtonButton.spriteName = "blue-button";
        const restButtonShowHint = new ShowHint(restButton);
        restButtonShowHint.text = "rest_pet_hint";

        // playButton (components)
        const playButtonButton = new Button(playButton);
        playButtonButton.spriteName = "blue-button";
        const playButtonShowHint = new ShowHint(playButton);
        playButtonShowHint.text = "play_pet_hint";

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
