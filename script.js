// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function writePassword() {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz0123456789@#$%^&*";

// let letters = "0123456789"
  password = ""; 
  
  for (var i = 0;i < 20;i++) {
    let generate = letters[Math.floor(Math.random() * 62)];
    password += generate;
  }
  
  
  
  
let parent = document.getElementById("password").innerHTML = password;
  
// let parent = document.getElementById("test").innerHTML = password;
}

generateBtn.addEventListener("click", writePassword);