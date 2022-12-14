// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.length !== 0) {
  return `![](https://img.shields.io/badge/License-${license}-blue.svg)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return `https://choosealicense.com/licenses/mit/`;
  } else if (license == "Apache") {
    return `https://www.apache.org/licenses/LICENSE-2.0`;
  } else if (license == "GNU GPL v3") {
    return  `https://choosealicense.com/licenses/gpl-3.0/`;
  } else if (license == "APACHE-2.0") {
    return  `https://choosealicense.com/licenses/mpl-2.0/`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != ``) {
    return `
  ## License
  
  ${renderLicenseBadge(license)}
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.

    `
  } else {
    return "";
  }
};


// TODO: Create a function to generate markdown for README
function generateMarkdown({projectTitle, description, installation, usage, credits, license, contributing, tests, email, github}) {
  return `
  # ${projectTitle}
  ${renderLicenseBadge(license)}

  ## Description
  ${description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Credits
  ${credits}

  ${renderLicenseSection(license)}

  ## Contributing
  ${contributing}

  ## Tests
  ${tests}

  ## Questions
  If you have any questions you can reach out via [Email](mailto:${email}) or you can check out my GitHub profile at here: [GitHub](https://github.com/${github})

`;
}

module.exports = generateMarkdown;