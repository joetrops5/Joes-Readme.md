// TODO: Include packages needed for this application
const fs = require("fs");

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

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
      name: "tableOfContents",
      message: "List your table of contents",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is this used for?",
    },
    {
      type: "list",
      name: "license",
      message: "What is the license?",
      choices: ["MIT", "ISC"],
    },
    {
      type: "input",
      name: "contributors",
      message: "Who contributed to this Readme?",
    },
    {
      type: "input",
      name: "tests",
      message: "Tests",
    },
    {
      type: "input",
      name: "questions",
      message: "Questions?",
    },
  ]);
};

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
async function init() {
  const userInput = await questions();
  const contents = generateMarkdown(userInput);
  // console.log(contents);
  fs.writeFile("readme.md", contents, function (err) {
    if (err) throw err;
    console.log("Your Readme Has Been Successfully Created!");
  });
}

// Function call to initialize app
init();
