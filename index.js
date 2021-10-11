// TODO: Include packages needed for this application
let gm = require('./utils/generateMarkdown');
const licenses = require('./utils/licenses')
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
    choices: licenses.map(l => {name: l.name; value: l.key; short: l.spdx_id}),
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
