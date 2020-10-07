// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title ${data.title}

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
  
  ## Contributing:
  ${data.contributing}
  ## Tests:
  ${data.tests}
  ## Usage:
  ${data.usage} 
  ## Questions: 
If you have any questions, you can contact the creator of this repo here: [${data.email}](mailto:${data.email})
GitHub: https://github.com/${data.github}

`;
}

module.exports = generateMarkdown;
