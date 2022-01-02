const inquirer = require('inquirer');
const generateMd = require('./utils/content-maker');
const { writeFile, copyFile } = require('./utils/file-maker.js');

const promptUser = () => {
  console.log('WELCOME TO THE README.md GENERATOR!');
  console.log('Use ^C at any time to cancel.')
  return inquirer.prompt([
    {
      type: 'input',
      name: 'project-name',
      message: 'What is the project name? (required)',
      validate: projectNameInput => {
        if (projectNameInput) {
          return true;
        } else {
          console.log('Please enter the project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'project-description',
      message: 'Please describe the project. (required)',
      validate: projectDescriptionInput => {
        if (projectDescriptionInput) {
          return true;
        } else {
          console.log('Please enter a project description!');
          return false;
        }
      }
    },
    // {
    //   type: 'input',
    //   name: 'github',
    //   message: 'Provide your github (required)',
    //   validate: githubInput => {
    //     if (githubInput) {
    //       return true;
    //     } else {
    //       console.log('Please enter your Github!');
    //       return false;
    //     }
    //   }
    // },
    // {
    //   type: 'confirm',
    //   name: 'confirmAbout',
    //   message: 'Would you like to enter some information about yourself for an "About" section?',
    //   default: true
    // },
    // {
    //   type: 'input',
    //   name: 'about',
    //   message: 'Provide some information about yourself:',
    //   when: ({ confirmAbout }) => {
    //     if (confirmAbout) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }
    // }
  ]);
};


const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

// If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  };
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project (required)?',
      validate: pnameInput => {
        if (pnameInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: projDesc => {
        if (projDesc) {
          return true;
        } else {
          console.log('Please enter your project description!');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license-type',
      message: 'What type of license applies to this project?',
      choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Other License', 'Do Not Show License'],
      default: 'Do Not Show License'
    },
    {
      type: 'input',
      name: 'license-file-location',
      message: 'Please provide the relative path and filename of the file containing the license, or enter NONE if you do not wish to provide this link (Required)',
      validate: filePath => {
        if (filePath) {
          return true;
        } else {
          console.log('Please enter the file path!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide a description of the installation of the project (Required)',
      validate: projInst => {
        if (projInst) {
          return true;
        } else {
          console.log('Please enter your project installation!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide a description of the usage of the project (Required)',
      validate: projUse => {
        if (projUse) {
          return true;
        } else {
          console.log('Please enter your project usage!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide instructions for contributing to the project, or enter NA if you do not wish to include this section in your README.md file (Required)',
      validate: contrib => {
        if (contrib) {
          return true;
        } else {
          console.log('Please enter your contribution instructions!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Please provide instructions for testing the code, or enter NA if you do not wish to include this section in your README.md file (Required)',
      validate: testing => {
        if (testing) {
          return true;
        } else {
          console.log('Please enter your testing instructions!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github-username',
      message: 'Please provide your GitHub username',
      validate: username => {
        if (username) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please provide your email, or enter NA if you do not wish to include this section in your README.md file (Required)',
      validate: emailresp => {
        if (emailresp) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'questions',
      message: 'The README.md file will include your GitHub username and profile page; it will also include your email address if you chose to provide it.  If you have additional text for the Questions section, please provide it, or enter NA if you do not wish to include additional text.',
      validate: questionsResp => {
        if (questionsResp) {
          return true;
        } else {
          console.log('Please enter your testing instructions!');
          return false;
        }
      }
    },
    // {
    //   type: 'checkbox',
    //   name: 'languages',
    //   message: 'What did you build this project with? (Check all that apply)',
    //   choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    // },
    // {
    //   type: 'input',
    //   name: 'link',
    //   message: 'Enter the GitHub link to your project. (Required)',
    //   validate: gitLink => {
    //     if (gitLink) {
    //       return true;
    //     } else {
    //       console.log('Please enter your Github link!');
    //       return false;
    //     }
    //   }
    // },
    // {
    //   type: 'confirm',
    //   name: 'feature',
    //   message: 'Would you like to feature this project?',
    //   default: false
    // },
    // {
    //   type: 'confirm',
    //   name: 'confirmAddProject',
    //   message: 'Would you like to enter another project?',
    //   default: false
    // }
  ])
  .then(projectData => {
    // portfolioData.projects.push(projectData);
    // if (projectData.confirmAddProject) {
    //   return promptProject(portfolioData);
    // } else {
      return projectData;
    // };
  });
};
promptUser()
  .then(promptProject)
  .then(projectData => {
    return generateMd(projectData);
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