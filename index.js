// TODO: Include packages needed for this application
let gm = require('./utils/generateMarkdown');
const licenses = require('./utils/licenses')
let inq = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
  },
  {
    name: "description",
    type: "input",
  },
  {
    name: "install",
    type: "input",
  },
  {
    name: "usage",
    type: "input",
  },
  {
    name: "contributing",
    type: "input",
  },
  {
    name: "testing",
    type: "input",
  },
  {
    name: "license",
    type: "list",
    choices: licenses.map(l => {return {name: l.name, value: l.key, short: l.spdx_id}}),
  },
  {
    name: "github",
    type: "input",
  },
  {
    name: "email",
    type: "input",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inq.prompt(questions).then(data => console.log(gm(data)));
}

// Function call to initialize app
init();
