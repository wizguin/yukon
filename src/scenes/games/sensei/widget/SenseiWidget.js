export const preload = {
    key: 'sensei-pack',
    url: 'assets/media/games/sensei/sensei-pack.json',
    loadString: ['loading', 'sensei']
}

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import SenseiSprite from "./sprite/SenseiSprite";
import SenseiAward from "./award/SenseiAward";
import SenseiSpeech from "./speech/SenseiSpeech";
/* START-USER-IMPORTS */

import * as sequences from '../config/SenseiSequences'

/* END-USER-IMPORTS */

export default class SenseiWidget extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.bg;
        /** @type {SenseiSprite} */
        this.senseiSprite;
        /** @type {Phaser.GameObjects.Sprite} */
        this.hideout;
        /** @type {SenseiAward} */
        this.award;
        /** @type {SenseiSpeech} */
        this.speech;


        // bg
        const bg = scene.add.image(604, 565, "sensei", "bg");
        this.add(bg);

        // senseiSprite
        const senseiSprite = new SenseiSprite(scene, 178, 332);
        this.add(senseiSprite);

        // hideout
        const hideout = scene.add.sprite(988, 486, "sensei", "hideout/hideout0001");
        hideout.setOrigin(0.5005599104143337, 0.5);
        hideout.visible = false;
        this.add(hideout);

        // award
        const award = new SenseiAward(scene, 1112, 571);
        award.visible = false;
        this.add(award);

        // speech
        const speech = new SenseiSpeech(scene, 937, 204);
        speech.visible = false;
        this.add(speech);

        // bg (components)
        new Interactive(bg);

        this.bg = bg;
        this.senseiSprite = senseiSprite;
        this.hideout = hideout;
        this.award = award;
        this.speech = speech;

        /* START-USER-CTR-CODE */

        this.currentSequence
        this.currentSequenceIndex = 0

        this.rankId = 1

        this.addBackgroundEvent('pointerup', this.forwardSequence, this)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get beltString() {
        return this.getString(`belt_${this.rankId}`)
    }

    get speechIndex() {
        return this.getIndex(this.speech)
    }

    show() {
        this.hideAll()

        super.show()

        this.scene.events.emit('sensei_ready')
    }

    close() {
        this.currentSequence = null
        this.currentSequenceIndex = 0

        this.hideAll()

        super.close()
    }

    addBackgroundEvent(event, callback, context) {
        this.bg.on(event, callback, context)
    }

    rankUp(rank) {
        this.rankId = Phaser.Math.Clamp(rank, 1, 9)

        if (rank > 9) {
            this.startSequence(sequences.maskAward)
        } else {
            this.startSequence(sequences.beltAward)
        }
    }

    startSequence(sequence) {
        // Pass SenseiWidget dependency
        this.currentSequence = sequence(this)

        this.currentSequenceIndex = 0
        this.updateSequence()
    }

    forwardSequence() {
        if (!this.currentSequence) {
            return
        }

        if (this.currentSequenceIndex === this.currentSequence.length - 1) {
            return
        }

        this.currentSequenceIndex++
        this.updateSequence()
    }

    updateSequence() {
        if (!this.currentSequence) {
            return
        }

        this.currentSequence[this.currentSequenceIndex]()
    }

    showSpeech(text) {
        this.speech.show(text)
        this.playTalk()
    }

    hideSpeech() {
        this.speech.close()
        this.playWait()
    }

    playTalk() {
        this.senseiSprite.playTalk()
    }

    playWait() {
        this.senseiSprite.playWait()
    }

    showBelt() {
        this.award.showBelt(this.rankId)
    }

    showMask() {
        this.award.showMask()
    }

    hideAward() {
        this.award.close()
    }

    showHideout() {
        this.hideout.visible = true
        this.hideout.play('hideout')
    }

    hideHideout() {
        this.hideout.visible = false
    }

    hideAll() {
        this.hideSpeech()
        this.hideAward()
        this.hideHideout()
    }

    leaveGame() {
        this.close()
        this.world.room.sendLeaveGame()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
