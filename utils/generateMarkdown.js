// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "None") {
      return "";
    }

    switch (license) {
      case "MIT":
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      case "GPLv3":
        return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      case "Apache 2.0":
        return "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-green.svg)";
      case "BSD 3-Clause":
        return "![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)";
      default:
        return "";
    }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
     if (license === "None") {  
       return "";
     }
return`- [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
      if (license === "None") {
        return "";
      } 

    return `## License

This project is licensed under the ${license} License.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  


  return `# ${data.title}
${renderLicenseBadge(data.license)}
  


## Description
${data.description}


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}


## Installation
${data.installation}

## Usage
${data.usage}


## Credits
${data.credits}

${renderLicenseSection(data.license)}

## Features
${data.features}

## Tests
${data.test}
`;
}

export default generateMarkdown;
