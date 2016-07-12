'use strict';

describe( 'Working specs', () => {
  it( 'should find that true is true', () => {
    expect(true).toBe(true);
  })
  it( 'should be able to do addition', () => {
    expect(1+1).not.toBe(3);
  });
  it( 'should have object identity', () => {
    expect({a:1}).toEqual({a:1});
  });
})

describe( 'Maths', () => {
  it('should be able to add', () => {
    expect(maths.add(4,4)).toBe(8);
    expect(maths.add(4,9)).toBe(13);
    expect(maths.add()).toEqual(NaN);
  });
})
