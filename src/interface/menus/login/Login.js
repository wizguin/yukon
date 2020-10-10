import Button from '../../../components/Button'


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
        const bg = this.add.image(0, 0, "load", "bg");
        bg.setOrigin(0, 0);

        // login_button
        const login_button = this.add.image(760, 482, "login", "login-button");

        // note
        this.add.image(1153, 547, "login", "note");

        // back_text
        const back_text = this.add.text(760, 874, "", {});
        back_text.setOrigin(0.5, 0.5);
        back_text.text = "Back";
        back_text.setStyle({"align":"right","color":"#ffffffff","fontFamily":"Arial Narrow","fontSize":"30px"});

        // register_text_2
        const register_text_2 = this.add.text(760, 740, "", {});
        register_text_2.setOrigin(0.5, 0.5);
        register_text_2.text = "Create a free account now";
        register_text_2.setStyle({"align":"right","color":"#ffffffff","fontFamily":"Arial Narrow","fontSize":"35px"});

        // register_text
        const register_text = this.add.text(760, 709, "", {});
        register_text.setOrigin(0.5, 0.5);
        register_text.text = "Don't have a penguin?";
        register_text.setStyle({"align":"right","color":"#000000ff","fontFamily":"Arial Narrow","fontSize":"30px"});

        // forgot_text
        const forgot_text = this.add.text(760, 602, "", {});
        forgot_text.setOrigin(0.5, 0.5);
        forgot_text.text = "Forgot your password?";
        forgot_text.setStyle({"align":"right","color":"#ffffffff","fontFamily":"Arial Narrow","fontSize":"30px"});

        // login_text
        const login_text = this.add.text(760, 482, "", {});
        login_text.setOrigin(0.5, 0.5);
        login_text.text = "Login";
        login_text.setStyle({"align":"right","color":"#ffffffff","fontFamily":"Arial Narrow","fontSize":"38px"});

        // remember_text_2
        const remember_text_2 = this.add.text(598, 328, "", {});
        remember_text_2.setOrigin(0, 0.5);
        remember_text_2.text = "Remember me on this computer";
        remember_text_2.setStyle({"align":"right","color":"#000000ff","fontFamily":"Arial Narrow","fontSize":"30px"});

        // remember_text
        const remember_text = this.add.text(598, 382, "", {});
        remember_text.setOrigin(0, 0.5);
        remember_text.text = "Remember my password";
        remember_text.setStyle({"align":"right","color":"#000000ff","fontFamily":"Arial Narrow","fontSize":"30px"});

        // password_text
        const password_text = this.add.text(503, 259, "", {});
        password_text.setOrigin(0, 0.5);
        password_text.text = "Password:";
        password_text.setStyle({"align":"right","color":"#000000ff","fontFamily":"Arial Narrow","fontSize":"30px"});

        // username_input
        this.add.image(815, 200, "login", "input");

        // username_text
        const username_text = this.add.text(448, 200, "", {});
        username_text.setOrigin(0, 0.5);
        username_text.text = "Penguin Name:";
        username_text.setStyle({"align":"right","color":"#000000ff","fontFamily":"Arial Narrow","fontSize":"30px"});

        // password_input
        this.add.image(815, 259, "login", "input");

        // checkbox
        const checkbox = this.add.image(569, 328, "login", "checkbox");
        checkbox.setOrigin(0.41509434, 0.58490566);

        // checkbox_1
        const checkbox_1 = this.add.image(569, 382, "login", "checkbox");
        checkbox_1.setOrigin(0.41509434, 0.58490566);

        // login_button (components)
        const login_buttonButton = new Button(login_button);
        login_buttonButton.spriteName = "login-button";
        login_buttonButton.callback = () => this.onLoginClick();
    }

    /* START-USER-CODE */

    create() {
        this._create()

        let usernameField = '<input class="login-field" type="text" name="username">'
        let passwordField = '<input class="login-field" type="password" name="password">'

        this.elements.username = this.add.dom(815, 200).createFromHTML(usernameField)
        this.elements.password = this.add.dom(815, 259).createFromHTML(passwordField)

        let enterKey = this.input.keyboard.addKey('ENTER')
        enterKey.on('down', () => { this.onLoginClick() })

        this.input.on('pointerdown', () => { this.onSceneClick() })
    }

    onLoginClick() {
        let username = this.elements.username.getChildByName('username').value
        let password = this.elements.password.getChildByName('password').value

        console.log(username, password)
    }

    onSceneClick() {
        document.activeElement.blur() // Removes input focus
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Login
