import { Button, MoveTo, ShowHint } from '@components/components'

import SeatPoint from '@scenes/shared_prefabs/seat/SeatPoint'


/* START OF COMPILED CODE */

export default class MancalaTable extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.game;
        /** @type {SeatPoint} */
        this.seat2;
        /** @type {SeatPoint} */
        this.seat1;


        // table
        const table = scene.add.image(0, 0, "book", "table/table");
        table.setOrigin(0.5043478260869565, 0.4838709677419355);
        this.add(table);

        // game
        const game = scene.add.image(-2, -29, "book", "table/game");
        game.setOrigin(0.5046728971962616, 0.5102040816326531);
        this.add(game);

        // done2
        const done2 = new SeatPoint(scene, -8, 89);
        this.add(done2);

        // done1
        const done1 = new SeatPoint(scene, -114, 47);
        this.add(done1);

        // seat2
        const seat2 = new SeatPoint(scene, 73, 22);
        this.add(seat2);

        // seat1
        const seat1 = new SeatPoint(scene, -66, -29);
        this.add(seat1);

        // game (components)
        const gameButton = new Button(game);
        gameButton.spriteName = "table/game";
        gameButton.activeFrame = false;
        const gameMoveTo = new MoveTo(game);
        gameMoveTo.x = this.x;
        gameMoveTo.y = this.y;
        const gameShowHint = new ShowHint(game);
        gameShowHint.text = "mancala_hint";

        // seat2 (prefab fields)
        seat2.sitFrame = 20;
        seat2.donePoint = done2;

        // seat1 (prefab fields)
        seat1.sitFrame = 24;
        seat1.donePoint = done1;

        this.game = game;
        this.seat2 = seat2;
        this.seat1 = seat1;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
