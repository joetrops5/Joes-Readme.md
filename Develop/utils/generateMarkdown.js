// Gets licenseSections object from the seperate JS file into this one
const licenseSections = require("./licenseSections");

// Returns the corresponding license badge or a string if nothing is selected.
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
  if (license === "None") {
    return "";
  }
}

// Returns the license link based on selection or a string if nothing is selected
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
  if (license === "None") {
    return "";
  }
};

// Returns the description section for whichever is selected
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
  if (license === "None") {
    return "";
  }
}

// Generates the Readme file based on users selections
function generateMarkdown(data) {
  console.log(data);
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
    
  ## Description

  ${data.description}

  ## Table of Contents 

  [Description](#description)

  [Installation](#installation) 

  [Usage](#usage)

  [License](#license)

  [Contributors](#contributors)

  [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage 

  ${data.usage}

  ## License 

  ### ${renderLicenseLink(data.license)} 
  ${renderLicenseSection(data.license)}

  ## Contributors 

  ${data.contributors} 

  ## Questions 

  Any inquiries please feel free to contact me <br>
  Github: [${data.github}](https://github.com/${data.github}) <br>
  Email: ${data.email} <br>
  `;
}

module.exports = generateMarkdown;
