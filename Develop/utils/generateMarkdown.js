// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseType = data.license;
  let licenseBadge = '';
  if (licenseType === 'Apache') {
    licenseBadge = `[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  }
  if (licenseType === 'GNU GPL') {
    licenseBadge = `[![License: GNU GPL]https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  }
  if (licenseType === 'MIT') {
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  }
  else if (licenseType === '') {
    licenseBadge = '';
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licenseType = data.license;
  let licenseLink = '';
  if (licenseType === 'Apache') {
    licenseLink = `(https://opensource.org/licenses/Apache-2.0)`
  }
  if (licenseType === 'GNU GPL') {
    licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (licenseType === 'MIT') {
    licenseLink = `(https://opensource.org/licenses/MIT)`
  }
  else if (licenseType === '') {
    licenseLink = '';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const badge = renderLicenseBadge(data);
  const link = renderLicenseLink(data);
  console.log(badge);
  console.log(link);
  let licenseSection = '';
  if (link !== '' && badge !== '') {
    licenseSection = badge + 'This application is covered by ' + data.license + ' license ' + link;
  return licenseSection
  } 
  else {
    licenseSection = '';
    return licenseSection;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 const licenseSection = renderLicenseSection(data);
 const displayBadge = renderLicenseBadge(data);
  return `
  # ${data.title}
  ${displayBadge}

  ## Description
  ${data.description}

  ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributors](#contributors)
    - [Tests](#tests)
    - [Questions](#questions)
    - [License](#license)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contributors
    ${data.contribution}

    ## Tests
    ${data.test}

    ## License
    ${licenseSection}

    ## Questions
    [My GitHub](https://github.com${data.username})

    I can be reached at ${data.email}
  `;
}

module.exports = generateMarkdown;