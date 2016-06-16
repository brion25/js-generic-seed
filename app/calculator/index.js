import plus from './plus';
import minus from './minus';
import multiply from './multiply';
import divide from './divide';

export default Calculator;

function Calculator(a, b){
  this.plus = plus.bind(this,a,b);
  this.minus = minus.bind(this,a,b);
  this.multiply = multiply.bind(this,a,b);
  this.divide = divide.bind(this,a,b);
}
