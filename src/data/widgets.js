const widgets = {
    'ClothingCatalog': require('@scenes/interface/catalogs/clothing/ClothingCatalog'),
    'FurnitureCatalog': require('@scenes/interface/catalogs/furniture/FurnitureCatalog'),
    'IglooCatalog': require('@scenes/interface/catalogs/igloo/IglooCatalog'),

    'FindFour': require('@scenes/games/four/FindFour'),
    'Mancala': require('@scenes/games/mancala/Mancala'),
    'Map': require('@scenes/interface/game/map/Map'),
    'NinjaBelts': require('@scenes/interface/instructions/ninjabelts/NinjaBelts'),
    'NinjaInstructions': require('@scenes/interface/instructions/ninjainstructions/NinjaInstructions'),
    'NinjaProgress': require('@scenes/games/ninjaprogress/NinjaProgress'),
    'Sensei': require('@scenes/games/sensei/widget/SenseiWidget')
}

export default widgets
