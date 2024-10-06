/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import SimpleButton from "../../components/SimpleButton";
import MoveTo from "../../components/MoveTo";
import Zone from "../../components/Zone";
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
        const beach = this.add.rectangle(1090, 311, 97, 71);
        beach.angle = 8;
        beach.setOrigin(0, 0);
        beach.alpha = 0.5;
        beach.isFilled = true;
        beach.fillColor = 65280;
        screenZones.add(beach);

        // plaza
        const plaza = this.add.rectangle(998, 306, 94, 71);
        plaza.angle = 2;
        plaza.setOrigin(0, 0);
        plaza.alpha = 0.5;
        plaza.isFilled = true;
        plaza.fillColor = 65280;
        screenZones.add(plaza);

        // pet
        const pet = this.add.rectangle(901, 303, 96, 69);
        pet.setOrigin(0, 0);
        pet.alpha = 0.5;
        pet.isFilled = true;
        pet.fillColor = 65280;
        screenZones.add(pet);

        // forts
        const forts = this.add.rectangle(801, 302, 96, 67);
        forts.setOrigin(0, 0);
        forts.alpha = 0.5;
        forts.isFilled = true;
        forts.fillColor = 65280;
        screenZones.add(forts);

        // coffee
        const coffee = this.add.rectangle(681, 308, 94, 68);
        coffee.setOrigin(0, 0);
        coffee.alpha = 0.5;
        coffee.isFilled = true;
        coffee.fillColor = 65280;
        screenZones.add(coffee);

        // book
        const book = this.add.rectangle(574, 307, 94, 70);
        book.setOrigin(0, 0);
        book.alpha = 0.5;
        book.isFilled = true;
        book.fillColor = 65280;
        screenZones.add(book);

        // lodge
        const lodge = this.add.rectangle(475, 317, 96, 69);
        lodge.setOrigin(0, 0);
        lodge.alpha = 0.5;
        lodge.isFilled = true;
        lodge.fillColor = 65280;
        screenZones.add(lodge);

        // sport
        const sport = this.add.rectangle(374, 322, 95, 69);
        sport.setOrigin(0, 0);
        sport.alpha = 0.5;
        sport.isFilled = true;
        sport.fillColor = 65280;
        screenZones.add(sport);

        // beacon
        const beacon = this.add.rectangle(1158, 229, 74, 75);
        beacon.angle = 14;
        beacon.setOrigin(0, 0);
        beacon.alpha = 0.5;
        beacon.isFilled = true;
        beacon.fillColor = 65280;
        screenZones.add(beacon);

        // light
        const light = this.add.rectangle(1060, 214, 89, 69);
        light.angle = 4;
        light.setOrigin(0, 0);
        light.alpha = 0.5;
        light.isFilled = true;
        light.fillColor = 65280;
        screenZones.add(light);

        // pizza
        const pizza = this.add.rectangle(967, 207, 97, 69);
        pizza.angle = 4;
        pizza.setOrigin(0, 0);
        pizza.alpha = 0.5;
        pizza.isFilled = true;
        pizza.fillColor = 65280;
        screenZones.add(pizza);

        // rink
        const rink = this.add.rectangle(870, 208, 100, 69);
        rink.setOrigin(0, 0);
        rink.alpha = 0.5;
        rink.isFilled = true;
        rink.fillColor = 65280;
        screenZones.add(rink);

        // shop
        const shop = this.add.rectangle(787, 208, 96, 69);
        shop.setOrigin(0, 0);
        shop.alpha = 0.5;
        shop.isFilled = true;
        shop.fillColor = 65280;
        screenZones.add(shop);

        // town
        const town = this.add.rectangle(698, 213, 97, 69);
        town.setOrigin(0, 0);
        town.alpha = 0.5;
        town.isFilled = true;
        town.fillColor = 65280;
        screenZones.add(town);

        // dock
        const dock = this.add.rectangle(604, 205, 96, 68);
        dock.setOrigin(0, 0);
        dock.alpha = 0.5;
        dock.isFilled = true;
        dock.fillColor = 65280;
        screenZones.add(dock);

        // dance
        const dance = this.add.rectangle(508, 215, 93, 68);
        dance.setOrigin(0, 0);
        dance.alpha = 0.5;
        dance.isFilled = true;
        dance.fillColor = 65280;
        screenZones.add(dance);

        // lounge
        const lounge = this.add.rectangle(411, 231, 100, 68);
        lounge.angle = -8;
        lounge.setOrigin(0, 0);
        lounge.alpha = 0.5;
        lounge.isFilled = true;
        lounge.fillColor = 65280;
        screenZones.add(lounge);

        // attic
        const attic = this.add.rectangle(312, 250, 96, 68);
        attic.angle = -8;
        attic.setOrigin(0, 0);
        attic.alpha = 0.5;
        attic.isFilled = true;
        attic.fillColor = 65280;
        screenZones.add(attic);

        // stage
        const stage = this.add.rectangle(978, 117, 94, 71);
        stage.setOrigin(0, 0);
        stage.alpha = 0.5;
        stage.isFilled = true;
        stage.fillColor = 65280;
        screenZones.add(stage);

        // cove
        const cove = this.add.rectangle(882, 113, 93, 70);
        cove.setOrigin(0, 0);
        cove.alpha = 0.5;
        cove.isFilled = true;
        cove.fillColor = 65280;
        screenZones.add(cove);

        // forest
        const forest = this.add.rectangle(793, 110, 83, 69);
        forest.setOrigin(0, 0);
        forest.alpha = 0.5;
        forest.isFilled = true;
        forest.fillColor = 65280;
        screenZones.add(forest);

        // dojo
        const dojo = this.add.rectangle(695, 110, 94, 69);
        dojo.setOrigin(0, 0);
        dojo.alpha = 0.5;
        dojo.isFilled = true;
        dojo.fillColor = 65280;
        screenZones.add(dojo);

        // mtn
        const mtn = this.add.rectangle(599, 114, 95, 69);
        mtn.setOrigin(0, 0);
        mtn.alpha = 0.5;
        mtn.isFilled = true;
        mtn.fillColor = 65280;
        screenZones.add(mtn);

        // village
        const village = this.add.rectangle(498, 124, 94, 67);
        village.setOrigin(0, 0);
        village.alpha = 0.5;
        village.isFilled = true;
        village.fillColor = 65280;
        screenZones.add(village);

        // dojoext
        const dojoext = this.add.rectangle(400, 131, 87, 64);
        dojoext.setOrigin(0, 0);
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

        // plaza (components)
        const plazaZone = new Zone(plaza);
        plazaZone.callback = () => this.onScreenClick(300);

        // pet (components)
        const petZone = new Zone(pet);
        petZone.callback = () => this.onScreenClick(310);

        // forts (components)
        const fortsZone = new Zone(forts);
        fortsZone.callback = () => this.onScreenClick(801);

        // coffee (components)
        const coffeeZone = new Zone(coffee);
        coffeeZone.callback = () => this.onScreenClick(110);

        // book (components)
        const bookZone = new Zone(book);
        bookZone.callback = () => this.onScreenClick(111);

        // lodge (components)
        const lodgeZone = new Zone(lodge);
        lodgeZone.callback = () => this.onScreenClick(220);

        // sport (components)
        const sportZone = new Zone(sport);
        sportZone.callback = () => this.onScreenClick(210);

        // beacon (components)
        new Zone(beacon);

        // light (components)
        new Zone(light);

        // pizza (components)
        const pizzaZone = new Zone(pizza);
        pizzaZone.callback = () =>{};

        // rink (components)
        const rinkZone = new Zone(rink);
        rinkZone.callback = () => this.onScreenClick(802);

        // shop (components)
        const shopZone = new Zone(shop);
        shopZone.callback = () => this.onScreenClick(130);

        // town (components)
        const townZone = new Zone(town);
        townZone.callback = () => this.onScreenClick(100);

        // dock (components)
        const dockZone = new Zone(dock);
        dockZone.callback = () => this.onScreenClick(800);

        // dance (components)
        const danceZone = new Zone(dance);
        danceZone.callback = () => this.onScreenClick(120);

        // lounge (components)
        const loungeZone = new Zone(lounge);
        loungeZone.callback = () => this.onScreenClick(121);

        // attic (components)
        const atticZone = new Zone(attic);
        atticZone.callback = () => this.onScreenClick(221);

        // stage (components)
        new Zone(stage);

        // cove (components)
        const coveZone = new Zone(cove);
        coveZone.callback = () => this.onScreenClick(810);

        // forest (components)
        const forestZone = new Zone(forest);
        forestZone.callback = () => this.onScreenClick(809);

        // dojo (components)
        const dojoZone = new Zone(dojo);
        dojoZone.callback = () => this.onScreenClick(320);

        // mtn (components)
        const mtnZone = new Zone(mtn);
        mtnZone.callback = () => this.onScreenClick(230);

        // village (components)
        const villageZone = new Zone(village);
        villageZone.callback = () => this.onScreenClick(200);

        // dojoext (components)
        const dojoextZone = new Zone(dojoext);
        dojoextZone.callback = () => this.onScreenClick(321);

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
