const {shuffleArray} = require('./utils')

let testArr = [1,2,3,4]

describe('shuffleArray should', () => {
    test('shuffleArray returns an array', () => {
        expect(Array.isArray(shuffleArray(testArr))).toBe(true)
      })
    
      test('shuffleArray to return same length as arguement', () => {
          expect(shuffleArray(testArr)).toEqual(testArr.length)
      })
})