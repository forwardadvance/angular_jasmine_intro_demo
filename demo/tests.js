'use strict';

describe('being right about things', function() {
  it('maths works', function() {
    expect(1+1).toBe(2);
    expect(2+2).toBe(4);
  });
  it('strings work', function() {
    expect('1'+'1').toBe('11');
    expect(2+2).toBe(4);
  });
});

describe('maths', function() {
  it('can do powers', function() {
    expect(maths.power(2,2)).toBe(4);
    expect(maths.power(2,0)).toBe(1);
    expect(maths.power(2,undefined)).toEqual(NaN);
  });
  // it('should be the case that one and one is 2', function() {
  //   expect(maths.div(2,2)).toBe(4);
  // });
  // it('should be the case that one and one is 2', function() {
  //   expect(maths.div(2,2)).toBe(4);
  // });
});
