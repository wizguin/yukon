import RoomScene from '../RoomScene'


/* START OF COMPILED CODE */

class Forts extends RoomScene {

    constructor() {
        super("Forts");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    preload() {

        this.load.pack("forts-pack", "assets/media/rooms/forts/forts-pack.json");
    }

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

        // tower0001
        const tower0001 = this.add.image(1046, -13, "forts", "tower0001");
        tower0001.setOrigin(0, 0);

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

        // blue_flag0001
        const blue_flag0001 = this.add.image(966, 334, "forts", "blue_flag0001");
        blue_flag0001.setOrigin(0.5, 1.85185185);

        // red_flag0001
        const red_flag0001 = this.add.image(626, 524, "forts", "red_flag0001");
        red_flag0001.setOrigin(0.5, 1.73913043);

        // lists
        const sort = [red_flag0001, red_pole, blue_pole, blue_flag0001, blue_fort, red_fort_front, red_fort, snowballs]

        this.sort = sort;
    }

    /* START-USER-CODE */

    get roomTriggers() {
        return [
            {
                body: this.roomPhysics.town,
                x: 270,
                y: 460,
                callback : () => { this.triggerRoom(100, 1240, 660) }
            },
            {
                body: this.roomPhysics.rink,
                x: 520,
                y: 320,
                callback : () => { this.triggerRoom(802, 780, 340) }
            },
            {
                body: this.roomPhysics.plaza,
                x: 1455,
                y: 670,
                callback : () => { this.triggerRoom(300, 340, 660) }
            }
        ]
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Forts
