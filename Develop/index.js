// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What do you want your title to be?",
    },
    {
      type: "input",
      name: "description",
      message: "Give a brief description of your Readme",
    },
    {
      type: "input",
      name: "Table of contents",
      message: "Table of contents",
    },
    {
      type: "input",
      name: "Installation",
      message: "Install your project",
    },
    {
      type: "input",
      name: "Usage",
      message: "usage",
    },
    {
      type: "input",
      name: "license",
      message: "license",
    },
    {
      type: "input",
      name: "Contributors",
      message: "Who contributed to this Readme?",
    },
    {
      type: "input",
      name: "Tests",
      message: "Tests",
    },
    {
      type: "input",
      name: "Questions",
      message: "Questions",
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
