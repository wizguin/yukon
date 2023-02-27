import RoomScene from '../RoomScene'

import { Button } from '@components/components'

import MancalaTable from '@scenes/shared_prefabs/tables/mancala/MancalaTable'


/* START OF COMPILED CODE */

export default class Book extends RoomScene {

    constructor() {
        super("Book");

        /** @type {MancalaTable} */
        this.table104;
        /** @type {MancalaTable} */
        this.table103;
        /** @type {MancalaTable} */
        this.table102;
        /** @type {MancalaTable} */
        this.table101;
        /** @type {MancalaTable} */
        this.table100;
        /** @type {Array<Phaser.GameObjects.Image|MancalaTable>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'coffee': () => this.triggerRoom(110, 1120, 800),
            'table100': () => this.triggerTable('mancala', 100),
            'table101': () => this.triggerTable('mancala', 101),
            'table102': () => this.triggerTable('mancala', 102),
            'table103': () => this.triggerTable('mancala', 103),
            'table104': () => this.triggerTable('mancala', 104)
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

        // table104
        const table104 = new MancalaTable(this, 1208, 755);
        this.add.existing(table104);
        table104.visible = true;

        // table103
        const table103 = new MancalaTable(this, 806, 690);
        this.add.existing(table103);
        table103.visible = true;

        // table102
        const table102 = new MancalaTable(this, 426, 652);
        this.add.existing(table102);
        table102.visible = true;

        // table101
        const table101 = new MancalaTable(this, 951, 453);
        this.add.existing(table101);
        table101.visible = true;

        // table100
        const table100 = new MancalaTable(this, 651, 450);
        this.add.existing(table100);

        // lists
        const sort = [chair_table, chair_front, chair_back, table100, table101, table102, table103, table104];

        // books (components)
        const booksButton = new Button(books);
        booksButton.spriteName = "books";
        booksButton.activeFrame = false;

        // poster (components)
        const posterButton = new Button(poster);
        posterButton.spriteName = "poster";
        posterButton.activeFrame = false;
        posterButton.pixelPerfect = true;

        this.table104 = table104;
        this.table103 = table103;
        this.table102 = table102;
        this.table101 = table101;
        this.table100 = table100;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
