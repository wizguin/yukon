/* START OF COMPILED CODE */

export default class MancalaHint extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Sprite} */
        this.hint;
        /** @type {Phaser.GameObjects.Text} */
        this.text;


        // hint
        const hint = scene.add.sprite(0, 0, "mancala", "hint/hint0011");
        hint.setOrigin(0.49056603773584906, 0.9294117647058824);
        this.add(hint);

        // text
        const text = scene.add.text(0, -39, "", {});
        text.setOrigin(0.5, 0.5);
        text.visible = false;
        text.text = "99";
        text.setStyle({ "align": "center", "color": "#000", "fixedWidth":64,"fontFamily": "Arial", "fontSize": "32px" });
        this.add(text);

        this.hint = hint;
        this.text = text;

        /* START-USER-CTR-CODE */

        hint.on('animationcomplete', () => this.text.visible = true)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    showHint(hole, enabled) {
        if (!hole.stones.length) {
            return
        }

        this.x = hole.x
        this.y = hole.y

        let color = (enabled) ? '#000' : '#fff'
        this.text.text = hole.stones.length
        this.text.setColor(color)

        this.visible = true

        let anim = (enabled) ? 'enabled' : 'disabled'
        this.hint.anims.play(`hint/${anim}`)

    }

    hideHint() {
        this.hint.anims.stop()

        this.visible = false
        this.text.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
