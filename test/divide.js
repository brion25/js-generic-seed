import test from 'tape';

import divide from './../app/calculator/divide';

test('divide functionality', t => {
  t.equal(divide(3,3),1);
  t.equal(divide(3,-3),-1);
  t.equal(divide(-3,3),-1);
  t.equal(divide(5,2),2.5);
  t.equal(divide(5,0),0);
  t.equal(divide(0,5),0);
  t.end()
})
