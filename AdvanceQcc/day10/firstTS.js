var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function greeter(greet) {
    console.log("welcome to TypeScript ".concat(greet));
}
var n = 'Xiaojin Li';
greeter(n);
// implicit numercial data
var y = -10;
y = 6;
// explicit boolean data type
var isCorrect;
isCorrect = true;
// explicit data type in an array
var colors = ['red', 'yellow', 'blue'];
var nums = [1, 5, -3, 4, 10];
// combine data type
var dtype = [3, 'Martha', false];
// never data type
//let x:never=23
// data type for classes
var m = 'Peter';
var mlen = m.length;
console.log("".concat(m, " has ").concat(mlen, " letters."));
// cast data type in an implicit data type
var firstName = 'Martha';
var lenFirstName = firstName.length;
console.log("".concat(firstName, " had ").concat(lenFirstName, " letters."));
// function in typescript
// return value type
function getHour() {
    return new Date().getHours();
}
console.log('it is ' + getHour());
function greeting() {
    console.log('welcome to Angular data type');
}
function getSum(num1, num2, name) {
    name = name + '! The sum is ' + (num1 + num2);
    return name;
}
console.log(getSum(6, 9, 'Martha'));
// three dots notation
function getAverage() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    var avg = 0;
    for (var i = 0; i < n.length; i++) {
        total += n[i];
        count++;
    }
    avg = total / count;
    return avg;
}
// class in ts
var car = /** @class */ (function () {
    function car(brand, model, yearManufacture) {
        this.brand = brand;
        this.model = model;
        this.yearManufacture = yearManufacture;
    }
    car.prototype.year = function () {
        console.log(this.yearManufacture);
    };
    return car;
}());
// assign values to each class properties
var car1 = new car('Tesla', 'S', 2023);
// inheritance TS
// define classes
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Peter Pan';
    }
    Person.prototype.save = function () {
        console.log('Registration Successful! ' + this.name);
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sale = function () {
        console.log('x items sold');
    };
    return Customer;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.salary = function () {
        console.log('Salary paid!');
    };
    return Employee;
}(Customer));
//  regular class
var person1 = new Person;
var customer1 = new Customer;
person1.save();
customer1.sale();
// inheretance class
var employee1 = new Employee;
employee1.sale();
employee1.save();
