import BaseContainer from '@scenes/base/BaseContainer'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class MusicItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.title;
        /** @type {string} */
        this.name = "";
        /** @type {number} */
        this.musicId = 0;
        /** @type {boolean} */
        this.bold = false;


        // item
        const item = scene.add.image(0, 0, "main", "buddy/item");
        this.add(item);

        // title
        const title = scene.add.text(1, 0, "", {});
        title.setOrigin(0.5, 0.5);
        title.setStyle({ "fixedWidth":300,"fontFamily": "Arial", "fontSize": "24px" });
        this.add(title);

        // item (components)
        const itemButton = new Button(item);
        itemButton.spriteName = "buddy/item";
        itemButton.callback = () => this.onClick();
        itemButton.activeFrame = false;

        this.title = title;

        /* START-USER-CTR-CODE */

        scene.events.once('scene-awake', this.onAwake, this)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onAwake() {
        this.title.text = this.name

        if (this.bold) {
            this.title.setStyle({ fontStyle: 'bold' })
        }
    }

    onClick() {
        this.network.send('update_music', { music: this.musicId })
        this.parentContainer.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
