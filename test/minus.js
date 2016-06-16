import test from 'tape';

import minus from './../app/calculator/minus';

test('minus functionality', t => {
  t.equal(minus(3,3),0);
  t.equal(minus(3,-3),6);
  t.equal(minus(-3,3),-6);
  t.equal(minus(5,3),2);
  t.equal(minus(3,5),-2);
  t.end()
})
