import BaseContainer from '@scenes/base/BaseContainer'

import { SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Checks extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.password;
        /** @type {Phaser.GameObjects.Image} */
        this.username;


        // text_2
        const text_2 = scene.add.text(34, 56, "", {});
        text_2.setOrigin(0, 0.5);
        text_2.text = "Remember my password";
        text_2.setStyle({ "align": "right", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "30px" });
        text_2.setLineSpacing(25);
        this.add(text_2);

        // text_1
        const text_1 = scene.add.text(34, 1, "", {});
        text_1.setOrigin(0, 0.5);
        text_1.text = "Remember me on this computer";
        text_1.setStyle({ "align": "right", "color": "#000000ff", "fontFamily": "Arial Narrow", "fontSize": "30px" });
        text_1.setLineSpacing(25);
        this.add(text_1);

        // password
        const password = scene.add.image(0, 55, "login", "checkbox");
        password.setOrigin(0.41509434, 0.58490566);
        this.add(password);

        // username
        const username = scene.add.image(0, 0, "login", "checkbox");
        username.setOrigin(0.41509, 0.5849);
        this.add(username);

        // password (components)
        const passwordSimpleButton = new SimpleButton(password);
        passwordSimpleButton.callback = () => this.onRememberPasswordClick();

        // username (components)
        const usernameSimpleButton = new SimpleButton(username);
        usernameSimpleButton.callback = () => this.onRememberMeClick();

        this.password = password;
        this.username = username;

        /* START-USER-CTR-CODE */

        this.scene = scene

        username.checked = false
        password.checked = false

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onRememberMeClick() {
        if (this.password.checked) this.disable(this.password)

        this.toggle(this.username)
    }

    onRememberPasswordClick() {
        if (!this.password.checked) {
            this.scene.events.emit('hideinput')
            return this.scene.waitPrompt.visible = true
        }

        this.disable(this.username)
        this.disable(this.password)
    }

    toggle(checkbox) {
        let texture = (checkbox.checked) ? 'checkbox' : 'checkbox-active'

        checkbox.checked = !checkbox.checked
        checkbox.setTexture('login', texture)
    }

    enable(checkbox) {
        checkbox.checked = true
        checkbox.setTexture('login', 'checkbox-active')
    }

    disable(checkbox) {
        checkbox.checked = false
        checkbox.setTexture('login', 'checkbox')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
