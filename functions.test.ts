const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray returns an array', () => {
        expect(shuffleArray([2,4,6,7])).toContain([4,6,7,2])
      })
    
      test('shuffleArray to return same length as arguement', () => {
          expect(shuffleArray.length).toEqual(shuffleArray.length)
      })
})