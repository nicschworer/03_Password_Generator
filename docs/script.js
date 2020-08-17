// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


function confirmCriteria () {
  // confirm usage of different characters
  var confirmUppercase = confirm("May we use UPPERCASE characters in your new password? Select OK if we can, Cancel if not.");
  var confirmLowercase = confirm("May we use lowercase characters in your new password? Select OK if we can, Cancel if not.");
  var confirmNumbers = confirm("May we use numbers like 1 or 4 in your new password? Select OK if we can, Cancel if not.");
  var confirmSpecial = confirm("May we use special characters like $ or % in your new password? Select OK if we can, Cancel if not.");

  // ask for # of characters
  var characterCount = prompt("How many characters do you want in your password? 8 is the minimum and 128 is the maximum. And the sky is the limit.");

    // confirm charachter count is within parameters
  if (characterCount >= 8 && characterCount <= 128) { 
  // if it is, alert YAY  
    alert(characterCount + " characters coming up!");
  // if it isn't, try again. 
  } else {
    alert("Remember, choose a number between 8 & 128.");
    confirmCriteria();
  };
  if (confirmUppercase === false && confirmLowercase === false && confirmNumbers === false && confirmSpecial === false) {
    alert('You dumbass, we gotta have some characters, try again.')
    confirmCriteria();
  }
};



confirmCriteria()


function createFinalArray() {
  var totalCharacters = [];
    if (confirmUppercase) {
      Array.prototype.push.apply(totalCharacters, upperCasedCharacters);
    };
    if (confirmLowercase) {
      Array.prototype.push.apply(totalCharacters, lowerCasedCharacters);
    }
    if (confirmNumbers) {
      Array.prototype.push.apply(totalCharacters, numericCharacters);
    }
    if (confirmSpecial) {
      Array.prototype.push.apply(totalCharacters, specialCharacters);
    }

    console.log(totalCharacters);
};


createFinalArray();













// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

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
