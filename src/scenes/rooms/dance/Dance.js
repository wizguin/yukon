import RoomScene from '../RoomScene'

import { Animation, Button, MoveTo, SimpleButton, Zone } from '@components/components'


/* START OF COMPILED CODE */

export default class Dance extends RoomScene {

    constructor() {
        super("Dance");

        /** @type {Phaser.GameObjects.Sprite} */
        this.puffle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_speaker_sound;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_mixer_wave;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_mixer_tables_under;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_mixer_tables;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_mixer_lights;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_mixer_slider;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_box_headphones_back;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_box_sliders;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_box_lights;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dj_box_headphones_front;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.animate;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 680, 520),
            'boiler': null,
            'lounge': () => this.triggerRoom(121, 1200, 760),
            'mix': null
        }

        this.music = '5'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dance-pack", "assets/media/rooms/dance/dance-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(760, 480, "dance", "bg");

        // wire
        const wire = this.add.image(1284, 726, "dance", "wire");
        wire.setOrigin(0.5, 0.5070422535211268);

        // floor_frame
        const floor_frame = this.add.image(646, 696, "dance", "floor/frame");
        floor_frame.setOrigin(0.5006273525721455, 0.5);

        // floor
        const floor = this.add.sprite(646, 693, "dance", "floor/floor0001");

        // stage
        const stage = this.add.image(660, 388, "dance", "stage");
        stage.setOrigin(0.5008576329331046, 0.5028248587570622);

        // fg_wire
        const fg_wire = this.add.image(217, 32, "dance", "fg/fg_wire");
        fg_wire.setOrigin(0.5106382978723404, 0.5063291139240507);

        // fg_speaker_1
        const fg_speaker_1 = this.add.sprite(268, 151, "dance", "fg/fg_speaker_10001");

        // fg_speaker_2
        const fg_speaker_2 = this.add.sprite(170, 131, "dance", "fg/fg_speaker_20001");
        fg_speaker_2.setOrigin(0.503448275862069, 0.5026455026455027);

        // fg_wire_1
        const fg_wire_1 = this.add.image(1130, 32, "dance", "fg/fg_wire");
        fg_wire_1.setOrigin(0.5106382978723404, 0.5063291139240507);
        fg_wire_1.flipX = true;

        // fg_speaker_1_1
        const fg_speaker_1_1 = this.add.sprite(1080, 151, "dance", "fg/fg_speaker_10001");
        fg_speaker_1_1.flipX = true;

        // speaker_3
        const speaker_3 = this.add.image(119, 827, "dance", "speaker_3");
        speaker_3.setOrigin(0.5297297297297298, 0.8456140350877193);

        // fg_speaker_2_1
        const fg_speaker_2_1 = this.add.sprite(1178, 131, "dance", "fg/fg_speaker_20001");
        fg_speaker_2_1.setOrigin(0.503448275862069, 0.5026455026455027);
        fg_speaker_2_1.flipX = true;

        // speaker_1
        const speaker_1 = this.add.sprite(350, 424, "dance", "speaker_10001");
        speaker_1.setOrigin(0.5655737704918032, 0.770949720670391);

        // lamp
        const lamp = this.add.image(1457, 227, "dance", "lamp");
        lamp.setOrigin(0.5045045045045045, 0.5);

        // door_behind
        this.add.image(154, 434, "dance", "door/behind");

        // door
        const door = this.add.sprite(154, 440, "dance", "door/door0001");
        door.setOrigin(0.5, 0.5016722408026756);

        // door_frame
        const door_frame = this.add.image(152, 437, "dance", "door/frame");
        door_frame.setOrigin(0.5031446540880503, 0.5);

        // lights
        const lights = this.add.sprite(666, 94, "dance", "lights/lights0001");

        // stairs
        const stairs = this.add.image(1361, 433, "dance", "stairs");
        stairs.setOrigin(0.5026455026455027, 0.5010141987829615);

        // puffle_speaker
        const puffle_speaker = this.add.container(1164, 735.5295257801258);

        // speaker_4
        const speaker_4 = this.add.image(2, 1.4705234832657652, "dance", "speaker_4");
        speaker_4.setOrigin(0.45918367346938777, 0.8421052631578947);
        puffle_speaker.add(speaker_4);

        // puffle
        const puffle = this.add.sprite(0, -199.52947651673423, "dance", "puffle/puffle0001");
        puffle.setOrigin(0.5, 0.7933884297520661);
        puffle_speaker.add(puffle);

        // boiler
        const boiler = this.add.container(979.3584381110322, 418.96573398979467);

        // speaker_1_1
        const speaker_1_1 = this.add.sprite(0.6415522983123765, -0.9657361633013579, "dance", "speaker_10001");
        speaker_1_1.setOrigin(0.5655737704918032, 0.770949720670391);
        speaker_1_1.flipX = true;
        boiler.add(speaker_1_1);

        // boiler_door
        const boiler_door = this.add.image(25.641552298312376, -51.96573616330136, "dance", "boiler");
        boiler_door.setOrigin(0.5, 0.4236453201970443);
        boiler_door.flipX = true;
        boiler.add(boiler_door);

        // dj_speaker
        const dj_speaker = this.add.container(790.7929422877853, 305.10866987575673);

        // dj_speaker_speaker
        const dj_speaker_speaker = this.add.image(1.2070577122146915, -0.10866987575673193, "dance", "dj/speaker");
        dj_speaker_speaker.setOrigin(0.4, 0.6923076923076923);
        dj_speaker.add(dj_speaker_speaker);

        // dj_speaker_sound
        const dj_speaker_sound = this.add.sprite(6.2070577122146915, -39.10866987575673, "dance", "dj/speaker_sound0001");
        dj_speaker_sound.setOrigin(0.5, 0.5061728395061729);
        dj_speaker.add(dj_speaker_sound);

        // mixer
        const mixer = this.add.container(656.758588457557, 340.0371580227643);

        // dj_mixer_wave_green
        const dj_mixer_wave_green = this.add.image(0, 12, "dance", "dj/mixer/wave/green");
        mixer.add(dj_mixer_wave_green);

        // dj_mixer_wave
        const dj_mixer_wave = this.add.sprite(0, 12, "dance", "dj/mixer/wave/wave0001");
        mixer.add(dj_mixer_wave);

        // dj_mixer
        const dj_mixer = this.add.image(0.24141154244296104, 2.962841977235712, "dance", "dj/mixer/mixer");
        mixer.add(dj_mixer);

        // dj_mixer_tables_under
        const dj_mixer_tables_under = this.add.sprite(1.241411542442961, -4.037158022764288, "dance", "dj/mixer/tables/tables_under0001");
        dj_mixer_tables_under.setOrigin(0.5027027027027027, 0.5128205128205128);
        mixer.add(dj_mixer_tables_under);

        // dj_mixer_tables
        const dj_mixer_tables = this.add.sprite(0.24141154244296104, -7.037158022764288, "dance", "dj/mixer/tables/tables0001");
        dj_mixer_tables.setOrigin(0.5, 0.5161290322580645);
        mixer.add(dj_mixer_tables);

        // dj_mixer_lights
        const dj_mixer_lights = this.add.sprite(0.24141154244296104, -20.037158022764288, "dance", "dj/mixer/lights/lights0001");
        mixer.add(dj_mixer_lights);

        // dj_mixer_slider
        const dj_mixer_slider = this.add.sprite(0.24141154244296104, -20.037158022764288, "dance", "dj/mixer/slider/slider0001");
        mixer.add(dj_mixer_slider);

        // dj_wires
        const dj_wires = this.add.image(5.241411542442961, 29.962841977235712, "dance", "dj/wires");
        dj_wires.setOrigin(0.5014836795252225, 0.5050505050505051);
        mixer.add(dj_wires);

        // box
        const box = this.add.container(520.6001395292443, 310.6122881275866);

        // dj_box_headphones_back
        const dj_box_headphones_back = this.add.sprite(-52.600168515674795, -58.61229112964787, "dance", "dj/box/headphones/back0001");
        dj_box_headphones_back.setOrigin(0.5135135135135135, 0.5);
        box.add(dj_box_headphones_back);

        // dj_box
        const dj_box = this.add.image(1.3998314843252047, 2.387708870352128, "dance", "dj/box/box");
        dj_box.setOrigin(0.5, 0.75);
        box.add(dj_box);

        // dj_box_sliders
        const dj_box_sliders = this.add.sprite(30.399831484325205, 2.387708870352128, "dance", "dj/box/sliders/sliders0001");
        dj_box_sliders.setOrigin(0.5, 0.5151515151515151);
        box.add(dj_box_sliders);

        // dj_box_lights
        const dj_box_lights = this.add.sprite(43.399831484325205, -44.61229112964787, "dance", "dj/box/lights/lights0001");
        dj_box_lights.setOrigin(0.5, 0.5072463768115942);
        box.add(dj_box_lights);

        // dj_box_headphones_front
        const dj_box_headphones_front = this.add.sprite(-26.600168515674795, -70.61229112964787, "dance", "dj/box/headphones/front0001");
        dj_box_headphones_front.setOrigin(0.5, 0.509090909090909);
        box.add(dj_box_headphones_front);

        // zone
        const zone = this.add.rectangle(1164, 537, 60, 50);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // lists
        const sort = [speaker_3, speaker_1, boiler, box, dj_speaker, mixer, puffle_speaker];
        const animate = [dj_box_headphones_front, dj_box_lights, dj_mixer_slider, dj_mixer_lights, dj_mixer_tables, dj_mixer_tables_under, dj_speaker_sound, dj_box_headphones_back];

        // floor (components)
        const floorAnimation = new Animation(floor);
        floorAnimation.key = "floor/floor";
        floorAnimation.end = 60;

        // fg_speaker_1 (components)
        const fg_speaker_1Animation = new Animation(fg_speaker_1);
        fg_speaker_1Animation.key = "fg/fg_speaker_1";
        fg_speaker_1Animation.end = 10;

        // fg_speaker_2 (components)
        const fg_speaker_2Animation = new Animation(fg_speaker_2);
        fg_speaker_2Animation.key = "fg/fg_speaker_2";
        fg_speaker_2Animation.end = 10;

        // fg_speaker_1_1 (components)
        const fg_speaker_1_1Animation = new Animation(fg_speaker_1_1);
        fg_speaker_1_1Animation.key = "fg/fg_speaker_1";
        fg_speaker_1_1Animation.end = 10;

        // fg_speaker_2_1 (components)
        const fg_speaker_2_1Animation = new Animation(fg_speaker_2_1);
        fg_speaker_2_1Animation.key = "fg/fg_speaker_2";
        fg_speaker_2_1Animation.end = 10;

        // speaker_1 (components)
        const speaker_1Animation = new Animation(speaker_1);
        speaker_1Animation.key = "speaker_1";
        speaker_1Animation.end = 10;

        // door (components)
        new SimpleButton(door);
        const doorAnimation = new Animation(door);
        doorAnimation.key = "door/door";
        doorAnimation.end = 5;
        doorAnimation.repeat = 0;
        doorAnimation.autoPlay = false;
        doorAnimation.onHover = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 220;
        doorMoveTo.y = 540;

        // lights (components)
        const lightsAnimation = new Animation(lights);
        lightsAnimation.key = "lights/lights";
        lightsAnimation.end = 80;

        // stairs (components)
        const stairsButton = new Button(stairs);
        stairsButton.spriteName = "stairs";
        stairsButton.activeFrame = false;
        const stairsMoveTo = new MoveTo(stairs);
        stairsMoveTo.x = 1324;
        stairsMoveTo.y = 769;

        // speaker_1_1 (components)
        const speaker_1_1Animation = new Animation(speaker_1_1);
        speaker_1_1Animation.key = "speaker_1";
        speaker_1_1Animation.end = 10;

        // boiler_door (components)
        const boiler_doorButton = new Button(boiler_door);
        boiler_doorButton.spriteName = "boiler";
        boiler_doorButton.activeFrame = false;
        const boiler_doorMoveTo = new MoveTo(boiler_door);
        boiler_doorMoveTo.x = 960;
        boiler_doorMoveTo.y = 420;

        // dj_speaker_sound (components)
        const dj_speaker_soundAnimation = new Animation(dj_speaker_sound);
        dj_speaker_soundAnimation.key = "dj/speaker_sound";
        dj_speaker_soundAnimation.end = 2;
        dj_speaker_soundAnimation.repeatDelay = 250;
        dj_speaker_soundAnimation.autoPlay = false;

        // dj_mixer_tables_under (components)
        const dj_mixer_tables_underAnimation = new Animation(dj_mixer_tables_under);
        dj_mixer_tables_underAnimation.key = "dj/mixer/tables/tables_under";
        dj_mixer_tables_underAnimation.end = 23;
        dj_mixer_tables_underAnimation.autoPlay = false;

        // dj_mixer_tables (components)
        const dj_mixer_tablesAnimation = new Animation(dj_mixer_tables);
        dj_mixer_tablesAnimation.key = "dj/mixer/tables/tables";
        dj_mixer_tablesAnimation.end = 6;
        dj_mixer_tablesAnimation.autoPlay = false;

        // dj_mixer_lights (components)
        const dj_mixer_lightsAnimation = new Animation(dj_mixer_lights);
        dj_mixer_lightsAnimation.key = "dj/mixer/lights/lights";
        dj_mixer_lightsAnimation.end = 23;
        dj_mixer_lightsAnimation.autoPlay = false;

        // dj_mixer_slider (components)
        const dj_mixer_sliderAnimation = new Animation(dj_mixer_slider);
        dj_mixer_sliderAnimation.key = "dj/mixer/slider/slider";
        dj_mixer_sliderAnimation.end = 23;
        dj_mixer_sliderAnimation.autoPlay = false;

        // dj_box_headphones_back (components)
        const dj_box_headphones_backAnimation = new Animation(dj_box_headphones_back);
        dj_box_headphones_backAnimation.key = "dj/box/headphones/back";
        dj_box_headphones_backAnimation.end = 30;
        dj_box_headphones_backAnimation.autoPlay = false;

        // dj_box (components)
        const dj_boxSimpleButton = new SimpleButton(dj_box);
        dj_boxSimpleButton.hoverCallback = () => this.onBoxOver();
        dj_boxSimpleButton.hoverOutCallback = () => this.onBoxOut();
        const dj_boxMoveTo = new MoveTo(dj_box);
        dj_boxMoveTo.x = 520;
        dj_boxMoveTo.y = 300;

        // dj_box_lights (components)
        const dj_box_lightsAnimation = new Animation(dj_box_lights);
        dj_box_lightsAnimation.key = "dj/box/lights/lights";
        dj_box_lightsAnimation.end = 30;
        dj_box_lightsAnimation.autoPlay = false;

        // dj_box_headphones_front (components)
        const dj_box_headphones_frontAnimation = new Animation(dj_box_headphones_front);
        dj_box_headphones_frontAnimation.key = "dj/box/headphones/front";
        dj_box_headphones_frontAnimation.end = 30;
        dj_box_headphones_frontAnimation.autoPlay = false;

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.hoverCallback = () => this.onPuffleOver();

        this.puffle = puffle;
        this.dj_speaker_sound = dj_speaker_sound;
        this.dj_mixer_wave = dj_mixer_wave;
        this.dj_mixer_tables_under = dj_mixer_tables_under;
        this.dj_mixer_tables = dj_mixer_tables;
        this.dj_mixer_lights = dj_mixer_lights;
        this.dj_mixer_slider = dj_mixer_slider;
        this.dj_box_headphones_back = dj_box_headphones_back;
        this.dj_box_sliders = dj_box_sliders;
        this.dj_box_lights = dj_box_lights;
        this.dj_box_headphones_front = dj_box_headphones_front;
        this.sort = sort;
        this.animate = animate;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.puffle.on('animationcomplete', () => this.onPuffleAnimComplete())
        this.dj_box_sliders.on('animationcomplete', () => this.onSlidersAnimComplete())
        this.dj_mixer_wave.on('animationcomplete', () => this.onWaveAnimComplete())

        this.puffle.play('dj_puffle_idle')
    }

    onPuffleAnimComplete() {
        this.puffle.play('dj_puffle_idle')
    }

    onSlidersAnimComplete() {
        this.dj_box_sliders.play('dj_sliders_move')
    }

    onWaveAnimComplete() {
        this.dj_mixer_wave.play('dj_wave_move')
    }

    onPuffleOver() {
        this.puffle.play('dj_puffle_jump')
    }

    onBoxOver() {
        for (let sprite of this.animate) {
            sprite.__Animation.play()
        }

        this.dj_box_sliders.play('dj_sliders_on')
        this.dj_mixer_wave.play('dj_wave_on')
    }

    onBoxOut() {
        for (let sprite of this.animate) {
            sprite.__Animation.stop()
        }

        this.dj_box_sliders.stop()
        this.dj_mixer_wave.stop()

        this.dj_box_sliders.setFrame('dj/box/sliders/sliders0001')
        this.dj_mixer_wave.setFrame('dj/mixer/wave/wave0001')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
