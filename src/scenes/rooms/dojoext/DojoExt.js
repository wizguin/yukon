import RoomScene from '../RoomScene'


/* START OF COMPILED CODE */

class DojoExt extends RoomScene {

    constructor() {
        super("DojoExt");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    preload() {

        this.load.pack("dojoext-pack", "assets/media/rooms/dojoext/dojoext-pack.json");
    }

    _create() {

        // bg
        const bg = this.add.image(-15, -6, "dojoext", "bg");
        bg.setOrigin(0, 0);

        // trees
        const trees = this.add.image(1364, 915, "dojoext", "trees");
        trees.setOrigin(0.518840579710145, 0.8611111111111112);

        // fence
        const fence = this.add.image(170, 920, "dojoext", "fence");
        fence.setOrigin(0.4491315136476427, 0.773109243697479);

        // puffles
        const puffles = this.add.image(786, 823, "dojoext", "puffles");
        puffles.setOrigin(0.49942196531791905, 0.47202797202797203);

        // dojo_door
        const dojo_door = this.add.image(682, 425, "dojoext", "dojo_door");
        dojo_door.setOrigin(0, 0);

        // ninja_door_locked0001
        const ninja_door_locked0001 = this.add.image(221, 562, "dojoext", "ninja_door_locked0001");
        ninja_door_locked0001.setOrigin(0, 0);

        // door_top
        const door_top = this.add.image(689, 430, "dojoext", "door_top");
        door_top.setOrigin(0, 0);

        // tree
        const tree = this.add.image(311, 577, "dojoext", "tree");
        tree.setOrigin(0, 0);

        // lists
        const sort = [puffles, fence, trees]

        this.sort = sort;
    }

    /* START-USER-CODE */

    get roomTriggers() {
        return [
            {
                body: this.roomPhysics.map,
                x: 784,
                y: 896,
                callback : () => { this.interface.main.map.visible = true }
            }
        ]
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default DojoExt
