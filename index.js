// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
// This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions
// const test = [
//   "What is your app for?",
//   "How can this app be used?",
//   "How is this app installed?",
//   "How can issues be reported?",
//   "How can contributions be made?",
// ];

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the Project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the app used for?",
  },
  {
    type: "input",
    name: "installation",
    message: "How is this app installed?",
  },
  {
    type: "input",
    name: "issues",
    message: "How can issues be reported?",
  },
  {
    type: "input",
    name: "contributions",
    message: "How can contributions be made?",
  },
  {
    type: "list",
    name: "license",
    message: "select license",
    choices: ["MIT", "Apache", "GPL", "BSD"],
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email.",
  },
  {
    type: "input",
    name: "GitHub",
    message: "Please enter your GitHub username.",
  },
];

// TODO: Create a function to write README file
//   .then((answers) => {
// const htmlPageContent = generateHTML(answers);

// fs.writeFile('index.html', htmlPageContent, (err) =>
//  err ? console.log(err) : console.log('Successfully created index.html!')
// );
// });

function writeToFile(README, answers) {
  fs.writeFile(README, answers, (err) => {
    if (err) {
      return console.log(err);
    }
  });
  // we write our code to WRITE NEW DATA to the FILE SYSTEM (fs)
}

// appendFile() takes in 3 arguments: path, data, and callback function
// fs.appendFile("log.txt", `${process.argv[2]}\n`, (err) =>
// Ternary operator takes in a condition followed by a question mark (?)
// then an expression to execute if the condition is truthy followed by a colon (:)
// and finally the expression to execute if the condition is falsy.
// This operator is frequently used as a shortcut for the if statement.
//   err ? console.error(err) : console.log("Commit logged!")
// );

// TODO: Create a function to initialize app
function init() {
  // here we start our logic/code

  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      console.log(answers.title);
      console.log(answers.usage);
      console.log(answers.installation);
      console.log(answers.issues);
      console.log(answers.contributions);
      console.log(answers.license);
      writeToFile("README.md", generateMarkdown(answers));

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
