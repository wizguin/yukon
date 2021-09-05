import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

class Map extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y);

        // block
        const block = scene.add.rectangle(0, 20, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.image(0, -15, "map", "bg");
        bg.setOrigin(0.5, 0.5007429420505201);
        this.add(bg);

        // dojo
        const dojo = scene.add.image(69, -290, "map", "dojo");
        dojo.setOrigin(0.5038759689922481, 0.5056179775280899);
        this.add(dojo);

        // mountains
        const mountains = scene.add.image(29, -256, "map", "mountains");
        this.add(mountains);

        // island
        const island = scene.add.image(-12, -10, "map", "island");
        island.setOrigin(0.5005417118093174, 0.5);
        this.add(island);

        // mtn
        const mtn = scene.add.image(-232, -236, "map", "mtn");
        this.add(mtn);

        // village
        const village = scene.add.image(-181, -159, "map", "village");
        village.setOrigin(0.503030303030303, 0.5041322314049587);
        this.add(village);

        // beach
        const beach = scene.add.image(-390, -74, "map", "beach");
        this.add(beach);

        // dock
        const dock = scene.add.image(-370, 134, "map", "dock");
        dock.setOrigin(0.5, 0.5037037037037037);
        this.add(dock);

        // town
        const town = scene.add.image(-128, 42, "map", "town");
        this.add(town);

        // forts
        const forts = scene.add.image(78, 50, "map", "forts");
        forts.setOrigin(0.5045045045045045, 0.5045871559633027);
        this.add(forts);

        // igloo
        const igloo = scene.add.image(201, 161, "map", "igloo");
        this.add(igloo);

        // plaza
        const plaza = scene.add.image(264, 42, "map", "plaza");
        plaza.setOrigin(0.5, 0.5038167938931297);
        this.add(plaza);

        // rink
        const rink = scene.add.image(52, -78, "map", "rink");
        rink.setOrigin(0.5023041474654378, 0.5);
        this.add(rink);

        // forest
        const forest = scene.add.image(291, -64, "map", "forest");
        forest.setOrigin(0.5027027027027027, 0.5057471264367817);
        this.add(forest);

        // cove
        const cove = scene.add.image(334, -149, "map", "cove");
        cove.setOrigin(0.5, 0.5058823529411764);
        this.add(cove);

        // mine
        const mine = scene.add.image(168, -194, "map", "mine");
        mine.setOrigin(0.5042016806722689, 0.5);
        this.add(mine);

        // berg
        const berg = scene.add.image(402, -190, "map", "berg");
        this.add(berg);

        // note
        const note = scene.add.image(419, 262, "map", "note");
        note.setOrigin(0.5017667844522968, 0.5);
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
        dojoButton.callback = () => this.onRoomClick(321);
        dojoButton.activeFrame = false;
        const dojoShowHint = new ShowHint(dojo);
        dojoShowHint.text = "Dojo Courtyard";

        // mtn (components)
        const mtnButton = new Button(mtn);
        mtnButton.spriteName = "mtn";
        mtnButton.callback = () => this.onRoomClick(230);
        mtnButton.activeFrame = false;
        const mtnShowHint = new ShowHint(mtn);
        mtnShowHint.text = "Ski Hill";

        // village (components)
        const villageButton = new Button(village);
        villageButton.spriteName = "village";
        villageButton.callback = () => this.onRoomClick(200);
        villageButton.activeFrame = false;
        const villageShowHint = new ShowHint(village);
        villageShowHint.text = "Ski Village";

        // beach (components)
        const beachButton = new Button(beach);
        beachButton.spriteName = "beach";
        beachButton.callback = () => this.onRoomClick(400);
        beachButton.activeFrame = false;
        const beachShowHint = new ShowHint(beach);
        beachShowHint.text = "The Beach";

        // dock (components)
        const dockButton = new Button(dock);
        dockButton.spriteName = "dock";
        dockButton.callback = () => this.onRoomClick(800);
        dockButton.activeFrame = false;
        const dockShowHint = new ShowHint(dock);
        dockShowHint.text = "The Dock";

        // town (components)
        const townButton = new Button(town);
        townButton.spriteName = "town";
        townButton.callback = () => this.onRoomClick(100);
        townButton.activeFrame = false;
        const townShowHint = new ShowHint(town);
        townShowHint.text = "Town";

        // forts (components)
        const fortsButton = new Button(forts);
        fortsButton.spriteName = "forts";
        fortsButton.callback = () => this.onRoomClick(801);
        fortsButton.activeFrame = false;
        const fortsShowHint = new ShowHint(forts);
        fortsShowHint.text = "Snow Forts";

        // igloo (components)
        const iglooButton = new Button(igloo);
        iglooButton.spriteName = "igloo";
        iglooButton.activeFrame = false;
        const iglooShowHint = new ShowHint(igloo);
        iglooShowHint.text = "Member Igloos";

        // plaza (components)
        const plazaButton = new Button(plaza);
        plazaButton.spriteName = "plaza";
        plazaButton.callback = () => this.onRoomClick(300);
        plazaButton.activeFrame = false;
        const plazaShowHint = new ShowHint(plaza);
        plazaShowHint.text = "The Plaza";

        // rink (components)
        const rinkButton = new Button(rink);
        rinkButton.spriteName = "rink";
        rinkButton.callback = () => this.onRoomClick(802);
        rinkButton.activeFrame = false;
        const rinkShowHint = new ShowHint(rink);
        rinkShowHint.text = "Stadium";

        // forest (components)
        const forestButton = new Button(forest);
        forestButton.spriteName = "forest";
        forestButton.callback = () => this.onRoomClick(809);
        forestButton.activeFrame = false;
        const forestShowHint = new ShowHint(forest);
        forestShowHint.text = "Forest";

        // cove (components)
        const coveButton = new Button(cove);
        coveButton.spriteName = "cove";
        coveButton.callback = () => this.onRoomClick(810);
        coveButton.activeFrame = false;
        const coveShowHint = new ShowHint(cove);
        coveShowHint.text = "Cove";

        // mine (components)
        const mineButton = new Button(mine);
        mineButton.spriteName = "mine";
        mineButton.callback = () => this.onRoomClick(807);
        mineButton.activeFrame = false;
        const mineShowHint = new ShowHint(mine);
        mineShowHint.text = "Mine Shack";

        // berg (components)
        const bergButton = new Button(berg);
        bergButton.spriteName = "berg";
        bergButton.callback = () => this.onRoomClick(805);
        bergButton.activeFrame = false;

        // note (components)
        new Interactive(note);

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => { this.visible = false };

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    onRoomClick(id) {
        let room = this.crumbs.rooms[id]
        if (this.world.room.key == room.name) return

        this.visible = false

        this.world.client.sendJoinRoom(id, room.name, room.x, room.y, 80)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Map
