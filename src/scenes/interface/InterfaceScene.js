import BaseScene from '@scenes/base/BaseScene'


export default class InterfaceScene extends BaseScene {

    loadPrefab(prefab, depth = 1, visible = false) {
        prefab.visible = visible
        prefab.depth = depth

        this.add.existing(prefab)

        return prefab
    }

}
