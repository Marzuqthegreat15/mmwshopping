// 1. Create variables
let name = "Marzuq";
let dayOfBirth = 14; 

var testVar = "first";
var testVar = "second"; 
console.log(testVar); 

let favoriteColor = prompt("What is your favorite color?");
console.log(`Wow, ${favoriteColor} is a great choice!`);

let mixedQuotes = "This string contains both 'single' and \"double\" quotes.";
console.log(mixedQuotes);

function example() {
  let functionVar = "I am local to the function";
  console.log(functionVar); // Accessible
  var varHoisted = "I am hoisted";
  let letHoisted = "I am not hoisted in the same way";
  
  
  console.log(varHoisted); 
  console.log(letHoisted); 
}


example();


let nullValue = null; 
let undefinedValue;
console.log(nullValue); 
console.log(undefinedValue); 


let notANumber = NaN;
console.log(notANumber); 
console.log(typeof notANumber); 


let thing;
console.log(thing); 