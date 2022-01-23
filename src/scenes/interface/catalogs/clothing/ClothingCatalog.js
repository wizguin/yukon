import { Button, Interactive } from '@components/components'

import Book from '@scenes/interface/books/Book'
import ColorButton from './buttons/ColorButton'
import FlagButton from './buttons/FlagButton'
import PhotoButton from './buttons/PhotoButton'
import Tag1 from './buttons/Tag1'
import Tag2 from './buttons/Tag2'


/* START OF COMPILED CODE */

export default class ClothingCatalog extends Book {

    constructor() {
        super("ClothingCatalog");

        /** @type {Phaser.GameObjects.Image} */
        this.photo12;
        /** @type {Phaser.GameObjects.Image} */
        this.photo11;
        /** @type {Phaser.GameObjects.Image} */
        this.photo10;
        /** @type {Phaser.GameObjects.Image} */
        this.photo9;
        /** @type {Phaser.GameObjects.Image} */
        this.photo8;
        /** @type {Phaser.GameObjects.Image} */
        this.photo7;
        /** @type {Phaser.GameObjects.Image} */
        this.photo6;
        /** @type {Phaser.GameObjects.Image} */
        this.photo5;
        /** @type {Phaser.GameObjects.Image} */
        this.photo4;
        /** @type {Phaser.GameObjects.Image} */
        this.photo3;
        /** @type {Phaser.GameObjects.Image} */
        this.photo2;
        /** @type {Phaser.GameObjects.Image} */
        this.photo1;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("clothingcatalog-pack", "assets/media/interface/catalogs/clothing/clothingcatalog-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page16
        const page16 = this.add.container(0, 0);
        page16.visible = false;

        // p16
        const p16 = this.add.image(0, 0, "clothingcatalog", "page/page0016");
        p16.setOrigin(0, 0);
        page16.add(p16);

        // pageLeft_1
        const pageLeft_1 = this.add.image(492, 590, "clothingcatalog", "page_left");
        pageLeft_1.setOrigin(0, 0);
        page16.add(pageLeft_1);

        // closeLeft
        const closeLeft = this.add.image(491, 39, "clothingcatalog", "close_left");
        closeLeft.setOrigin(0, 0);
        page16.add(closeLeft);

        // page15
        const page15 = this.add.container(0, 0);
        page15.visible = false;

        // p15
        const p15 = this.add.image(0, 0, "clothingcatalog", "page/page0015");
        p15.setOrigin(0, 0);
        page15.add(p15);

        // us
        const us = new FlagButton(this, 1231, 685);
        page15.add(us);

        // turkey
        const turkey = new FlagButton(this, 1112, 685);
        page15.add(turkey);

        // switzerland
        const switzerland = new FlagButton(this, 987, 685);
        page15.add(switzerland);

        // sweden
        const sweden = new FlagButton(this, 872, 685);
        page15.add(sweden);

        // spain
        const spain = new FlagButton(this, 1231, 547);
        page15.add(spain);

        // sa
        const sa = new FlagButton(this, 1112, 547);
        page15.add(sa);

        // russia
        const russia = new FlagButton(this, 987, 547);
        page15.add(russia);

        // portugal
        const portugal = new FlagButton(this, 872, 547);
        page15.add(portugal);

        // poland
        const poland = new FlagButton(this, 1231, 408);
        page15.add(poland);

        // norway
        const norway = new FlagButton(this, 1112, 408);
        page15.add(norway);

        // nz
        const nz = new FlagButton(this, 991, 408);
        page15.add(nz);

        // netherlands
        const netherlands = new FlagButton(this, 872, 408);
        page15.add(netherlands);

        // mexico
        const mexico = new FlagButton(this, 1230, 270);
        page15.add(mexico);

        // korea
        const korea = new FlagButton(this, 1113, 271);
        page15.add(korea);

        // japan
        const japan = new FlagButton(this, 988, 271);
        page15.add(japan);

        // jamaica
        const jamaica = new FlagButton(this, 871, 270);
        page15.add(jamaica);

        // italy
        const italy = new FlagButton(this, 1230, 129);
        page15.add(italy);

        // israel
        const israel = new FlagButton(this, 1113, 129);
        page15.add(israel);

        // ireland
        const ireland = new FlagButton(this, 986, 129);
        page15.add(ireland);

        // india
        const india = new FlagButton(this, 871, 129);
        page15.add(india);

        // hungary
        const hungary = new FlagButton(this, 657, 676);
        page15.add(hungary);

        // uk
        const uk = new FlagButton(this, 536, 677);
        page15.add(uk);

        // germany
        const germany = new FlagButton(this, 417, 677);
        page15.add(germany);

        // france
        const france = new FlagButton(this, 295, 676);
        page15.add(france);

        // finland
        const finland = new FlagButton(this, 652, 517);
        page15.add(finland);

        // egypt
        const egypt = new FlagButton(this, 532, 517);
        page15.add(egypt);

        // denmark
        const denmark = new FlagButton(this, 413, 517);
        page15.add(denmark);

        // colombia
        const colombia = new FlagButton(this, 294, 518);
        page15.add(colombia);

        // china
        const china = new FlagButton(this, 656, 366);
        page15.add(china);

        // chile
        const chile = new FlagButton(this, 537, 364);
        page15.add(chile);

        // canada
        const canada = new FlagButton(this, 416, 364);
        page15.add(canada);

        // brazil
        const brazil = new FlagButton(this, 295, 365);
        page15.add(brazil);

        // belize
        const belize = new FlagButton(this, 656, 210);
        page15.add(belize);

        // belgium
        const belgium = new FlagButton(this, 535, 210);
        page15.add(belgium);

        // australia
        const australia = new FlagButton(this, 418, 211);
        page15.add(australia);

        // argentina
        const argentina = new FlagButton(this, 295, 210);
        page15.add(argentina);

        // page14
        const page14 = this.add.container(0, 0);
        page14.visible = false;

        // p14
        const p14 = this.add.image(0, 0, "clothingcatalog", "page/page0014");
        p14.setOrigin(0, 0);
        page14.add(p14);

        // photoButton12
        const photoButton12 = new PhotoButton(this, 1180, 620);
        page14.add(photoButton12);

        // photoButton11
        const photoButton11 = new PhotoButton(this, 920, 620);
        page14.add(photoButton11);

        // photoButton10
        const photoButton10 = new PhotoButton(this, 1180, 360);
        page14.add(photoButton10);

        // photoButton9
        const photoButton9 = new PhotoButton(this, 920, 360);
        page14.add(photoButton9);

        // photo12
        const photo12 = this.add.image(1180, 620, "clothingcatalog", "photo/12");
        page14.add(photo12);

        // photo11
        const photo11 = this.add.image(920, 620, "clothingcatalog", "photo/11");
        page14.add(photo11);

        // photo10
        const photo10 = this.add.image(1180, 360, "clothingcatalog", "photo/10");
        page14.add(photo10);

        // photo9
        const photo9 = this.add.image(920, 360, "clothingcatalog", "photo/9");
        page14.add(photo9);

        // penguin12
        const penguin12 = this.add.image(1180, 630, "clothingcatalog", "photo/penguin");
        page14.add(penguin12);

        // penguin11
        const penguin11 = this.add.image(920, 630, "clothingcatalog", "photo/penguin");
        page14.add(penguin11);

        // penguin10
        const penguin10 = this.add.image(1180, 370, "clothingcatalog", "photo/penguin");
        page14.add(penguin10);

        // penguin9
        const penguin9 = this.add.image(920, 370, "clothingcatalog", "photo/penguin");
        page14.add(penguin9);

        // photoButton8
        const photoButton8 = new PhotoButton(this, 600, 620);
        page14.add(photoButton8);

        // photoButton7
        const photoButton7 = new PhotoButton(this, 340, 620);
        page14.add(photoButton7);

        // photoButton6
        const photoButton6 = new PhotoButton(this, 600, 360);
        page14.add(photoButton6);

        // photoButton5
        const photoButton5 = new PhotoButton(this, 340, 360);
        page14.add(photoButton5);

        // photo8
        const photo8 = this.add.image(600, 620, "clothingcatalog", "photo/8");
        page14.add(photo8);

        // photo7
        const photo7 = this.add.image(340, 620, "clothingcatalog", "photo/7");
        page14.add(photo7);

        // photo6
        const photo6 = this.add.image(600, 360, "clothingcatalog", "photo/6");
        page14.add(photo6);

        // photo5
        const photo5 = this.add.image(340, 360, "clothingcatalog", "photo/5");
        page14.add(photo5);

        // penguin8
        const penguin8 = this.add.image(600, 630, "clothingcatalog", "photo/penguin");
        page14.add(penguin8);

        // penguin7
        const penguin7 = this.add.image(340, 630, "clothingcatalog", "photo/penguin");
        page14.add(penguin7);

        // penguin6
        const penguin6 = this.add.image(600, 370, "clothingcatalog", "photo/penguin");
        page14.add(penguin6);

        // penguin5
        const penguin5 = this.add.image(340, 370, "clothingcatalog", "photo/penguin");
        page14.add(penguin5);

        // page13
        const page13 = this.add.container(0, 0);
        page13.visible = false;

        // p13
        const p13 = this.add.image(0, 0, "clothingcatalog", "page/page0013");
        p13.setOrigin(0, 0);
        page13.add(p13);

        // tag1_44
        const tag1_44 = new Tag1(this, 255, 329);
        tag1_44.angle = -16;
        page13.add(tag1_44);

        // tag1_45
        const tag1_45 = new Tag1(this, 301, 80);
        tag1_45.angle = 19;
        page13.add(tag1_45);

        // tag2_36
        const tag2_36 = new Tag2(this, 619, 580);
        tag2_36.angle = -23;
        page13.add(tag2_36);

        // tag2_37
        const tag2_37 = new Tag2(this, 578, 216);
        tag2_37.angle = -28;
        page13.add(tag2_37);

        // photoButton4
        const photoButton4 = new PhotoButton(this, 1187, 620);
        page13.add(photoButton4);

        // photoButton3
        const photoButton3 = new PhotoButton(this, 927, 620);
        page13.add(photoButton3);

        // photoButton2
        const photoButton2 = new PhotoButton(this, 1187, 360);
        page13.add(photoButton2);

        // photoButton1
        const photoButton1 = new PhotoButton(this, 927, 360);
        page13.add(photoButton1);

        // photo4
        const photo4 = this.add.image(1187, 620, "clothingcatalog", "photo/4");
        page13.add(photo4);

        // photo3
        const photo3 = this.add.image(927, 620, "clothingcatalog", "photo/3");
        page13.add(photo3);

        // photo2
        const photo2 = this.add.image(1187, 360, "clothingcatalog", "photo/2");
        page13.add(photo2);

        // photo1
        const photo1 = this.add.image(927, 360, "clothingcatalog", "photo/1");
        page13.add(photo1);

        // penguin4
        const penguin4 = this.add.image(1187, 630, "clothingcatalog", "photo/penguin");
        page13.add(penguin4);

        // penguin3
        const penguin3 = this.add.image(927, 630, "clothingcatalog", "photo/penguin");
        page13.add(penguin3);

        // penguin2
        const penguin2 = this.add.image(1187, 370, "clothingcatalog", "photo/penguin");
        page13.add(penguin2);

        // penguin1
        const penguin1 = this.add.image(927, 370, "clothingcatalog", "photo/penguin");
        page13.add(penguin1);

        // page12
        const page12 = this.add.container(0, 0);
        page12.visible = false;

        // p12
        const p12 = this.add.image(0, 0, "clothingcatalog", "page/page0012");
        p12.setOrigin(0, 0);
        page12.add(p12);

        // tag1_40
        const tag1_40 = new Tag1(this, 343, 302);
        tag1_40.angle = 10;
        page12.add(tag1_40);

        // tag1_41
        const tag1_41 = new Tag1(this, 865, 653);
        tag1_41.angle = 18;
        page12.add(tag1_41);

        // tag1_42
        const tag1_42 = new Tag1(this, 933, 524);
        tag1_42.angle = 3;
        page12.add(tag1_42);

        // tag1_43
        const tag1_43 = new Tag1(this, 803, 165);
        tag1_43.angle = 52;
        page12.add(tag1_43);

        // tag2_33
        const tag2_33 = new Tag2(this, 606, 448);
        tag2_33.angle = -13;
        page12.add(tag2_33);

        // tag2_34
        const tag2_34 = new Tag2(this, 1179, 327);
        tag2_34.angle = -3;
        page12.add(tag2_34);

        // tag2_35
        const tag2_35 = new Tag2(this, 980, 131);
        tag2_35.angle = -26;
        page12.add(tag2_35);

        // page11
        const page11 = this.add.container(0, 0);
        page11.visible = false;

        // p11
        const p11 = this.add.image(0, 0, "clothingcatalog", "page/page0011");
        p11.setOrigin(0, 0);
        page11.add(p11);

        // tag1_34
        const tag1_34 = new Tag1(this, 266, 643);
        tag1_34.angle = 33;
        page11.add(tag1_34);

        // tag1_35
        const tag1_35 = new Tag1(this, 264, 529);
        tag1_35.angle = -36.99999999999994;
        page11.add(tag1_35);

        // tag1_36
        const tag1_36 = new Tag1(this, 221, 203);
        tag1_36.angle = 40;
        page11.add(tag1_36);

        // tag1_37
        const tag1_37 = new Tag1(this, 928, 680);
        tag1_37.angle = -5;
        page11.add(tag1_37);

        // tag1_38
        const tag1_38 = new Tag1(this, 750, 656);
        tag1_38.angle = -32.00000000000006;
        page11.add(tag1_38);

        // tag1_39
        const tag1_39 = new Tag1(this, 719, 180);
        tag1_39.angle = 33;
        page11.add(tag1_39);

        // tag2_28
        const tag2_28 = new Tag2(this, 575, 302);
        tag2_28.angle = -34;
        page11.add(tag2_28);

        // tag2_29
        const tag2_29 = new Tag2(this, 405, 153);
        tag2_29.angle = -9;
        page11.add(tag2_29);

        // tag2_30
        const tag2_30 = new Tag2(this, 1054, 317);
        tag2_30.angle = -14;
        page11.add(tag2_30);

        // tag2_31
        const tag2_31 = new Tag2(this, 964, 228);
        tag2_31.angle = -13;
        page11.add(tag2_31);

        // tag2_32
        const tag2_32 = new Tag2(this, 877, 91);
        tag2_32.angle = -13;
        page11.add(tag2_32);

        // page10
        const page10 = this.add.container(0, 0);
        page10.visible = false;

        // p10
        const p10 = this.add.image(0, 0, "clothingcatalog", "page/page0010");
        p10.setOrigin(0, 0);
        page10.add(p10);

        // tag1_27
        const tag1_27 = new Tag1(this, 419, 613);
        tag1_27.angle = -14;
        page10.add(tag1_27);

        // tag1_28
        const tag1_28 = new Tag1(this, 215, 381);
        tag1_28.angle = -2;
        page10.add(tag1_28);

        // tag1_29
        const tag1_29 = new Tag1(this, 223, 182);
        tag1_29.angle = 0;
        page10.add(tag1_29);

        // tag1_30
        const tag1_30 = new Tag1(this, 894, 639);
        tag1_30.angle = 0;
        page10.add(tag1_30);

        // tag1_31
        const tag1_31 = new Tag1(this, 808, 570);
        tag1_31.angle = -47;
        page10.add(tag1_31);

        // tag1_32
        const tag1_32 = new Tag1(this, 756, 359);
        tag1_32.angle = -6;
        page10.add(tag1_32);

        // tag1_33
        const tag1_33 = new Tag1(this, 761, 95);
        tag1_33.angle = -20;
        page10.add(tag1_33);

        // tag2_26
        const tag2_26 = new Tag2(this, 515, 115);
        tag2_26.angle = 7;
        page10.add(tag2_26);

        // tag2_27
        const tag2_27 = new Tag2(this, 1205, 284);
        tag2_27.angle = -19;
        page10.add(tag2_27);

        // page9
        const page9 = this.add.container(0, 0);
        page9.visible = false;

        // p9
        const p9 = this.add.image(0, 0, "clothingcatalog", "page/page0009");
        p9.setOrigin(0, 0);
        page9.add(p9);

        // tag1_24
        const tag1_24 = new Tag1(this, 319, 94);
        tag1_24.angle = 33;
        page9.add(tag1_24);

        // tag1_25
        const tag1_25 = new Tag1(this, 967, 100);
        tag1_25.angle = 2;
        page9.add(tag1_25);

        // tag1_26
        const tag1_26 = new Tag1(this, 1095, 523);
        tag1_26.angle = -22;
        page9.add(tag1_26);

        // tag2_22
        const tag2_22 = new Tag2(this, 546, 365);
        tag2_22.angle = -2;
        page9.add(tag2_22);

        // tag2_23
        const tag2_23 = new Tag2(this, 883, 278);
        tag2_23.angle = -34;
        page9.add(tag2_23);

        // tag2_24
        const tag2_24 = new Tag2(this, 1005, 644);
        tag2_24.angle = -3;
        page9.add(tag2_24);

        // tag2_25
        const tag2_25 = new Tag2(this, 1236, 329);
        tag2_25.angle = 41;
        page9.add(tag2_25);

        // page8
        const page8 = this.add.container(0, 0);
        page8.visible = false;

        // p8
        const p8 = this.add.image(0, 0, "clothingcatalog", "page/page0008");
        p8.setOrigin(0, 0);
        page8.add(p8);

        // tag1_21
        const tag1_21 = new Tag1(this, 220, 587);
        tag1_21.scaleX = 1.2;
        tag1_21.scaleY = 1.2;
        tag1_21.angle = -13;
        page8.add(tag1_21);

        // tag1_22
        const tag1_22 = new Tag1(this, 210, 345);
        tag1_22.angle = -27;
        page8.add(tag1_22);

        // tag1_23
        const tag1_23 = new Tag1(this, 824, 321);
        tag1_23.scaleX = 1.3;
        tag1_23.scaleY = 1.3;
        tag1_23.angle = 33;
        page8.add(tag1_23);

        // tag2_21
        const tag2_21 = new Tag2(this, 1081, 170);
        tag2_21.scaleX = 1.3;
        tag2_21.scaleY = 1.3;
        tag2_21.angle = 0;
        page8.add(tag2_21);

        // page7
        const page7 = this.add.container(0, 0);
        page7.visible = false;

        // p7
        const p7 = this.add.image(0, 0, "clothingcatalog", "page/page0007");
        p7.setOrigin(0, 0);
        page7.add(p7);

        // tag1_19
        const tag1_19 = new Tag1(this, 269, 322);
        tag1_19.angle = -17;
        page7.add(tag1_19);

        // tag1_20
        const tag1_20 = new Tag1(this, 871, 69);
        tag1_20.angle = 33;
        page7.add(tag1_20);

        // tag2_17
        const tag2_17 = new Tag2(this, 622, 494);
        tag2_17.angle = 17;
        page7.add(tag2_17);

        // tag2_18
        const tag2_18 = new Tag2(this, 594, 386);
        tag2_18.angle = -26;
        page7.add(tag2_18);

        // tag2_19
        const tag2_19 = new Tag2(this, 496, 230);
        tag2_19.angle = -34;
        page7.add(tag2_19);

        // tag2_20
        const tag2_20 = new Tag2(this, 1026, 349);
        tag2_20.angle = -23;
        page7.add(tag2_20);

        // page6
        const page6 = this.add.container(0, 0);
        page6.visible = false;

        // p6
        const p6 = this.add.image(0, 0, "clothingcatalog", "page/page0006");
        p6.setOrigin(0, 0);
        page6.add(p6);

        // tag1_13
        const tag1_13 = new Tag1(this, 206, 641);
        tag1_13.angle = -38;
        page6.add(tag1_13);

        // tag1_14
        const tag1_14 = new Tag1(this, 325, 173);
        tag1_14.angle = 33;
        page6.add(tag1_14);

        // tag1_15
        const tag1_15 = new Tag1(this, 523, 384);
        tag1_15.angle = 10;
        page6.add(tag1_15);

        // tag1_16
        const tag1_16 = new Tag1(this, 520, 145);
        tag1_16.angle = 33;
        page6.add(tag1_16);

        // tag1_17
        const tag1_17 = new Tag1(this, 555, 75);
        tag1_17.angle = 11;
        page6.add(tag1_17);

        // tag1_18
        const tag1_18 = new Tag1(this, 907, 219);
        tag1_18.angle = 16;
        page6.add(tag1_18);

        // tag2_14
        const tag2_14 = new Tag2(this, 802, 509);
        tag2_14.angle = -34;
        page6.add(tag2_14);

        // tag2_15
        const tag2_15 = new Tag2(this, 1108, 218);
        tag2_15.angle = -29;
        page6.add(tag2_15);

        // tag2_16
        const tag2_16 = new Tag2(this, 1121, 372);
        tag2_16.angle = -39.99999999999994;
        page6.add(tag2_16);

        // page5
        const page5 = this.add.container(0, 0);
        page5.visible = false;

        // p5
        const p5 = this.add.image(0, 0, "clothingcatalog", "page/page0005");
        p5.setOrigin(0, 0);
        page5.add(p5);

        // tag1_9
        const tag1_9 = new Tag1(this, 213, 673);
        tag1_9.angle = -45.00000000000006;
        page5.add(tag1_9);

        // tag1_10
        const tag1_10 = new Tag1(this, 275, 91);
        tag1_10.angle = 33;
        page5.add(tag1_10);

        // tag1_11
        const tag1_11 = new Tag1(this, 789, 292);
        tag1_11.angle = 20;
        page5.add(tag1_11);

        // tag1_12
        const tag1_12 = new Tag1(this, 845, 126);
        tag1_12.angle = -19;
        page5.add(tag1_12);

        // tag2_11
        const tag2_11 = new Tag2(this, 537, 194);
        tag2_11.angle = -21;
        page5.add(tag2_11);

        // tag2_12
        const tag2_12 = new Tag2(this, 546, 672);
        tag2_12.angle = -2;
        page5.add(tag2_12);

        // tag2_13
        const tag2_13 = new Tag2(this, 1242, 235);
        tag2_13.angle = 40;
        page5.add(tag2_13);

        // page4
        const page4 = this.add.container(0, 0);
        page4.visible = false;

        // p4
        const p4 = this.add.image(0, 0, "clothingcatalog", "page/page0004");
        p4.setOrigin(0, 0);
        page4.add(p4);

        // tag1_4
        const tag1_4 = new Tag1(this, 222, 679);
        tag1_4.angle = -46;
        page4.add(tag1_4);

        // tag1_5
        const tag1_5 = new Tag1(this, 279, 296);
        tag1_5.angle = 31;
        page4.add(tag1_5);

        // tag1_6
        const tag1_6 = new Tag1(this, 574, 141);
        tag1_6.angle = 49;
        page4.add(tag1_6);

        // tag1_7
        const tag1_7 = new Tag1(this, 760, 614);
        tag1_7.angle = -45.00000000000006;
        page4.add(tag1_7);

        // tag1_8
        const tag1_8 = new Tag1(this, 1080, 761);
        tag1_8.angle = -31;
        page4.add(tag1_8);

        // tag2_4
        const tag2_4 = new Tag2(this, 422, 402);
        tag2_4.angle = -20;
        page4.add(tag2_4);

        // tag2_5
        const tag2_5 = new Tag2(this, 667, 434);
        tag2_5.scaleX = 0.7;
        tag2_5.scaleY = 0.7;
        tag2_5.angle = -10;
        page4.add(tag2_5);

        // tag2_6
        const tag2_6 = new Tag2(this, 844, 351);
        tag2_6.angle = -46;
        page4.add(tag2_6);

        // tag2_7
        const tag2_7 = new Tag2(this, 937, 453);
        tag2_7.angle = -26;
        page4.add(tag2_7);

        // tag2_8
        const tag2_8 = new Tag2(this, 1023, 240);
        tag2_8.angle = 9;
        page4.add(tag2_8);

        // tag2_9
        const tag2_9 = new Tag2(this, 1164, 335);
        tag2_9.angle = -25;
        page4.add(tag2_9);

        // tag2_10
        const tag2_10 = new Tag2(this, 1227, 589);
        tag2_10.angle = 20;
        page4.add(tag2_10);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // p3
        const p3 = this.add.image(0, 0, "clothingcatalog", "page/page0003");
        p3.setOrigin(0, 0);
        page3.add(p3);

        // tag1
        const tag1 = new Tag1(this, 236, 366);
        tag1.angle = 33;
        page3.add(tag1);

        // tag1_1
        const tag1_1 = new Tag1(this, 378, 386);
        tag1_1.angle = -13;
        page3.add(tag1_1);

        // tag1_2
        const tag1_2 = new Tag1(this, 359, 110);
        tag1_2.angle = 31;
        page3.add(tag1_2);

        // tag1_3
        const tag1_3 = new Tag1(this, 942, 154);
        tag1_3.angle = 45;
        page3.add(tag1_3);

        // tag2
        const tag2 = new Tag2(this, 384, 535);
        tag2.angle = -34;
        page3.add(tag2);

        // tag2_1
        const tag2_1 = new Tag2(this, 1178, 309);
        tag2_1.angle = -29;
        page3.add(tag2_1);

        // tag2_2
        const tag2_2 = new Tag2(this, 648, 77);
        tag2_2.angle = 17;
        page3.add(tag2_2);

        // tag2_3
        const tag2_3 = new Tag2(this, 431, 605);
        tag2_3.angle = 5;
        page3.add(tag2_3);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // p2
        const p2 = this.add.image(0, 0, "clothingcatalog", "page/page0002");
        p2.setOrigin(0, 0);
        page2.add(p2);

        // aqua
        const aqua = new ColorButton(this, 1200, 525);
        aqua.tintTopLeft = 4718591;
        aqua.tintTopRight = 4718591;
        aqua.tintBottomLeft = 4718591;
        aqua.tintBottomRight = 4718591;
        page2.add(aqua);

        // lime
        const lime = new ColorButton(this, 1100, 525);
        lime.tintFill = false;
        lime.tintTopLeft = 7536384;
        lime.tintTopRight = 7536384;
        lime.tintBottomLeft = 7536384;
        lime.tintBottomRight = 7536384;
        page2.add(lime);

        // purple
        const purple = new ColorButton(this, 1000, 525);
        purple.tintFill = false;
        purple.tintTopLeft = 6619289;
        purple.tintTopRight = 6619289;
        purple.tintBottomLeft = 6619289;
        purple.tintBottomRight = 6619289;
        page2.add(purple);

        // darkGreen
        const darkGreen = new ColorButton(this, 900, 525);
        darkGreen.tintFill = false;
        darkGreen.tintTopLeft = 25856;
        darkGreen.tintTopRight = 25856;
        darkGreen.tintBottomLeft = 25856;
        darkGreen.tintBottomRight = 25856;
        page2.add(darkGreen);

        // pink
        const pink = new ColorButton(this, 800, 525);
        pink.tintFill = false;
        pink.tintTopLeft = 16724633;
        pink.tintTopRight = 16724633;
        pink.tintBottomLeft = 16724633;
        pink.tintBottomRight = 16724633;
        page2.add(pink);

        // lightblue
        const lightblue = new ColorButton(this, 1146, 425);
        lightblue.tintFill = false;
        lightblue.tintTopLeft = 39372;
        lightblue.tintTopRight = 39372;
        lightblue.tintBottomLeft = 39372;
        lightblue.tintBottomRight = 39372;
        page2.add(lightblue);

        // yellow
        const yellow = new ColorButton(this, 1046, 425);
        yellow.tintFill = false;
        yellow.tintTopLeft = 16763904;
        yellow.tintTopRight = 16763904;
        yellow.tintBottomLeft = 16763904;
        yellow.tintBottomRight = 16763904;
        page2.add(yellow);

        // peach
        const peach = new ColorButton(this, 946, 425);
        peach.tintFill = false;
        peach.tintTopLeft = 16737637;
        peach.tintTopRight = 16737637;
        peach.tintBottomLeft = 16737637;
        peach.tintBottomRight = 16737637;
        page2.add(peach);

        // brown
        const brown = new ColorButton(this, 846, 425);
        brown.tintFill = false;
        brown.tintTopLeft = 10052864;
        brown.tintTopRight = 10052864;
        brown.tintBottomLeft = 10052864;
        brown.tintBottomRight = 10052864;
        page2.add(brown);

        // orange
        const orange = new ColorButton(this, 1200, 325);
        orange.tintFill = false;
        orange.tintTopLeft = 16737536;
        orange.tintTopRight = 16737536;
        orange.tintBottomLeft = 16737536;
        orange.tintBottomRight = 16737536;
        page2.add(orange);

        // green
        const green = new ColorButton(this, 1100, 325);
        green.tintFill = false;
        green.tintTopLeft = 39168;
        green.tintTopRight = 39168;
        green.tintBottomLeft = 39168;
        green.tintBottomRight = 39168;
        page2.add(green);

        // red
        const red = new ColorButton(this, 1000, 325);
        red.tintFill = false;
        red.tintTopLeft = 13369344;
        red.tintTopRight = 13369344;
        red.tintBottomLeft = 13369344;
        red.tintBottomRight = 13369344;
        page2.add(red);

        // blue
        const blue = new ColorButton(this, 900, 325);
        blue.tintFill = false;
        blue.tintTopLeft = 12901;
        blue.tintTopRight = 12901;
        blue.tintBottomLeft = 12901;
        blue.tintBottomRight = 12901;
        page2.add(blue);

        // black
        const black = new ColorButton(this, 800, 325);
        black.tintFill = false;
        black.tintTopLeft = 3289650;
        black.tintTopRight = 3289650;
        black.tintBottomLeft = 3289650;
        black.tintBottomRight = 3289650;
        page2.add(black);

        // page1
        const page1 = this.add.container(0, 0);
        page1.visible = false;

        // p1
        const p1 = this.add.image(0, 0, "clothingcatalog", "page/page0001");
        p1.setOrigin(0, 0);
        page1.add(p1);

        // pageFront
        const pageFront = this.add.image(469, 42, "clothingcatalog", "page_front");
        pageFront.setOrigin(0, 0);
        page1.add(pageFront);

        // closeRight_1
        const closeRight_1 = this.add.image(925, 37, "clothingcatalog", "close_right");
        closeRight_1.setOrigin(0, 0);
        page1.add(closeRight_1);

        // buttons
        const buttons = this.add.container(190, 41);
        buttons.visible = false;

        // closeRight
        const closeRight = this.add.image(1012, 0, "clothingcatalog", "close_right");
        closeRight.setOrigin(0, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = this.add.image(1012, 549, "clothingcatalog", "page_right");
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = this.add.image(0, 549, "clothingcatalog", "page_left");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // coins
        const coins = this.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16];

        // block (components)
        new Interactive(block);

        // pageLeft_1 (components)
        const pageLeft_1Button = new Button(pageLeft_1);
        pageLeft_1Button.spriteName = "page_left";
        pageLeft_1Button.callback = () => this.prevPage();
        pageLeft_1Button.activeFrame = false;
        pageLeft_1Button.pixelPerfect = true;

        // closeLeft (components)
        const closeLeftButton = new Button(closeLeft);
        closeLeftButton.spriteName = "close_left";
        closeLeftButton.callback = () => this.close();
        closeLeftButton.pixelPerfect = true;

        // us (prefab fields)
        us.item = 501;

        // turkey (prefab fields)
        turkey.item = 521;

        // switzerland (prefab fields)
        switzerland.item = 520;

        // sweden (prefab fields)
        sweden.item = 519;

        // spain (prefab fields)
        spain.item = 518;

        // sa (prefab fields)
        sa.item = 526;

        // russia (prefab fields)
        russia.item = 517;

        // portugal (prefab fields)
        portugal.item = 525;

        // poland (prefab fields)
        poland.item = 516;

        // norway (prefab fields)
        norway.item = 515;

        // nz (prefab fields)
        nz.item = 523;

        // netherlands (prefab fields)
        netherlands.item = 514;

        // mexico (prefab fields)
        mexico.item = 522;

        // korea (prefab fields)
        korea.item = 513;

        // japan (prefab fields)
        japan.item = 512;

        // jamaica (prefab fields)
        jamaica.item = 534;

        // italy (prefab fields)
        italy.item = 528;

        // israel (prefab fields)
        israel.item = 511;

        // ireland (prefab fields)
        ireland.item = 524;

        // india (prefab fields)
        india.item = 527;

        // hungary (prefab fields)
        hungary.item = 531;

        // uk (prefab fields)
        uk.item = 503;

        // germany (prefab fields)
        germany.item = 510;

        // france (prefab fields)
        france.item = 509;

        // finland (prefab fields)
        finland.item = 508;

        // egypt (prefab fields)
        egypt.item = 530;

        // denmark (prefab fields)
        denmark.item = 507;

        // colombia (prefab fields)
        colombia.item = 536;

        // china (prefab fields)
        china.item = 506;

        // chile (prefab fields)
        chile.item = 535;

        // canada (prefab fields)
        canada.item = 500;

        // brazil (prefab fields)
        brazil.item = 505;

        // belize (prefab fields)
        belize.item = 529;

        // belgium (prefab fields)
        belgium.item = 504;

        // australia (prefab fields)
        australia.item = 502;

        // argentina (prefab fields)
        argentina.item = 533;

        // photoButton12 (prefab fields)
        photoButton12.item = 982;

        // photoButton11 (prefab fields)
        photoButton11.item = 969;

        // photoButton10 (prefab fields)
        photoButton10.item = 9032;

        // photoButton9 (prefab fields)
        photoButton9.item = 9031;

        // photoButton8 (prefab fields)
        photoButton8.item = 994;

        // photoButton7 (prefab fields)
        photoButton7.item = 9035;

        // photoButton6 (prefab fields)
        photoButton6.item = 9034;

        // photoButton5 (prefab fields)
        photoButton5.item = 9033;

        // tag1_44 (prefab fields)
        tag1_44.item = 3022;

        // tag1_45 (prefab fields)
        tag1_45.item = 1058;

        // tag2_36 (prefab fields)
        tag2_36.item = 6021;

        // tag2_37 (prefab fields)
        tag2_37.item = 5032;

        // photoButton4 (prefab fields)
        photoButton4.item = 976;

        // photoButton3 (prefab fields)
        photoButton3.item = 985;

        // photoButton2 (prefab fields)
        photoButton2.item = 9038;

        // photoButton1 (prefab fields)
        photoButton1.item = 9037;

        // tag1_40 (prefab fields)
        tag1_40.item = 3020;

        // tag1_41 (prefab fields)
        tag1_41.item = 6019;

        // tag1_42 (prefab fields)
        tag1_42.item = 794;

        // tag1_43 (prefab fields)
        tag1_43.item = 762;

        // tag2_33 (prefab fields)
        tag2_33.item = 4084;

        // tag2_34 (prefab fields)
        tag2_34.item = 668;

        // tag2_35 (prefab fields)
        tag2_35.item = 477;

        // tag1_34 (prefab fields)
        tag1_34.item = 4083;

        // tag1_35 (prefab fields)
        tag1_35.item = 4079;

        // tag1_36 (prefab fields)
        tag1_36.item = 793;

        // tag1_37 (prefab fields)
        tag1_37.item = 4081;

        // tag1_38 (prefab fields)
        tag1_38.item = 796;

        // tag1_39 (prefab fields)
        tag1_39.item = 4080;

        // tag2_28 (prefab fields)
        tag2_28.item = 1055;

        // tag2_29 (prefab fields)
        tag2_29.item = 667;

        // tag2_30 (prefab fields)
        tag2_30.item = 1054;

        // tag2_31 (prefab fields)
        tag2_31.item = 673;

        // tag2_32 (prefab fields)
        tag2_32.item = 1053;

        // tag1_27 (prefab fields)
        tag1_27.item = 831;

        // tag1_28 (prefab fields)
        tag1_28.item = 4097;

        // tag1_29 (prefab fields)
        tag1_29.item = 117;

        // tag1_30 (prefab fields)
        tag1_30.item = 830;

        // tag1_31 (prefab fields)
        tag1_31.item = 363;

        // tag1_32 (prefab fields)
        tag1_32.item = 4096;

        // tag1_33 (prefab fields)
        tag1_33.item = 656;

        // tag2_26 (prefab fields)
        tag2_26.item = 671;

        // tag2_27 (prefab fields)
        tag2_27.item = 1022;

        // tag1_24 (prefab fields)
        tag1_24.item = 108;

        // tag1_25 (prefab fields)
        tag1_25.item = 1060;

        // tag1_26 (prefab fields)
        tag1_26.item = 375;

        // tag2_22 (prefab fields)
        tag2_22.item = 4093;

        // tag2_23 (prefab fields)
        tag2_23.item = 1061;

        // tag2_24 (prefab fields)
        tag2_24.item = 4095;

        // tag2_25 (prefab fields)
        tag2_25.item = 4092;

        // tag1_21 (prefab fields)
        tag1_21.item = 263;

        // tag1_22 (prefab fields)
        tag1_22.item = 424;

        // tag1_23 (prefab fields)
        tag1_23.item = 4094;

        // tag2_21 (prefab fields)
        tag2_21.item = 1059;

        // tag1_19 (prefab fields)
        tag1_19.item = 1063;

        // tag1_20 (prefab fields)
        tag1_20.item = 1065;

        // tag2_17 (prefab fields)
        tag2_17.item = 4098;

        // tag2_18 (prefab fields)
        tag2_18.item = 732;

        // tag2_19 (prefab fields)
        tag2_19.item = 118;

        // tag2_20 (prefab fields)
        tag2_20.item = 4101;

        // tag1_13 (prefab fields)
        tag1_13.item = 4103;

        // tag1_14 (prefab fields)
        tag1_14.item = 1067;

        // tag1_15 (prefab fields)
        tag1_15.item = 234;

        // tag1_16 (prefab fields)
        tag1_16.item = 843;

        // tag1_17 (prefab fields)
        tag1_17.item = 433;

        // tag1_18 (prefab fields)
        tag1_18.item = 125;

        // tag2_14 (prefab fields)
        tag2_14.item = 6022;

        // tag2_15 (prefab fields)
        tag2_15.item = 1066;

        // tag2_16 (prefab fields)
        tag2_16.item = 4102;

        // tag1_9 (prefab fields)
        tag1_9.item = 4099;

        // tag1_10 (prefab fields)
        tag1_10.item = 728;

        // tag1_11 (prefab fields)
        tag1_11.item = 4100;

        // tag1_12 (prefab fields)
        tag1_12.item = 651;

        // tag2_11 (prefab fields)
        tag2_11.item = 1064;

        // tag2_12 (prefab fields)
        tag2_12.item = 6004;

        // tag2_13 (prefab fields)
        tag2_13.item = 233;

        // tag1_4 (prefab fields)
        tag1_4.item = 4108;

        // tag1_5 (prefab fields)
        tag1_5.item = 670;

        // tag1_6 (prefab fields)
        tag1_6.item = 5043;

        // tag1_7 (prefab fields)
        tag1_7.item = 784;

        // tag1_8 (prefab fields)
        tag1_8.item = 357;

        // tag2_4 (prefab fields)
        tag2_4.item = 2010;

        // tag2_5 (prefab fields)
        tag2_5.item = 4109;

        // tag2_6 (prefab fields)
        tag2_6.item = 657;

        // tag2_7 (prefab fields)
        tag2_7.item = 184;

        // tag2_8 (prefab fields)
        tag2_8.item = 5042;

        // tag2_9 (prefab fields)
        tag2_9.item = 1074;

        // tag2_10 (prefab fields)
        tag2_10.item = 251;

        // tag1 (prefab fields)
        tag1.item = 1073;

        // tag1_1 (prefab fields)
        tag1_1.item = 4106;

        // tag1_2 (prefab fields)
        tag1_2.item = 1072;

        // tag1_3 (prefab fields)
        tag1_3.item = 2011;

        // tag2 (prefab fields)
        tag2.item = 3026;

        // tag2_1 (prefab fields)
        tag2_1.item = 3027;

        // tag2_2 (prefab fields)
        tag2_2.item = 3025;

        // tag2_3 (prefab fields)
        tag2_3.item = 4107;

        // aqua (prefab fields)
        aqua.item = 15;

        // lime (prefab fields)
        lime.item = 13;

        // purple (prefab fields)
        purple.item = 8;

        // darkGreen (prefab fields)
        darkGreen.item = 11;

        // pink (prefab fields)
        pink.item = 3;

        // lightblue (prefab fields)
        lightblue.item = 12;

        // yellow (prefab fields)
        yellow.item = 7;

        // peach (prefab fields)
        peach.item = 10;

        // brown (prefab fields)
        brown.item = 9;

        // orange (prefab fields)
        orange.item = 6;

        // green (prefab fields)
        green.item = 2;

        // red (prefab fields)
        red.item = 5;

        // blue (prefab fields)
        blue.item = 1;

        // black (prefab fields)
        black.item = 4;

        // pageFront (components)
        const pageFrontButton = new Button(pageFront);
        pageFrontButton.spriteName = "page_front";
        pageFrontButton.callback = () => this.nextPage();
        pageFrontButton.activeFrame = false;

        // closeRight_1 (components)
        const closeRight_1Button = new Button(closeRight_1);
        closeRight_1Button.spriteName = "close_right";
        closeRight_1Button.callback = () => this.close();
        closeRight_1Button.pixelPerfect = true;

        // closeRight (components)
        const closeRightButton = new Button(closeRight);
        closeRightButton.spriteName = "close_right";
        closeRightButton.callback = () => this.close();
        closeRightButton.pixelPerfect = true;

        // pageRight (components)
        const pageRightButton = new Button(pageRight);
        pageRightButton.spriteName = "page_right";
        pageRightButton.callback = () => this.nextPage();
        pageRightButton.activeFrame = false;
        pageRightButton.pixelPerfect = true;

        // pageLeft (components)
        const pageLeftButton = new Button(pageLeft);
        pageLeftButton.spriteName = "page_left";
        pageLeftButton.callback = () => this.prevPage();
        pageLeftButton.activeFrame = false;
        pageLeftButton.pixelPerfect = true;

        this.photo12 = photo12;
        this.photo11 = photo11;
        this.photo10 = photo10;
        this.photo9 = photo9;
        this.photo8 = photo8;
        this.photo7 = photo7;
        this.photo6 = photo6;
        this.photo5 = photo5;
        this.photo4 = photo4;
        this.photo3 = photo3;
        this.photo2 = photo2;
        this.photo1 = photo1;
        this.buttons = buttons;
        this.coins = coins;
        this.pages = pages;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.setCoins(this.world.client.coins)
    }

    setCoins(coins) {
        this.coins.text = `YOUR COINS: ${coins}`
    }

    buy(item) {
        this.interface.prompt.showItem(item)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
