import BaseContainer from '@scenes/base/BaseContainer'

import { SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

class ChatLog extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y);

        // chatlog_bg
        const chatlog_bg = scene.add.image(0, 0, "main", "chatlog/bg");
        chatlog_bg.visible = false;
        this.add(chatlog_bg);

        // tab
        const tab = scene.add.container(0, 440);
        this.add(tab);

        // tab_handle
        const tab_handle = scene.add.image(0, 8, "main", "tab");
        tab.add(tab_handle);

        // arrow
        const arrow = scene.add.image(0, 0, "main", "tab-arrow");
        tab.add(arrow);

        // tab_handle (components)
        const tab_handleSimpleButton = new SimpleButton(tab_handle);
        tab_handleSimpleButton.callback = () => { this.onTabClick() };

        this.arrow = arrow;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    onTabClick() {

    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default ChatLog
