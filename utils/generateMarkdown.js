// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `[![License](https://img.shields.io/static/v1?label=License&message=${license}&color=green)]`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `https://choosealicense.com/licenses/${license}/`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
${renderLicenseBadge(license)}(${renderLicenseLink(license)})`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Testing](#testing)
* [License](#license)
* [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Testing
${data.testing}
${renderLicenseSection(data.license)}

## Questions
Please reach out on [github](https://github.com/${data.github})
or by [email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
