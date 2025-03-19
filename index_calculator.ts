class Calculator {
	firstNumber: number;
	secondNumber: number;
	constructor(firstNumber: number, secondNumber: number){
		this.firstNumber = firstNumber;
		this.secondNumber = secondNumber;
	}
	add(): number {
		// console.log(this.firstNumber + this.secondNumber);
		return this.firstNumber + this.secondNumber;
	}
	subtract(){
		return this.firstNumber - this.secondNumber;
	}
	multiply(){
		return this.firstNumber * this.secondNumber;
	}
	divide(){
		return this.firstNumber / this.secondNumber;
	}
}

const calc = new Calculator(10, 2);
let result = calc.add();
result = calc.subtract();
result = calc.multiply();
result = calc.divide();
console.log(result);