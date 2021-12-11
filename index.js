// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  [
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
      message: "Please write a short description of your project",
      name: "description",
    },
    {
      type: "list",
      message:
        "What kind of license should your project have? (Use arrow keys)",
      name: "license",
      pageSize: 5,
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "dependencies",
      default: "npm i"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        default: "npm test",
        name: "test"
      },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
      },
      {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribute",
      },
  ],
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
