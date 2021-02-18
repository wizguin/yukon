import BaseScene from '@scenes/base/BaseScene'

import animations from '../animations.json'
import { Animated, Button, SimpleButton } from '@components/components'
import TextInput from '@engine/interface/text/TextInput'

import Checks from '../checks/Checks'
import PenguinLarge from '../card/PenguinLarge'
import WaitPrompt from '../prompts/WaitPrompt'
import SavePrompt from '../prompts/SavePrompt'

/* START OF COMPILED CODE */

class PenguinLogin extends BaseScene {

    constructor() {
        super("PenguinLogin");

        /** @type {PenguinLarge} */
        this.container;
        /** @type {Checks} */
        this.checks;
        /** @type {SavePrompt} */
        this.savePrompt;
        /** @type {WaitPrompt} */
        this.waitPrompt;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    _create() {

        // bg
        const bg = this.add.image(0, 0, "load", "bg");
        bg.setOrigin(0, 0);

        // container
        const container = new PenguinLarge(this, 475, 430);
        this.add.existing(container);

        // backButton
        const backButton = this.add.sprite(760, 876, "login", "larger-button");

        // forgetButton
        const forgetButton = this.add.sprite(955, 661, "login", "small-button");

        // forgotButton
        const forgotButton = this.add.sprite(955, 604, "login", "small-button");

        // backText
        const backText = this.add.text(760, 876, "", {});
        backText.setOrigin(0.5, 0.5);
        backText.text = "Login as a different penguin";
        backText.setStyle({"align":"center","color":"#ffffffff","fixedWidth":400,"fontFamily":"Arial Narrow","fontSize":"30px"});

        // forgotText_1
        const forgotText_1 = this.add.text(929, 661, "", {});
        forgotText_1.setOrigin(0.5, 0.5);
        forgotText_1.text = "Forget my penguin";
        forgotText_1.setStyle({"color":"#ffffffff","fixedWidth":300,"fontFamily":"Arial Narrow","fontSize":"30px"});

        // forgotText
        const forgotText = this.add.text(929, 604, "", {});
        forgotText.setOrigin(0.5, 0.5);
        forgotText.text = "Forgot your password?";
        forgotText.setStyle({"color":"#ffffffff","fixedWidth":300,"fontFamily":"Arial Narrow","fontSize":"30px"});

        // loginButton
        const loginButton = this.add.sprite(935, 487, "login", "login-button");

        // loginText
        const loginText = this.add.text(935, 487, "", {});
        loginText.setOrigin(0.5, 0.5);
        loginText.text = "Login";
        loginText.setStyle({"align":"center","color":"#ffffffff","fixedWidth":100,"fontFamily":"Arial Narrow","fontSize":"38px"});

        // passwordText
        const passwordText = this.add.text(783, 194, "", {});
        passwordText.setOrigin(0, 0.5);
        passwordText.text = "Password:";
        passwordText.setStyle({"align":"right","color":"#000000ff","fontFamily":"Arial Narrow","fontSize":"30px"});

        // input
        this.add.image(973, 249, "login", "input");

        // note
        this.add.image(1258, 760, "login", "note");

        // checks
        const checks = new Checks(this, 806, 330);
        this.add.existing(checks);

        // savePrompt
        const savePrompt = new SavePrompt(this, 760, 480);
        this.add.existing(savePrompt);
        savePrompt.visible = false;

        // waitPrompt
        const waitPrompt = new WaitPrompt(this, 760, 480);
        this.add.existing(waitPrompt);
        waitPrompt.visible = false;

        // backButton (components)
        const backButtonSimpleButton = new SimpleButton(backButton);
        backButtonSimpleButton.callback = () => this.onBackClick();
        const backButtonAnimated = new Animated(backButton);
        backButtonAnimated.animation = "larger-button";
        backButtonAnimated.onHover = true;

        // forgetButton (components)
        const forgetButtonSimpleButton = new SimpleButton(forgetButton);
        forgetButtonSimpleButton.callback = () => this.onForgetClick();
        const forgetButtonAnimated = new Animated(forgetButton);
        forgetButtonAnimated.animation = "small-button";
        forgetButtonAnimated.onHover = true;

        // forgotButton (components)
        new SimpleButton(forgotButton);
        const forgotButtonAnimated = new Animated(forgotButton);
        forgotButtonAnimated.animation = "small-button";
        forgotButtonAnimated.onHover = true;

        // loginButton (components)
        const loginButtonButton = new Button(loginButton);
        loginButtonButton.spriteName = "login-button";
        loginButtonButton.callback = () => this.onLoginSubmit();

        this.container = container;
        this.checks = checks;
        this.savePrompt = savePrompt;
        this.waitPrompt = waitPrompt;
    }

    /* START-USER-CODE */

    create(data) {
        this._create()

        // Todo: change to depth component
        this.waitPrompt.depth = 1
        this.savePrompt.depth = 1

        this.anims.fromJSON(animations)

        this.checks.enable(this.checks.username)

        // Penguin
        this.penguin = data.penguin
        this.container.paperDoll.loadDoll(this.penguin)
        this.container.username.text = this.penguin.username.toUpperCase()
        this.container.button.callback = () => this.onBackClick(this.penguin)

        // Login form
        let style = {
            width: 380,
            height: 53,
            padding: '0 6px 0 6px',
            filter: 'none',
            fontFamily: 'Arial',
            fontSize: 35,
            color: '#000'
        }

        this.passwordInput = new TextInput(this, 973, 250, 'password', style, () => this.onLoginSubmit(), 128, false)
        this.add.existing(this.passwordInput)

        // Input
        this.input.keyboard.on('keydown_ENTER', () => this.onLoginSubmit())
    }


    onLoginSubmit() {
        let username = this.penguin.username
        let password = this.passwordInput.text

        this.interface.showLoading(`Logging in ${username}`)
        this.scene.stop()

        this.network.connectLogin(username, password, this.checks.username.checked, this.checks.password.checked)
    }

    onForgetClick() {
        let savedPenguins = this.network.savedPenguins

        delete savedPenguins[this.penguin.username]
        localStorage.setItem('saved_penguins', JSON.stringify(savedPenguins))

        this.scene.start('PenguinSelect')
    }

    onBackClick() {
        this.network.disconnect()
        this.scene.start('PenguinSelect')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default PenguinLogin
