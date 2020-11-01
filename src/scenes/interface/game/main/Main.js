import BaseScene from '@scenes/base/BaseScene'

import { Button } from '@/components/components'


/* START OF COMPILED CODE */

class Main extends BaseScene {

    constructor() {
        super("Main");

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    create() {

        // map_button
        const map_button = this.add.sprite(90, 888, "main", "map-button");

        // news_button
        const news_button = this.add.image(70, 61, "main", "news-button");

        // mail_button
        const mail_button = this.add.image(170, 49, "main", "mail-button");

        // mod_button
        const mod_button = this.add.image(1434, 69, "main", "mod-button");

        // dock
        this.add.image(760, 924, "main", "dock");

        // chat_box
        this.add.image(748, 931, "main", "chat-box");

        // chat_button
        const chat_button = this.add.image(246, 931, "main", "blue-button");

        // chat_icon
        this.add.image(246, 929, "main", "chat-icon");

        // emote_button
        const emote_button = this.add.image(306, 931, "main", "blue-button");

        // emote_icon
        this.add.image(306, 929, "main", "emote-icon");

        // action_button
        const action_button = this.add.image(366, 931, "main", "blue-button");

        // action_icon
        this.add.image(366, 927, "main", "action-icon");

        // snowball_button
        const snowball_button = this.add.image(426, 931, "main", "blue-button");

        // snowball_icon
        this.add.image(426, 930, "main", "snowball-icon");

        // chat_send_button
        const chat_send_button = this.add.image(1026, 931, "main", "blue-button");

        // chat_send_icon
        this.add.image(1026, 929, "main", "chat-icon");

        // player_button
        const player_button = this.add.image(1086, 931, "main", "blue-button");

        // badge_member
        this.add.image(1086, 929, "main", "badge-member");

        // buddies_button
        const buddies_button = this.add.image(1146, 931, "main", "blue-button");

        // buddies_icon
        this.add.image(1146, 929, "main", "buddies-icon");

        // igloo_button
        const igloo_button = this.add.image(1206, 931, "main", "blue-button");

        // igloo_icon
        this.add.image(1206, 929, "main", "igloo-icon");

        // help_button
        const help_button = this.add.image(1266, 931, "main", "blue-button");

        // help_icon
        this.add.image(1266, 929, "main", "help-icon");

        // container_1
        const container_1 = this.add.container(760, -24);

        // tab
        const tab = this.add.image(0, 37, "main", "tab");
        container_1.add(tab);

        // tab_arrow
        const tab_arrow = this.add.image(0, 29, "main", "tab-arrow");
        container_1.add(tab_arrow);

        // map_button (components)
        const map_buttonButton = new Button(map_button);
        map_buttonButton.spriteName = "map-button";
        map_buttonButton.activeFrame = false;

        // news_button (components)
        const news_buttonButton = new Button(news_button);
        news_buttonButton.spriteName = "news-button";
        news_buttonButton.activeFrame = false;

        // mail_button (components)
        const mail_buttonButton = new Button(mail_button);
        mail_buttonButton.spriteName = "mail-button";
        mail_buttonButton.activeFrame = false;

        // mod_button (components)
        const mod_buttonButton = new Button(mod_button);
        mod_buttonButton.spriteName = "mod-button";
        mod_buttonButton.activeFrame = false;

        // chat_button (components)
        const chat_buttonButton = new Button(chat_button);
        chat_buttonButton.spriteName = "blue-button";

        // emote_button (components)
        const emote_buttonButton = new Button(emote_button);
        emote_buttonButton.spriteName = "blue-button";

        // action_button (components)
        const action_buttonButton = new Button(action_button);
        action_buttonButton.spriteName = "blue-button";

        // snowball_button (components)
        const snowball_buttonButton = new Button(snowball_button);
        snowball_buttonButton.spriteName = "blue-button";

        // chat_send_button (components)
        const chat_send_buttonButton = new Button(chat_send_button);
        chat_send_buttonButton.spriteName = "blue-button";

        // player_button (components)
        const player_buttonButton = new Button(player_button);
        player_buttonButton.spriteName = "blue-button";

        // buddies_button (components)
        const buddies_buttonButton = new Button(buddies_button);
        buddies_buttonButton.spriteName = "blue-button";

        // igloo_button (components)
        const igloo_buttonButton = new Button(igloo_button);
        igloo_buttonButton.spriteName = "blue-button";

        // help_button (components)
        const help_buttonButton = new Button(help_button);
        help_buttonButton.spriteName = "blue-button";
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Main
