const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please title your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project:",
  },
  {
    type: "input",
    name: "table of contents",
    message: "Please layout the table of contents for your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please explain the installation process:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please explain how your project is used:",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for your project:",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "How can people contribute to your project?:",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide tests for the user to run your application:",
  },
  {
    type: "input",
    name: "questions",
    message: "Provide methods for people to contact you with questions:",
  },
];

inquirer.prompt(questions).then((entries) => {
  console.log(entries);
  var readMe = generateMarkdown(entries);
  fs.writeFile("newREADME.md", readMe, (err) => {
    if (err) throw err;
    console.log("You generated a new README!");
  });
});

// function to write README file
// function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
