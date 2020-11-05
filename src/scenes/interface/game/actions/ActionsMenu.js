/* START OF COMPILED CODE */

class ActionsMenu extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x, y);

        // actions
        const actions = scene.add.image(0, 0, "main", "actions");
        this.add(actions);

        // large_box
        const large_box = scene.add.image(0, -128, "main", "large-box");
        this.add(large_box);

        // large_box_1
        const large_box_1 = scene.add.image(0, 0, "main", "large-box");
        this.add(large_box_1);

        // small_box
        const small_box = scene.add.image(-32, 96, "main", "small-box");
        this.add(small_box);

        // small_box_1
        const small_box_1 = scene.add.image(-32, 160, "main", "small-box");
        this.add(small_box_1);

        // small_box_2
        const small_box_2 = scene.add.image(32, 96, "main", "small-box");
        this.add(small_box_2);

        // small_box_1_1
        const small_box_1_1 = scene.add.image(32, 160, "main", "small-box");
        this.add(small_box_1_1);

        // wave
        const wave = scene.add.image(0, 0, "main", "wave");
        this.add(wave);

        // sit
        const sit = scene.add.image(0, 128, "main", "sit");
        this.add(sit);

        // dance
        const dance = scene.add.image(0, -128, "main", "dance");
        this.add(dance);

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default ActionsMenu
