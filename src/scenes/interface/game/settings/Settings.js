import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, NineSlice, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Settings extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.checkbox;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // rectangle
        const rectangle = scene.add.rectangle(0, -22, 708, 600);
        rectangle.isFilled = true;
        rectangle.fillColor = 164045;
        this.add(rectangle);

        // buddies
        const buddies = scene.add.text(69, 173, "", {});
        buddies.setOrigin(0.5, 0.5);
        buddies.text = "88/100 Buddies";
        buddies.setStyle({ "color": "#000000ff", "fixedWidth":300,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(buddies);

        // icon
        const icon = scene.add.image(-132, 171, "main", "buddy/icon-online");
        this.add(icon);

        // button
        const button = scene.add.image(0, 67, "main", "help-button");
        this.add(button);

        // account
        const account = scene.add.text(21, 66, "", {});
        account.setOrigin(0.5, 0.5);
        account.text = "Manage Account";
        account.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":562,"fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        this.add(account);

        // music
        const music = scene.add.text(131, -37, "", {});
        music.setOrigin(0.5, 0.5);
        music.text = "Mute Music";
        music.setStyle({ "color": "#000000ff", "fixedWidth":348,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(music);

        // age
        const age = scene.add.text(0, -108, "", {});
        age.setOrigin(0.5, 0.5);
        age.text = "Your penguin is 0 days old";
        age.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":600,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(age);

        // server
        const server = scene.add.text(0, -156, "", {});
        server.setOrigin(0.5, 0.5);
        server.text = "You're on Server Name";
        server.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":600,"fontFamily": "Arial Narrow", "fontSize": "30px" });
        this.add(server);

        // settings
        const settings = scene.add.text(0, -238, "", {});
        settings.setOrigin(0.5, 0.5);
        settings.text = "SETTINGS";
        settings.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        this.add(settings);

        // checkbox
        const checkbox = scene.add.image(-76, -39, "login", "checkbox");
        checkbox.setOrigin(0.41509, 0.5849);
        this.add(checkbox);

        // x_button
        const x_button = scene.add.image(300, -268, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(300, -270, "main", "blue-x");
        this.add(blue_x);

        // block (components)
        new Interactive(block);

        // rectangle (components)
        const rectangleNineSlice = new NineSlice(rectangle);
        rectangleNineSlice.corner = 50;

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "help-button";

        // checkbox (components)
        const checkboxSimpleButton = new SimpleButton(checkbox);
        checkboxSimpleButton.callback = () => this.onMuteClick();

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => { this.visible = false };

        this.checkbox = checkbox;

        /* START-USER-CTR-CODE */

        this.checkbox.checked = this.world.muteMusic

        if (this.checkbox.checked) {
            this.checkbox.setTexture('login', 'checkbox-active')
        }

        server.text = `You're on ${this.network.worldName}`
        age.text = `Your penguin is ${this.world.client.daysOld} days old`
        buddies.text = `${this.world.client.buddies.length}/100 Buddies`

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onMuteClick() {
        this.toggle(this.checkbox)

        this.soundManager.muteMusic = this.checkbox.checked

        let music = this.world.room.music
        if (!music) {
            return
        }

        if (this.soundManager.muteMusic) {
            this.world.room.stopMusic()
        } else {
            this.world.room.playMusic(music)
        }
    }

    toggle(checkbox) {
        let texture = (checkbox.checked) ? 'checkbox' : 'checkbox-active'

        checkbox.checked = !checkbox.checked
        checkbox.setTexture('login', texture)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
