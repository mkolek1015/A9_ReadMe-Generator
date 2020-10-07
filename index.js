//require modules
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./Develop/utils/generateMarkdown');
const util = require('util');




//Prompt function

inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "What is your full name?"
        },
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
        message: "Give an example of how this application can be used?",
        name: "usage",
        },
        {
        type: "checkbox",
        name: "license",
        message: "What kind of license would you like to use?",
        choices: [
            "MIT", 
            "APACHE 2.0", 
            "GPL v3", 
            "BSD 3", 
            "No License"
            ]
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
        {
        type: "list",
        message: "What is your preferred method of communication?",
        name: "contact",
        choices: [
            "email",
            "phone",
            "smoke signal",
            "morse code",
            "carrier pigeon"
            ]
        }
]).then(function writeToFile(){
    fs.writeFile("README.md", "text here", function (err) {
      
          if (err) {
            return console.log(err);
          }
      
          console.log("ReadMe is created in folder!");
      
        });
      });
      
