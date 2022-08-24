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
// const renderLicenseLink = (license) => {
//   if (license === )
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
    
  ## Description

  ${data.description}

  ## Table of Contents 

  ${data.tableOfcontents}

  ## Installation 

  ${data.installation}

  ## Usage 

  ${data.usage}

  ## License 

  ${data.license} 

  ## Contributors 

  ${data.contributors} 
  `;
}

module.exports = generateMarkdown;
