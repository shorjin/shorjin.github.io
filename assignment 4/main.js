console.log("js connected")
// A
const lucas_height=1.69
const lucas_weight=78
const Petter_height=1.95
const Petter_weight=92
const lucas_bmi=(lucas_weight/(lucas_height*lucas_height)).toFixed(1);
const petter_bmi=(Petter_weight/(Petter_height*Petter_height)).toFixed(1);
const lucasHigherBMI=petter_bmi>lucas_bmi
console.log(`“The BMI of Petter is ${petter_bmi} ,The BMI of Lucas is ${lucas_bmi} , Petter's BMI is higher than Lucas's BMI that is ${lucasHigherBMI} `)

// B


function convert1(celsius) {
    return  `${celsius}°C is ${celsius*1.8+32}°F".`;
  }


function convert2(fahrenheit) {
    return  `${fahrenheit}°F is ${5/9*(fahrenheit - 32)}°C.`;
  }
console.log(convert1(89))
console.log(convert2(20))


// C
if (lucas_bmi> petter_bmi) {
    console.log(`Lucas' BMI (${lucas_bmi}) is higher than Peter's (${petter_bmi})!`)
}

// D
CovertCelsiusToFahrenheit = (celsius) => {
    return `${celsius}°C is ${celsius*1.8+32}°F".`;
  } 

CovertFahrenheitToCelsius = (fahrenheit) => {
    return `${fahrenheit}°F is ${5/9*(fahrenheit - 32)}°C.`;
  } 
console.log(CovertCelsiusToFahrenheit(100))
console.log(CovertCelsiusToFahrenheit(0))
console.log(CovertCelsiusToFahrenheit(10))
console.log(CovertFahrenheitToCelsius(32))
console.log(CovertFahrenheitToCelsius(10))
console.log(CovertFahrenheitToCelsius(102))