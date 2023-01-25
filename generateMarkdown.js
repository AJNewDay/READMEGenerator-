// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ## License:
  ![license](https://img.shields.io/badge/license-${answers.license}-blue.svg)


  ## Table of Contents
  - [Usage](#usage)
  - [Installation](#installation)
  - [Issues](#issues)
  - [Contributions](#contributions)
  - [License](#license)
 
## Usage
${answers.usage}
## Installation
${answers.installation}
## Issues
${answers.issues}
## Contributions
${answers.contributions}
## License
${answers.license}
`;
}

// this code EXPORTS the generateMarkdown function outside of this file
module.exports = generateMarkdown;
