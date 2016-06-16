import test from 'tape';

import multiply from './../app/calculator/multiply';

test('multiply functionality', t => {
  t.equal(multiply(3,3),9);
  t.equal(multiply(3,-3),-9);
  t.equal(multiply(-3,3),-9);
  t.equal(multiply(5,3),15);
  t.equal(multiply(3,0),0);
  t.end()
})
