//function that calculates kelvin to fahrenheit

// line 2 shows a constant value of kelvin being at 293 degrees//

const kelvin = 293;

//setting celsius to to a constant value//

const celsius = kelvin - 273;

//equation that gives us the temperature in fahrenheit//

let fahrenheit = celsius * (9/5) + 32;

//rounded down the fahrenheit temperature//

fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//function complete//