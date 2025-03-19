var Calculator = /** @class */ (function () {
    function Calculator(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }
    Calculator.prototype.add = function () {
        // console.log(this.firstNumber + this.secondNumber);
        return this.firstNumber + this.secondNumber;
    };
    Calculator.prototype.subtract = function () {
        return this.firstNumber - this.secondNumber;
    };
    Calculator.prototype.multiply = function () {
        return this.firstNumber * this.secondNumber;
    };
    Calculator.prototype.divide = function () {
        return this.firstNumber / this.secondNumber;
    };
    return Calculator;
}());
var calc = new Calculator(10, 2);
var result = calc.add();
result = calc.subtract();
result = calc.multiply();
result = calc.divide();
console.log(result);
