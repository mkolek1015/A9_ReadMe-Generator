// function to generate markdown for README
// look into markdown cheatsheet to figure out how to write markdown
function generateMarkdown(data) {
  let badges = "https://img.shields.io/badge/license-MIT-red";
  if (data.license == "Apache 2.0") {
    badges = "https://img.shields.io/badge/license-Apache-red";
  } else if (data.license == "GNU") {
    badges = "https://img.shields.io/badge/license-GNU-red";
  } else {
    badges = "https://img.shields.io/badge/license-MIT-red"
  };

  return `
  # Title 
  ## ${data.title}

  ## Description
  ${data.description}

  # Table of Contents
  *  Installation 
  *  Contributing 
  *  Tests 
  *  Usage 
  *  Questions

  ## Installation:
  ${data.installation} 
  ## License:
  ${data.license}
  ![badge](${badges}) 
  
  ## Contributors:
  ${data.contributor}
  ## Tests:
  ${data.tests}
  ## Usage:
  ${data.usage} 
  ## Questions: 
If you have any questions, you can contact the creator of this repo here: [${data.email}](mailto:${data.email})
GitHub: https://github.com/${data.username}

## Author Info
${data.name}

`;
}

module.exports = generateMarkdown;
