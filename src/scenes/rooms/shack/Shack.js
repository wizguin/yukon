import RoomScene from '../RoomScene'

import { Button, MoveTo } from '@components/components'


/* START OF COMPILED CODE */

export default class Shack extends RoomScene {

    constructor() {
        super("Shack");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forest': () => this.triggerRoom(809, 1234, 410),
            'eco': null,
            'mine': null
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("shack-pack", "assets/media/rooms/shack/shack-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-22, 1, "shack", "bg");
        bg.setOrigin(0, 0);

        // plant
        const plant = this.add.image(-28, 122, "shack", "plant");
        plant.setOrigin(0, 0);

        // trees_1
        const trees_1 = this.add.image(196, 645, "shack", "trees_1");
        trees_1.setOrigin(0.8208955223880597, 0.36511156186612576);

        // plant_doors
        const plant_doors = this.add.image(6, 355, "shack", "plant_doors");
        plant_doors.setOrigin(0, 0);

        // flowers
        const flowers = this.add.image(206, 464, "shack", "flowers");
        flowers.setOrigin(0.5352112676056338, 0.7903225806451613);

        // tree
        const tree = this.add.image(290, 365, "shack", "tree");
        tree.setOrigin(0.15776699029126215, 0.8953488372093024);

        // cart_2
        const cart_2 = this.add.image(625, 526, "shack", "cart_2");
        cart_2.setOrigin(0.5206611570247934, 0.7475728155339806);

        // cart_1
        const cart_1 = this.add.image(519, 568, "shack", "cart_1");
        cart_1.setOrigin(0.4928571428571429, 0.7401574803149606);

        // fence
        const fence = this.add.image(718, 584, "shack", "fence");
        fence.setOrigin(0.5180722891566265, 0.5562130177514792);

        // shovel
        const shovel = this.add.image(1143, 470, "shack", "shovel");
        shovel.setOrigin(0.17543859649122806, 0.856);

        // barrel_2
        const barrel_2 = this.add.image(1252, 492, "shack", "barrel_2");
        barrel_2.setOrigin(0.759493670886076, 0.8953488372093024);

        // bag
        const bag = this.add.image(1164, 503, "shack", "bag");
        bag.setOrigin(0.09859154929577464, 0.7682926829268293);

        // bear
        const bear = this.add.image(1142, 482, "shack", "bear");
        bear.setOrigin(0.71, 0.7178423236514523);

        // flowers_1
        const flowers_1 = this.add.image(1003, 537, "shack", "flowers");
        flowers_1.setOrigin(0.5352112676056338, 0.7903225806451613);

        // house_back
        const house_back = this.add.image(1298, 332, "shack", "house_back");
        house_back.setOrigin(0, 0);

        // barrel
        const barrel = this.add.image(1367, 398, "shack", "barrel");
        barrel.setOrigin(0, 0);

        // house
        const house = this.add.image(1291, 500, "shack", "house");
        house.setOrigin(0.08679245283018867, 0.8169014084507042);

        // pipe_1
        const pipe_1 = this.add.image(1004, 588, "shack", "pipe_10001");
        pipe_1.setOrigin(0.44106463878326996, 0.40707964601769914);

        // pipe_2
        const pipe_2 = this.add.image(1268, 681, "shack", "pipe_20001");
        pipe_2.setOrigin(0.054945054945054944, 0.3333333333333333);

        // trees_2
        const trees_2 = this.add.image(1204, 968, "shack", "trees_2");
        trees_2.setOrigin(0, 1);

        // lists
        const sort = [house, pipe_1, pipe_2, trees_2, barrel, flowers_1, bear, bag, barrel_2, shovel, fence, cart_1, cart_2, tree, flowers, trees_1];

        // plant_doors (components)
        const plant_doorsButton = new Button(plant_doors);
        plant_doorsButton.spriteName = "plant_doors";
        plant_doorsButton.activeFrame = false;
        const plant_doorsMoveTo = new MoveTo(plant_doors);
        plant_doorsMoveTo.x = 70;
        plant_doorsMoveTo.y = 450;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
