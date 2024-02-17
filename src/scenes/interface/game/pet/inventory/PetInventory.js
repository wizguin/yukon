/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import SimpleButton from "../../../../components/SimpleButton";
import Button from "../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PetInventory extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.arrow;


        // bg
        const bg = scene.add.image(0, 0, "main", "pet/inventory");
        bg.setOrigin(0.5006802721088436, 0.5008130081300813);
        this.add(bg);

        // tab
        const tab = scene.add.container(369, -142);
        this.add(tab);

        // tabHandle
        const tabHandle = scene.add.image(8, 2, "main", "tab");
        tabHandle.angle = -90;
        tab.add(tabHandle);

        // arrow
        const arrow = scene.add.image(0, 0, "main", "tab-arrow");
        arrow.angle = -90;
        arrow.flipY = true;
        tab.add(arrow);

        // slot8
        const slot8 = scene.add.image(257, 195, "main", "large-box");
        this.add(slot8);

        // slot7
        const slot7 = scene.add.image(125, 195, "main", "large-box");
        this.add(slot7);

        // slot6
        const slot6 = scene.add.image(257, 63, "main", "large-box");
        this.add(slot6);

        // slot5
        const slot5 = scene.add.image(125, 63, "main", "large-box");
        this.add(slot5);

        // bathButton
        const bathButton = scene.add.image(257, -69, "main", "large-box");
        this.add(bathButton);

        // foodButton
        const foodButton = scene.add.image(125, -69, "main", "large-box");
        this.add(foodButton);

        // cookieButton
        const cookieButton = scene.add.image(257, -201, "main", "large-box");
        this.add(cookieButton);

        // gumButton
        const gumButton = scene.add.image(125, -201, "main", "large-box");
        this.add(gumButton);

        // bath
        const bath = scene.add.image(253, -69, "main", "pet/bath");
        bath.setOrigin(0.5, 0.5051546391752577);
        this.add(bath);

        // food
        const food = scene.add.image(125, -70, "main", "pet/food");
        this.add(food);

        // cookie
        const cookie = scene.add.image(259, -199, "main", "pet/cookie");
        cookie.setOrigin(0.5052631578947369, 0.5);
        this.add(cookie);

        // gum
        const gum = scene.add.image(128, -200, "main", "pet/gum");
        gum.setOrigin(0.5051546391752577, 0.5054945054945055);
        this.add(gum);

        // tabHandle (components)
        const tabHandleSimpleButton = new SimpleButton(tabHandle);
        tabHandleSimpleButton.callback = () => this.onTabClick();

        // slot8 (components)
        const slot8Button = new Button(slot8);
        slot8Button.spriteName = "large-box";
        slot8Button.activeFrame = false;

        // slot7 (components)
        const slot7Button = new Button(slot7);
        slot7Button.spriteName = "large-box";
        slot7Button.activeFrame = false;

        // slot6 (components)
        const slot6Button = new Button(slot6);
        slot6Button.spriteName = "large-box";
        slot6Button.activeFrame = false;

        // slot5 (components)
        const slot5Button = new Button(slot5);
        slot5Button.spriteName = "large-box";
        slot5Button.activeFrame = false;

        // bathButton (components)
        const bathButtonButton = new Button(bathButton);
        bathButtonButton.spriteName = "large-box";
        bathButtonButton.callback = () => this.onBathClick();
        bathButtonButton.activeFrame = false;

        // foodButton (components)
        const foodButtonButton = new Button(foodButton);
        foodButtonButton.spriteName = "large-box";
        foodButtonButton.callback = () => this.onFoodClick();
        foodButtonButton.activeFrame = false;

        // cookieButton (components)
        const cookieButtonButton = new Button(cookieButton);
        cookieButtonButton.spriteName = "large-box";
        cookieButtonButton.callback = () => this.onCookieClick();
        cookieButtonButton.activeFrame = false;

        // gumButton (components)
        const gumButtonButton = new Button(gumButton);
        gumButtonButton.spriteName = "large-box";
        gumButtonButton.callback = () => this.onGumClick();
        gumButtonButton.activeFrame = false;

        this.arrow = arrow;

        /* START-USER-CTR-CODE */

        bg.setInteractive({ pixelPerfect: true })

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get pet() {
        return this.parentContainer.pet
    }

    onGumClick() {
        this.interface.prompt.showPetGum(this.pet)
    }

    onCookieClick() {
        this.interface.prompt.showPetCookie(this.pet)
    }

    onFoodClick() {
        this.interface.prompt.showPetFood(this.pet)
    }

    onBathClick() {
        this.interface.prompt.showPetBath(this.pet)
    }

    onTabClick() {
        this.parentContainer.closeInventory(this.pet)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
