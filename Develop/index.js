// fs is used to write to readme file
const fs = require("fs");

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions that will appear in the command line
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
        "GNU General Public License v3.0",
        "None",
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
      message: "Is this for a test?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
  ]);
};

// Async function that gets usersinput and contents and writes to the readme file.
async function init() {
  const userInput = await questions();
  const contents = generateMarkdown(userInput);
  fs.writeFile("readme.md", contents, function (err) {
    if (err) throw err;
    console.log("Your Readme Has Been Successfully Created!");
  });
}

// Function call to initialize app
init();
