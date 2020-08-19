// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays of characters
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var totalCharacters = [];

// confirmation vairables for usage of different characters
var confirmUppercase;
var confirmLowercase;
var confirmNumbers;
var confirmSpecial;
var characterCount;
  

function generatePassword() {
  confirmCharacters();
  confrimCount();
  createFinalArray();
  var password = "";
  for (var i = 0; i < characterCount; i++) {
    var character = totalCharacters[Math.floor(Math.random() * totalCharacters.length)];
    password += character; 
    // Math.floor rounds the value of Math.Random*X down
    // Math.random() generates a random decimal between 0 and 1, which you multiply by the number of characters you're sorting throuh and round down so you never exceed the number of characters. 
  };
  totalCharacters = [];
  return password;
};

function confirmCharacters () {
  confirmUppercase = confirm("May we use UPPERCASE characters in your new password? Select OK if we can, Cancel if not.");
  confirmLowercase = confirm("May we use lowercase characters in your new password? Select OK if we can, Cancel if not.");
  confirmNumbers = confirm("May we use numbers like 1 or 4 in your new password? Select OK if we can, Cancel if not.");
  confirmSpecial = confirm("May we use special characters like $ or % in your new password? Select OK if we can, Cancel if not.");
  if (confirmLowercase === false && confirmUppercase === false && confirmSpecial === false && confirmNumbers === false) {
    alert("You must choose to include at least one of Uppercase, Lowercase, Special, and Numerical Characters.")
    confirmCharacters();
    };
};


function confrimCount () {
  characterCount = prompt("How many characters do you want in your password? 8 is the minimum and 128 is the maximum. And the sky is the limit.");
  
  if (characterCount < 8 || characterCount > 128) { 
    alert("Remember, choose a number between 8 & 128.");
    characterCount = prompt("How many characters do you want in your password? 8 is the minimum and 128 is the maximum. And the sky is the limit.");
    };
};   

function createFinalArray() {
  if (confirmUppercase) {
    Array.prototype.push.apply(totalCharacters, upperCasedCharacters);
  };
  if (confirmLowercase) {
    Array.prototype.push.apply(totalCharacters, lowerCasedCharacters);
  };
  if (confirmNumbers) {
    Array.prototype.push.apply(totalCharacters, numericCharacters);
  };
  if (confirmSpecial) {
    Array.prototype.push.apply(totalCharacters, specialCharacters);
  };
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// PSUEDO CODE
// 1. Click button to generate password. 
// ? 1.a Prompt user to select which criteria to specify for the password?
  //  Length of password
  //  Character Types: lowercase, uppercase, numeric, special characters
// 2. Prompt user to choose a length between 8 and 128 characters
// 3. If user enters <8 or >128, alert error, prompt again. 
// 4. Prompt user to confirm lowercase characters, return boolean
// 5. Prompt user to confirm uppercase characters, return boolean
// 6. Prompt user to confirm numbers, return boolean
// 7. Prompt user to confirm special characters, return boolean. 

// 8. Randomly generate a string of characters based on criteria above. 
    // use an array to get random characters?
