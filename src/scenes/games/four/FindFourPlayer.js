/* START OF COMPILED CODE */

export default class FindFourPlayer extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.spinner;
        /** @type {Phaser.GameObjects.Text} */
        this.waiting;
        /** @type {Phaser.GameObjects.Image} */
        this.counter;
        /** @type {Phaser.GameObjects.Text} */
        this.username;


        // spinner
        const spinner = scene.add.image(0, 0, "four", "spinner");
        this.add(spinner);

        // waiting
        const waiting = scene.add.text(55, 0, "", {});
        waiting.setOrigin(0, 0.5);
        waiting.text = "Waiting for Player";
        waiting.setStyle({ "fixedWidth":260,"fontFamily": "Arial", "fontSize": "24px" });
        this.add(waiting);

        // counter
        const counter = scene.add.image(0, 0, "four", "counter_1");
        counter.visible = false;
        this.add(counter);

        // username
        const username = scene.add.text(40, 0, "", {});
        username.setOrigin(0, 0.5);
        username.visible = false;
        username.text = "USERNAME";
        username.setStyle({ "color": "#d5f1ff", "fixedWidth":260,"fontFamily": "CCFaceFront", "fontSize": "32px", "stroke": "#336699", "strokeThickness":9});
        this.add(username);

        this.spinner = spinner;
        this.waiting = waiting;
        this.counter = counter;
        this.username = username;

        /* START-USER-CTR-CODE */

        this.turnId

        // Spinner
        this.spinnerTween = scene.tweens.add({
            targets: spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        this.inactiveColor = username.style.color
        this.inactiveStroke = username.style.stroke

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    set(username, turn) {
        this.turnId = turn

        this.spinner.visible = false
        this.waiting.visible = false

        this.username.text = username.toUpperCase()
        this.username.visible = true

        this.counter.setFrame(`counter_${turn}`)
        this.counter.visible = true
    }

    reset() {
        this.turnId = null

        this.spinner.visible = true
        this.waiting.visible = true

        this.username.text = ''
        this.username.visible = false

        this.counter.setFrame('counter_1')
        this.counter.visible = false

        this.setActive(true)
    }

    setActive(reset = null) {
        let active = (reset)
            ? false
            : this.turnId === this.parentContainer.currentTurn

        let color = (active) ? '#fff' : this.inactiveColor
        let stroke = (active) ? '#000' : this.inactiveStroke

        this.username.setColor(color)
        this.username.setStroke(stroke)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
