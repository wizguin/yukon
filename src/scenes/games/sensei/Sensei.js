export const preload = {
    key: 'sensei-pack',
    url: 'assets/media/games/sensei/sensei-pack.json',
    loadString: ['loading', 'sensei']
}

/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Interactive from "../../components/Interactive";
import SenseiSprite from "./SenseiSprite";
import SenseiBelt from "./SenseiBelt";
import SenseiSpeech from "./SenseiSpeech";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Sensei extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 409, y ?? 350);

        /** @type {SenseiSprite} */
        this.sensei;
        /** @type {SenseiBelt} */
        this.belt;
        /** @type {SenseiSpeech} */
        this.speech;


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

        // bg (components)
        new Interactive(bg);

        this.sensei = sensei;
        this.belt = belt;
        this.speech = speech;

        /* START-USER-CTR-CODE */

        bg.on('pointerup', this.onBackgroundClick, this)

        this.menu
        this.currentIndex = 0

        // Menu sequences
        this.menus = {
            beltAward: [
                this.menuBeltAward,
                this.menuBeltEarned,
                this.close,
            ]
        }

        this.bindMenus()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()

        this.scene.events.emit('sensei_ready')
    }

    close() {
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

    menuBeltAward() {
        console.log('1')
    }

    menuBeltEarned() {
        console.log('2')
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
