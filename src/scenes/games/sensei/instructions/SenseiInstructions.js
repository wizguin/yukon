/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import SenseiBubble from "./bubble/SenseiBubble";
import SenseiBelt from "./belt/SenseiBelt";
import SenseiCards from "./cards/SenseiCards";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SenseiInstructions extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Sprite} */
        this.ninja;
        /** @type {SenseiBubble} */
        this.bubble;
        /** @type {SenseiBelt} */
        this.belt;
        /** @type {Phaser.GameObjects.Sprite} */
        this.help;
        /** @type {Phaser.GameObjects.Sprite} */
        this.winDifferent;
        /** @type {Phaser.GameObjects.Sprite} */
        this.winSame;
        /** @type {Phaser.GameObjects.Sprite} */
        this.tie;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fire;
        /** @type {Phaser.GameObjects.Sprite} */
        this.snow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.water;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pick;
        /** @type {SenseiCards} */
        this.cards;


        // ninja
        const ninja = scene.add.sprite(1025, 558, "senseiinstructions", "ninja/ninja0035");
        ninja.setOrigin(0.5006226650062267, 0.5008976660682226);
        ninja.visible = false;
        this.add(ninja);

        // bubble
        const bubble = new SenseiBubble(scene, 1025, 558);
        bubble.visible = false;
        this.add(bubble);

        // belt
        const belt = new SenseiBelt(scene, 979, 547);
        belt.visible = false;
        this.add(belt);

        // help
        const help = scene.add.sprite(1150, 646, "senseiinstructions", "help/help0001");
        help.setOrigin(0.5003996802557954, 0.5);
        help.visible = false;
        this.add(help);

        // winDifferent
        const winDifferent = scene.add.sprite(987, 1335, "senseiinstructions", "win_different/win0091");
        winDifferent.visible = false;
        this.add(winDifferent);

        // winSame
        const winSame = scene.add.sprite(1826, 484, "senseiinstructions", "win_same/win0090");
        winSame.setOrigin(0.5002171081198437, 0.5);
        winSame.visible = false;
        this.add(winSame);

        // tie
        const tie = scene.add.sprite(1093, 483, "senseiinstructions", "tie/tie0040");
        tie.setOrigin(0.5006353240152478, 0.5);
        tie.visible = false;
        this.add(tie);

        // fire
        const fire = scene.add.sprite(1057, 440, "senseiinstructions", "fire/fire0056");
        fire.setOrigin(0.5007704160246533, 0.5016835016835017);
        fire.visible = false;
        this.add(fire);

        // snow
        const snow = scene.add.sprite(949, 441, "senseiinstructions", "snow/snow0056");
        snow.setOrigin(0.5007898894154819, 0.5016835016835017);
        snow.visible = false;
        this.add(snow);

        // water
        const water = scene.add.sprite(1057, 440, "senseiinstructions", "water/water0056");
        water.setOrigin(0.5007704160246533, 0.5016835016835017);
        water.visible = false;
        this.add(water);

        // pick
        const pick = scene.add.sprite(1564, 1004, "senseiinstructions", "pick/pick0001");
        pick.visible = false;
        this.add(pick);

        // cards
        const cards = new SenseiCards(scene, 1378, 658);
        cards.visible = false;
        this.add(cards);

        this.ninja = ninja;
        this.bubble = bubble;
        this.belt = belt;
        this.help = help;
        this.winDifferent = winDifferent;
        this.winSame = winSame;
        this.tie = tie;
        this.fire = fire;
        this.snow = snow;
        this.water = water;
        this.pick = pick;
        this.cards = cards;

        /* START-USER-CTR-CODE */

        this.hideAll()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    showCards() {
        this.hideAll()

        this.cards.show()
    }

    hideCards() {
        this.cards.close()
    }

    showPick() {
        this.showAndPlaySprite(this.pick, 'instructions/pick')
    }

    showWater() {
        this.showAndPlaySprite(this.water, 'instructions/water')
    }

    showSnow() {
        this.showAndPlaySprite(this.snow, 'instructions/snow')
    }

    showFire() {
        this.showAndPlaySprite(this.fire, 'instructions/fire')
    }

    showTie() {
        this.showAndPlaySprite(this.tie, 'instructions/tie')
    }

    showWinSame() {
        this.showAndPlaySprite(this.winSame, 'instructions/win_same')
    }

    showWinDifferent() {
        this.showAndPlaySprite(this.winDifferent, 'instructions/win_different')
    }

    showHelp() {
        this.showAndPlaySprite(this.help, 'instructions/help_start')

        this.help.once('animationcomplete-instructions/help_start', () => {
            this.help.play('instructions/help_loop')
        })
    }

    showCompete() {
        this.hideAll()

        this.bubble.showCompete()
    }

    showBelt() {
        this.hideAll()

        this.belt.show()
    }

    showBlackBelt() {
        this.hideAll()

        this.bubble.showBlackBelt()
    }

    showNinja() {
        this.showAndPlaySprite(this.ninja, 'instructions/ninja')
    }

    showAndPlaySprite(sprite, animKey) {
        this.hideAll()

        sprite.visible = true
        sprite.play(animKey)
    }

    hideAll() {
        this.each(child => {
            child.stop()
            child.visible = false
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
