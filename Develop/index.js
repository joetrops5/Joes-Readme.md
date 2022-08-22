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
      message: "List your table of contents",
    },
    {
      type: "input",
      name: "Installation",
      message: "How do you install your project?",
    },
    {
      type: "input",
      name: "Usage",
      message: "What is this used for?",
    },
    {
      type: "input",
      name: "license",
      message: "What is the license?",
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
])
};
// TODO: Create a function to write README file
// function createReadmefile({name, data}) => 


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
