import RoomScene from '../RoomScene'


/* START OF COMPILED CODE */

class Dock extends RoomScene {

    constructor() {
        super("Dock");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    preload() {

        this.load.pack("dock-pack", "assets/media/rooms/dock/dock-pack.json");
    }

    _create() {

        // bg
        const bg = this.add.image(-48, 0, "dock", "bg");
        bg.setOrigin(0, 0);

        // post_1
        const post_1 = this.add.image(443, 592, "dock", "post_1");
        post_1.setOrigin(0.55, 0.54782609);

        // boat0001
        const boat0001 = this.add.image(233, 636, "dock", "boat0001");
        boat0001.setOrigin(0.6858407079646017, 0.8487282463186078);

        // dock
        const dock = this.add.image(187, 593, "dock", "dock");
        dock.setOrigin(0, 0);

        // post_2
        const post_2 = this.add.image(572, 619, "dock", "post_2");
        post_2.setOrigin(0.43243243243243246, 0.49137931034482757);

        // post_3
        const post_3 = this.add.image(367, 882, "dock", "post_3");
        post_3.setOrigin(0.5384615384615384, 0.806282722513089);

        // post_4
        const post_4 = this.add.image(164, 832, "dock", "post_4");
        post_4.setOrigin(0.4943820224719101, 0.7960526315789473);

        // box
        const box = this.add.image(434, 652, "dock", "box");
        box.setOrigin(0.4915254237288136, 0.7142857142857143);

        // bollard_1
        const bollard_1 = this.add.image(353, 689, "dock", "bollard_1");
        bollard_1.setOrigin(0.5, 0.9302325581395349);

        // bollard_2
        const bollard_2 = this.add.image(279, 732, "dock", "bollard_2");
        bollard_2.setOrigin(0.5, 0.9215686274509803);

        // rings0001
        const rings0001 = this.add.image(632, 668, "dock", "rings0001");
        rings0001.setOrigin(0.4975124378109453, 0.8127659574468085);

        // right_sign
        this.add.image(1366, 270, "dock", "right_sign");

        // left_sign
        this.add.image(120, 345, "dock", "left_sign");

        // boards
        const boards = this.add.image(740, 746, "dock", "boards");
        boards.setOrigin(0.5, 0.7721088435374149);

        // lists
        const sort = [post_3, post_4, post_1, post_2, rings0001, bollard_2, bollard_1, dock, box, boards]

        this.sort = sort;
    }

    /* START-USER-CODE */

    get roomTriggers() {
        return [
            {
                body: this.roomPhysics.beach,
                x: 90,
                y: 420,
                callback : () => { this.triggerRoom(400, 950, 430) }
            },
            {
                body: this.roomPhysics.village,
                x: 330,
                y: 220,
                callback : () => { this.triggerRoom(200, 1300, 760) }
            },
            {
                body: this.roomPhysics.town,
                x: 1350,
                y: 360,
                callback : () => { this.triggerRoom(100, 368, 640) }
            }
        ]
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Dock
