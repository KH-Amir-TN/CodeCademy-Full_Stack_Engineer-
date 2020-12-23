// sotring the observed tempature in kelvin
const kelvin = 0;
// converting the tempature to celsius and storing it
const celsius = kelvin - 273;

//Convertingn the tempature to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//Rounding the tempature
fahrenheit = Math.floor(fahrenheit);

const Newton = Math.floor(celsius * 0.33);

console.log(`The temperature is ${Newton} degrees on Newton scale.`);