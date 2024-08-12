// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
    if (!license) {
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
    

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
     if (!license) {
       return "";
     }

     switch (license) {
       case "MIT":
         return "https://opensource.org/licenses/MIT";
       case "GPLv3":
         return "https://www.gnu.org/licenses/gpl-3.0";
       case "Apache 2.0":
         return "https://www.apache.org/licenses/LICENSE-2.0";
       case "BSD 3-Clause":
         return "https://opensource.org/licenses/BSD-3-Clause";
       default:
         return "";
     }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
      if (!license) {
        return "";
      }

      const licenseLink = renderLicenseLink(license);
      return `## License

This project is licensed under the ${license} License. For more information, please visit [this link](${licenseLink}).
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   const licenseBadge = renderLicenseBadge(data.license);
   const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

  ${licenseBadge}

${licenseSection}
`;
}

export default generateMarkdown;
