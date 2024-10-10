/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import SimpleButton from "../../components/SimpleButton";
import MoveTo from "../../components/MoveTo";
import Zone from "../../components/Zone";
import ShowHint from "../../components/ShowHint";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Agent extends RoomScene {

    constructor() {
        super("Agent");

        /** @type {Phaser.GameObjects.Image} */
        this.fish;
        /** @type {Phaser.GameObjects.Image} */
        this.missions;
        /** @type {Phaser.GameObjects.Sprite} */
        this.door;
        /** @type {Phaser.GameObjects.Sprite} */
        this.danceFloor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            sport: () => this.triggerRoom(210, 518, 528)
        }

        this.music = 7

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("agent-pack", "assets/media/rooms/agent/agent-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-6, -4, "agent", "bg");
        bg.setOrigin(0, 0);

        // secret
        const secret = this.add.image(1276, 337, "agent", "secret/secret0001");
        secret.setOrigin(0, 0);

        // fish
        const fish = this.add.image(1329, 808, "agent", "fish");
        fish.setOrigin(0, 0);

        // missions
        const missions = this.add.image(1347, 691, "agent", "missions");
        missions.setOrigin(0, 0);

        // chair2
        const chair2 = this.add.image(1168, 607, "agent", "chair2");
        chair2.setOrigin(0.503448275862069, 0.441747572815534);

        // chair1
        const chair1 = this.add.image(418, 594, "agent", "chair1");
        chair1.setOrigin(0.503448275862069, 0.441747572815534);

        // door
        const door = this.add.sprite(137, 283, "agent", "door/door0001");
        door.setOrigin(0, 0);

        // danceFloor
        const danceFloor = this.add.sprite(518, 245, "agent", "dance/floor0001");
        danceFloor.setOrigin(0, 0);

        // danceFloorOutline
        const danceFloorOutline = this.add.image(514, 243, "agent", "dance/floor_outline");
        danceFloorOutline.setOrigin(0, 0);

        // danceFront
        const danceFront = this.add.image(573, 213, "agent", "dance/front");
        danceFront.setOrigin(0, 0);

        // danceScreen
        const danceScreen = this.add.image(508, 199, "agent", "dance/screen");
        danceScreen.setOrigin(0, 0);

        // screenZones
        const screenZones = this.add.layer();
        screenZones.visible = false;

        // beach
        const beach = this.add.rectangle(1133.0873552635312, 352.90441144257784, 97, 71);
        beach.angle = 8;
        beach.alpha = 0.5;
        beach.isFilled = true;
        beach.fillColor = 65280;
        screenZones.add(beach);

        // plaza
        const plaza = this.add.rectangle(1043.7324374131858, 343.11865112930536, 94, 71);
        plaza.angle = 2;
        plaza.alpha = 0.5;
        plaza.isFilled = true;
        plaza.fillColor = 65280;
        screenZones.add(plaza);

        // pet
        const pet = this.add.rectangle(949, 337.5, 96, 69);
        pet.alpha = 0.5;
        pet.isFilled = true;
        pet.fillColor = 65280;
        screenZones.add(pet);

        // forts
        const forts = this.add.rectangle(849, 335.5, 96, 67);
        forts.alpha = 0.5;
        forts.isFilled = true;
        forts.fillColor = 65280;
        screenZones.add(forts);

        // coffee
        const coffee = this.add.rectangle(728, 342, 94, 68);
        coffee.alpha = 0.5;
        coffee.isFilled = true;
        coffee.fillColor = 65280;
        screenZones.add(coffee);

        // book
        const book = this.add.rectangle(621, 342, 94, 70);
        book.alpha = 0.5;
        book.isFilled = true;
        book.fillColor = 65280;
        screenZones.add(book);

        // lodge
        const lodge = this.add.rectangle(523, 351.5, 96, 69);
        lodge.alpha = 0.5;
        lodge.isFilled = true;
        lodge.fillColor = 65280;
        screenZones.add(lodge);

        // sport
        const sport = this.add.rectangle(421.5, 356.5, 95, 69);
        sport.alpha = 0.5;
        sport.isFilled = true;
        sport.fillColor = 65280;
        screenZones.add(sport);

        // beacon
        const beacon = this.add.rectangle(1184.8288705945015, 274.3372001349926, 74, 75);
        beacon.angle = 14;
        beacon.alpha = 0.5;
        beacon.isFilled = true;
        beacon.fillColor = 65280;
        screenZones.add(beacon);

        // light
        const light = this.add.rectangle(1101.985003206879, 251.52012361213565, 89, 69);
        light.angle = 4;
        light.alpha = 0.5;
        light.isFilled = true;
        light.fillColor = 65280;
        screenZones.add(light);

        // pizza
        const pizza = this.add.rectangle(1012.9752595163882, 244.79914949461818, 97, 69);
        pizza.angle = 4;
        pizza.alpha = 0.5;
        pizza.isFilled = true;
        pizza.fillColor = 65280;
        screenZones.add(pizza);

        // rink
        const rink = this.add.rectangle(920, 242.5, 100, 69);
        rink.alpha = 0.5;
        rink.isFilled = true;
        rink.fillColor = 65280;
        screenZones.add(rink);

        // shop
        const shop = this.add.rectangle(835, 242.5, 96, 69);
        shop.alpha = 0.5;
        shop.isFilled = true;
        shop.fillColor = 65280;
        screenZones.add(shop);

        // town
        const town = this.add.rectangle(746.5, 247.5, 97, 69);
        town.alpha = 0.5;
        town.isFilled = true;
        town.fillColor = 65280;
        screenZones.add(town);

        // dock
        const dock = this.add.rectangle(652, 239, 96, 68);
        dock.alpha = 0.5;
        dock.isFilled = true;
        dock.fillColor = 65280;
        screenZones.add(dock);

        // dance
        const dance = this.add.rectangle(554.5, 249, 93, 68);
        dance.alpha = 0.5;
        dance.isFilled = true;
        dance.fillColor = 65280;
        screenZones.add(dance);

        // lounge
        const lounge = this.add.rectangle(465.24528816342354, 257.71045848727226, 100, 68);
        lounge.angle = -8;
        lounge.alpha = 0.5;
        lounge.isFilled = true;
        lounge.fillColor = 65280;
        screenZones.add(lounge);

        // attic
        const attic = this.add.rectangle(364.26475206017494, 276.9888046979904, 96, 68);
        attic.angle = -8;
        attic.alpha = 0.5;
        attic.isFilled = true;
        attic.fillColor = 65280;
        screenZones.add(attic);

        // stage
        const stage = this.add.rectangle(1025, 152.5, 94, 71);
        stage.alpha = 0.5;
        stage.isFilled = true;
        stage.fillColor = 65280;
        screenZones.add(stage);

        // cove
        const cove = this.add.rectangle(928.5, 148, 93, 70);
        cove.alpha = 0.5;
        cove.isFilled = true;
        cove.fillColor = 65280;
        screenZones.add(cove);

        // forest
        const forest = this.add.rectangle(834.5, 144.5, 83, 69);
        forest.alpha = 0.5;
        forest.isFilled = true;
        forest.fillColor = 65280;
        screenZones.add(forest);

        // dojo
        const dojo = this.add.rectangle(742, 144.5, 94, 69);
        dojo.alpha = 0.5;
        dojo.isFilled = true;
        dojo.fillColor = 65280;
        screenZones.add(dojo);

        // mtn
        const mtn = this.add.rectangle(646.5, 148.5, 95, 69);
        mtn.alpha = 0.5;
        mtn.isFilled = true;
        mtn.fillColor = 65280;
        screenZones.add(mtn);

        // village
        const village = this.add.rectangle(545, 157.5, 94, 67);
        village.alpha = 0.5;
        village.isFilled = true;
        village.fillColor = 65280;
        screenZones.add(village);

        // dojoext
        const dojoext = this.add.rectangle(443.5, 163, 87, 64);
        dojoext.alpha = 0.5;
        dojoext.isFilled = true;
        dojoext.fillColor = 65280;
        screenZones.add(dojoext);

        // lists
        const sort = [chair2, chair1];

        // fish (components)
        const fishButton = new Button(fish);
        fishButton.spriteName = "fish";
        fishButton.callback = () => this.onFishClick();
        fishButton.activeFrame = false;
        fishButton.pixelPerfect = true;

        // missions (components)
        const missionsButton = new Button(missions);
        missionsButton.spriteName = "missions";
        missionsButton.callback = () => this.onMissionsClick();
        missionsButton.activeFrame = false;
        missionsButton.pixelPerfect = true;

        // door (components)
        const doorSimpleButton = new SimpleButton(door);
        doorSimpleButton.hoverCallback = () => this.onDoorOver();
        doorSimpleButton.hoverOutCallback = () => this.onDoorOut();
        doorSimpleButton.pixelPerfect = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 200;
        doorMoveTo.y = 600;

        // beach (components)
        const beachZone = new Zone(beach);
        beachZone.callback = () => this.onScreenClick(400);
        const beachShowHint = new ShowHint(beach);
        beachShowHint.text = "beach_hint";

        // plaza (components)
        const plazaZone = new Zone(plaza);
        plazaZone.callback = () => this.onScreenClick(300);
        const plazaShowHint = new ShowHint(plaza);
        plazaShowHint.text = "plaza_hint";

        // pet (components)
        const petZone = new Zone(pet);
        petZone.callback = () => this.onScreenClick(310);
        const petShowHint = new ShowHint(pet);
        petShowHint.text = "pet_hint";

        // forts (components)
        const fortsZone = new Zone(forts);
        fortsZone.callback = () => this.onScreenClick(801);
        const fortsShowHint = new ShowHint(forts);
        fortsShowHint.text = "forts_hint";

        // coffee (components)
        const coffeeZone = new Zone(coffee);
        coffeeZone.callback = () => this.onScreenClick(110);
        const coffeeShowHint = new ShowHint(coffee);
        coffeeShowHint.text = "coffee_hint";

        // book (components)
        const bookZone = new Zone(book);
        bookZone.callback = () => this.onScreenClick(111);
        const bookShowHint = new ShowHint(book);
        bookShowHint.text = "book_hint";

        // lodge (components)
        const lodgeZone = new Zone(lodge);
        lodgeZone.callback = () => this.onScreenClick(220);
        const lodgeShowHint = new ShowHint(lodge);
        lodgeShowHint.text = "lodge_hint";

        // sport (components)
        const sportZone = new Zone(sport);
        sportZone.callback = () => this.onScreenClick(210);
        const sportShowHint = new ShowHint(sport);
        sportShowHint.text = "sport_hint";

        // beacon (components)
        new Zone(beacon);
        const beaconShowHint = new ShowHint(beacon);
        beaconShowHint.text = "beacon_hint";

        // light (components)
        new Zone(light);
        const lightShowHint = new ShowHint(light);
        lightShowHint.text = "light_hint";

        // pizza (components)
        const pizzaZone = new Zone(pizza);
        pizzaZone.callback = () => this.onScreenClick(330);
        const pizzaShowHint = new ShowHint(pizza);
        pizzaShowHint.text = "pizza_hint";

        // rink (components)
        const rinkZone = new Zone(rink);
        rinkZone.callback = () => this.onScreenClick(802);
        const rinkShowHint = new ShowHint(rink);
        rinkShowHint.text = "rink_hint";

        // shop (components)
        const shopZone = new Zone(shop);
        shopZone.callback = () => this.onScreenClick(130);
        const shopShowHint = new ShowHint(shop);
        shopShowHint.text = "shop_hint";

        // town (components)
        const townZone = new Zone(town);
        townZone.callback = () => this.onScreenClick(100);
        const townShowHint = new ShowHint(town);
        townShowHint.text = "town_hint";

        // dock (components)
        const dockZone = new Zone(dock);
        dockZone.callback = () => this.onScreenClick(800);
        const dockShowHint = new ShowHint(dock);
        dockShowHint.text = "dock_hint";

        // dance (components)
        const danceZone = new Zone(dance);
        danceZone.callback = () => this.onScreenClick(120);
        const danceShowHint = new ShowHint(dance);
        danceShowHint.text = "dance_hint";

        // lounge (components)
        const loungeZone = new Zone(lounge);
        loungeZone.callback = () => this.onScreenClick(121);
        const loungeShowHint = new ShowHint(lounge);
        loungeShowHint.text = "lounge_hint";

        // attic (components)
        const atticZone = new Zone(attic);
        atticZone.callback = () => this.onScreenClick(221);
        const atticShowHint = new ShowHint(attic);
        atticShowHint.text = "attic_hint";

        // stage (components)
        new Zone(stage);
        const stageShowHint = new ShowHint(stage);
        stageShowHint.text = "stage_hint";

        // cove (components)
        const coveZone = new Zone(cove);
        coveZone.callback = () => this.onScreenClick(810);
        const coveShowHint = new ShowHint(cove);
        coveShowHint.text = "cove_hint";

        // forest (components)
        const forestZone = new Zone(forest);
        forestZone.callback = () => this.onScreenClick(809);
        const forestShowHint = new ShowHint(forest);
        forestShowHint.text = "forest_hint";

        // dojo (components)
        const dojoZone = new Zone(dojo);
        dojoZone.callback = () => this.onScreenClick(320);
        const dojoShowHint = new ShowHint(dojo);
        dojoShowHint.text = "dojo_hint";

        // mtn (components)
        const mtnZone = new Zone(mtn);
        mtnZone.callback = () => this.onScreenClick(230);
        const mtnShowHint = new ShowHint(mtn);
        mtnShowHint.text = "mtn_hint";

        // village (components)
        const villageZone = new Zone(village);
        villageZone.callback = () => this.onScreenClick(200);
        const villageShowHint = new ShowHint(village);
        villageShowHint.text = "village_hint";

        // dojoext (components)
        const dojoextZone = new Zone(dojoext);
        dojoextZone.callback = () => this.onScreenClick(321);
        const dojoextShowHint = new ShowHint(dojoext);
        dojoextShowHint.text = "dojoext_hint";

        this.fish = fish;
        this.missions = missions;
        this.door = door;
        this.danceFloor = danceFloor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.missions.depth = 1000
        this.fish.depth = 1000

        this.danceFloor.play('dance_floor')
    }

    onDoorOver() {
        this.door.play('door_open')
    }

    onDoorOut() {
        this.door.stop()
        this.door.setFrame('door/door0001')
    }

    onScreenClick(roomId) {
        const room = this.crumbs.scenes.rooms[roomId]

        this.world.client.sendJoinRoom(roomId, room.key)
    }

    onMissionsClick() {
        this.interface.loadWidget('Missions')
    }

    onFishClick() {

    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
