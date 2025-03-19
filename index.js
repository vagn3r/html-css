function sum(a, b) {
    return a + b;
}
sum(1, 2); // 3
//void means no return type, for background services
function sendEmail(email) {
    //send email through some background service
}
sendEmail('test@rmail.com');
// Basic types
var isDone = false;
var decimal = 6;
var color = "blue";
// Array
var list = [1, 2, 3];
var listGeneric = [1, 2, 3];
// Tuple
var x;
x = ["hello", 10];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// Void
function warnUser() {
    console.log("This is my warning message");
}
// Null and Undefined
var u = undefined;
var n = null;
// Never
function error(message) {
    throw new Error(message);
}
// Object
// declare function create(o: object | null): void;
create({ prop: 0 });
create(null);
//---------------------- Type Assertion ME ----------------------
function create(o) {
    if (o === null) {
        console.log("Received null");
    }
    else {
        console.log("Received object with properties:", o);
    }
}
;
// console.log(error('error test'));
var someValue = "this is a string";
var strLength = someValue.length;
var userGender = 'Male';
var user = {
    id: 1,
    // id: '1', // cannot be assigned
    firstName: 'Thiergui',
    lastName: 'Nopinto'
};
function getPersonName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
console.log(getPersonName(user));
