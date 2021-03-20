import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

class LogCabin extends IglooScene {
    
    constructor() {
        super("LogCabin");
        
        /** @type {Phaser.GameObjects.Layer} */
        this.floor;
        /** @type {Phaser.GameObjects.Image} */
        this.mask;
        
        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 728]
        this.wallSpawn = [760, 450]
        this.wallBounds = [490, 1030]
        this.floorFrame = 5

        /* END-USER-CTR-CODE */
    }
    
    _preload() {
        
        this.load.pack("logcabin-pack", "assets/media/igloos/buildings/sprites/logcabin/logcabin-pack.json");
    }
    
    _create() {
        
        // floor
        const floor = this.add.layer();
        
        // floor_1
        const floor_1 = this.add.image(760, 703, "logcabin", "floor_1");
        floor.add(floor_1);
        
        // floor_2
        const floor_2 = this.add.image(748, 838, "logcabin", "floor_2");
        floor_2.setOrigin(0.5, 0.5070422535211268);
        floor.add(floor_2);
        
        // mask
        const mask = this.add.image(757, 740, "logcabin", "mask");
        mask.visible = false;
        
        // wall
        const wall = this.add.image(760, 426, "logcabin", "wall");
        wall.setOrigin(0.5003441156228493, 0.5006896551724138);
        
        // door
        this.add.image(421, 555, "logcabin", "door");
        
        this.floor = floor;
        this.mask = mask;
    }
    
    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default LogCabin
