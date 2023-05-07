export default {
    onPlayed: [1, 16, 17, 18],
    currentRound: [4, 5, 6, 7, 8, 9, 10, 11, 12, 16, 17, 18],
    affectsOwnPlayer: [2],

    discardElements: {
      4: 's',
      5: 'w',
      6: 'f'
    },
    discardColors: {
      7: 'r',
      8: 'b',
      9: 'g',
      10: 'y',
      11: 'o',
      12: 'p'
    },
    replacements: {
      16: ['w', 'f'],
      17: ['s', 'w'],
      18: ['f', 's']
    },
    limiters: {
      13: 's',
      14: 'f',
      15: 'w'
    }
}
