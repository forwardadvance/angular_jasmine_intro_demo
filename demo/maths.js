'use strict';

window.maths = {
  sum: (a, b) => {
    return a + b;
  },
  power: (a, pow) => {
    for (var i = 0; i < pow-1; i++) {
      a *= a;
    }
    return a;
  },
  div: (a, b) => {
    return a / c;
  }
};
