const licenseSections = require("./licenseSections");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "GNU-Affero-General-Public-License-v3.0") {
    return "![Badge](https://img.shields.io/badge/License-GNU--Affero--General--Public--License--v3.0-brightgreen)";
  }
  if (license == "GNU General Public License v2.0") {
    return "![Badge](https://img.shields.io/badge/License-GNU%20General%20Public%20License%20v2.0-brightgreen)";
  }
  if (license == "GNU General Public License v3.0") {
    return "![Badge](https://img.shields.io/badge/License-GNU%20General%20Public%20License%20v3.0-brightgreen)";
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === "GNU-Affero-General-Public-License-v3.0") {
    return `[Link to ${license}](https://www.gnu.org/licenses/agpl-3.0.en.html)`;
  }
  if (license === "GNU General Public License v2.0") {
    return `[Link to ${license}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  }
  if (license === "GNU General Public License v3.0") {
    return `[Link to ${license}](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  }
  return "";
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "GNU-Affero-General-Public-License-v3.0") {
    return licenseSections.license1;
  }
  if (license === "GNU General Public License v2.0") {
    return licenseSections.license2;
  }
  if (license === "GNU General Public License v3.0") {
    return licenseSections.license3;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
    
  ## Description

  ${data.description}

  ## Table of Contents 

  [Description](##Description)

  [Installation](##Installation) 

  [Usage](##Usage)

  [License](##License)

  [Contributors](##Contributors)

  [test2](#dogs)

  ## Installation

  ${data.installation}

  ## Usage 

  ${data.usage}

  ## License 

  ### ${renderLicenseLink(data.license)} 
  ${renderLicenseSection(data.license)}

  ## Contributors 

  ${data.contributors} 

  
  ## Dogs 

  
  ## Questions 

  Any inquiries please feel free to contact me <br>
  Github: <br>
  Email: <br>
  `;
}

module.exports = generateMarkdown;
