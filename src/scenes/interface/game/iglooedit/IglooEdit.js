import BaseScene from '@scenes/base/BaseScene'

import { Button, ShowHint, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

class IglooEdit extends BaseScene {

    constructor() {
        super("IglooEdit");

        /** @type {Phaser.GameObjects.Container} */
        this.defaultControls;
        /** @type {Phaser.GameObjects.Container} */
        this.controls;
        /** @type {Phaser.GameObjects.Container} */
        this.furniture;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    create() {

        // defaultControls
        const defaultControls = this.add.container(1430, 758);

        // button_edit
        const button_edit = this.add.image(0, 137, "iglooedit", "button/edit");
        button_edit.setOrigin(0.6422018348623854, 0.5);
        defaultControls.add(button_edit);

        // button_lock
        const button_lock = this.add.image(0, 0, "iglooedit", "button/lock");
        button_lock.setOrigin(0.5, 0.5045871559633027);
        defaultControls.add(button_lock);

        // controls
        const controls = this.add.container(167, 368);
        controls.visible = false;

        // note
        const note = this.add.image(0, 504, "iglooedit", "note");
        controls.add(note);

        // button_save
        const button_save = this.add.image(1263, 520, "iglooedit", "button/save");
        controls.add(button_save);

        // button_igloo_catalog
        const button_igloo_catalog = this.add.image(1263, 390, "iglooedit", "button/igloo_catalog");
        button_igloo_catalog.setOrigin(0.5046728971962616, 0.5);
        controls.add(button_igloo_catalog);

        // button_furniture_catalog
        const button_furniture_catalog = this.add.image(1263, 260, "iglooedit", "button/furniture_catalog");
        button_furniture_catalog.setOrigin(0.6405228758169934, 0.5043478260869565);
        controls.add(button_furniture_catalog);

        // button_furniture
        const button_furniture = this.add.image(1263, 130, "iglooedit", "button/furniture");
        button_furniture.setOrigin(0.5, 0.584);
        controls.add(button_furniture);

        // button_music
        const button_music = this.add.image(1263, 0, "iglooedit", "button/music");
        button_music.setOrigin(0.5039370078740157, 0.5);
        controls.add(button_music);

        // furniture
        const furniture = this.add.container(1241, 303);
        furniture.visible = false;

        // list
        const list = this.add.image(7, 251, "iglooedit", "list");
        furniture.add(list);

        // divider
        const divider = this.add.image(0, 68, "iglooedit", "divider");
        furniture.add(divider);

        // iglooButton
        const iglooButton = this.add.image(0, 518, "iglooedit", "button/small");
        furniture.add(iglooButton);

        // icon_igloo
        const icon_igloo = this.add.image(0, 518, "iglooedit", "icon/igloo");
        icon_igloo.setOrigin(0.5, 0.5070422535211268);
        furniture.add(icon_igloo);

        // puffleButton
        const puffleButton = this.add.image(0, 418, "iglooedit", "button/small");
        furniture.add(puffleButton);

        // icon_puffle
        const icon_puffle = this.add.image(0, 418, "iglooedit", "icon/puffle");
        icon_puffle.setOrigin(0.5074626865671642, 0.5);
        furniture.add(icon_puffle);

        // wallButton
        const wallButton = this.add.image(0, 318, "iglooedit", "button/small");
        furniture.add(wallButton);

        // icon_wall
        const icon_wall = this.add.image(0, 318, "iglooedit", "icon/wall");
        icon_wall.setOrigin(0.5, 0.5068493150684932);
        furniture.add(icon_wall);

        // roomButton
        const roomButton = this.add.image(0, 218, "iglooedit", "button/small");
        furniture.add(roomButton);

        // icon_room
        const icon_room = this.add.image(0, 218, "iglooedit", "icon/room");
        icon_room.setOrigin(0.5087719298245614, 0.5066666666666667);
        furniture.add(icon_room);

        // floorButton
        const floorButton = this.add.image(0, 118, "iglooedit", "button/small");
        furniture.add(floorButton);

        // icon_floor
        const icon_floor = this.add.image(0, 118, "iglooedit", "icon/floor");
        furniture.add(icon_floor);

        // allButton
        const allButton = this.add.image(0, 0, "iglooedit", "button/large");
        furniture.add(allButton);

        // icon_all
        const icon_all = this.add.image(0, 0, "iglooedit", "icon/all");
        icon_all.setOrigin(0.5076923076923077, 0.5);
        furniture.add(icon_all);

        // button_edit (components)
        const button_editButton = new Button(button_edit);
        button_editButton.spriteName = "button/edit";
        button_editButton.callback = () => this.onEditClick();
        button_editButton.activeFrame = false;

        // button_lock (components)
        const button_lockButton = new Button(button_lock);
        button_lockButton.spriteName = "button/lock";
        button_lockButton.activeFrame = false;

        // button_save (components)
        const button_saveSimpleButton = new SimpleButton(button_save);
        button_saveSimpleButton.callback = () => this.onSaveClick();

        // button_igloo_catalog (components)
        new SimpleButton(button_igloo_catalog);

        // button_furniture_catalog (components)
        const button_furniture_catalogButton = new Button(button_furniture_catalog);
        button_furniture_catalogButton.spriteName = "button/furniture_catalog";
        button_furniture_catalogButton.activeFrame = false;

        // button_furniture (components)
        const button_furnitureButton = new Button(button_furniture);
        button_furnitureButton.spriteName = "button/furniture";
        button_furnitureButton.activeFrame = false;

        // button_music (components)
        const button_musicButton = new Button(button_music);
        button_musicButton.spriteName = "button/music";
        button_musicButton.activeFrame = false;

        // iglooButton (components)
        const iglooButtonButton = new Button(iglooButton);
        iglooButtonButton.spriteName = "button/small";
        iglooButtonButton.activeFrame = false;

        // puffleButton (components)
        const puffleButtonButton = new Button(puffleButton);
        puffleButtonButton.spriteName = "button/small";
        puffleButtonButton.activeFrame = false;

        // wallButton (components)
        const wallButtonButton = new Button(wallButton);
        wallButtonButton.spriteName = "button/small";
        wallButtonButton.activeFrame = false;

        // roomButton (components)
        const roomButtonButton = new Button(roomButton);
        roomButtonButton.spriteName = "button/small";
        roomButtonButton.activeFrame = false;

        // floorButton (components)
        const floorButtonButton = new Button(floorButton);
        floorButtonButton.spriteName = "button/small";
        floorButtonButton.activeFrame = false;

        // allButton (components)
        const allButtonButton = new Button(allButton);
        allButtonButton.spriteName = "button/large";
        allButtonButton.activeFrame = false;

        this.defaultControls = defaultControls;
        this.controls = controls;
        this.furniture = furniture;
    }

    /* START-USER-CODE */

    onEditClick() {
        this.interface.hideInterface()
        this.world.room.showEditBg()
        this.world.room.hidePenguins()
        this.world.client.input.disable()

        this.defaultControls.visible = false
        this.controls.visible = true
    }

    onSaveClick() {
        this.interface.showInterface()
        this.world.room.hideEditBg()
        this.world.room.showPenguins()
        this.world.client.input.enable()

        this.controls.visible = false
        this.defaultControls.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default IglooEdit
