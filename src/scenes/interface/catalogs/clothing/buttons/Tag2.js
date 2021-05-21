import { Button } from '@components/components'


/* START OF COMPILED CODE */

class Tag2 extends Phaser.GameObjects.Image {
    
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture || "clothingcatalog", frame !== undefined && frame !== null ? frame : "buy2");
        
        this.setOrigin(0, 0);
        
        // this (components)
        const thisButton = new Button(this);
        thisButton.spriteName = "buy2";
        thisButton.callback = () => this.scene.buy(this.item);
        
        /** @type {number} */
        this.item = 0;
        
        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }
    
    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Tag2
