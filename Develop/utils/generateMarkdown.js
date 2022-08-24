// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return "![MIT](https://img.shields.io/badge/license-MIT-brightgreen)";
  }
  if (license == "ISC") {
    return "![ISC](https://img.shields.io/badge/license-ISC-brightgreen)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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
