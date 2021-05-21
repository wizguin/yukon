import { Button } from '@components/components'


/* START OF COMPILED CODE */

class PhotoButton extends Phaser.GameObjects.Image {
    
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture || "clothingcatalog", frame !== undefined && frame !== null ? frame : "photo_button");
        
        // this (components)
        const thisButton = new Button(this);
        thisButton.spriteName = "photo_button";
        thisButton.callback = () => this.scene.buy(this.item);
        thisButton.activeFrame = false;
        
        /** @type {number} */
        this.item = 0;
        
        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }
    
    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default PhotoButton
