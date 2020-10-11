import { Animated, Button, SimpleButton } from '@/components/components'
import animations from './animations.json'


/* START OF COMPILED CODE */

class Login extends Phaser.Scene {
    
    constructor() {
        super("Login");
        
        /* START-USER-CTR-CODE */

        this.elements = {}

        /* END-USER-CTR-CODE */
    }
    
    _create() {
        
        // bg
        const bg = this.add.image(0, 1, "load", "bg");
        bg.setOrigin(0, 0);
        
        // backButton
        const backButton = this.add.sprite(760, 876, "login", "small-button");
        
        // createButton
        const createButton = this.add.sprite(760, 728, "login", "large-button");
        
        // forgotButton
        const forgotButton = this.add.sprite(760, 604, "login", "small-button");
        
        // note
        this.add.image(1182, 556, "login", "note");
        
        // backText
        const backText = this.add.text(760, 876, "", {});
        backText.setOrigin(0.5, 0.5);
        backText.text = "Back";
        backText.setStyle({"align":"right","color":"#ffffffff","fontFamily":"Arial Narrow","fontSize":"30px"});
        
        // registerText2
        const registerText2 = this.add.text(760, 747, "", {});
        registerText2.setOrigin(0.5, 0.5);
        registerText2.text = "Create a free account now";
        registerText2.setStyle({"align":"right","color":"#ffffffff","fontFamily":"Arial Narrow","fontSize":"35px"});
        
        // registerText
        const registerText = this.add.text(760, 713, "", {});
        registerText.setOrigin(0.5, 0.5);
        registerText.text = "Don't have a penguin?";
        registerText.setStyle({"align":"right","color":"#000000ff","fontFamily":"Arial Narrow","fontSize":"30px"});
        
        // forgotText
        const forgotText = this.add.text(760, 604, "", {});
        forgotText.setOrigin(0.5, 0.5);
        forgotText.text = "Forgot your password?";
        forgotText.setStyle({"align":"right","color":"#ffffffff","fontFamily":"Arial Narrow","fontSize":"30px"});
        
        // loginButton
        const loginButton = this.add.sprite(760, 483, "login", "login-button");
        
        // loginText
        const loginText = this.add.text(760, 483, "", {});
        loginText.setOrigin(0.5, 0.5);
        loginText.text = "Login";
        loginText.setStyle({"align":"right","color":"#ffffffff","fontFamily":"Arial Narrow","fontSize":"38px"});
        
        // rememberUsernameText
        const rememberUsernameText = this.add.text(602, 384, "", {});
        rememberUsernameText.setOrigin(0, 0.5);
        rememberUsernameText.text = "Remember my password";
        rememberUsernameText.setStyle({"align":"right","color":"#000000ff","fontFamily":"Arial Narrow","fontSize":"30px"});
        
        // rememberPasswordText
        const rememberPasswordText = this.add.text(602, 329, "", {});
        rememberPasswordText.setOrigin(0, 0.5);
        rememberPasswordText.text = "Remember me on this computer";
        rememberPasswordText.setStyle({"align":"right","color":"#000000ff","fontFamily":"Arial Narrow","fontSize":"30px"});
        
        // passwordCheckbox
        const passwordCheckbox = this.add.image(568, 383, "login", "checkbox");
        passwordCheckbox.setOrigin(0.41509434, 0.58490566);
        
        // usernameCheckbox
        const usernameCheckbox = this.add.image(568, 328, "login", "checkbox");
        usernameCheckbox.setOrigin(0.41509434, 0.58490566);
        
        // passwordInput
        this.add.image(815, 259, "login", "input");
        
        // usernameInput
        this.add.image(815, 200, "login", "input");
        
        // passwordText
        const passwordText = this.add.text(503, 258, "", {});
        passwordText.setOrigin(0, 0.5);
        passwordText.text = "Password:";
        passwordText.setStyle({"align":"right","color":"#000000ff","fontFamily":"Arial Narrow","fontSize":"30px"});
        
        // usernameText
        const usernameText = this.add.text(448, 200, "", {});
        usernameText.setOrigin(0, 0.5);
        usernameText.text = "Penguin Name:";
        usernameText.setStyle({"align":"right","color":"#000000ff","fontFamily":"Arial Narrow","fontSize":"30px"});
        
        // backButton (components)
        const backButtonSimpleButton = new SimpleButton(backButton);
        backButtonSimpleButton.callback = () => this.onBackClick();
        const backButtonAnimated = new Animated(backButton);
        backButtonAnimated.animation = "small-button";
        backButtonAnimated.onHover = true;
        
        // createButton (components)
        new SimpleButton(createButton);
        const createButtonAnimated = new Animated(createButton);
        createButtonAnimated.animation = "large-button";
        createButtonAnimated.onHover = true;
        
        // forgotButton (components)
        new SimpleButton(forgotButton);
        const forgotButtonAnimated = new Animated(forgotButton);
        forgotButtonAnimated.animation = "small-button";
        forgotButtonAnimated.onHover = true;
        
        // loginButton (components)
        const loginButtonButton = new Button(loginButton);
        loginButtonButton.spriteName = "login-button";
        loginButtonButton.callback = () => this.onLoginClick();
    }
    
    /* START-USER-CODE */

    create() {
        this._create()

        this.anims.fromJSON(animations)

        // Login form

        let usernameField = '<input class="login-field" type="text" name="username">'
        let passwordField = '<input class="login-field" type="password" name="password">'

        this.elements.username = this.add.dom(815, 200).createFromHTML(usernameField)
        this.elements.password = this.add.dom(815, 259).createFromHTML(passwordField)

        // Input

        this.input.keyboard.on('keydown_ENTER', () => { this.onLoginClick() })
        this.input.on('pointerdown', () => { this.onSceneClick() })
    }

    onLoginClick() {
        let username = this.elements.username.getChildByName('username').value
        let password = this.elements.password.getChildByName('password').value

        console.log(username, password)
    }

    onBackClick() {
        this.scene.start('Start')
    }

    onSceneClick() {
        document.activeElement.blur() // Removes input focus
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Login
