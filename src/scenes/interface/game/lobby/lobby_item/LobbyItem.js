import BaseContainer from '@scenes/base/BaseContainer'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

class LobbyItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y);

        // lobby_item
        const lobby_item = scene.add.image(0, 0, "main", "buddy/item");
        this.add(lobby_item);

        // icon
        const icon = scene.add.image(-137, 0, "main", "buddy/icon-load");
        this.add(icon);

        // username
        const username = scene.add.text(25, 0, "", {});
        username.setOrigin(0.5, 0.5);
        username.text = "Empty";
        username.setStyle({"fixedWidth":270,"fontFamily":"Arial","fontSize":"24px"});
        this.add(username);

        this.icon = icon;
        this.username = username;

        /* START-USER-CTR-CODE */

        this.id = null

        this.spinnerTween = scene.tweens.add({
            targets: this.icon,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    setItem(buddy) {
        if (!buddy) return this.clearItem()

        this.id = buddy.id
        this.username.text = buddy.username

        let relationship = this.world.getRelationship(buddy.id)
        let texture = `buddy/icon-${relationship}`

        this.icon.setTexture('main', texture)
    }

    clearItem() {
        this.id = null
        this.username.text = ''
        this.icon.setTexture('main', 'buddy/icon-offline')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default LobbyItem
