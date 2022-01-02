let tableOfContents = {
  installation: `- [Installation](#installation)
  `,
  usage: `- [Usage](#usage)
  `,
  license: `- [License](#license)
  `,
  contributing: `- [Contributing](#contributing)
  `,
  tests: `- [Tests](#tests)
  `,
  questions: `- [Questions](#questions)
  `
};

const updateToc = userResponses => {
  if (!userResponses.installation) { tableOfContents.installation = '' };
  if (!userResponses.usage) { tableOfContents.usage = '' };
  // The license item in the TOC is handled by licenseBadgeCreate
  if (!userResponses.contributing) { tableOfContents.contributing = '' };
  if (!userResponses.testing) { tableOfContents.tests = '' };
  if (!(userResponses.gitHubUsername || userResponses.email || userResponses.questions)) { tableOfContents.questions = '' };
}

const licenseBadgeCreate = licenseType => {
  switch (licenseType) {
    case 'Do Not Show License':
      tableOfContents.license = '';
      return '';
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU General Public License v3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Other License':
      return '';
  }
}

// const generateProjects = projectsArr => {
  //   return `
  //     <section class="my-3" id="portfolio">
  //       <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
  //       <div class="flex-row justify-space-between">
  //       ${projectsArr
  //         .filter(({ feature }) => feature)
  //         .map(({ name, description, languages, link }) => {
  //           return `
  //           <div class="col-12 mb-2 bg-dark text-light p-3">
  //             <h3 class="portfolio-item-title text-light">${name}</h3>
  //             <h5 class="portfolio-languages">
  //               Built With:
  //               ${languages.join(', ')}
  //             </h5>
  //             <p>${description}</p>
  //             <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
  //           </div>
  //         `;
  //         })
  //         .join('')}
  
  //       ${projectsArr
  //         .filter(({ feature }) => !feature)
  //         .map(({ name, description, languages, link }) => {
  //           return `
  //           <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
  //             <h3 class="portfolio-item-title text-light">${name}</h3>
  //             <h5 class="portfolio-languages">
  //               Built With:
  //               ${languages.join(', ')}
  //             </h5>
  //             <p>${description}</p>
  //             <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
  //           </div>
  //         `;
  //         })
  //         .join('')}
  //       </div>
  //     </section>
  //   `;
  // };

module.exports = userResponses => {
    // destructure page data by section
    // const { projects, about, ...header } = templateData;
  updateToc(userResponses);
  return `# ${userResponses.projectName}

${userResponses.projectDescription}

${licenseBadgeCreate(userResponses.licenseType)}

## Table of Contents

${tableOfContents.installation}${tableOfContents.usage}${tableOfContents.license}${tableOfContents.contributing}${tableOfContents.tests}${tableOfContents.questions}

## Installation

Installation text.

## Usage

Usage text.

## License

See the [license](./LICENSE) file for license rights and limitations.

## Contributing

Contribution guidelines text.

## Tests

Test instructions text.

## Questions

My GitHub username is stuart-rickard; my profile is [here](https://github.com/stuart-rickard).

Additional questions?: my email address is stuart@bau-dev.com.
`
          // <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
          // <nav class="flex-row">
          //   <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
      //         header.github
      //       }">GitHub</a>
      //     </nav>
      //   </div>
      // </header>
      // <main class="container my-5">
      //   ${generateAbout(about)}
      //   ${generateProjects(projects)}
    ;
  };