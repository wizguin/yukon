import RoomScene from '../RoomScene'


/* START OF COMPILED CODE */

class Beach extends RoomScene {

    constructor() {
        super("Beach");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    preload() {

        this.load.pack("beach-pack", "assets/media/rooms/beach/beach-pack.json");
    }

    _create() {

        // bg
        const bg = this.add.image(-20, -20, "beach", "bg");
        bg.setOrigin(0, 0);

        // lighthouse_door
        const lighthouse_door = this.add.image(388, 216, "beach", "lighthouse_door");
        lighthouse_door.setOrigin(0, 0);

        // cage
        const cage = this.add.image(232, 352, "beach", "cage");
        cage.setOrigin(0.4935064935064935, 0.5);

        // buoy
        const buoy = this.add.image(194, 428, "beach", "buoy");
        buoy.setOrigin(0.5185185185185185, 0.4965034965034965);

        // fish
        const fish = this.add.image(297, 392, "beach", "fish");
        fish.setOrigin(0.4782608695652174, 0.4956521739130435);

        // net
        const net = this.add.image(290, 465, "beach", "net");
        net.setOrigin(0.49767441860465117, 0.5);

        // fg
        const fg = this.add.image(1217, 293, "beach", "fg");
        fg.setOrigin(0, 0);

        // sign
        const sign = this.add.image(1146, 323, "beach", "sign");
        sign.setOrigin(0, 0);

        // chair_ground
        const chair_ground = this.add.image(906, 524, "beach", "chair_ground");
        chair_ground.setOrigin(0, 0);

        // chair_2
        const chair_2 = this.add.image(1060, 501, "beach", "chair_2");
        chair_2.setOrigin(0.5185185185185185, 0.6060606060606061);

        // chair_2_front
        const chair_2_front = this.add.image(1053, 522, "beach", "chair_2_front");
        chair_2_front.setOrigin(0.5, 0.6764705882352942);

        // chair_1
        const chair_1 = this.add.image(961, 526, "beach", "chair_1");
        chair_1.setOrigin(0.5, 0.58778626);

        // chair_1_front
        const chair_1_front = this.add.image(943, 542, "beach", "chair_1_front");
        chair_1_front.setOrigin(0.4, 0.67054264);

        // bucket_bucket0001
        const bucket_bucket0001 = this.add.image(1078, 612, "beach", "bucket/bucket0001");
        bucket_bucket0001.setOrigin(0.8863109, 0.94611727);

        // lists
        const sort = [bucket_bucket0001, chair_1_front, chair_1, chair_2_front, chair_2, net, fish, buoy, cage]

        this.sort = sort;
    }

    /* START-USER-CODE */

    get roomTriggers() {
        return [
            {
                body: this.roomPhysics.village,
                x: 940,
                y: 290,
                callback : () => { this.triggerRoom(200, 450, 750) }
            },
            {
                body: this.roomPhysics.dock,
                x: 1250,
                y: 450,
                callback : () => { this.triggerRoom(800, 240, 420) }
            }
        ]
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Beach
