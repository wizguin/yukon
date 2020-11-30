import BaseScene from '@scenes/base/BaseScene'

import { Button, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

class Start extends BaseScene {

    constructor() {
        super("Start");

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    create() {

        // bg
        const bg = this.add.image(0, 0, "load", "bg");
        bg.setOrigin(0, 0);

        // christmas
        this.add.image(760, 420, "start", "christmas");

        // bottom
        this.add.image(760, 766, "start", "bottom");

        // blog-text
        this.add.image(364, 884, "start", "blog-text");

        // blogButton
        const blogButton = this.add.image(364, 812, "start", "blog");

        // createButton
        const createButton = this.add.image(1145, 771, "start", "create-button");

        // memberButton
        const memberButton = this.add.image(1145, 855, "start", "member-button");

        // startButton
        const startButton = this.add.sprite(760, 826, "start", "start-button");

        // startText
        this.add.image(760, 826, "start", "start-text");

        // logo
        this.add.image(760, 682, "start", "logo");

        // blogButton (components)
        const blogButtonSimpleButton = new SimpleButton(blogButton);
        blogButtonSimpleButton.callback = () => this.onBlogClick();

        // createButton (components)
        const createButtonButton = new Button(createButton);
        createButtonButton.spriteName = "create-button";
        createButtonButton.activeFrame = false;

        // memberButton (components)
        const memberButtonButton = new Button(memberButton);
        memberButtonButton.spriteName = "member-button";
        memberButtonButton.activeFrame = false;

        // startButton (components)
        const startButtonButton = new Button(startButton);
        startButtonButton.spriteName = "start-button";
        startButtonButton.callback = () => this.onStartClick();
    }

    /* START-USER-CODE */

    onBlogClick() {
        console.log('Blog clicked')
    }

    onStartClick() {
        this.scene.start('Login')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Start
