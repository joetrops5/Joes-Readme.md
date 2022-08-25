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
      message: "Give a brief description of your application",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your application?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the application used for?",
    },
    {
      type: "list",
      name: "license",
      message: "Did you use a license?",
      choices: [
        "GNU-Affero-General-Public-License-v3.0",
        "GNU General Public License v2.0",
        "GNU General Public License v3.0", //Add an option for if no license is selected//
      ],
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
