# 03_Password_Generator

The goal of this assignment is to start with the shell of this password generator website and to code the js so that it takes in several pieces of criteria from the user and based on that criteria, creates a random password. 

The criteria being: 
 - do you want uppercase letters? 
 - do you want lowercase letters? 
 - do you want numbers? 
 - do you want special characters? 
 - how many characters do you want? 

To do this, I created:
1. an array for each set of characters
2. an empty array to store user selected characters and an empty password variable
3. a variable for a user boolean response to confirm statements about what type of characters to include
4. a variable for a user number response to a prompt statement about how many characters
5. a function (confirmCharacters) to confirm yes or no (true or false) about each character type from the user with an if statement that calls the function again if the user didn't select at least one type of character
6. a function (confirmCount) to prompt the user to decide how many characters with an if statement that calls the function again if the user selects less than 8 or more than 128 characters
7. a function (createFinalArray) to combine the values of each character array into one final array based on the user's selected criteria
8. a function (generatePassword) to call confirmCharacters(), confirmCount(), and createFinalArray() and then loop through the final array, generating random values from the array and pushing them to the empty password variable the same number of times as the user's selected character count criteria and returns the value of the updated password variable (the password).

Lastly, I debugged the provided writePassword function which calls my generatePassword() function and then changed the text content of the empty password window on the site to the returned value of generatePassword().

FIN

The biggest challenge for me was understanding the code that was provided (first time I had seen queryselector) and then thinking through scoping of variables. I moved variables in and out of functions over and over trying to get everything to work, but I finally thing I have a good sense of how to scope and write variables/functions. 

