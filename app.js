const inquirer = require('inquirer');
const generateMd = require('./utils/content-maker');
const { writeFile, copyFile } = require('./utils/file-maker.js');

const promptUser = () => {
  let intro = 
  `WELCOME TO THE README.md GENERATOR!
  Providing no response to a question will cause the deletion of the section where that response would appear.
  Use ^C at any time to quit.
  `;
  console.log(intro);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the project name?',
      validate: projectNameInput => {
        if (projectNameInput) {
          return true;
        } else {
          console.log('Please enter a project name (or placeholder)');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Please describe the project.',
    },
    {
      type: 'list',
      name: 'licenseType',
      message: 'What type of license applies to this project?',
      choices: ['Do Not Show License', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Other License'],
      default: 'Do Not Show License'
    },
    {
      type: 'input',
      name: 'licenseFileLocation',
      message: 'Please provide the relative path and filename of the file containing the license, or enter nothing if you do not wish to provide this link.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide a description of the installation of the project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide a description of the usage of the project.',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide instructions for contributing to the project.',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Please provide instructions for testing the code.',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Please provide your GitHub username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please provide your email, or enter nothing if you do not wish to include your email in this README.md file.',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'The README.md file will include your GitHub username, profile page, and email address if you chose to provide these.  Please provide any additional text you may have for the Questions section.',
    },
  ])
};

promptUser()
  .then(userResponsesObject => {
    console.log(userResponsesObject);
    return generateMd(userResponsesObject);
  })
  .then(readmeContent => {
    return writeFile(readmeContent);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
  .catch(err => {
    console.log(err);
  });