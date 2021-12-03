const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Welcome to the password validator tool! Enter password to validate", function(input){
    tokens = input.split(' ');

  let password = [`10`]
  if (password > `10`){
    console.log(`good`)
    } else {
      console.log(`bad`)
    }

    reader.close()

});