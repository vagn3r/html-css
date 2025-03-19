function sum(a: number, b: number) {
	return a + b;
}
sum(1,2); // 3

//void means no return type, for background services
function sendEmail(email: string): void{
	//send email through some background service
}
sendEmail('test@rmail.com');

// Basic types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";

// Array
let list: number[] = [1, 2, 3];
let listGeneric: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
x = ["hello", 10];

// Enum
enum Color {
	Red,
	Green,
	Blue,
}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

// Void
function warnUser(): void {
	console.log("This is my warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
	throw new Error(message);
}

// Object
// declare function create(o: object | null): void;
create({ prop: 0 });
create(null);

//---------------------- Type Assertion ME ----------------------

function create(o: object | null): void{
    if (o === null) {
        console.log("Received null");
    } else {
        console.log("Received object with properties:", o);
    }
};
// console.log(error('error test'));
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

type gender = 'Male' | 'Female' | 'Other';
let userGender:gender = 'Male';
// userGender = 'trans'; // cannot be assigned

//interface
interface Person {
	id: number;
	firstName: string;
	lastName: string;
}
let user1: Person = {
	id: 1,
	// id: '1', // cannot be assigned
	firstName: 'Thiergui',
	lastName: 'Nopinto'
}
function getPersonName(person: Person) {
	return `${person.firstName} ${person.lastName}`;
}
console.log(getPersonName(user1));
