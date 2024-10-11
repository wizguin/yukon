const widgets = {
    'AdoptCatalog': require('@scenes/interface/catalogs/adopt/AdoptCatalog'),
    'ClothingCatalog': require('@scenes/interface/catalogs/clothing/ClothingCatalog'),
    'FurnitureCatalog': require('@scenes/interface/catalogs/furniture/FurnitureCatalog'),
    'GiveTour': require('@scenes/interface/books/give_tour/GiveTour'),
    'IglooCatalog': require('@scenes/interface/catalogs/igloo/IglooCatalog'),
    'PetsCatalog': require('@scenes/interface/catalogs/pets/PetsCatalog'),

    'AgentQuiz': require('@scenes/interface/quiz/agent/AgentQuiz'),
    'ClockTower': require('@scenes/interface/game/clock_tower/ClockTower'),
    'FindFour': require('@scenes/games/four/FindFour'),
    'Mancala': require('@scenes/games/mancala/Mancala'),
    'MancalaHelp': require('@scenes/interface/instructions/mancala/MancalaHelp'),
    'Map': require('@scenes/interface/game/map/Map'),
    'Missions': require('@scenes/interface/game/missions/Missions'),
    'NinjaBelts': require('@scenes/interface/instructions/ninjabelts/NinjaBelts'),
    'NinjaInstructions': require('@scenes/interface/instructions/ninjainstructions/NinjaInstructions'),
    'NinjaProgress': require('@scenes/games/ninjaprogress/NinjaProgress'),
    'Sensei': require('@scenes/games/sensei/widget/SenseiWidget'),
    'TakeTour': require('@scenes/interface/game/take_tour/TakeTour'),
    'TourQuiz': require('@scenes/interface/quiz/tour/TourQuiz')
}

export default widgets
