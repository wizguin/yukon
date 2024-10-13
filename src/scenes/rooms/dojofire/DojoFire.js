import RoomScene from "@rooms/RoomScene.js";
import {
  Animation,
  Button,
  MoveTo,
  ShowHint,
  SimpleButton,
  //   Zone,
} from "@components/components.js";

/* START OF COMPILED CODE */

export default class DojoFire extends RoomScene {

    constructor() {
        super("DojoFire");

        /** @type {Phaser.GameObjects.Image} */
        this.mat_a;
        /** @type {Phaser.GameObjects.Image} */
        this.mat_b;
        /** @type {Phaser.GameObjects.Image} */
        this.mat_c;
        /** @type {Phaser.GameObjects.Image} */
        this.mat_d;
        /** @type {Phaser.GameObjects.Sprite} */
        this.firesensei;
        /** @type {Phaser.GameObjects.Image} */
        this.lavamask_right;
        /** @type {Phaser.GameObjects.Image} */
        this.lavamask_left;
        /** @type {Phaser.GameObjects.Container} */
        this.lavagroup_right;
        /** @type {Phaser.GameObjects.Container} */
        this.lavagroup_left;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

    this.roomTriggers = {
      "hideout": () => this.triggerRoom(318, 376, 682),
      "senseifire": () => this.interface.loadWidget("CJFireSensay"),
      "mata": () => this.triggerGame(997),
      "matb": () => this.triggerGame(997),
      "matc": () => this.triggerGame(997),
      "matd": () => this.triggerGame(997),
    };

    this.music = 22;

    /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dojofire-pack", "assets/media/rooms/dojofire/dojofire-pack.json");
    }

    /** @returns {void} */
    _create() {

        // cardjitsufire_dojo_sky
        this.add.image(760, 125, "dojofire", "cardjitsufire_dojo_sky");

        // bg_behind_bg
        this.add.image(760, 382, "dojofire", "bg_behind_bg");

        // hotsauce_en
        this.add.image(1288, 173, "dojofire", "hotsauce_en");

        // ground_lava0001
        const ground_lava0001 = this.add.sprite(759, 659, "dojofire", "ground_lava0001");
        ground_lava0001.scaleX = 17.640625;
        ground_lava0001.scaleY = 17.5833333333;

        // fire_right_bottom
        this.add.image(1396, 292, "dojofire", "fire_right_bottom");

        // fire_right0001
        const fire_right0001 = this.add.sprite(1404, 197, "dojofire", "fire_right0001");

        // fire_right_top
        this.add.image(1394, 364, "dojofire", "fire_right_top");

        // fire_right_bottom_1
        const fire_right_bottom_1 = this.add.image(133, 295, "dojofire", "fire_right_bottom");
        fire_right_bottom_1.flipX = true;

        // fire_left0001
        const fire_left0001 = this.add.sprite(124, 200, "dojofire", "fire_left0001");

        // fire_right_top_1
        const fire_right_top_1 = this.add.image(131, 367, "dojofire", "fire_right_top");
        fire_right_top_1.flipX = true;

        // bg_fire
        this.add.image(762, 508, "dojofire", "bg_fire");

        // legend_paper
        const legend_paper = this.add.image(366, 362, "dojofire", "legend_paper");

        // legend_en
        this.add.image(363, 362, "dojofire", "legend_en");

        // instructions_paper
        const instructions_paper = this.add.image(1151, 367, "dojofire", "instructions_paper");

        // instructions_en
        this.add.image(1152, 368, "dojofire", "instructions_en");

        // pipeline
        this.add.image(1154, 352, "dojofire", "pipeline");

        // mat_a
        const mat_a = this.add.image(1053, 760, "dojofire", "mat_a");

        // mat_b
        const mat_b = this.add.image(462, 760, "dojofire", "mat_b");

        // mat_c
        const mat_c = this.add.image(476, 526, "dojofire", "mat_c");

        // mat_d
        const mat_d = this.add.image(1042, 526, "dojofire", "mat_d");

        // pot_back
        this.add.image(615, 247, "dojofire", "pot_back");

        // gas_gas_gas0001
        const gas_gas_gas0001 = this.add.sprite(615, 187, "dojofire", "gas_gas_gas0001");

        // pot_front
        this.add.image(615, 252, "dojofire", "pot_front");

        // nice_flower
        this.add.image(906, 222, "dojofire", "nice_flower");

        // stand
        this.add.image(758, 177, "dojofire", "stand");

        // firesensei
        const firesensei = this.add.sprite(757, 204, "dojofire", "firesensei0001");

        // senseitangle
        const senseitangle = this.add.rectangle(758, 208, 250, 200);
        senseitangle.alpha = 0.000001;
        senseitangle.isFilled = true;

        // firesign_en
        this.add.image(756, 99, "dojofire", "firesign_en");

        // stairssort
        const stairssort = this.add.image(745.0173144331491, 356.2621517748318, "dojofire", "stairssort");
        stairssort.setOrigin(0.511040943914035, 0.3414240498386654);

        // eleven_firebox_eleven0001
        const eleven_firebox_eleven0001 = this.add.sprite(565.6685904925721, 457.45838201718743, "dojofire", "eleven/firebox_eleven0001");
        eleven_firebox_eleven0001.setOrigin(0.5128575094725403, 0.8476670561374995);

        // ten_firebox_ten0001
        const ten_firebox_ten0001 = this.add.sprite(280, 498, "dojofire", "ten/firebox_ten0001");

        // eight_firebox_eight0001
        const eight_firebox_eight0001 = this.add.sprite(255, 721, "dojofire", "eight/firebox_eight0001");

        // four_firebox_four0001
        const four_firebox_four0001 = this.add.sprite(1271, 716, "dojofire", "four/firebox_four0001");

        // two_firebox_two0001
        const two_firebox_two0001 = this.add.sprite(1239, 499, "dojofire", "two/firebox_two0001");

        // one_firebox_one0001
        const one_firebox_one0001 = this.add.sprite(956.6685904925721, 458.7897915246153, "dojofire", "one/firebox_one0001");
        one_firebox_one0001.setOrigin(0.5128575094725403, 0.8423183321969222);

        // lava_ref
        const lava_ref = this.add.image(763, 761, "dojofire", "lava_ref");
        lava_ref.visible = false;
        lava_ref.tintTopLeft = 11249140;
        lava_ref.tintTopRight = 11249140;
        lava_ref.tintBottomLeft = 11249140;
        lava_ref.tintBottomRight = 11249140;

        // l01_l_one
        const l01_l_one = this.add.image(753.0294301300579, 950.352537138726, "dojofire", "l01/l_one");
        l01_l_one.setOrigin(0.493624955326124, 0.9422430184248508);

        // lavamask_right
        const lavamask_right = this.add.image(153.3573846154837, 1004.2345000009662, "dojofire", "lavamask_left");
        lavamask_right.setOrigin(0.5420043541367412, 1.120164285718887);

        // lavamask_left
        const lavamask_left = this.add.image(1375.3212704327418, 1037.6279948916535, "dojofire", "lavamask_right");
        lavamask_left.setOrigin(0.4789978229316295, 1.2791807692365507);

        // l03_l_three_1
        this.add.image(1462, 821, "dojofire", "l03/l_three");

        // lavagroup_right
        const lavagroup_right = this.add.container(0, 0);

        // l04_l_four
        const l04_l_four = this.add.sprite(1420, 850, "dojofire", "l04/l_four0001");
        lavagroup_right.add(l04_l_four);

        // l05_l_five_1
        const l05_l_five_1 = this.add.image(1420, 848, "dojofire", "l05/l_five");
        lavagroup_right.add(l05_l_five_1);

        // l06_l_six
        const l06_l_six = this.add.sprite(1376, 882, "dojofire", "l06/l_six0001");
        lavagroup_right.add(l06_l_six);

        // l07_l_seven_1
        const l07_l_seven_1 = this.add.image(1379, 870, "dojofire", "l07/l_seven");
        lavagroup_right.add(l07_l_seven_1);

        // l08_l_eight0001
        const l08_l_eight0001 = this.add.sprite(1332, 904, "dojofire", "l08/l_eight0001");
        lavagroup_right.add(l08_l_eight0001);

        // l09_l_nine
        const l09_l_nine = this.add.image(1336, 887, "dojofire", "l09/l_nine");
        lavagroup_right.add(l09_l_nine);

        // l10_l_ten0001
        const l10_l_ten0001 = this.add.sprite(1288, 925, "dojofire", "l10/l_ten0001");
        lavagroup_right.add(l10_l_ten0001);

        // l11_l_eleven
        const l11_l_eleven = this.add.image(1290, 912, "dojofire", "l11/l_eleven");
        lavagroup_right.add(l11_l_eleven);

        // l12_l_twelve
        const l12_l_twelve = this.add.sprite(1244, 947, "dojofire", "l12/l_twelve0001");
        lavagroup_right.add(l12_l_twelve);

        // l13_l_thirteen
        this.add.image(61, 816.5, "dojofire", "l13/l_thirteen");

        // lavagroup_left
        const lavagroup_left = this.add.container(0, 0);

        // l14_l_fourteen_1
        const l14_l_fourteen_1 = this.add.sprite(101, 852, "dojofire", "l14/l_fourteen0001");
        lavagroup_left.add(l14_l_fourteen_1);

        // l15_l_fifteen
        const l15_l_fifteen = this.add.image(102, 849, "dojofire", "l15/l_fifteen");
        lavagroup_left.add(l15_l_fifteen);

        // l16_l_sixteen_1
        const l16_l_sixteen_1 = this.add.sprite(144, 884, "dojofire", "l16/l_sixteen0001");
        lavagroup_left.add(l16_l_sixteen_1);

        // l17_l_seventeen
        const l17_l_seventeen = this.add.image(144, 867, "dojofire", "l17/l_seventeen");
        lavagroup_left.add(l17_l_seventeen);

        // l18_l_eighteen_1
        const l18_l_eighteen_1 = this.add.sprite(188, 906, "dojofire", "l18/l_eighteen0001");
        lavagroup_left.add(l18_l_eighteen_1);

        // l19_l_nineteen
        const l19_l_nineteen = this.add.image(185, 884, "dojofire", "l19/l_nineteen");
        lavagroup_left.add(l19_l_nineteen);

        // l20_l_twenty_zero_1
        const l20_l_twenty_zero_1 = this.add.sprite(236, 928, "dojofire", "l20/l_twenty_zero0001");
        lavagroup_left.add(l20_l_twenty_zero_1);

        // l21_l_twenty_one
        const l21_l_twenty_one = this.add.image(229, 905, "dojofire", "l21/l_twenty_one");
        lavagroup_left.add(l21_l_twenty_one);

        // l22_l_twenty_two_1
        const l22_l_twenty_two_1 = this.add.sprite(276, 950, "dojofire", "l22/l_twenty_two0001");
        lavagroup_left.add(l22_l_twenty_two_1);

        // l23_l_twenty_three
        this.add.image(759, 868, "dojofire", "l23/l_twenty_three");

        // cards_button
        const cards_button = this.add.image(1425, 1081.6468384393052, "dojofire", "cards_button");
        cards_button.setOrigin(0.5, 2.2858163641033857);

        // bottle_left_1
        this.add.image(224, 561, "dojofire", "bottle_left");

        // lists
        const sort = [stairssort, eleven_firebox_eleven0001, one_firebox_one0001, cards_button];

        // ground_lava0001 (components)
        new Animation(ground_lava0001);

        // fire_right0001 (components)
        new Animation(fire_right0001);

        // fire_left0001 (components)
        new Animation(fire_left0001);

        // legend_paper (components)
        const legend_paperButton = new Button(legend_paper);
        legend_paperButton.spriteName = "legend_paper";

        // instructions_paper (components)
        const instructions_paperButton = new Button(instructions_paper);
        instructions_paperButton.spriteName = "instructions_paper";

        // mat_a (components)
        const mat_aButton = new Button(mat_a);
        mat_aButton.spriteName = "mat_a";
        const mat_aMoveTo = new MoveTo(mat_a);
        mat_aMoveTo.x = 1050;
        mat_aMoveTo.y = 757;

        // mat_b (components)
        const mat_bButton = new Button(mat_b);
        mat_bButton.spriteName = "mat_b";
        const mat_bMoveTo = new MoveTo(mat_b);
        mat_bMoveTo.x = 461;
        mat_bMoveTo.y = 769;

        // mat_c (components)
        const mat_cButton = new Button(mat_c);
        mat_cButton.spriteName = "mat_c";
        const mat_cMoveTo = new MoveTo(mat_c);
        mat_cMoveTo.x = 483;
        mat_cMoveTo.y = 512;

        // mat_d (components)
        const mat_dButton = new Button(mat_d);
        mat_dButton.spriteName = "mat_d";
        new MoveTo(mat_d);

        // gas_gas_gas0001 (components)
        new Animation(gas_gas_gas0001);

        // senseitangle (components)
        const senseitangleSimpleButton = new SimpleButton(senseitangle);
        senseitangleSimpleButton.hoverCallback = () => this.onSenseiHover();
        senseitangleSimpleButton.hoverOutCallback = () => this.onSenseiOut();
        const senseitangleMoveTo = new MoveTo(senseitangle);
        senseitangleMoveTo.x = 760;
        senseitangleMoveTo.y = 232;

        // eleven_firebox_eleven0001 (components)
        new Animation(eleven_firebox_eleven0001);

        // ten_firebox_ten0001 (components)
        new Animation(ten_firebox_ten0001);

        // eight_firebox_eight0001 (components)
        new Animation(eight_firebox_eight0001);

        // four_firebox_four0001 (components)
        new Animation(four_firebox_four0001);

        // two_firebox_two0001 (components)
        new Animation(two_firebox_two0001);

        // one_firebox_one0001 (components)
        new Animation(one_firebox_one0001);

        // l04_l_four (components)
        new Animation(l04_l_four);

        // l06_l_six (components)
        new Animation(l06_l_six);

        // l08_l_eight0001 (components)
        new Animation(l08_l_eight0001);

        // l10_l_ten0001 (components)
        new Animation(l10_l_ten0001);

        // l12_l_twelve (components)
        new Animation(l12_l_twelve);

        // l14_l_fourteen_1 (components)
        new Animation(l14_l_fourteen_1);

        // l16_l_sixteen_1 (components)
        new Animation(l16_l_sixteen_1);

        // l18_l_eighteen_1 (components)
        new Animation(l18_l_eighteen_1);

        // l20_l_twenty_zero_1 (components)
        new Animation(l20_l_twenty_zero_1);

        // l22_l_twenty_two_1 (components)
        new Animation(l22_l_twenty_two_1);

        // cards_button (components)
        const cards_buttonButton = new Button(cards_button);
        cards_buttonButton.spriteName = "cards_button";
        cards_buttonButton.callback = () => this.interface.loadWidget("CJNinjaProgress")  ;

        this.mat_a = mat_a;
        this.mat_b = mat_b;
        this.mat_c = mat_c;
        this.mat_d = mat_d;
        this.firesensei = firesensei;
        this.lavamask_right = lavamask_right;
        this.lavamask_left = lavamask_left;
        this.lavagroup_right = lavagroup_right;
        this.lavagroup_left = lavagroup_left;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
  create() {
    super.create();

    const maskLeft = this.lavamask_right.createBitmapMask();
    const maskRight = this.lavamask_left.createBitmapMask();

    // Apply the masks to the lava groups
    this.lavagroup_left.setMask(maskLeft);
    this.lavagroup_right.setMask(maskRight);
    const showhint_mata = new ShowHint(this.mat_a);
    const showhint_matb = new ShowHint(this.mat_b);
    const showhint_matc = new ShowHint(this.mat_c);
    const showhint_matd = new ShowHint(this.mat_d);

    showhint_mata.text = "Practice Card-Jitsu Fire";
    showhint_matb.text = "Practice Card-Jitsu Fire";
    showhint_matc.text = "Practice Card-Jitsu Fire";
    showhint_matd.text = "Practice Card-Jitsu Fire";
  }

  onSenseiHover() {
    //this.firesensei.stop()
    this.firesensei.play("dojofire/senseihover");
  }

  onSenseiOut() {
    //this.firesensei.stop()
    this.firesensei.play("dojofire/senseiout");
  }
  /* END-USER-CODE */
}

/* END OF COMPILED CODE */
