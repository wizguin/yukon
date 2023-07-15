export const preload = {
    key: 'sensei-pack',
    url: 'assets/media/games/sensei/sensei-pack.json',
    loadString: ['loading', 'sensei']
}

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import SenseiSprite from "./SenseiSprite";
import SenseiBelt from "./SenseiBelt";
import SenseiSpeech from "./SenseiSpeech";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SenseiWidget extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 415, y ?? 353);

        /** @type {SenseiSprite} */
        this.sensei;
        /** @type {SenseiBelt} */
        this.belt;
        /** @type {SenseiSpeech} */
        this.speech;
        /** @type {Phaser.GameObjects.Sprite} */
        this.hideout;


        // bg
        const bg = scene.add.image(189, 212, "sensei", "bg");
        this.add(bg);

        // sensei
        const sensei = new SenseiSprite(scene, -237, -21);
        this.add(sensei);

        // belt
        const belt = new SenseiBelt(scene, 697, 218);
        belt.visible = false;
        this.add(belt);

        // speech
        const speech = new SenseiSpeech(scene, 522, -149);
        speech.visible = false;
        this.add(speech);

        // hideout
        const hideout = scene.add.sprite(573, 133, "sensei", "hideout/hideout0001");
        hideout.setOrigin(0.5005599104143337, 0.5);
        hideout.visible = false;
        this.add(hideout);

        // bg (components)
        new Interactive(bg);

        this.sensei = sensei;
        this.belt = belt;
        this.speech = speech;
        this.hideout = hideout;

        /* START-USER-CTR-CODE */

        bg.on('pointerup', this.onBackgroundClick, this)

        this.menu
        this.currentIndex = 0

        // Menu sequences
        this.menus = {
            beltAward: [
                this.menuBeltAward,
                this.menuBeltEarned,
                this.leaveGame
            ],
            maskAward: [
                this.menuMaskStart,
                this.menuMaskAward,
                this.menuMaskEarned,
                this.menuMaskHideout,
                this.leaveGame
            ]
        }

        this.rankId = 1

        this.beltNames = ['White', 'Yellow', 'Orange', 'Green', 'Blue', 'Red', 'Purple', 'Brown', 'Black']

        this.bindMenus()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        this.hideAll()

        super.show()

        this.scene.events.emit('sensei_ready')
    }

    close() {
        this.menu = null
        this.currentIndex = 0

        this.hideAll()

        super.close()
    }

    onBackgroundClick() {
        this.updateMenu()
    }

    loadMenu(menu) {
        if (!(menu in this.menus)) {
            return
        }

        this.menu = this.menus[menu]
        this.currentIndex = 0

        this.updateMenu()
    }

    updateMenu() {
        if (!this.menu) {
            return
        }

        if (this.currentIndex >= this.menu.length) {
            return
        }

        this.menu[this.currentIndex]()

        this.currentIndex++
    }

    rankUp(rank) {
        this.rankId = rank

        if (rank > this.beltNames.length) {
            this.loadMenu('maskAward')
        } else {
            this.loadMenu('beltAward')
        }
    }

    menuBeltAward() {
        this.showSpeech('Congratulations!\nMuch like the fearsome earthquake,\nYou have rocked the house.')
    }

    menuBeltEarned() {
        let beltName = this.beltNames[this.rankId - 1]

        this.showSpeech(`Well done. You have earned\na ${beltName} Belt for your efforts.\nI am proud of you.`)

        this.belt.showBelt(this.rankId)
    }

    menuMaskStart() {
        this.showSpeech('The gentle lotus,\nCowers before the storm cloud.\nBut you... you did not.')
    }

    menuMaskAward() {
        this.showSpeech('Well done, grasshopper.\nYou have faced my skills, and won.\nAnd proven yourself.')
    }

    menuMaskEarned() {
        this.showSpeech('Now receive the mark\nOf a Card-Jitsu master,\nWith this ninja mask.')

        this.belt.showMask()
    }

    menuMaskHideout() {
        this.belt.close()

        this.hideout.visible = true
        this.hideout.play('hideout')

        this.showSpeech('You may now join us,\nIn the secret ninja hideout.\nCongratulations!')
    }

    showSpeech(text) {
        // todo: strings file
        this.speech.show(text)

        this.sensei.playTalk()
    }

    hideSpeech() {
        this.speech.close()

        this.sensei.playWait()
    }

    hideAll() {
        this.hideSpeech()
        this.belt.close()
        this.hideout.visible = false
    }

    leaveGame() {
        this.close()
        this.world.room.sendLeaveGame()
    }

    bindMenus() {
        for (let menu of Object.values(this.menus)) {
            this.bindMenu(menu)
        }
    }

    bindMenu(menu) {
        for (let i = 0; i < menu.length; i++) {
            let item = menu[i]

            menu[i] = item.bind(this)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
