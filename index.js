// TODO: Include packages needed for this application
let gm = require('./utils/generateMarkdown');
let inq = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "Title",
    type: "input",
  },
  {
    name: "Description",
    type: "input",
  },
  {
    name: "Installation",
    type: "input",
  },
  {
    name: "Usage",
    type: "input",
  },
  {
    name: "Contributing",
    type: "input",
  },
  {
    name: "Testing",
    type: "input",
  },
  {
    name: "License",
    type: "list",
    choices: [
    ],
  },
  {
    name: "Github",
    type: "input",
  },
  {
    name: "Email",
    type: "input",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
