export const preload = {
    key: 'mancala_help-pack',
    url: 'assets/media/interface/instructions/mancala/mancala_help-pack.json',
    loadString: ['loading', 'mancala_help']
}

/* START OF COMPILED CODE */

import BookContainer from "../../books/BookContainer";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MancalaHelp extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.pageText;
        /** @type {Phaser.GameObjects.Image[]} */
        this.indicators;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.ninePatchContainer(0, 0, 1136, 664, "prompt", "window");
        bg.marginLeft = 50;
        bg.marginTop = 50;
        bg.marginRight = 50;
        bg.marginBottom = 50;
        this.add(bg);

        // title
        const title = scene.add.text(0, -238, "", {});
        title.setOrigin(0.5, 0.5);
        title.text = "HOW TO PLAY MANCALA";
        title.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "40px", "fontStyle": "italic", "stroke": "#014066", "strokeThickness":10});
        this.add(title);

        // page1
        const page1 = scene.add.container(0, 0);
        this.add(page1);

        // page1_text1
        const page1_text1 = scene.add.text(0, -147, "", {});
        page1_text1.setOrigin(0.5, 0.5);
        page1_text1.text = "OBJECT OF THE GAME";
        page1_text1.setStyle({ "align": "center", "color": "#000000", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "40px", "fontStyle": "italic" });
        page1.add(page1_text1);

        // page1_text2
        const page1_text2 = scene.add.text(0, -70, "", {});
        page1_text2.setOrigin(0.5, 0.5);
        page1_text2.text = "Each player attempts to collect as many stones as\npossible before one of the players\nclears his or her side of stones.";
        page1_text2.setStyle({ "align": "center", "color": "#000000", "fixedWidth":750,"fontFamily": "Arial", "fontSize": "32px" });
        page1.add(page1_text2);

        // page1_text3
        const page1_text3 = scene.add.text(0, 19, "", {});
        page1_text3.setOrigin(0.5, 0.5);
        page1_text3.text = "THE BOARD";
        page1_text3.setStyle({ "align": "center", "color": "#000000", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "40px", "fontStyle": "italic" });
        page1.add(page1_text3);

        // page1_text4
        const page1_text4 = scene.add.text(0, 113, "", {});
        page1_text4.setOrigin(0.5, 0.5);
        page1_text4.text = "Each player has a side of the board. (top and\nbottom) The six holes nearest each player belong\nto him or her and their large holes or\nmancala is to the right.";
        page1_text4.setStyle({ "align": "center", "color": "#000000", "fixedWidth":750,"fontFamily": "Arial", "fontSize": "32px" });
        page1.add(page1_text4);

        // page2
        const page2 = scene.add.container(0, 0);
        page2.visible = false;
        this.add(page2);

        // board
        const board = scene.add.image(0, 38, "mancala_help", "board");
        page2.add(board);

        // page2_text1
        const page2_text1 = scene.add.text(0, -132, "", {});
        page2_text1.setOrigin(0.5, 0.5);
        page2_text1.text = "THE BOARD";
        page2_text1.setStyle({ "align": "center", "color": "#000000", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "40px", "fontStyle": "italic" });
        page2.add(page2_text1);

        // page2_text2
        const page2_text2 = scene.add.text(-35, -78, "", {});
        page2_text2.setOrigin(0.5, 0.5);
        page2_text2.text = "Player 2 Side";
        page2_text2.setStyle({ "align": "center", "color": "#000000", "fixedWidth":200,"fontFamily": "Arial", "fontSize": "32px" });
        page2.add(page2_text2);

        // page2_text3
        const page2_text3 = scene.add.text(38, 142, "", {});
        page2_text3.setOrigin(0.5, 0.5);
        page2_text3.text = "Player 1 Side";
        page2_text3.setStyle({ "align": "center", "color": "#000000", "fixedWidth":200,"fontFamily": "Arial", "fontSize": "32px" });
        page2.add(page2_text3);

        // page2_text4
        const page2_text4 = scene.add.text(-335, 27, "", {});
        page2_text4.setOrigin(0.5, 0.5);
        page2_text4.text = "Player 2\nMancala";
        page2_text4.setStyle({ "align": "right", "color": "#000000", "fixedWidth":150,"fontFamily": "Arial", "fontSize": "24px" });
        page2.add(page2_text4);

        // page2_text5
        const page2_text5 = scene.add.text(336, 27, "", {});
        page2_text5.setOrigin(0.5, 0.5);
        page2_text5.text = "Player 1\nMancala";
        page2_text5.setStyle({ "color": "#000000", "fixedWidth":150,"fontFamily": "Arial", "fontSize": "24px" });
        page2.add(page2_text5);

        // page3
        const page3 = scene.add.container(0, 0);
        page3.visible = false;
        this.add(page3);

        // page3_text1
        const page3_text1 = scene.add.text(0, -93, "", {});
        page3_text1.setOrigin(0.5, 0.5);
        page3_text1.text = "HOW TO PLAY";
        page3_text1.setStyle({ "align": "center", "color": "#000000", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "40px", "fontStyle": "italic" });
        page3.add(page3_text1);

        // page3_text2
        const page3_text2 = scene.add.text(0, 27, "", {});
        page3_text2.setOrigin(0.5, 0.5);
        page3_text2.text = "Players alternate turns. In his or her turn each\nplayer selects a group of stones from one hole on\nhis or her side of the board. Each stone is dropped\none by one in the holes around the board, including\nhis mancala but not the opponents mancala.";
        page3_text2.setStyle({ "align": "center", "color": "#000000", "fixedWidth":750,"fontFamily": "Arial", "fontSize": "32px" });
        page3.add(page3_text2);

        // page4
        const page4 = scene.add.container(0, 0);
        page4.visible = false;
        this.add(page4);

        // page4_text1
        const page4_text1 = scene.add.text(0, -149, "", {});
        page4_text1.setOrigin(0.5, 0.5);
        page4_text1.text = "FREE TURNS";
        page4_text1.setStyle({ "align": "center", "color": "#000000", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "40px", "fontStyle": "italic" });
        page4.add(page4_text1);

        // page4_text2
        const page4_text2 = scene.add.text(0, -88, "", {});
        page4_text2.setOrigin(0.5, 0.5);
        page4_text2.text = "If the last stone lands in the players own mancala,\nthat player goes again.";
        page4_text2.setStyle({ "align": "center", "color": "#000000", "fixedWidth":750,"fontFamily": "Arial", "fontSize": "32px" });
        page4.add(page4_text2);

        // page4_text3
        const page4_text3 = scene.add.text(0, -4, "", {});
        page4_text3.setOrigin(0.5, 0.5);
        page4_text3.text = "CAPTURES";
        page4_text3.setStyle({ "align": "center", "color": "#000000", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "40px", "fontStyle": "italic" });
        page4.add(page4_text3);

        // page4_text4
        const page4_text4 = scene.add.text(0, 92, "", {});
        page4_text4.setOrigin(0.5, 0.5);
        page4_text4.text = "If the last stone is dropped in an empty hole on the\nplayers own side, he captures all the stones from\nthe opponents hole directly opposite that hole,\nincluding his stone.";
        page4_text4.setStyle({ "align": "center", "color": "#000000", "fixedWidth":750,"fontFamily": "Arial", "fontSize": "32px" });
        page4.add(page4_text4);

        // page5
        const page5 = scene.add.container(0, 0);
        page5.visible = false;
        this.add(page5);

        // page5_text1
        const page5_text1 = scene.add.text(0, -93, "", {});
        page5_text1.setOrigin(0.5, 0.5);
        page5_text1.text = "HOW TO WIN";
        page5_text1.setStyle({ "align": "center", "color": "#000000", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "40px", "fontStyle": "italic" });
        page5.add(page5_text1);

        // page5_text2
        const page5_text2 = scene.add.text(0, 26, "", {});
        page5_text2.setOrigin(0.5, 0.5);
        page5_text2.text = "The game is over when a player has no more\nstones on his side of the board. The winner is the\nplayer with the greatest total of stones in his or her\nmancala and any remaining stones on his or her\nside of the board.";
        page5_text2.setStyle({ "align": "center", "color": "#000000", "fixedWidth":750,"fontFamily": "Arial", "fontSize": "32px" });
        page5.add(page5_text2);

        // tab1
        const tab1 = scene.add.image(36, 270, "mancala_help", "tab");
        this.add(tab1);

        // tab2
        const tab2 = scene.add.image(76, 270, "mancala_help", "tab");
        tab2.alpha = 0.2;
        tab2.alphaTopLeft = 0.2;
        tab2.alphaTopRight = 0.2;
        tab2.alphaBottomLeft = 0.2;
        tab2.alphaBottomRight = 0.2;
        this.add(tab2);

        // tab3
        const tab3 = scene.add.image(116, 270, "mancala_help", "tab");
        tab3.alpha = 0.2;
        tab3.alphaTopLeft = 0.2;
        tab3.alphaTopRight = 0.2;
        tab3.alphaBottomLeft = 0.2;
        tab3.alphaBottomRight = 0.2;
        this.add(tab3);

        // tab4
        const tab4 = scene.add.image(156, 270, "mancala_help", "tab");
        tab4.alpha = 0.2;
        tab4.alphaTopLeft = 0.2;
        tab4.alphaTopRight = 0.2;
        tab4.alphaBottomLeft = 0.2;
        tab4.alphaBottomRight = 0.2;
        this.add(tab4);

        // tab5
        const tab5 = scene.add.image(196, 270, "mancala_help", "tab");
        tab5.alpha = 0.2;
        tab5.alphaTopLeft = 0.2;
        tab5.alphaTopRight = 0.2;
        tab5.alphaBottomLeft = 0.2;
        tab5.alphaBottomRight = 0.2;
        this.add(tab5);

        // pageText
        const pageText = scene.add.text(310, 269, "", {});
        pageText.setOrigin(0.5, 0.5);
        pageText.alpha = 0.5;
        pageText.alphaTopLeft = 0.5;
        pageText.alphaTopRight = 0.5;
        pageText.alphaBottomLeft = 0.5;
        pageText.alphaBottomRight = 0.5;
        pageText.text = "Page 1 of 5";
        pageText.setStyle({ "align": "center", "color": "#ffffff", "fixedWidth":150,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        pageText.setLineSpacing(1);
        this.add(pageText);

        // right_button
        const right_button = scene.add.image(512, 269, "main", "blue-button");
        this.add(right_button);

        // right_arrow
        const right_arrow = scene.add.image(512, 267, "main", "blue-arrow");
        right_arrow.angle = 90;
        right_arrow.flipX = true;
        this.add(right_arrow);

        // left_button
        const left_button = scene.add.image(452, 269, "main", "blue-button");
        this.add(left_button);

        // left_arrow
        const left_arrow = scene.add.image(452, 267, "main", "blue-arrow");
        left_arrow.angle = 90;
        left_arrow.flipX = true;
        left_arrow.flipY = true;
        this.add(left_arrow);

        // x_button
        const x_button = scene.add.image(510, -274, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(510, -276, "main", "blue-x");
        this.add(blue_x);

        // lists
        const indicators = [tab1, tab2, tab3, tab4, tab5];
        const pages = [page1, page2, page3, page4, page5];

        // block (components)
        new Interactive(block);

        // right_button (components)
        const right_buttonButton = new Button(right_button);
        right_buttonButton.spriteName = "blue-button";
        right_buttonButton.callback = () => this.nextPage();

        // left_button (components)
        const left_buttonButton = new Button(left_button);
        left_buttonButton.spriteName = "blue-button";
        left_buttonButton.callback = () => this.prevPage();

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.close();

        this.pageText = pageText;
        this.indicators = indicators;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    nextPage() {
        if (this.page < this.pages.length - 1) {
            this.indicators[this.page + 1].alpha = 1
        }

        super.nextPage()

        this.setPageText()
    }

    prevPage() {
        if (this.page > 0) {
            this.indicators[this.page].alpha = 0.2
        }

        super.prevPage()

        this.setPageText()
    }

    setPageText() {
        this.pageText.text = `Page ${this.page + 1} of ${this.pages.length}`
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */