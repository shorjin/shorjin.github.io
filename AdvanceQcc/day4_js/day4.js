console.log('---for loops---')
console.log('---example 1---')
for (let counter=10; counter>=4;counter--){
    console.log(`currently counting ${counter}`)
}

console.log('---example 2---')
let initialNum=parseInt(prompt("Enter a number between 0 and 90"))
for (initialNum; initialNum>=0;initialNum--){
    console.log(`counting=${initialNum}`)
    if(initialNum%5===0){
        console.log(`counting${initialNum}`)
    }
}

console.log('---example 6---')
let cars=["Mazda","Tesla","Dodge","BMW","Porshe"]
for (let eachCar of cars){
    console.log(eachCar)
}

console.log('---example 8---')
// inner loop
for (let innercounter=30;innercounter>=0;innercounter-=10){
    console.log(`inner counter= ${innercounter}`)

}
// outer loop
for (let outercounter=1;outercounter<=5;outercounter++){
    console.log(`outer counter= ${outercounter}`)
}
console.log("********************merge loop************************")
// merge loop
for (let outercounter=1;outercounter<=5;outercounter++){
    console.log(`outer counter= ${outercounter}`)
    for (let innercounter=30;innercounter>=0;innercounter-=10){
    console.log(`inner counter= ${innercounter}`)
    }}


console.log('---example 9---')
let i=10
while (i>=10){
    console.log(`currently counting ${i}`)
    i--
}

let userNum=parseInt(prompt("Enter a number"))
// isNaN() Function is used to check whether a given value is an illegal number or not. It returns true if the value is a NaN else returns false
let checkusernum=isNaN(userNum)
//  if checkusernum is not a number, the loop will continue executing 
while(checkusernum){
    userNum=parseInt(prompt("You didn't enter a number! Try again"))
    checkusernum=isNaN(userNum)
}
console.log(`You entered ${userNum}`)
console.log('---example 11---')
for  (let counter= 5; counter>=-10;counter--){
    console.log(`counting=${counter}`)
    if(counter===1){
        break
    }
}

console.log('---example 11.1---')
for  (let counter= 5; counter>=-10;counter--){
    console.log(`counting=${counter}`)
    if(counter===1){
        continue
    }
    else{
        console.log(`counting=${counter}`)

    }
}

console.log('---example 12---')
for (let y=-10; y<=10; y++){
    if(y%2===0){
        console.log(y)
    }


}
console.log('---example 12.1---')
for (let y=-10; y<=10; y++){
    if(y%2!==0){
       continue
    }
    else{
        console.log(y)
    }


}

console.log('---function---')

function printcount(){
    console.log('---example 2---')
    for( let n=3; n>0; n-=1){
        console.log(n)
    }
}



function greeting(name){
    console.log('---example 3---')
    console.log(`Hello ${name}`)
}

function greet(firstname,lastname){
    console.log('---example 5---')
    console.log(`Hello ${firstname} ${lastname[0].toUpperCase()}${lastname.slice(1)}`)
}
function doubleNumbers(number){
    console.log('---example 5---')
    number *=2
    return number
}

// when the function doublenumber is called and the user didn't enter an argument, number as an argument, the program will ask the user to enter a number.The function will fully run when the user enters an argument
function doubleNumber(number){
    console.log('---class activity---')
    let checknumber=isNaN(number)
    

    while(checknumber){
        
        number=parseInt(prompt("You didn't enter a number! Try again"))
        checknumber=isNaN(number)
        }
        console.log(`The number you called in function is ${number}`)
        return number
    }
 

