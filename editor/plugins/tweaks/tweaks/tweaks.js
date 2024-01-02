// Hacks for using Phaser Editor with a lot of files

const disablePreloadingThumbnails = false
const hidePrefabsFromBlocks = false
const doViewerFiltering = true

const viewerUrlFilter = [
    /\/postcards\// // URL includes /postcards/
]

const filteredViewers = [
    'BlocksView.EditorViewerView',
    'phasereditor2d.scene.ui.sceneobjects.TextureSelectionDialog'
]

if (disablePreloadingThumbnails) {
    // Disable preloading viewer thumbnails
    const viewerInitListeners = colibri.ui.controls.viewers.Viewer.prototype.initListeners

    colibri.ui.controls.viewers.Viewer.prototype.initListeners = function() {
        viewerInitListeners.call(this)

        this.setPreloadDisabled()
    }
}

if (hidePrefabsFromBlocks) {
    // Remove prefabs from blocks viewer,
    // prefabs can instead be added to a Scene via dragging them from the files list
    phasereditor2d.scene.ui.blocks.BLOCKS_SECTIONS = [
        phasereditor2d.scene.ui.blocks.BUILTIN_SECTION,
        ...phasereditor2d.scene.ui.blocks.BLOCKS_ASSET_SECTIONS
    ]

    // Remove Prefabs from blocks tabs
    phasereditor2d.scene.ui.blocks.TAB_SECTIONS = [
        phasereditor2d.scene.ui.blocks.TAB_SECTION_BUILT_IN,
        phasereditor2d.scene.ui.blocks.TAB_SECTION_ASSETS,
    ]
}

if (doViewerFiltering) {
    // Filter viewers
    const viewerIsFilterIncluded = colibri.ui.controls.viewers.Viewer.prototype.isFilterIncluded

    colibri.ui.controls.viewers.Viewer.prototype.isFilterIncluded = function(obj) {
        // Only filter specified viewers when no search filter is active,
        // filtered files can be accessed by searching for them
        if (!isFilteredViewer(this._viewerId) || this._filterText.length > 0) {
            return viewerIsFilterIncluded.call(this, obj)
        }

        const objUrl = getObjUrl(obj)

        return regexExcludes(viewerUrlFilter, objUrl)
    }
}

function isFilteredViewer(viewerId) {
    return filteredViewers.includes(viewerId)
}

function getObjUrl(obj) {
    if (obj instanceof colibri.core.io.FilePath) {
        return obj.toString()
    }

    if (obj instanceof phasereditor2d.pack.core.AssetPackItem) {
        return obj.getData().url
    }

    return null
}

function regexExcludes(regexArray, testString) {
    return !regexArray.some(i => i.test(testString))
}
