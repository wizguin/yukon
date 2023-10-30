import * as sequences from './SenseiSequences'


export function start(menu) {
    return [
        {
            text: menu.getString('menu_title_competition'),
            icon: 'menu/icon/belt',

            over: () => {
                menu.showSpeech(menu.getString('menu_description_competition'))
            },
            up: () => {
                menu.showMatch()
            }
        },
        {
            text: menu.getString('menu_title_sensei'),
            icon: 'menu/icon/sensei',

            over: () => {
                menu.showSpeech(menu.getString('menu_description_sensei'))
            },
            up: () => {
                menu.network.send('join_sensei')
            }
        },
        {
            text: menu.getString('menu_title_instructions'),
            icon: 'menu/icon/instructions',

            over: () => {
                menu.showSpeech(menu.getString('menu_description_instructions'))
            },
            up: () => {
                menu.startSequence(sequences.instrHowToPlay)
            }
        }
    ]
}

export function instrWhatDoIDo(menu) {
    return [
        {
            text: menu.getString('help_response_whatdoido'),

            up: () => {
                menu.startSequence(sequences.instrWhatDoIDo)
            }
        }
    ]
}

export function instrYesPlease(menu) {
    return [
        {
            text: menu.getString('help_response_yes'),

            up: () => {
                menu.startSequence(sequences.instrHowToPlay)
            }
        },
        {
            text: menu.getString('help_response_no', 'help_response_play'),

            up: () => {
                menu.showMatch()
            }
        }
    ]
}

export function instrHowToWin(menu) {
    return [
        {
            text: menu.getString('help_response_howtowin'),

            up: () => {
                menu.startSequence(sequences.instrHowToWin)
            }
        },
        {
            text: menu.getString('help_response_cantwait', 'help_response_play'),

            up: () => {
                menu.showMatch()
            }
        }
    ]
}

export function instrHowToNinja(menu) {
    return [
        {
            text: menu.getString('help_response_becomeninja'),

            up: () => {
                menu.startSequence(sequences.instrHowToNinja)
            }
        },
        {
            text: menu.getString('help_response_cantwait', 'help_response_play'),

            up: () => {
                menu.showMatch()
            }
        }
    ]
}

export function instrCountMeIn(menu) {
    return [
        {
            text: menu.getString('help_response_countmein'),

            up: () => {
                menu.showMatch()
            }
        },
        {
            text: menu.getString('help_response_tellmeagain'),

            up: () => {
                menu.startSequence(sequences.introCards)
            }
        },
        {
            text: menu.getString('help_response_havetogo'),

            up: () => {
                menu.world.client.sendJoinLastRoom()
            }
        }
    ]
}
