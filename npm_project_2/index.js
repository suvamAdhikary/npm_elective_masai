const inquirer = require("inquirer");

console.log("********************************");
console.log("Welcome to My App");
console.log("Please register to continue");
console.log("********************************");

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        message: "Enter your user name",
        name: "username"
    },
        {
        type: "password",
        message: "Enter a password",
        mask: "*",
        name: "password"
    }   
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("answers are", answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });