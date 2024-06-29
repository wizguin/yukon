/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import Button from "../../../../components/Button";
/* START-USER-IMPORTS */

import MissionButton from './MissionButton'

/* END-USER-IMPORTS */

export default class MissionList extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.maskRect;
        /** @type {Phaser.GameObjects.Container} */
        this.missions;


        // maskRect
        const maskRect = scene.add.rectangle(0, 0, 560, 300);
        maskRect.setOrigin(0, 0);
        maskRect.visible = false;
        maskRect.isFilled = true;
        this.add(maskRect);

        // missions
        const missions = scene.add.container(0, 0);
        this.add(missions);

        // scroll
        const scroll = scene.add.rectangle(524, 0, 42, 300);
        scroll.setOrigin(0, 0);
        scroll.isFilled = true;
        scroll.fillColor = 154625;
        this.add(scroll);

        // downButton
        const downButton = scene.add.image(544, 264, "missions", "menu_button");
        downButton.setOrigin(0.5151515151515151, 0.5076923076923077);
        downButton.flipY = true;
        this.add(downButton);

        // upButton
        const upButton = scene.add.image(544, 33, "missions", "menu_button");
        upButton.setOrigin(0.5151515151515151, 0.5076923076923077);
        this.add(upButton);

        // downButton (components)
        const downButtonButton = new Button(downButton);
        downButtonButton.spriteName = "menu_button";
        downButtonButton.activeFrame = false;

        // upButton (components)
        const upButtonButton = new Button(upButton);
        upButtonButton.spriteName = "menu_button";
        upButtonButton.activeFrame = false;

        this.maskRect = maskRect;
        this.missions = missions;

        /* START-USER-CTR-CODE */

        this.createMask()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    addMission(mission) {
        const y = this.missions.length * 100
        const missionButton = new MissionButton(this.scene, 0, y)

        missionButton.setMission(mission)

        this.missions.add(missionButton)
    }

    clearMissions() {
        this.missions.removeAll(true)
    }

    createMask() {
        const rect = this.maskRect
        const graphics = this.scene.make.graphics()

        // World position
        const matrix = rect.getWorldTransformMatrix()

        graphics.fillRect(matrix.getX(0, 0), matrix.getY(0, 0), rect.width, rect.height)

        const mask = graphics.createGeometryMask()

        this.setMask(mask)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
