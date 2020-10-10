
// You can write more code here

/* START OF COMPILED CODE */

class Start extends Phaser.Scene {
    
    constructor() {
        super("Start");
        
        /* START-USER-CTR-CODE */
        // Write your code here.
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
        
        // blog
        this.add.image(364, 812, "start", "blog");
        
        // new
        this.add.image(1141, 775, "start", "new");
        
        // member
        this.add.image(1157, 860, "start", "member");
        
        // penguin_1
        this.add.image(1268, 771, "start", "penguin-1");
        
        // penguin_2
        this.add.image(1264, 855, "start", "penguin-2");
        
        // start_button
        this.add.sprite(760, 826, "start", "start-button");
        
        // start_text
        this.add.image(760, 826, "start", "start-text");
        
        // logo
        this.add.image(760, 682, "start", "logo");
    }
    
    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Start
