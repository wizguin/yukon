import { Button, MoveTo, ShowHint } from '@components/components'

import SeatPoint from '@scenes/shared_prefabs/seat/SeatPoint'


/* START OF COMPILED CODE */

export default class FourTable4 extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.game;
        /** @type {SeatPoint} */
        this.seat2;
        /** @type {SeatPoint} */
        this.seat1;


        // table
        const table = scene.add.image(0, 0, "attic", "table/table_4");
        table.setOrigin(0.5033557046979866, 0.5308641975308642);
        this.add(table);

        // game
        const game = scene.add.image(-5, -58, "attic", "table/game_4");
        game.setOrigin(0.4537037037037037, 0.4805194805194805);
        this.add(game);

        // done2
        const done2 = new SeatPoint(scene, 12, 64);
        this.add(done2);

        // done1
        const done1 = new SeatPoint(scene, -110, 26);
        this.add(done1);

        // seat2
        const seat2 = new SeatPoint(scene, 44, 20);
        this.add(seat2);

        // seat1
        const seat1 = new SeatPoint(scene, -56, -46);
        this.add(seat1);

        // game (components)
        const gameButton = new Button(game);
        gameButton.spriteName = "table/game_4";
        gameButton.activeFrame = false;
        const gameMoveTo = new MoveTo(game);
        gameMoveTo.x = this.x;
        gameMoveTo.y = this.y;
        const gameShowHint = new ShowHint(game);
        gameShowHint.text = "four_hint";

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
