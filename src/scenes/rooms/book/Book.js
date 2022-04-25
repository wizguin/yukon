import RoomScene from '../RoomScene'

import { Button, MoveTo, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Book extends RoomScene {

    constructor() {
        super("Book");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'coffee': () => this.triggerRoom(110, 1120, 800)
        }
        this.music = '1'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("book-pack", "assets/media/rooms/book/book-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, -6, "book", "bg");
        bg.setOrigin(0, 0);

        // books
        const books = this.add.image(241, 267, "book", "books");
        books.setOrigin(0.35501355013550134, 0.28205128205128205);

        // chair_back
        const chair_back = this.add.image(175, 590, "book", "chair_back");
        chair_back.setOrigin(0.5052631578947369, 0.46808510638297873);

        // chair_front
        const chair_front = this.add.image(180, 652, "book", "chair_front");
        chair_front.setOrigin(0.5022026431718062, 0.5178571428571429);

        // chair_table
        const chair_table = this.add.image(132, 722, "book", "chair_table");
        chair_table.setOrigin(0.5069124423963134, 0.5103734439834025);

        // poster
        const poster = this.add.image(720, 97, "book", "poster");
        poster.setOrigin(0, 0);

        // table
        const table = this.add.image(951, 446, "book", "table");
        table.setOrigin(0.5043478260869565, 0.46);

        // table_1
        const table_1 = this.add.image(652, 444, "book", "table");
        table_1.setOrigin(0.5043478260869565, 0.46);

        // table_2
        const table_2 = this.add.image(426, 646, "book", "table");
        table_2.setOrigin(0.5043478260869565, 0.46);

        // table_3
        const table_3 = this.add.image(806, 684, "book", "table");
        table_3.setOrigin(0.5043478260869565, 0.46);

        // table_4
        const table_4 = this.add.image(1208, 748, "book", "table");
        table_4.setOrigin(0.5043478260869565, 0.46);

        // lists
        const sort = [table_4, table_3, table_2, table_1, table, chair_table, chair_front, chair_back];

        // books (components)
        const booksButton = new Button(books);
        booksButton.spriteName = "books";
        booksButton.activeFrame = false;

        // poster (components)
        const posterButton = new Button(poster);
        posterButton.spriteName = "poster";
        posterButton.activeFrame = false;
        posterButton.pixelPerfect = true;

        // table (components)
        const tableButton = new Button(table);
        tableButton.spriteName = "table";
        tableButton.activeFrame = false;
        tableButton.pixelPerfect = true;
        new MoveTo(table);
        const tableShowHint = new ShowHint(table);
        tableShowHint.text = "mancala_hint";

        // table_1 (components)
        const table_1Button = new Button(table_1);
        table_1Button.spriteName = "table";
        table_1Button.activeFrame = false;
        table_1Button.pixelPerfect = true;
        new MoveTo(table_1);
        const table_1ShowHint = new ShowHint(table_1);
        table_1ShowHint.text = "mancala_hint";

        // table_2 (components)
        const table_2Button = new Button(table_2);
        table_2Button.spriteName = "table";
        table_2Button.activeFrame = false;
        table_2Button.pixelPerfect = true;
        new MoveTo(table_2);
        const table_2ShowHint = new ShowHint(table_2);
        table_2ShowHint.text = "mancala_hint";

        // table_3 (components)
        const table_3Button = new Button(table_3);
        table_3Button.spriteName = "table";
        table_3Button.activeFrame = false;
        table_3Button.pixelPerfect = true;
        new MoveTo(table_3);
        const table_3ShowHint = new ShowHint(table_3);
        table_3ShowHint.text = "mancala_hint";

        // table_4 (components)
        const table_4Button = new Button(table_4);
        table_4Button.spriteName = "table";
        table_4Button.activeFrame = false;
        table_4Button.pixelPerfect = true;
        new MoveTo(table_4);
        const table_4ShowHint = new ShowHint(table_4);
        table_4ShowHint.text = "mancala_hint";

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
