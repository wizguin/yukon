import ItemPromptLoader from '@engine/loaders/ItemPromptLoader'


/* START OF COMPILED CODE */

import BaseImage from "../../../base/BaseImage";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PromptIcon extends BaseImage {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "__DEFAULT", frame);

        this.visible = false;

        /* START-USER-CTR-CODE */

        // Active texture key
        this.currentKey = null

        this.loader = new ItemPromptLoader(scene, this)

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    loadIcon(loadConfig) {
        this.visible = false

        if (!loadConfig.key) {
            return
        }

        this.currentKey = loadConfig.key

        this.loader.loadIcon(loadConfig)
    }

    addIcon(key, scale) {
        if (!this.parentContainer.visible || key !== this.currentKey) {
            return
        }

        this.setTexture(key)
        this.scale = scale

        this.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
