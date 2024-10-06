/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import Button from "../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MissionInfo extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Text} */
        this.description;
        /** @type {Phaser.GameObjects.Text} */
        this.title;
        /** @type {Phaser.GameObjects.Image} */
        this.preview;


        // launchButton
        const launchButton = scene.add.image(257, 585, "missions", "launch_button");
        this.add(launchButton);

        // launchText
        const launchText = scene.add.text(257, 585, "", {});
        launchText.setOrigin(0.5, 0.5);
        launchText.text = "launch mission";
        launchText.setStyle({ "align": "center", "color": "#ffff00", "fixedWidth":300,"fontFamily": "CPLCD", "fontSize": "43px" });
        launchText.setLineSpacing(-4);
        this.add(launchText);

        // description
        const description = scene.add.text(3, 318, "", {});
        description.text = "text";
        description.setStyle({ "color": "#e0ffcc", "fixedWidth":600,"fontFamily": "CPLCD", "fontSize": "36px" });
        description.setLineSpacing(4);
        description.setWordWrapWidth(600);
        this.add(description);

        // title
        const title = scene.add.text(3, 258, "", {});
        title.text = "text";
        title.setStyle({ "color": "#ffff00", "fixedWidth":600,"fontFamily": "CPLCD", "fontSize": "36px" });
        title.setLineSpacing(-4);
        title.setWordWrapWidth(600);
        this.add(title);

        // preview
        const preview = scene.add.image(0, 0, "missions", "preview/1");
        preview.setOrigin(0, 0);
        this.add(preview);

        // launchButton (components)
        const launchButtonButton = new Button(launchButton);
        launchButtonButton.spriteName = "launch_button";
        launchButtonButton.callback = () => this.onLaunchClick();

        this.description = description;
        this.title = title;
        this.preview = preview;

        /* START-USER-CTR-CODE */

        this.missionId = 1

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(mission) {
        this.title.text = mission.title
        this.description.text = mission.description

        this.missionId = mission.id

        this.preview.setFrame(`preview/${mission.id}`)

        super.show()
    }

    onLaunchClick() {
        this.soundManager.play('switch')

        const missionKey = `mission${this.missionId}`
        const games = Object.entries(this.crumbs.games)

        const result = games.find(([, value]) => value.key === missionKey)

        if (result) {
            const id = parseInt(result[0])

            this.world.client.sendJoinRoom(id, '')
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
