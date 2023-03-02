/* START OF COMPILED CODE */

export default class MancalaPlayer extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.spinner;
        /** @type {Phaser.GameObjects.Text} */
        this.waiting;
        /** @type {Phaser.GameObjects.Text} */
        this.username;
        /** @type {Phaser.GameObjects.Text} */
        this.score;
        /** @type {any} */
        this.bg;
        /** @type {any} */
        this.mancala;


        // spinner
        const spinner = scene.add.image(0, 0, "mancala", "player/spinner");
        this.add(spinner);

        // waiting
        const waiting = scene.add.text(52, 0, "", {});
        waiting.setOrigin(0, 0.5);
        waiting.text = "Waiting for Player";
        waiting.setStyle({ "fontFamily": "Arial", "fontSize": "24px" });
        this.add(waiting);

        // username
        const username = scene.add.text(-47, -30, "", {});
        username.visible = false;
        username.text = "USERNAME";
        username.setStyle({ "color": "#D5E1FF", "fixedWidth":330,"fontFamily": "CCFaceFront", "fontSize": "32px", "fontStyle": "bold italic", "stroke": "#006699", "strokeThickness":9});
        this.add(username);

        // score
        const score = scene.add.text(432, 0, "", {});
        score.setOrigin(1, 0.5);
        score.visible = false;
        score.text = "Score: 0";
        score.setStyle({ "align": "right", "color": "#000", "fontFamily": "Arial", "fontSize": "24px" });
        this.add(score);

        this.spinner = spinner;
        this.waiting = waiting;
        this.username = username;
        this.score = score;

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

    get holes() {
        if (this.turnId === 1) {
            return this.parentContainer.holes.slice(0, 7)
        }

        if (this.turnId === 2) {
            return this.parentContainer.holes.slice(7, 14)
        }

        return []
    }

    get stones() {
        return this.holes.map(hole => hole.stones)
    }

    set(username, turn) {
        this.turnId = turn

        this.spinner.visible = false
        this.waiting.visible = false

        this.username.text = username.toUpperCase()
        this.username.visible = true
        this.score.visible = true
    }

    reset() {
        this.turnId = null

        this.spinner.visible = true
        this.waiting.visible = true

        this.username.text = ''
        this.username.visible = false
        this.score.visible = false

        this.setActive(true)
        this.setScoreText(0)
    }

    setActive(reset = false) {
        let active = (reset)
            ? false
            : this.turnId === this.parentContainer.currentTurn

        let color = (active) ? '#fff' : this.inactiveColor
        let stroke = (active) ? '#000' : this.inactiveStroke

        let bgFrame = active ? '_turn' : ''

        this.username.setColor(color)
        this.username.setStroke(stroke)

        this.bg.setFrame(`player/bg${bgFrame}`)
    }

    updateScore() {
        if (!this.turnId) {
            return
        }

        let score = 0
        for (let stones of this.stones) {
            score += stones.length
        }

        this.setScoreText(score)
    }

    setScoreText(score) {
        this.score.text = `Score: ${score}`
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
