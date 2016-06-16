import test from 'tape';

import plus from './../app/calculator/plus';

test('plus functionality', t => {
  t.equal(plus(3, 5),8);
  t.equal(plus(0, 0),0);
  t.equal(plus(3, 5),8);
  t.equal(plus(-3, -5),-8);
  t.equal(plus(-3, 5),2);
  t.end()
})
