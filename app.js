const inquirer = require('inquirer');
const generateMd = require('./utils/content-maker');
const { writeFile, copyFile } = require('./utils/file-maker.js');

const promptUser = () => {
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
    // {
    //   type: 'input',
    //   name: 'description',
    //   message: 'Provide a description of the project (Required)',
    //   validate: projDesc => {
    //     if (projDesc) {
    //       return true;
    //     } else {
    //       console.log('Please enter your project description!');
    //       return false;
    //     }
    //   }
    // },
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