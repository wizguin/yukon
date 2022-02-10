import { SimpleButton, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class IglooButton extends Phaser.GameObjects.Image {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 760, y ?? 480, texture || "map", frame ?? "igloo/igloo");

        this.setOrigin(0.5054945054945055, 0.5058823529411764);

        // this (components)
        const thisSimpleButton = new SimpleButton(this);
        thisSimpleButton.callback = () => this.onClick();
        new ShowHint(this);

        /* START-USER-CTR-CODE */

        this.scene = scene
        this.id

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    onClick() {
        if (this.id) {
            this.scene.world.client.sendJoinIgloo(this.id)
        }
    }

    reset() {
        this.id = null
        this.__ShowHint.text = null

        this.visible = false
    }

    show(igloo) {
        this.id = igloo.id
        this.__ShowHint.text = igloo.username

        this.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
