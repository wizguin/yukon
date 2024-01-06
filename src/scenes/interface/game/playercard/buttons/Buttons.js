import BaseContainer from '@scenes/base/BaseContainer'

import { Button, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Buttons extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.report_button;
        /** @type {Phaser.GameObjects.Image} */
        this.ignore_button;
        /** @type {Phaser.GameObjects.Image} */
        this.mail_button;
        /** @type {Phaser.GameObjects.Image} */
        this.igloo_button;
        /** @type {Phaser.GameObjects.Image} */
        this.profile_button;
        /** @type {Phaser.GameObjects.Image} */
        this.buddy_button;
        /** @type {Phaser.GameObjects.Image} */
        this.report_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.ignore_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.mail_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.igloo_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.profile_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.buddy_icon;


        // report_button
        const report_button = scene.add.image(150, 0, "main", "blue-button-disabled");
        this.add(report_button);

        // ignore_button
        const ignore_button = scene.add.image(90, 0, "main", "blue-button-disabled");
        this.add(ignore_button);

        // mail_button
        const mail_button = scene.add.image(30, 0, "main", "blue-button-disabled");
        this.add(mail_button);

        // igloo_button
        const igloo_button = scene.add.image(-30, 0, "main", "blue-button-disabled");
        this.add(igloo_button);

        // profile_button
        const profile_button = scene.add.image(-90, 0, "main", "blue-button-disabled");
        this.add(profile_button);

        // buddy_button
        const buddy_button = scene.add.image(-150, 0, "main", "blue-button-disabled");
        this.add(buddy_button);

        // report_icon
        const report_icon = scene.add.image(150, -1, "main", "mod-icon-disabled");
        this.add(report_icon);

        // ignore_icon
        const ignore_icon = scene.add.image(90, -2, "main", "ignore-icon-disabled");
        this.add(ignore_icon);

        // mail_icon
        const mail_icon = scene.add.image(30, -2, "main", "mail-icon-disabled");
        this.add(mail_icon);

        // igloo_icon
        const igloo_icon = scene.add.image(-30, -2, "main", "igloo-icon-disabled");
        this.add(igloo_icon);

        // profile_icon
        const profile_icon = scene.add.image(-90, -2, "main", "help-icon-disabled");
        this.add(profile_icon);

        // buddy_icon
        const buddy_icon = scene.add.image(-150, -2, "main", "buddies-icon-disabled");
        this.add(buddy_icon);

        // report_button (components)
        const report_buttonButton = new Button(report_button);
        report_buttonButton.spriteName = "blue-button";
        report_buttonButton.callback = () => this.onReportClick();
        const report_buttonShowHint = new ShowHint(report_button);
        report_buttonShowHint.text = "report_player_hint";

        // ignore_button (components)
        const ignore_buttonButton = new Button(ignore_button);
        ignore_buttonButton.spriteName = "blue-button";
        ignore_buttonButton.callback = () => this.onIgnoreClick();
        const ignore_buttonShowHint = new ShowHint(ignore_button);
        ignore_buttonShowHint.text = "add_ignore_hint";

        // mail_button (components)
        const mail_buttonButton = new Button(mail_button);
        mail_buttonButton.spriteName = "blue-button";
        mail_buttonButton.callback = () => this.onMailClick();
        const mail_buttonShowHint = new ShowHint(mail_button);
        mail_buttonShowHint.text = "send_mail_hint";

        // igloo_button (components)
        const igloo_buttonButton = new Button(igloo_button);
        igloo_buttonButton.spriteName = "blue-button";
        igloo_buttonButton.callback = () => this.onIglooClick();
        const igloo_buttonShowHint = new ShowHint(igloo_button);
        igloo_buttonShowHint.text = "visit_home_hint";

        // profile_button (components)
        const profile_buttonButton = new Button(profile_button);
        profile_buttonButton.spriteName = "blue-button";
        profile_buttonButton.callback = () => this.onFindClick();
        const profile_buttonShowHint = new ShowHint(profile_button);
        profile_buttonShowHint.text = "profile_hint";

        // buddy_button (components)
        const buddy_buttonButton = new Button(buddy_button);
        buddy_buttonButton.spriteName = "blue-button";
        buddy_buttonButton.callback = () => this.onBuddyClick();
        const buddy_buttonShowHint = new ShowHint(buddy_button);
        buddy_buttonShowHint.text = "add_buddy_hint";

        this.report_button = report_button;
        this.ignore_button = ignore_button;
        this.mail_button = mail_button;
        this.igloo_button = igloo_button;
        this.profile_button = profile_button;
        this.buddy_button = buddy_button;
        this.report_icon = report_icon;
        this.ignore_icon = ignore_icon;
        this.mail_icon = mail_icon;
        this.igloo_icon = igloo_icon;
        this.profile_icon = profile_icon;
        this.buddy_icon = buddy_icon;

        /* START-USER-CTR-CODE */

        this.buttonNames = ['buddy', 'profile', 'igloo', 'mail', 'ignore', 'report']
        this.buttons = this.initButtons()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get username() {
        return this.parentContainer.username.text
    }

    initButtons() {
        let buttons = {}

        for (let name of this.buttonNames) {
            let button = this[`${name}_button`]
            let icon = this[`${name}_icon`]
            let iconTexture = icon.frame.name.replace('-disabled', '')
            let hint = button.__ShowHint.text.slice()

            buttons[name] = { button: button, icon: icon, buttonTexture: 'blue-button', iconTexture: iconTexture, hint: hint }
        }

        return buttons
    }

    updateButtons(relationship) {
        this.resetButtons()

        switch (relationship) {
            case 'online':
                this.enableButton('buddy', 'buddies-remove-icon', 'remove_buddy_hint')
                this.enableButtons(['profile', 'igloo', 'mail', 'report'])
                break

            case 'offline':
                this.enableButton('buddy', 'buddies-remove-icon', 'remove_buddy_hint')
                this.enableButtons(['igloo', 'mail', 'report'])
                break

            case 'ignore':
                this.enableButton('ignore', 'ignore-remove-icon', 'remove_ignore_hint')
                this.enableButton('report')
                break

            default:
                this.enableButtons(['buddy', 'mail', 'ignore', 'report'])
                break
        }

        if (this.world.client.isModerator) {
            //this.enableButton('profile', 'mute-icon', 'Mute Player')
            this.enableButton('ignore', 'ignore-icon', 'kick_player_hint')
            this.enableButton('report', 'mod-icon', 'ban_player_hint')
        }

        if (!['online', 'offline'].includes(relationship)) {
            this.network.send('get_igloo_open', { igloo: this.parentContainer.id })
        }
    }

    resetButtons() {
        for (let name of this.buttonNames) {
            this.disableButton(name)
        }
    }

    enableButtons(names) {
        for (let name of names) {
            this.enableButton(name)
        }
    }

    enableButton(name, icon = this.buttons[name].iconTexture, hint = this.buttons[name].hint) {
        let button = this.buttons[name]

        button.button.setInteractive()
        button.button.setTexture('main', button.buttonTexture)
        button.icon.setTexture('main', icon)
        button.button.__ShowHint.text = hint
    }

    disableButton(name) {
        let button = this.buttons[name]

        button.button.disableInteractive()
        button.button.setTexture('main', `${button.buttonTexture}-disabled`)
        button.icon.setTexture('main', `${button.iconTexture}-disabled`)
    }

    onBuddyClick() {
        if (this.buddy_icon.frame.name == 'buddies-remove-icon') {
            this.showRemoveBuddy()
        } else {
            this.showRequestBuddy()
        }
    }

    onFindClick() {
        this.network.send('buddy_find', { id: this.parentContainer.id })
    }

    onIglooClick() {
        this.world.client.sendJoinIgloo(this.parentContainer.id)
    }

    onMailClick() {
        this.interface.main.mailbook.showPostcards(this.parentContainer.id, this.username)
    }

    onIgnoreClick() {
        if (this.world.client.isModerator) {
            this.showKick()
        } else if (this.ignore_icon.frame.name == 'ignore-remove-icon') {
            this.showRemoveIgnore()
        } else {
            this.showAddIgnore()
        }
    }

    onReportClick() {
        if (this.world.client.isModerator) {
            this.showBan()
        }
    }

    showRequestBuddy() {
        let text = `Would you like to add ${this.username}\nto your buddy list?`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('buddy_request', { id: this.parentContainer.id })

            this.interface.prompt.showWindow('Request Sent', 'single')
        })
    }

    showRemoveBuddy() {
        let text = `Would you like to remove ${this.username}\nfrom your buddy list?`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('buddy_remove', { id: this.parentContainer.id })

            this.interface.prompt.window.visible = false
        })
    }

    showAddIgnore() {
        let text = `Would you like to add ${this.username}\nto your ignore list?`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('ignore_add', { id: this.parentContainer.id })

            this.interface.prompt.showWindow('Done', 'single')
        })
    }

    showRemoveIgnore() {
        let text = `Would you like to remove ${this.username}\nfrom your ignore list?`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('ignore_remove', { id: this.parentContainer.id })

            this.interface.prompt.showWindow('Done', 'single')
        })
    }

    showMute() {
        let text = `Mute Player: ${this.username}`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('mute_player', { id: this.parentContainer.id })

            this.interface.prompt.window.visible = false
        })
    }

    showKick() {
        let text = `Kick Player: ${this.username}`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('kick_player', { id: this.parentContainer.id })

            this.interface.prompt.window.visible = false
        })
    }

    showBan() {
        let text = `Ban Player: ${this.username}`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('ban_player', { id: this.parentContainer.id })

            this.interface.prompt.window.visible = false
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
