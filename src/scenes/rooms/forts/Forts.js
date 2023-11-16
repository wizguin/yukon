import RoomScene from '../RoomScene'

import { Animation, Button } from '@components/components'


/* START OF COMPILED CODE */

export default class Forts extends RoomScene {

    constructor() {
        super("Forts");

        /** @type {Phaser.GameObjects.Sprite} */
        this.tower;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.hitbox;
        /** @type {Phaser.GameObjects.Text} */
        this.dayText;
        /** @type {Phaser.GameObjects.Text} */
        this.ampmText;
        /** @type {Phaser.GameObjects.Text} */
        this.timeText;
        /** @type {Phaser.GameObjects.Text} */
        this.clockText;
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 1240, 660),
            'rink': () => this.triggerRoom(802, 780, 340),
            'plaza': () => this.triggerRoom(300, 340, 660)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("forts-pack", "assets/media/rooms/forts/forts-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-35, -18, "forts", "bg");
        bg.setOrigin(0, 0);

        // red_fort
        const red_fort = this.add.image(603, 655, "forts", "red_fort");
        red_fort.setOrigin(0.5, 0.65116279);

        // red_pole
        const red_pole = this.add.image(662, 657, "forts", "red_pole");
        red_pole.setOrigin(0.47058824, 1);

        // red_fort_front
        const red_fort_front = this.add.image(703, 702, "forts", "red_fort_front");
        red_fort_front.setOrigin(0.5, 0.6473684210526316);

        // blue_pole
        const blue_pole = this.add.image(993, 424, "forts", "blue_pole");
        blue_pole.setOrigin(0.5, 1);

        // blue_fort
        const blue_fort = this.add.image(1023, 477, "forts", "blue_fort");
        blue_fort.setOrigin(0.49803922, 0.81818182);

        // tower_shadow
        const tower_shadow = this.add.image(1065, 304, "forts", "tower_shadow");
        tower_shadow.setOrigin(0, 0);

        // tower
        const tower = this.add.sprite(1046, -13, "forts", "tower0001");
        tower.setOrigin(0, 0);

        // clock
        const clock = this.add.image(1082, 104, "forts", "clock");
        clock.setOrigin(0, 0);

        // secret_message
        const secret_message = this.add.image(1252, 327, "forts", "secret_message");
        secret_message.setOrigin(0, 0);

        // sign
        const sign = this.add.image(1390, 291, "forts", "sign");
        sign.setOrigin(0, 0);

        // snowballs
        const snowballs = this.add.image(676, 786, "forts", "snowballs");
        snowballs.setOrigin(0.49230769, 0.57777778);

        // blue_flag
        const blue_flag = this.add.sprite(966, 334, "forts", "blue_flag0001");
        blue_flag.setOrigin(0.5, 1.85185185);

        // red_flag
        const red_flag = this.add.sprite(626, 524, "forts", "red_flag0001");
        red_flag.setOrigin(0.5, 1.73913043);

        // hitbox
        const hitbox = this.add.rectangle(1347, 156, 70, 75);
        hitbox.visible = false;

        // dayText
        const dayText = this.add.text(1161, 221, "", {});
        dayText.scaleX = 0.9;
        dayText.angle = 4;
        dayText.setOrigin(0.5, 0.5);
        dayText.setStyle({ "align": "center", "color": "#000", "fixedWidth":200,"fontFamily": "CCComiccrazy", "fontSize": "22px", "fontStyle": "italic" });

        // ampmText
        const ampmText = this.add.text(1217, 133, "", {});
        ampmText.angle = -1;
        ampmText.setOrigin(0.5, 0.5);
        ampmText.setStyle({ "align": "center", "fixedWidth":50,"fontFamily": "CPLCD", "fontSize": "36px" });

        // timeText
        const timeText = this.add.text(1144, 150, "", {});
        timeText.scaleX = 0.65;
        timeText.angle = -1;
        timeText.setOrigin(0.5, 0.5);
        timeText.setStyle({ "align": "center", "fixedWidth":200,"fontFamily": "CPLCD", "fontSize": "86px" });

        // clockText
        const clockText = this.add.text(1159, 75, "", {});
        clockText.scaleX = 0.76;
        clockText.angle = -3.33;
        clockText.setOrigin(0.5, 0.5);
        clockText.text = "CLUB PENGUIN\nTIME ZONE";
        clockText.setStyle({ "align": "center", "color": "#000", "fixedWidth":250,"fontFamily": "CCComiccrazy", "fontSize": "24px" });
        clockText.setLineSpacing(2);

        // lists
        const sort = [red_flag, red_pole, blue_pole, blue_flag, blue_fort, red_fort_front, red_fort, snowballs];

        // tower (components)
        const towerAnimation = new Animation(tower);
        towerAnimation.key = "tower";
        towerAnimation.end = 24;
        towerAnimation.repeat = 0;
        towerAnimation.autoPlay = false;

        // sign (components)
        const signButton = new Button(sign);
        signButton.spriteName = "sign";
        signButton.activeFrame = false;

        // blue_flag (components)
        const blue_flagAnimation = new Animation(blue_flag);
        blue_flagAnimation.key = "blue_flag";
        blue_flagAnimation.end = 16;

        // red_flag (components)
        const red_flagAnimation = new Animation(red_flag);
        red_flagAnimation.key = "red_flag";
        red_flagAnimation.end = 16;

        this.tower = tower;
        this.hitbox = hitbox;
        this.dayText = dayText;
        this.ampmText = ampmText;
        this.timeText = timeText;
        this.clockText = clockText;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.clockText.setResolution(2)
        this.dayText.setResolution(2)

        this.bounds = this.hitbox.getBounds()
        this.tower.on('animationcomplete', () => this.onTowerAnimComplete())

        this.time.addEvent({
            delay: 1000,
            callback: () => this.updateTime(),
            loop: true,
            startAt: 1000
        })
    }

    onSnowballComplete(x, y) {
        if (this.bounds.contains(x, y)) {
            this.tower.__Animation.play()
        }
    }

    onTowerAnimComplete() {
        this.tower.setFrame('tower0001')
    }

    updateTime() {
        const now = this.world.getWorldTime()

        const hours = now.getHours()
        // Convert to 12 hour format
        const hoursFormatted = hours % 12 || 12

        const minutes = now.getMinutes().toString().padStart(2, '0')

        this.timeText.text = `${hoursFormatted}:${minutes}`

        this.ampmText.text = hours >= 12 ? 'PM' : 'AM'

        this.dayText.text = now.toLocaleDateString('en-US', {weekday: 'long' }).toUpperCase()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
