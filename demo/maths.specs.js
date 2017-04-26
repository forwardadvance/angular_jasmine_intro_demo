// Jasmine!

'use strict';

describe('working tests', () => {
  it('works', () => {
    expect({x:1}).toEqual({x:1});
  })
})

describe('Maths', () => {
  describe('Maths.add', () => {
    var value
    beforeEach(() => {
      value = maths.add(2,4)
    });

    it('adds numbers', () => {
      expect(value).toBe(6)
    });
  })
  describe('Maths.subtract', () => {
    it('subtracts numbers', () => {
      expect(maths.subtract(10,1)).toBe(9)
      expect(maths.subtract(20,1)).toBe(19)
    })
  })
});
