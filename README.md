function generateMarkdown(data) {
  let badges = "https://img.shields.io/badge/license-MIT-red";
  if (data.license == "Apache") {
    badges = "https://img.shields.io/badge/license-Apache-red";
  } else if (data.license == "GNU") {
    badges = "https://img.shields.io/badge/license-GNU-red";
  } else {
    badges = "https://img.shields.io/badge/license-MIT-red"
  };

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
If you have any questions, you can contact the creator of this repo here: [${data.contact}](mailto:${data.contact})
GitHub: https://github.com/${data.username}

`;
}