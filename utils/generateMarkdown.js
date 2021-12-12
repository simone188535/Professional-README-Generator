// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgeAndLink(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'APACHE 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'GPL 3.0':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case 'BSD 3': 
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    default:
      ''
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ``
  }

  return `
  ## License

  This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { username, email, title, description, usage, license, dependencies, contribute, test } = data;
  return `# ${title}

  ${renderLicenseBadgeAndLink(license)}

  ## Description
  ${description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)


  ## Installation

  To install necessary dependencies, run the following command:

  \`\`\`
  ${dependencies}
  \`\`\`

  ## Usage

  ${usage}

  ${renderLicenseSection(license)}

  ## Contributing

  ${contribute}

  ## Tests

  \`\`\`
  ${test}
  \`\`\`

  ## Questions

  If you have any questions about the repo, open
  an issue or contact me directly at ${email}. You
  can find more of me at [${username}](https://github.com/${username})
`;
}

module.exports = generateMarkdown;
