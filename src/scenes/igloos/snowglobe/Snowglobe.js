import IglooScene from '../IglooScene'
import {Animation, Button, MoveTo, SimpleButton} from '@components/components'

/* START OF COMPILED CODE */

export default class Snowglobe extends IglooScene {

    constructor() {
        super("Snowglobe");

        /** @type {Phaser.GameObjects.Sprite} */
        this.base;
        /** @type {Phaser.GameObjects.Sprite} */
        this.snow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.glass;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 600]
        this.wallSpawn = [760, 300]
        this.wallBounds = [450, 1040]
        this.floorFrame = 7

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("snowglobe-igloo-pack", "assets/media/igloos/buildings/sprites/snowglobe/snowglobe-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // base
        const base = this.add.sprite(0, 0, "snowglobe-igloo", "base_0001");
        base.setOrigin(0, 0);

        // snow
        const snow = this.add.sprite(763, 453.02794067215564, "snowglobe-igloo", "snow_0130");
        snow.setOrigin(0.5, 0.5085020418740832);

        // glass
        const glass = this.add.sprite(764, 812.686167034485, "snowglobe-igloo", "glass_0001");
        glass.setOrigin(0.5, 0.9982002427667671);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(315, 805, 128, 128);
        rectangle_1.scaleX = 1.680599858658224;
        rectangle_1.scaleY = 0.7104486328756106;
        rectangle_1.angle = 17;
        rectangle_1.fillColor = 589743;
        rectangle_1.fillAlpha = 100;

        // lists
        const sort = [glass, snow];

        // base (components)
        const baseAnimation = new Animation(base);
        baseAnimation.key = "base_";
        baseAnimation.end = 19;
        baseAnimation.repeat = 0;
        baseAnimation.autoPlay = false;

        // snow (components)
        const snowAnimation = new Animation(snow);
        snowAnimation.key = "snow_";
        snowAnimation.end = 130;
        snowAnimation.repeat = 0;
        snowAnimation.autoPlay = false;

        // glass (components)
        const glassAnimation = new Animation(glass);
        glassAnimation.key = "glass_";
        glassAnimation.end = 19;
        glassAnimation.repeat = 0;
        glassAnimation.autoPlay = false;

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.callback = () => { this.onShake() };

        this.base = base;
        this.snow = snow;
        this.glass = glass;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onShake() {
        this.snow.setDepth(9998)
        this.glass.setDepth(9999)
        this.base.__Animation.play()
        this.glass.__Animation.play()
        this.snow.__Animation.play()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
