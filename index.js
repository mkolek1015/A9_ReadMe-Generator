//require modules
const fs = require("fs");
const inquirer = require("inquirer");

//Prompt function

function promptQuestions() {
  return inquirer.prompt([
        {
        type: "input",
        message: "Please enter your GitHub username.",
        name: "username",
        },
        {
            type: "input",
            message: "Please enter your email address.",
            name: "email",
        },
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "Give a brief description of this project.",
            name: "description",
        },
        {
            type: "input",
            message: "What packages need to be installed to run this project?",
            name: "installation",
        },
        {
            type: "input",
            message: "Give an example of how this application can be used",
            name: "usage",
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license would you like to use?",
            name: "license",
            choices: ["MIT", "APACHE 2.0", "GPL v3", "BSD 3", "No License"],
        },
        {
            type: "input",
            message: "Please list all contributors (yourself included).",
            name: "contributor",
        },
        {
            type: "input",
            message: "Please list Table of Contents.",
            name: "Table of Contents",
        },
    ]);
}

promptQuestions();

//write README
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", function (err) {
    if (err) {
      throw err;
    }
    console.log("README file is saved to your folder.");
  });
}
//init function