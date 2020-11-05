import { Button, Interactive } from '@/components/components'


/* START OF COMPILED CODE */

class Map extends Phaser.GameObjects.Container {
    
    constructor(scene, x, y) {
        super(scene, x, y);
        
        // block
        const block = scene.add.image(0, 21, "main", "block");
        this.add(block);
        
        // bg
        const bg = scene.add.image(0, -15, "map", "bg");
        this.add(bg);
        
        // dojo
        const dojo = scene.add.image(69, -290, "map", "dojo");
        this.add(dojo);
        
        // mountains
        const mountains = scene.add.image(29, -256, "map", "mountains");
        this.add(mountains);
        
        // island
        const island = scene.add.image(-12, -10, "map", "island");
        this.add(island);
        
        // mtn
        const mtn = scene.add.image(-232, -236, "map", "mtn");
        this.add(mtn);
        
        // village
        const village = scene.add.image(-181, -159, "map", "village");
        this.add(village);
        
        // beach
        const beach = scene.add.image(-390, -74, "map", "beach");
        this.add(beach);
        
        // dock
        const dock = scene.add.image(-370, 134, "map", "dock");
        this.add(dock);
        
        // town
        const town = scene.add.image(-128, 42, "map", "town");
        this.add(town);
        
        // forts
        const forts = scene.add.image(78, 50, "map", "forts");
        this.add(forts);
        
        // igloo
        const igloo = scene.add.image(201, 161, "map", "igloo");
        this.add(igloo);
        
        // plaza
        const plaza = scene.add.image(264, 42, "map", "plaza");
        this.add(plaza);
        
        // rink
        const rink = scene.add.image(52, -78, "map", "rink");
        this.add(rink);
        
        // forest
        const forest = scene.add.image(291, -64, "map", "forest");
        this.add(forest);
        
        // cove
        const cove = scene.add.image(334, -149, "map", "cove");
        this.add(cove);
        
        // mine
        const mine = scene.add.image(168, -194, "map", "mine");
        this.add(mine);
        
        // berg
        const berg = scene.add.image(402, -190, "map", "berg");
        this.add(berg);
        
        // note
        const note = scene.add.image(419, 262, "map", "note");
        this.add(note);
        
        // grey_button
        const grey_button = scene.add.image(483, -313, "main", "grey-button");
        this.add(grey_button);
        
        // grey_x
        const grey_x = scene.add.image(483, -315, "main", "grey-x");
        this.add(grey_x);
        
        // block (components)
        new Interactive(block);
        
        // bg (components)
        new Interactive(bg);
        
        // dojo (components)
        const dojoButton = new Button(dojo);
        dojoButton.spriteName = "dojo";
        dojoButton.activeFrame = false;
        
        // mtn (components)
        const mtnButton = new Button(mtn);
        mtnButton.spriteName = "mtn";
        mtnButton.activeFrame = false;
        
        // village (components)
        const villageButton = new Button(village);
        villageButton.spriteName = "village";
        villageButton.callback = () => { this.onRoomClick(200) };
        villageButton.activeFrame = false;
        
        // beach (components)
        const beachButton = new Button(beach);
        beachButton.spriteName = "beach";
        beachButton.activeFrame = false;
        
        // dock (components)
        const dockButton = new Button(dock);
        dockButton.spriteName = "dock";
        dockButton.activeFrame = false;
        
        // town (components)
        const townButton = new Button(town);
        townButton.spriteName = "town";
        townButton.activeFrame = false;
        
        // forts (components)
        const fortsButton = new Button(forts);
        fortsButton.spriteName = "forts";
        fortsButton.activeFrame = false;
        
        // igloo (components)
        const iglooButton = new Button(igloo);
        iglooButton.spriteName = "igloo";
        iglooButton.activeFrame = false;
        
        // plaza (components)
        const plazaButton = new Button(plaza);
        plazaButton.spriteName = "plaza";
        plazaButton.activeFrame = false;
        
        // rink (components)
        const rinkButton = new Button(rink);
        rinkButton.spriteName = "rink";
        rinkButton.activeFrame = false;
        
        // forest (components)
        const forestButton = new Button(forest);
        forestButton.spriteName = "forest";
        forestButton.activeFrame = false;
        
        // cove (components)
        const coveButton = new Button(cove);
        coveButton.spriteName = "cove";
        coveButton.activeFrame = false;
        
        // mine (components)
        const mineButton = new Button(mine);
        mineButton.spriteName = "mine";
        mineButton.activeFrame = false;
        
        // berg (components)
        const bergButton = new Button(berg);
        bergButton.spriteName = "berg";
        bergButton.activeFrame = false;
        
        // note (components)
        new Interactive(note);
        
        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => { this.visible = false };
        
        /* START-USER-CTR-CODE */

        this.network = scene.network
        this.rooms = scene.crumbs.rooms

        /* END-USER-CTR-CODE */
    }
    
    /* START-USER-CODE */

    onRoomClick(id) {
        let room = this.rooms[id]

        this.network.send('join_room', { room: id, x: room.x, y: room.y })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Map