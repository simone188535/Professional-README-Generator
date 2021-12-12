// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown  = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      message: "What is your Github username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "title",
      },
    {
      type: "input",
      message: "Please write a short description of your project",
      name: "description",
    },
    {
      type: "list",
      message:
        "What kind of license should your project have? (Use arrow keys)",
      pageSize: 5,
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      name: "license",
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      default: "npm i",
      name: "dependencies",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        default: "npm test",
        name: "test",
      },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage",
      },
      {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribute",
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    console.log('Creating the README...');
    const generatedMarkup = generateMarkdown(data);

    fs.writeFile(`${fileName}`, generatedMarkup, (err) => {
        if (err) throw console.error('Something went wrong while generating the README');
        console.log('The file has been created!');
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response);
        writeToFile('README.md', response);
    });
}

// Function call to initialize app
init();
