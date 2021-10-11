// TODO: Include packages needed for this application
let gm = require('./utils/generateMarkdown');
const licenses = require('./utils/licenses')
let inq = require('inquirer');
let fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "Enter your project's title"
  },
  {
    name: "description",
    type: "input",
    message: "Enter your project's description"
  },
  {
    name: "install",
    type: "input",
    message: "Describe how to install your project"
  },
  {
    name: "usage",
    type: "input",
    message: "Explain how to use your project"
  },
  {
    name: "contributing",
    type: "input",
    message: "Explain how to contribute to your project"
  },
  {
    name: "testing",
    type: "input",
    message: "Describe how to test your project"
  },
  {
    name: "license",
    type: "list",
    choices: licenses.map(l => {return {name: l.name, value: l.key, short: l.spdx_id}}),
    message: "Select a license"
  },
  {
    name: "github",
    type: "input",
    message: "Enter your github username"
  },
  {
    name: "email",
    type: "input",
    message: "Enter your contact email"
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inq.prompt(questions).then(data => {
    let md = gm(data);
    console.log(md);
    writeToFile('README.md', md);
  });
}

// Function call to initialize app
init();
