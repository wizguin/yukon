export const preload = {
    key: 'missions-pack',
    url: 'assets/media/interface/game/missions/missions-pack.json',
    loadString: ['loading', 'missions']
}

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import MissionInfo from "./info/MissionInfo";
import MissionList from "./list/MissionList";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Missions extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {MissionInfo} */
        this.info;
        /** @type {Phaser.GameObjects.Text} */
        this.chooseText;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.flash;
        /** @type {MissionList} */
        this.trainingList;
        /** @type {MissionList} */
        this.currentList;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.setOrigin(0, 0);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.rectangle(764, 455, 1200, 750);
        bg.isFilled = true;
        bg.fillColor = 13056;
        this.add(bg);

        // info
        const info = new MissionInfo(scene, 807, 134);
        info.visible = false;
        this.add(info);

        // chooseText
        const chooseText = scene.add.text(810, 126, "", {});
        chooseText.text = "CLICK A TITLE ON THE LEFT TO\nCHOOSE A MISSION";
        chooseText.setStyle({ "color": "#e0ffcc", "fontFamily": "CPLCD", "fontSize": "38PX" });
        chooseText.setLineSpacing(7);
        this.add(chooseText);

        // flash
        const flash = scene.add.rectangle(1065, 455, 600, 750);
        flash.alpha = 0;
        flash.isFilled = true;
        this.add(flash);

        // trainingList
        const trainingList = new MissionList(scene, 179, 484);
        trainingList.visible = true;
        this.add(trainingList);

        // currentList
        const currentList = new MissionList(scene, 179, 114);
        currentList.visible = true;
        this.add(currentList);

        // frame
        const frame = scene.add.image(764, 455, "missions", "frame");
        frame.setOrigin(0.5003385240352065, 0.5005959475566151);
        this.add(frame);

        // lightGreen
        const lightGreen = scene.add.sprite(221, 820, "missions", "light/green/green0001");
        lightGreen.setOrigin(0.5121951219512195, 0.5121951219512195);
        lightGreen.play("light_green");
        this.add(lightGreen);

        // lightRed
        const lightRed = scene.add.sprite(172, 821, "missions", "light/red/red0001");
        lightRed.setOrigin(0.5121951219512195, 0.5121951219512195);
        lightRed.play("light_red");
        this.add(lightRed);

        // closeButton
        const closeButton = scene.add.image(1361, 83, "missions", "close_button");
        this.add(closeButton);

        // infoText
        const infoText = scene.add.text(823, 83, "", {});
        infoText.text = "INFO";
        infoText.setStyle({ "color": "#e0ffcc", "fontFamily": "CPLCD", "fontSize": "32px" });
        this.add(infoText);

        // trainingText
        const trainingText = scene.add.text(215, 452, "", {});
        trainingText.text = "TRAINING";
        trainingText.setStyle({ "color": "#e0ffcc", "fontFamily": "CPLCD", "fontSize": "32px" });
        this.add(trainingText);

        // currentText
        const currentText = scene.add.text(215, 83, "", {});
        currentText.text = "CURRENT";
        currentText.setStyle({ "color": "#e0ffcc", "fontFamily": "CPLCD", "fontSize": "32px" });
        this.add(currentText);

        // block (components)
        new Interactive(block);

        // closeButton (components)
        const closeButtonButton = new Button(closeButton);
        closeButtonButton.spriteName = "close_button";
        closeButtonButton.callback = () => this.close();

        this.info = info;
        this.chooseText = chooseText;
        this.flash = flash;
        this.trainingList = trainingList;
        this.currentList = currentList;

        /* START-USER-CTR-CODE */

        frame.setInteractive({ pixelPerfect: true })

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        this.addMissions()

        this.chooseText.visible = true
        this.info.close()

        this.scene.events.once('update', () => {
            this.currentList.show()
            this.trainingList.show()
        })

        super.show()
    }

    addMissions() {
        this.clearMissions()

        for (const mission of this.crumbs.missions) {
            const completed = this.world.client.inventory.award.includes(mission.award)

            const list = completed ? this.trainingList : this.currentList

            list.addMission(mission)
        }
    }

    clearMissions() {
        this.currentList.clearMissions()
        this.trainingList.clearMissions()
    }

    showInfo(mission) {
        this.playFlash()

        this.chooseText.visible = false
        this.info.show(mission)
    }

    playFlash() {
        this.scene.tweens.add({
            targets: this.flash,
            alpha: { from: 1, to: 0 },
            duration: 300
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
