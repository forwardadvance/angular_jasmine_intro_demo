// Jasmine!

'use strict';

describe('working specs', () => {
  it('should work', () => {
    expect(true).toEqual(true)
  })
})

describe('Maths', () => {
  describe('add', () => {
    it('should be able to add numbers', () => {
      expect( maths.add(1,1) ).toBe( 2 );
      expect( maths.add(10,20) ).toBe( 30 );
    })
    it('should throw a NaN for undefined', () => {
      expect( maths.add() ).toEqual( NaN );
    })
  })

  describe('subtraction', () => {
    it('should subtract two numbers', () => {
      expect(maths.subtract(10, 3)).toBe(7);
      expect(maths.subtract(1000, 500)).toBe(500);
    })
  })
})
