//Create global variables 
var characterLength;
var choiceArray;

// Define Input Arrays
var lowerCaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialChar = ['!','@','#','$','%','^','&','*','(',')','=','+','{','}','|','<','>','?',','];
var numberChar = ['0','1','2','3','4','5','6','7','8','9'];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var correctInput = userInput();
  var passwordText = document.querySelector("#password");

  if (correctInput) {
    var finalPassword = generatePassword();
    passwordText.value = finalPassword;
  } else {
    passwordText.value = '';
  };
  return finalPassword;
}

// Create the necessary user prompts
function userInput() {
  choiceArray = [];
  // characterLength to get how long the password should be, and validate user's input to ensure its a number between 8-128
  characterLength = parseInt(prompt("How long would you like your password to be? Please input a number between 8-128"));
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please enter a number between 8 and 128");
    return false
  };

  // Set confirm prompts to indicate what characters to include in your password
  if (confirm("Would you like to include lower case characters in your password?")) {
    choiceArray = choiceArray.concat(lowerCaseChar);
  };
  if (confirm("Would you like to include upper case characters in your password?")) {
    choiceArray = choiceArray.concat(upperCaseChar);
  };
  if (confirm("Would you like to include special characters in your password?")) {
    choiceArray = choiceArray.concat(specialChar);
  };
  if (confirm("Would you like to include numerical characters in your password?")) {
    choiceArray = choiceArray.concat(numberChar);
  };
  return true;
};

// Create and Define the function generatePassword
function generatePassword() {
  // Validator to make sure at least one set of characters to include in the password is selected
  if (choiceArray.length===0){
    alert("Please select at least one type of character set to include in your password");
    return '';
  };
  // Create the password variable and the loop to generate the random password
  var password = '';
  for(var i = 0; i < characterLength; i++) {
    var randomLetter = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomLetter]
  };
  return password;
};
