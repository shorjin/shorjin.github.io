function greeter(greet:string) {
    console.log(`welcome to TypeScript ${greet}`)
}
let n='Xiaojin Li'
greeter(n);
// implicit numercial data
let y=-10
y=6

// explicit boolean data type
let isCorrect:boolean
isCorrect=true

// explicit data type in an array
let colors:string[]=['red','yellow','blue']
let nums:Array <number>=[1,5,-3,4,10]

// combine data type
let dtype:[number,string,boolean]=[3,'Martha',false]
// never data type
//let x:never=23

// data type for classes
let m:string='Peter'
let mlen=m.length
console.log(`${m} has ${mlen} letters.`)

// cast data type in an implicit data type
let firstName='Martha'
let lenFirstName=firstName.length
console.log(`${firstName} had ${lenFirstName} letters.`)

// function in typescript
// return value type
function getHour():number{
    return new Date().getHours()
}
console.log('it is '+getHour())

function greeting():void{
    console.log('welcome to Angular data type')
}

function getSum(num1:number,num2:number,name:string):string{
    name=name+'! The sum is '+(num1+num2)
    return name
}
console.log(getSum(6,9,'Martha'))

// three dots notation
function getAverage(...n:number[]):number{
    let total=0
    let count=0
    let avg=0
    for (let i=0 ;i<n.length;i++){
        total+=n[i]
        count++
    }
    avg=total/count
    return avg

}

// class in ts
class car{
    brand:string;
    model:string;
    yearManufacture:number;
    constructor(brand:string,model:string,yearManufacture:number){
        this.brand=brand
        this.model=model
        this.yearManufacture=yearManufacture
    }
    year(){
        console.log(this.yearManufacture)
    }
}
// assign values to each class properties
let car1=new car('Tesla','S',2023)

// inheritance TS
// define classes
class Person {
    private name:string ='Peter Pan'
    save(){
        console.log('Registration Successful! ' + this.name)

    }
}
class Customer extends Person{
    sale(){
        console.log('x items sold')

    }
}
class Employee extends Customer{
    salary(){
        console.log('Salary paid!')
    }
}
//  regular class
let person1= new Person
let customer1=new Customer

person1.save()
customer1.sale()
// inheretance class
let employee1=new Employee
employee1.sale()
employee1.save()
