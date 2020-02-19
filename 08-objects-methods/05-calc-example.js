let calc = {
  num1: 20,
  num2: 30,
  sum: function() {
    return this.num1 + this.num2;
  },
  difference: function() {
    return this.num1 - this.num2;
  }
};


console.log(calc.sum());
console.log(calc.difference());
calc.num1 = 40;
calc.num2 = 10;
console.log(calc.sum());  // 50
console.log(calc.difference()); // 40 - 10 = 30



