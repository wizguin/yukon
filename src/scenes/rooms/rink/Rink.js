/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import HockeyGame from "./hockey/HockeyGame";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Rink extends RoomScene {

    constructor() {
        super("Rink");

        /** @type {HockeyGame} */
        this.hockeyGame;
        /** @type {Array<Phaser.GameObjects.Image|HockeyGame>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 560, 400)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("rink-pack", "assets/media/rooms/rink/rink-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-33, -7, "rink", "bg");
        bg.setOrigin(0, 0);

        // rink_border
        const rink_border = this.add.image(444, 335, "rink", "rink_border");
        rink_border.setOrigin(0.30707692, 0.42490372);

        // sports
        const sports = this.add.image(1390, 250, "rink", "sports");
        sports.setOrigin(0.52966102, 0.80970149);

        // sports_door0001
        const sports_door0001 = this.add.image(1327, 280, "rink", "sports_door0001");
        sports_door0001.setOrigin(0.5125, 0.62962963);

        // fish_dogs
        const fish_dogs = this.add.image(166, 242, "rink", "fish_dogs");
        fish_dogs.setOrigin(0.51492537, 0.79347826);

        // left_bleachers
        const left_bleachers = this.add.image(105, 258, "rink", "left_bleachers");
        left_bleachers.setOrigin(0.44444444, 0.16260163);

        // bleachers_rail
        const bleachers_rail = this.add.image(38, 558, "rink", "bleachers_rail");
        bleachers_rail.setOrigin(0.82231405, 0.78181818);

        // right_bleachers
        const right_bleachers = this.add.image(1415, 258, "rink", "right_bleachers");
        right_bleachers.setOrigin(0.5473251, 0.16531165);

        // bleachers_rail_1
        const bleachers_rail_1 = this.add.image(1482, 558, "rink", "bleachers_rail");
        bleachers_rail_1.setOrigin(0.82231405, 0.78181818);
        bleachers_rail_1.flipX = true;

        // drink
        const drink = this.add.image(70, 485, "rink", "drink");
        drink.setOrigin(0.5, 0.75510204);

        // fg
        const fg = this.add.image(-64, 1046.9173886139422, "rink", "fg");
        fg.setOrigin(0, 0.9998385876423137);

        // trash
        const trash = this.add.image(858, 214, "rink", "trash");
        trash.setOrigin(0.44117647, 0.69642857);

        // snacks
        const snacks = this.add.image(1046, 230, "rink", "snacks");
        snacks.setOrigin(0.44080605, 0.79461279);

        // stand_base
        const stand_base = this.add.image(731, 126, "rink", "stand_base");
        stand_base.setOrigin(0.99404762, 0.36328125);

        // stand_middle
        const stand_middle = this.add.image(528, 167, "rink", "stand_middle");
        stand_middle.setOrigin(0.51265823, 0.42537313);

        // stand_top
        const stand_top = this.add.image(522, 236, "rink", "stand_top");
        stand_top.setOrigin(0.50117647, 2.57831325);

        // goal_back
        const goal_back = this.add.image(1258, 441, "rink", "goal_back");
        goal_back.setOrigin(0.97183099, 0.48863636);

        // goal
        const goal = this.add.image(1273, 578, "rink", "goal");
        goal.setOrigin(0.58571429, 0.91902834);

        // goal_back_1
        const goal_back_1 = this.add.image(262, 441, "rink", "goal_back");
        goal_back_1.setOrigin(0.97183099, 0.48863636);
        goal_back_1.flipX = true;

        // goal_1
        const goal_1 = this.add.image(247, 578, "rink", "goal");
        goal_1.setOrigin(0.58571429, 0.91902834);
        goal_1.flipX = true;

        // snacks_door0001
        this.add.image(1214, 185, "rink", "snacks_door0001");

        // snacks_ring
        this.add.image(1250, 200, "rink", "snacks_ring");

        // hockeyGame
        const hockeyGame = new HockeyGame(this, 764, 540);
        this.add.existing(hockeyGame);
        hockeyGame.visible = false;

        // lists
        const sort = [fg, goal_back, goal, goal_back_1, goal_1, snacks, sports_door0001, sports, right_bleachers, bleachers_rail_1, bleachers_rail, left_bleachers, fish_dogs, stand_middle, stand_base, stand_top, trash, rink_border, hockeyGame];

        this.hockeyGame = hockeyGame;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.hockeyGame.addListeners()
        this.hockeyGame.sendGetPuck()

        this.hockeyGame.show()
    }

    update() {
        this.hockeyGame.update()
    }

    stop() {
        this.hockeyGame.removeListeners()

        super.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
