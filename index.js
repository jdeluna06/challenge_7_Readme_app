// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter the project name?",
    name: "title",
  },

  {
    type: "input",
    message:
      "Description: Provide a short description explaining the what, why, and how of your project.",
    name: "description",
  },

  {
    type: "input",
    message: "Instalation: Provide installation instructions for your project.",
    name: "installation",
  },

  {
    type: "input",
    message: "Usage: Provide instructions and examples for use",
    name: "usage",
  },

  {
    type: "input",
    message:
      "Credits: List your collaborators, if any, with links to their GitHub profiles.",
    name: "credits",
  },

  {
    type: "list",
    message: "Select a license.",
    choices: ["MIT", "GPLv3", "Apache 2.0", "BSD 3-Clause"],
  },

  {
    type: "input",
    message: "Features: If your project has a lot of features, list them here.",
    name: "features",
  },

  {
    type: "input",
    message: "Enter test instructions.",
    name: "test",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
	if (err) {
	  console.error(err);
	} else {
	  console.log('README file created successfully!');
	}
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
