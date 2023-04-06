// Assignment Code
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["! ", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "="];



var generateBtn = document.querySelector("#generate");

function generatePassword() {
var userArray = [];

var passwordOptions = []

var passwordLength = parseInt (prompt ("How many of characters do you want? Passwords needs to be between 8 and 128."));
// validating the proper length of the password
if (passwordLength < 8 || passwordLength > 128) {
  alert ("Your password is inproper length. Please try again.");
  generatePassword();
}

var includeNumbers = confirm ("Do you want numbers in your password?");
var includeUppercases = confirm ("Do you want uppercase letters in your password?");
var includeLowercases = confirm ("Do you want lowercase letters in your password?");
var includeCharacters = confirm ("Do you want special characters in your password?");
// console.log(`numChar:${numCharacters}`)

if (includeNumbers === false && 
  includeUppercases === false && 
  includeLowercases === false && 
  includeCharacters === false) {
    alert ("Your password include ONE of the character types.");
    generatePassword();
  }

if (includeNumbers) {
  passwordOptions = passwordOptions.concat(numbArray)
}
if (includeUppercases) {
  passwordOptions = passwordOptions.concat(uppercaseArray)
}
if (includeLowercases) {
  passwordOptions = passwordOptions.concat(lowercaseArray)
}
if (includeCharacters) {
  passwordOptions = passwordOptions.concat(characterArray)
}
 for (var i = 0; i < passwordLength; i++) {
      
   userArray.push (passwordOptions[Math.floor(Math.random() * passwordOptions.length)]); 
    }
  
    return userArray.join("") ;
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
