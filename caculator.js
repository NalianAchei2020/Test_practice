class caculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  add() {
    return this.num1 + this.num2;
  }

  substract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    return this.num1 / this.num2;
  }
}

const calculate = new caculator(8, 4);
console.log(calculate.add());

module.exports = caculator;
