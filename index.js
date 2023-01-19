// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions
const questions = [
  "What is your app for?",
  "How can this app be used?",
  "How is this app installed?",
  "How can issues be reported?",
  "How can contributions be made?",
];

const test = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the Project?",
  },
  {
    type: "input",
    name: "second",
    message: "What is the description of the Project?",
  },
  {
    type: "input",
    name: "third",
    message: "What is the something of the Project?",
  },
];

// TODO: Create a function to write README file
//   .then((answers) => {
// const htmlPageContent = generateHTML(answers);

// fs.writeFile('index.html', htmlPageContent, (err) =>
//  err ? console.log(err) : console.log('Successfully created index.html!')
// );
// });

function writeToFile(README, data) {
  // we write our code to WRITE NEW DATA to the FILE SYSTEM (fs)
}

// TODO: Create a function to initialize app
function init() {
  // here we start our logic/code

  inquirer
    .prompt(test)
    .then((answers) => {
      console.log(answers);
      console.log(answers.first);
      console.log(answers.second);
      console.log(answers.third);

      // IF we need data from the prompt method continue our code inside of this functions scope
      // we can declare global variable and then update the value
      // we can PASS the variables/data to another function --> writeToFile("filename", data)
      let result = generateMarkdown(answers);

      // we can write the rest of our code inbetween the { SCOPE }
    })
    .catch((error) => {
      console.log(error);
    });

  // console.log("I am content AFTER the async function");
}

// Function call to initialize app
init();
